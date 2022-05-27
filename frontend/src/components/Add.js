import React, {useState} from 'react'

export default function Add(props) {

    const [newTitle, setNewTitle] = useState('')
    const createNewTodo=()=>{
        props.createFunction({title:newTitle,isCompleted:false});
    }
  return (
    <div className='Add'>
        <input type="text" placeholder='Write New Title Here...'
        onChange={(e)=>{
            setNewTitle(e.target.value)
        }}/>
        <button onClick={createNewTodo}>Create New Todo</button>
    </div>
  )
}
