import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { editGroup } from '../../store/groupReducer';
import './editgroup.css'

const EditGroup = ({ closeModal, name:groupName, groupPic }) => {

    const {groupId} = useParams()
    const dispatch = useDispatch()
    const [name, setName] = useState(groupName)
    const [imageUrl, setImageUrl] = useState(groupPic);
    const [errors, setErrors] = useState([])

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
        if (validationErrors.length) {
            setErrors(validationErrors)
        } else {
            const editedGroup = await dispatch(editGroup(groupId, name, imageUrl))
            if (editedGroup) {
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
            <h1>Edit Your Group</h1>
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
                        Group Picture
                    </label>
                        <input
                        type="text"
                        required
                        value={imageUrl}
                        onChange={((e) => setImageUrl(e.target.value))}
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

export default EditGroup
