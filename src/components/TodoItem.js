import React from 'react'

import PropTypes from 'prop-types'
import Button from './Button'

const TodoItem = ({ data, openUpdate, openDelete }) => {
    return (
        <div style={styleItem}>
            <p>{ data.title }</p>

            <div>
                <Button variant="success" text="edit" action={ () => openUpdate(data.id, data.title) } />
                <Button variant="warning" text="delete" action={ () => openDelete(data.id) } />
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    data: PropTypes.object.isRequired,
    openUpdate: PropTypes.func.isRequired,
    openDelete: PropTypes.func.isRequired
}

const styleItem = {
    background: "#2DA4F8",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

export default TodoItem;