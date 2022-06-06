import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Label } from 'semantic-ui-react'
import { add_task } from '../JS/action/action'

function Add() {
  const dispatch=useDispatch()
  const [text,setText]=useState("")
  const handleAdd=()=>{
   text?dispatch(add_task ({
      text,
      id:Math.random(),
      isDone:false
    })):alert("Champ vide *")
  }
  return (
    <div>
      
      <Form>
    <Form.Field>
      <Input placeholder='Enter a new Task' onChange={(e)=>setText(e.target.value)} />
      <Label pointing prompt>
        Please enter a value
      </Label>
    </Form.Field>
  </Form>
    <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Add