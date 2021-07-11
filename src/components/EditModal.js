import React from 'react'
import PropTypes from 'prop-types'

import '../styles/EditModal.css'
import Button from './Button'

const EditModal = ({ isEdit, closeModalEdit, editData, changeData, updateData }) => {

    const submitForm = (e) => {
        e.preventDefault();
        
        if (editData.title !== "") {
            updateData(editData.id, editData.title)
        }
    }

    if (isEdit) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Task</h3>

                    <form onSubmit={submitForm}>
                        <div className="input">
                            <input type="text" value={editData.title} onChange={ changeData } />
                        </div>

                        <div className="btn-group">
                            <Button 
                            text="done"
                            variant="primary"
                            action={ submitForm } />

                            <Button 
                            text="cancel"
                            variant="warning"
                            action={ closeModalEdit } />
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return null
    }
}

EditModal.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    closeModalEdit: PropTypes.func.isRequired,
    editData: PropTypes.object.isRequired,
    changeData: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
}

export default EditModal;