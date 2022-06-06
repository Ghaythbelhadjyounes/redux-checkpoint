import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { delete_task, done_task } from '../JS/action/action'
import Edit from './Edit'

function TodoCard({tasks}) {
  const dispatch=useDispatch()
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      
        <h3>{tasks.text}</h3>
        
        <Button.Group>
          <Edit id={tasks.id}/>
          <Button.Or text='or' />
    <Button onClick={()=>{dispatch(delete_task(tasks.id))}}>Delete</Button>
    <Button.Or text='or' />
    <Button positive onClick={()=>{dispatch(done_task(tasks.id))}}>{tasks.IsDone?"Done":"Undone"}</Button>
    
  </Button.Group>

    </div>
  )
}

export default TodoCard