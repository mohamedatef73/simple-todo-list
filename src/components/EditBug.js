import React, { useState } from 'react'
import { Collapse } from 'reactstrap'

const EditBug = (props) => {
    const [title, setTitle] = useState(props.editTitle)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.EditBugTitle(props.bugId, title)
        setTitle()
    } 

    const handleCancel = () => {
        props.cancelEdit(props.bugId)
        setTitle(props.editTitle)

    }

    return (
        <Collapse className='col-6' isOpen={props.isEdit}>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='form-control' />

                    <button type='button' className='btn text-danger'
                        onClick={handleCancel}>Cancel</button>

                    <button type='submit' className='btn text-danger float-right'>Save</button>

            </form>
        </Collapse>

    )
}

export default EditBug