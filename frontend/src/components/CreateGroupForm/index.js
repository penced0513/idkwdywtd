import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const CreateGroup = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const validationErrors = []
        const regex = /\w+/
        if (!regex.match(name)) validationErrors.push("Invalid Name")
        if (validationErrors.length) {
            setErrors(validationErrors)
        } else {
            const createdGroup = await dispatch(createGroup(name))
            if (createdGroup) {
                history.push(`/groups/${createdGroup.id}`)
            }
        }
        
    }
    return (
        <div>
            <h1>Create a Group</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
            </form>
        </div>
    )
}

export default CreateGroup
