import React, { useState } from 'react'
import {Collapse} from 'reactstrap';

const CommentForm = (props) =>{

    const [title, setTitle] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.addComment(props.bugId,title)
        setTitle('')
    }

    return(
        <Collapse isOpen={props.isOpen}>
            <form onSubmit={handleSubmit} >
                <input type='text' required className='form-control w-50'
                placeholder="u can add comment here if u want"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
                
            </form>

        </Collapse>
    )
}

export default CommentForm