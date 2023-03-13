const task = [
  {
    id: 1, 
    text: 'Doctors appointment',
    day: 'feb 5th at 2:30PM',
    reminder:  true,
  },
  {
    id: 2, 
    text: 'Doctors appointment',
    day: 'feb 5th at 2:30PM',
    reminder:  true,
  },
  {
    id: 3, 
    text: 'Doctors appointment',
    day: 'feb 5th at 2:30PM',
    reminder:  true,
  },
  {
    id: 4, 
    text: 'Doctors appointment',
    day: 'feb 5th at 2:30PM',
    reminder:  true,
  }
]

const Task = () => {
  return (
    <>
      {task.map((task)=> (
      <h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Task
