import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis, Search } from 'lucide-react'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { Table } from './table/table'
import { IconButton } from './icon-button'

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3 items-center'>
          <h1 className='font-bold text-2xl'>Participantes</h1>
          <div className='flex gap-3 items-center px-3 py-1.5 text-sm w-72 border border-white/10 rounded-lg'>
            <Search className='size-4 text-emerald-300'/>
            <input className='flex-1 bg-transparent outline-none text-zinc-300' placeholder='Buscar participante...'/>
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
          {Array.from({ length:7 }).map((_,i) => {
            return (
              <TableRow key={i} className='border-b border-white/10 hover:bg-white/5'>
                <TableCell> 
                  <input type='checkbox'/>
                </TableCell>
                <TableCell>
                  52716
                </TableCell>
                <TableCell>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-white'>Paulo Pacheco Júnior</span>
                    <span>paulojrgyn88@gmail.com</span>
                  </div>
                </TableCell>
                <TableCell>7 dias atrás</TableCell>
                <TableCell>7 dias atrás</TableCell>
                <TableCell>
                  <IconButton transparent={true}>
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
              Mostrando 10 de 228 itens
            </TableCell>
            <TableCell className='text-right' colSpan={3}>
              <div className='inline-flex items-center gap-8'>
                <span>1 de 11 páginas</span>
                <div className='flex gap-1.5'>
                  <IconButton>
                    <ChevronsLeft className='size-4'/>
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className='size-4'/>
                  </IconButton>
                  <IconButton>
                    <ChevronRight className='size-4'/>
                  </IconButton>
                  <IconButton>
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