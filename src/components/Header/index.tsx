import { Link } from 'react-router-dom'
import logoImg from '../../assets/Logo.png'

export function Header() {
  return (
    <header className="h-72 w-full bg-cover bg-cover-pattern">
      <div className="flex items-center justify-center pt-16 pb-32">
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </div>
    </header>
  )
}
