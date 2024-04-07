import { Header } from './components/header'
import { AttendeeList } from './components/attendee-list'

export function App() {
  return (
    <div className='max-w-7xl mx-auto py-5 flex flex-col gap-5 px-8 bg-zinc-900'>
      <Header />
      <AttendeeList />
    </div>
  )
}
