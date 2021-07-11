import React from 'react'
import PropTypes from 'prop-types'

import '../styles/DeleteModal.css'
import Button from './Button'

const DeleteModal = ({ isDelete, closeModalDelete, deleteData, destroyData }) => {
    if (isDelete) {
        return (
            <div className="delete-modal-container">
                <div className="delete-modal-box">
                    <h3>Are you sure?</h3>

                    <div className="btn-group">
                        <Button 
                        text="yes"
                        variant="info"
                        action={ () => destroyData(deleteData.id) } />

                        <Button 
                        text="cancel"
                        variant="warning"
                        action={ closeModalDelete } />
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

DeleteModal.propTypes = {
    isDelete: PropTypes.bool.isRequired,
    closeModalDelete: PropTypes.func.isRequired,
    deleteData: PropTypes.object.isRequired,
    destroyData: PropTypes.func.isRequired
}

export default DeleteModal;