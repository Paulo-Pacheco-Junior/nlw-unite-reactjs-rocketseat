import { Header } from './components/header'
import { AttendeeList } from './components/attendee-list'

export function App() {
  return (
    <div className='max-w-7xl mx-auto bg-zinc-950 rounded-lg'>
      <Header />
      <AttendeeList />
    </div>
  )
}
