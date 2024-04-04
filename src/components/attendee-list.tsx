import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis, Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4 pb-12'>
      <div className='flex gap-3 px-8 py-1.5'>
        <h1 className='text-white font-semibold text-lg px-3 py-1.5'>Participantes</h1>
        <div className='flex items-center gap-3 px-3 border border-white/10 rounded-lg outline-none text-white '>
          <Search className='size-4 text-emerald-200'/>
          <input className='flex-1 bg-transparent outline-none text-zinc-300' placeholder='Buscar participante...'/>
        </div>
      </div>

      <div className='text-white border border-white/10 rounded-xl w-[1280] mx-8'>
        <table className='w-full'>
          <thead>
            <tr className='px-4 py-3 gap-2.5 border border-white/10'>
              <th className='ps-8 py-3 text-left'> 
                <input type='checkbox'/>
                <span className='px-4 py-3 text-left font-semibold'>Código</span>
              </th>
              <th className='ps-8 pe-72 py-3 text-left font-semibold'>Participante</th>
              <th className='px-8 py-3 text-left font-semibold'>Data da inscrição</th>
              <th className='px-8 py-3 text-left font-semibold'>Data do check-in</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length:7 }).map((_,i) => {
              return (
                <tr key={i} className='px-4 py-3 gap-2.5 border border-white/10 hover:bg-zinc-900'>
                  <td className='px-8 py-3'> 
                    <input type='checkbox'/>
                    <span className='px-4 py-3'>52716</span>
                  </td>
                  <td className='ps-8 pe-72 py-3 flex flex-col'>
                    <span className='font-semibold'>Paulo Pacheco Júnior</span>
                    <span className='text-zinc-300'>paulojrgyn88@gmail.com</span>
                  </td>
                  <td className='px-8 py-3'>7 dias atrás</td>
                  <td className='px-8 pe-28 py-3'>7 dias atrás</td>
                  <td className='ps-12 pe-4'>
                    <button className='bg-zinc-950 rounded p-1 border border-zinc-500/10'>
                      <Ellipsis className='size-3'/>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>  
          <tfoot>
            <tr className='px-4 py-3 gap-2.5 border border-white/10'>
              <td colSpan={3} className='text-left ps-4 text-xs text-zinc-300'>
                10 de 228 itens
              </td>
              <td colSpan={3} className='text-xs text-zinc-300'>
                <div className='flex items-center gap-4 ps-28 '>
                  <span>
                    1 de 11 páginas
                  </span>
                  <div className='flex items-center py-2 gap-1 text-zinc-100'>
                    <button className='bg-zinc-900 rounded p-1 border border-zinc-500/10'>
                      <ChevronsLeft className='size-3'/>
                    </button>
                    <button className='bg-zinc-900 rounded p-1 border border-zinc-500/10'>
                      <ChevronLeft className='size-3'/>
                    </button>
                    <button className='bg-zinc-800 rounded p-1 border border-zinc-500/10'>
                      <ChevronRight className='size-3 bg-zinc-800 rounded'/>
                    </button>
                    <button className='bg-zinc-800 rounded p-1 border border-zinc-500/10'>
                      <ChevronsRight className='size-3 bg-zinc-800 rounded'/>
                    </button>   
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>     
        </table>
      </div>  
    </div>
  )
}