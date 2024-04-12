import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis, Search } from 'lucide-react'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { Table } from './table/table'
import { IconButton } from './icon-button'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import { ChangeEvent, useEffect, useState } from 'react'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendee {
  id: string
  name: string
  email: string
  subscribedAt: string
  checkedInAt: string | null
}

export function AttendeeList() {
 
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  useEffect(()=>{
    fetch(`http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees?pageIndex=${page - 1}&query=${search}`)
    .then(response => response.json())
    .then(data => { 
      setAttendees(data.attendees)
      setTotal(data.total)
    });
  }, [page, search]);

  const totalPages = Math.ceil(total/10);

  function onSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setPage(1);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  function goToPreviousPage() {
    setPage(page => page - 1);
  }

  function goToNextPage() {
    setPage(page => page + 1);
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3 items-center'>
          <h1 className='font-bold text-2xl'>Participantes</h1>
          <div className='flex gap-3 items-center px-3 py-1.5 text-sm w-72 border border-white/10 rounded-lg'>
            <Search className='size-4 text-emerald-300'/>
            <input 
              onChange={onSearchInputChange} 
              className='flex-1 bg-transparent outline-none text-zinc-300 focus:ring-0'
              placeholder='Buscar participante...'/>
          </div>
      </div>
      <Table>
        <thead>
          <TableRow className='border-b border-white/10 '>
            <TableHeader style={{width: 48}} > 
              <input type='checkbox'/>
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data da inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{width: 64}}></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow key={attendee.id} className='border-b border-white/10 hover:bg-white/5'>
                <TableCell> 
                  <input type='checkbox'/>
                </TableCell>
                <TableCell>
                  {attendee.id}
                </TableCell>
                <TableCell>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-white'>{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(dayjs(attendee.subscribedAt))}</TableCell>
                <TableCell>
                  {attendee.checkedInAt === null 
                    ? <span className='text-zinc-400'>Não fez check-in</span> 
                    : dayjs().to(dayjs(attendee.checkedInAt))}
                </TableCell>
                <TableCell>
                  <IconButton transparent>
                    <Ellipsis className='size-4'/>
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody> 
        <tfoot>
          <tr>           
            <TableCell colSpan={3}>
              Mostrando {attendees.length} de {total} itens
            </TableCell>
            <TableCell className='text-right' colSpan={3}>
              <div className='inline-flex items-center gap-8'>
                <span>{page} de {totalPages} páginas</span>
                <div className='flex gap-1.5'>
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className='size-4'/>
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className='size-4'/>
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                    <ChevronRight className='size-4'/>
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                    <ChevronsRight className='size-4'/>
                  </IconButton>   
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>     
      </Table>
    </div>
  )
}