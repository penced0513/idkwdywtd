import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postGroup } from '../../store/groupReducer';
import './creategroup.css'

const CreateGroup = ({ closeModal }) => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const validationErrors = []
        const whiteSpaceRegexStart = /^(\s+)/
        const whiteSpaceRegexEnd = /(\s+)$/
        if (whiteSpaceRegexStart.test(name)) validationErrors.push("Name can't start with whitespace")
        if (whiteSpaceRegexEnd.test(name)) validationErrors.push("Name can't end with whitespace")
        if (name.length > 20) validationErrors.push("Name can't be longer than 20 characters")
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
        <div className="create-group-container">
            <h1>Create a Group</h1>
            <form className="create-group-form" onSubmit={handleSubmit}>
                <ul className="signup-errors-container">
                    {errors.map((error, idx) => <li  className="login-error" key={idx}>{error}</li>)}
                </ul>
                    <input
                    placeholder="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                <button className="signup-submit" type="submit">Create Group</button>
            </form>
        </div>
    )
}

export default CreateGroup
