import { useState } from "react"


const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
  return (
    <form className='add-form'>
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder="Add Task"
        value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type='text' placeholder="Add Day & TIme" 
         value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type='Checkbox' 
        value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type='submit' value='Save' className="btn btn-block"
      />

    </form>
  )
}

export default AddTask
