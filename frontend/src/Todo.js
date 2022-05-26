import React from 'react'

export default function Todo(props) {
    const {_id ,title ,isCompleted }=props.task
  return (
    <div className='Todo'>
          
        <p>Title: {title}</p>
        <p>isCompleted: {isCompleted}</p>
        {/* <input type="checkbox" name={isCompleted} 
        value={isCompleted} />isCompleted */}
        <p>id: {_id}</p>
        

    </div>
  )
}
