import React, { useState } from 'react'
import BugInputForm from './BuginputForm'
import { v4 as uuidv4 } from 'uuid';
import CommentForm from './CommentForm'
// import FlipMove from 'react-flip-move'
import EditBug from './EditBug'


const BugList = () => {
    const [bugs, setBugs] = useState([])

    const addBug = (title) => {
        setBugs([...bugs, {
            id: uuidv4(),
            title,
            isSolve: false,
            isOpen: false,
            comments: [],
            isEdit: false
        }])
    }

    const SolvedBug = (id) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.isSolve = !bug.isSolve
            }
            return bug
        }))
    }

    const deleteBug = (id) => {
        setBugs(bugs.filter(bug => bug.id !== id))
    }

    const openComment = (id) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.isOpen = !bug.isOpen
            }
            return bug
        }))
    }

    const addComment = (id, title) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.comments = [...bug.comments, { title: title, id: uuidv4() }]
            }
            return bug
        }))
    }

    const editBug = (id) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.isEdit = !bug.isEdit
            }
            return bug
        }))
    }

    const EditBugTitle = (id, value) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.title = value
                bug.isEdit = false
            }
            return bug
        }))
    }

    const cancelEdit = (id) => {
        
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.isEdit = false
            }
            return bug
        }))
    }


    return (
        <div>
            <BugInputForm addBug={addBug} />

            <ul>
                {bugs.map(bug => {
                    return (

                        <li className='bug' key={bug.id}>
                            <span className={bug.isSolve ? 'bugSolved' : null}>
                                {bug.title}</span>
                            <button className='btn btn-link'
                                onClick={() => SolvedBug(bug.id)}>
                                solved</button>
                            <button className='btn btn-outline-warning '
                                onClick={() => deleteBug(bug.id)}>
                                delete
                                </button>
                            <button className='btn btn-outline-primary'
                                onClick={() => openComment(bug.id)}>comments</button>

                            <button className='btn btn-outline-danger'
                                onClick={() => editBug(bug.id)}>edit</button>

                            <CommentForm addComment={addComment} isOpen={bug.isOpen} bugId={bug.id} />

                            <EditBug bugId={bug.id} isEdit={bug.isEdit}
                                editTitle={bug.title} EditBugTitle={EditBugTitle}
                                cancelEdit={cancelEdit} />

                            {bug.comments.map(comment => {
                                return (
                                    <li key={comment.id}>

                                        {comment.title}
                                    </li>
                                )
                            })}
                        </li>

                    )
                })}
            </ul>

        </div>
    )
}

export default BugList