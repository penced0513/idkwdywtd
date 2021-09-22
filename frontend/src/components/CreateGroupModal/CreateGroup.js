import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postGroup } from '../../store/groupReducer';

const CreateGroup = ({ closeModal }) => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const validationErrors = []
        const regex = /\w+/
        if (!regex.test(name)) validationErrors.push("Invalid Name")
        if (validationErrors.length) {
            setErrors(validationErrors)
        } else {
            const createdGroup = await dispatch(postGroup(name, sessionUser.id))
            if (createdGroup) {
                history.push(`/groups/${createdGroup.id}`)
                closeModal()
            }
        }
        
    }
    return (
        <div>
            <h1>Create a Group</h1>
            <form onSubmit={handleSubmit}>
                <ul className="signup-errors-container">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Name
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
                <button className="signup-submit" type="submit">Create Group</button>
            </form>
        </div>
    )
}

export default CreateGroup
