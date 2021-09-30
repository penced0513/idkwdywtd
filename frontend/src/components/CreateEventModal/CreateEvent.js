import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postEvent } from '../../store/eventReducer';

const CreateEvent = ({ closeModal }) => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [name, setName] = useState('')
    const [duration, setDuration] = useState(1)
    const [startDate, setStartDate] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const validationErrors = []
        const whiteSpaceRegexStart = /^(\s+)/
        const whiteSpaceRegexEnd = /(\s+)$/
        if (whiteSpaceRegexStart.test(name)) validationErrors.push("Invalid Name, Name can't start with whitespace")
        if (whiteSpaceRegexEnd.test(name)) validationErrors.push("Invalid Name, Name can't end with whitespace")
        if (duration <= 0) validationErrors.push("Must last 1 day or longer")
        if (duration % 1 !== 0) validationErrors.push("Duration must be a whole number")
        if (startDate < (new Date()).toISOString().split('T')[0]) validationErrors.push("Start Date must be in the future")

        if (validationErrors.length) {
            setErrors(validationErrors)
        } else {
            const createdEvent = await dispatch(postEvent(name, sessionUser.id, duration, startDate))
            if (createdEvent) {
                history.push(`/events/${createdEvent.id}`)
                closeModal()
            }
        }
        
    }
    return (
        <div>
            <h1>Create an Event</h1>
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
                <label>
                    Duration (in days)
                    <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                    />
                </label>
                <label>
                    Start Date
                    <input
                    type="Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                    />
                </label>
                <button className="signup-submit" type="submit">Create Event</button>
            </form>
        </div>
    )
}

export default CreateEvent
