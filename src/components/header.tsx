import NlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <div className="flex gap-5 px-8 py-8 items-center text-zinc-300">
      <img src={NlwUniteIcon} className='size-8' />
      <span>Eventos</span>
      <span className='text-white'>Participantes</span>
    </div>
  )
}