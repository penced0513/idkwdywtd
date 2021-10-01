import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postEvent } from '../../store/eventReducer';
import './createevent.css'

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
        if (name.length > 20) validationErrors.push("Name can't be longer than 20 characters")
        if (duration > 365) validationErrors.push("Events can't last longer than a year")
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
        <div className="create-event-container">
            <h1>Create an Event</h1>
            <form className="create-event-form" onSubmit={handleSubmit}>
                <ul className="signup-errors-container">
                    {errors.map((error, idx) => <li className="login-error" key={idx}>{error}</li>)}
                </ul>
                <div>
                    <label>
                        Name
                    </label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>
                        Duration (in days)
                    </label>
                    <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>
                        Start Date
                    </label>
                    <input
                    className="calendar-input"
                    type="Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                    />
                </div>
                <button className="signup-submit" type="submit">Create Event</button>
            </form>
        </div>
    )
}

export default CreateEvent
