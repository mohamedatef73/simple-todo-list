import React, { useState } from 'react'

const BugInputForm =(props)=>{
    const [title,setTitle] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        props.addBug(title)
        setTitle('')
    }
    return(
        <div className='p-5'>
            <form className='d-flex' onSubmit={handleSubmit}>
                <input type='text' placeholder='enter bugs'
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} 
                className='form-control w-50' required/>&nbsp;
                <button type='submit'
                 className='btn btn-success'>add</button>
            </form>
        </div>
    )
}

export default BugInputForm