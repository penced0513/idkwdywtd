import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { editEvent } from '../../store/eventReducer';

const EditEvent = ({ closeModal, event }) => {

    const {eventId} = useParams()
    const dispatch = useDispatch()
    const [name, setName] = useState(event.name)
    const [imageUrl, setImageUrl] = useState(event.eventPic);
    const [errors, setErrors] = useState([])
    const [duration, setDuration] = useState(event.duration)
    const [startDate, setStartDate] = useState(event.startDate)

    const checkImage = async(url) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function() {
              if (this.width > 0) {
                resolve(true)
            }
        }
        image.onerror = function () {
            resolve(false)
        }
        image.src = url;
        })  
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const validationErrors = []
        let checkedImage = await checkImage(imageUrl)
        if(!checkedImage) validationErrors.push("Please include a valid image URL")
        const regex = /\w+/
        if (!regex.test(name)) validationErrors.push("Invalid Name")
        if (name.length > 20) validationErrors.push("Name can't be longer than 20 characters")
        if (duration > 365) validationErrors.push("Events can't last longer than a year")
        if (validationErrors.length) {
            setErrors(validationErrors)
        } else {
            const editedEvent = await dispatch(editEvent(eventId, name, imageUrl, duration, startDate))
            if (editedEvent) {
                closeModal()
            }
        }
        
    }
    const handleCancel = (e) => {
        e.preventDefault() 
        closeModal()
    } 

    return (
        <div className="create-event-container">
            <h1>Edit Your Event</h1>
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
                        Event Picture
                    </label>
                        <input
                        type="text"
                        required
                        value={imageUrl}
                        onChange={((e) => setImageUrl(e.target.value))}
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
                <div id="edit-group-btn-container">
                    <button className="edit-group-submit" type="submit">Save Changes</button>
                    <button className="edit-group-cancel" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditEvent
