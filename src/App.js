import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"



function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2.30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Mar 17th at 17.30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Bootcamp',
            day: 'Jul 12th at 9.00am',
            reminder: true,
        },
        {
            id: 4,
            text: 'Shopping',
            day: 'Aug 26th at 16.15',
            reminder: false,
        }
    ]
)

  return (
    <div>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
    
}

export default App;




