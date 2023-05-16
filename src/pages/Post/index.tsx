import { Link } from 'react-router-dom'
import { LayoutRoot } from '../../components/LayoutRoot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Post() {
  return (
    <LayoutRoot>
      <main className="container mx-auto -mt-20">
        <header className="w-full bg-app-base-profile rounded-xl py-8 px-10 flex flex-col">
          <div className="flex justify-between items-center w-full mb-5">
            <Link
              className="text-app-blue flex gap-2 text-xs font-bold uppercase transition-all hover:brightness-75"
              to="/"
            >
              <FontAwesomeIcon icon="chevron-left" /> Voltar
            </Link>
            <a
              className="text-app-blue flex gap-2 text-xs font-bold uppercase transition-all hover:brightness-75"
              href=""
            >
              Ver no github <FontAwesomeIcon icon="external-link-alt" />
            </a>
          </div>
          <h1 className="text-2xl text-app-base-title font-bold mb-2">
            Title bem grandão
          </h1>
          <div className="flex gap-8 items-center">
            <a
              href="https://github.com"
              className="flex text-app-base-span transition-all hover:text-app-blue items-center gap-2"
            >
              <FontAwesomeIcon
                className="text-lg text-app-base-label"
                icon={faGithub}
              />
              Bilusca
            </a>
            <div className="flex text-app-base-span transition-all items-center gap-2">
              <FontAwesomeIcon
                className="text-lg text-app-base-label"
                icon="calendar-day"
              />
              <span>Há 1 dia</span>
            </div>
            <div className="flex text-app-base-span transition-all items-center gap-2">
              <FontAwesomeIcon
                className="text-lg text-app-base-label"
                icon="comment"
              />
              <span>5 comentários</span>
            </div>
          </div>
        </header>
        <article className="px-8 py-10">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            consequuntur deserunt asperiores obcaecati, aut delectus possimus in
            sint maiores velit nostrum? Similique temporibus perferendis
            asperiores impedit doloremque sed dolor harum!
          </p>
        </article>
      </main>
    </LayoutRoot>
  )
}
