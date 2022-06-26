import React, {useState} from 'react'

export default function Add(props) {

    const [newTitle, setNewTitle] = useState('')
    const createNewTodo=()=>{
        props.createFunction({title:newTitle,isCompleted:false});
    }
  return (
    <div className=''>
      
        <input type="text" className="form-control mb-3" placeholder='Write New Title Here...'
        onChange={(e)=>{
            setNewTitle(e.target.value) 
        }}/>
        <button onClick={createNewTodo} className="btn btn-success" >Create New Todo</button>
        
    </div>
  )
}
