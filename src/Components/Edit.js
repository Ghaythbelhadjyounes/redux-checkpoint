import React from 'react'
import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input, Modal } from 'semantic-ui-react'
import { edit_task } from '../JS/action/action'

function Edit({id}) {
    const [open,setOpen]=React.useState(false)
    const [text,setText]=useState("")
    const dispatch=useDispatch()
    const handleEdit=()=>{
        dispatch(edit_task(id,text))
        setOpen(false)
    }
  return (
    <div>
        <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Edit</Button>}
    >
      <Modal.Header>Edit Task</Modal.Header>
      <Modal.Content>
        <Modal.Description>
        <Input placeholder='Edit a Task'  onChange={(e)=>setText(e.target.value)} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleEdit}>OK</Button>
      </Modal.Actions>
    </Modal>
    </div>
  )
}

export default Edit