import logoImg from '../../assets/Logo.png'

export function Header() {
  return (
    <header className="h-72 w-full bg-cover bg-cover-pattern">
      <img className="block mx-auto pt-16 pb-32" src={logoImg} alt="" />
    </header>
  )
}
