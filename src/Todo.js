import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import DeleteModal from './components/DeleteModal'
import EditModal from './components/EditModal'
import FormInput from './components/FormInput'

const Todo = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Reading a Book'
        },
        {
            id: 2,
            title: 'Workout Training'
        }
    ])

    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData] = useState({
        id: "",
        title: ""
    })

    const [isDelete, setIsDelete] = useState(false)
    const [deleteData, setDeleteData] = useState({
        id: ""
    })

    // Edit & Update
    const openModalUpdate = (id, title) => {
        setIsEdit(true)

        setEditData({
            id: id,
            title: title
        })
    }

    const closeModalUpdate = () => {
        setIsEdit(false)

        setEditData({
            id: "",
            title: ""
        })
    }

    const changeEditData = (e) => {
        setEditData({
            ...editData,
            title: e.target.value
        })
    }

    const updateData = () => {
        const { id, title } = editData
        const newData = { id, title }
        const newTodos = todos

        newTodos.splice((id - 1), 1, newData)

        setTodos(newTodos)

        closeModalUpdate()
    }


    // Confirm and Delete
    const openModalDelete = (id) => {
        setIsDelete(true)

        setDeleteData({ id: id })
    }

    const closeModalDelete = () => {
        setIsDelete(false)

        setDeleteData({ id: "" })
    }

    const destroyData = () => {
        setTodos(
            todos.filter(item => item.id !== deleteData.id)
        )

        closeModalDelete()
    }

    // Add Data
    const storeData = (title) => {
        const id = todos.length

        const newData = {
            id: id + 1,
            title: title
        }

        setTodos(
            [...todos, newData]
        )
    }

    return (
        <React.Fragment>
            <div className="app">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h3>Todo List</h3>
                </div>

                <div className="list">
                    { todos.map(item => (
                        <TodoItem 
                        key={item.id}
                        data={item}
                        openUpdate={openModalUpdate}
                        openDelete={openModalDelete} />
                    )) }
                </div>

                <div className="input-form">
                    <FormInput 
                        storeData={storeData} />
                </div>
            </div>

            <EditModal
                isEdit={isEdit}
                closeModalEdit={closeModalUpdate}
                editData={editData}
                changeData={changeEditData}
                updateData={updateData} />

            <DeleteModal 
                isDelete={isDelete}
                closeModalDelete={closeModalDelete}
                deleteData={deleteData}
                destroyData={destroyData} />

        </React.Fragment>
    )
}

export default Todo;