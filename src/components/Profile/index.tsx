import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

type ProfileProps = {
  htmlUrl: string
  bio: string
  followers: number
  avatarUrl: string
  name: string
  company: string
}

export function Profile({
  avatarUrl,
  bio,
  followers,
  htmlUrl,
  name,
  company,
}: ProfileProps) {
  return (
    <div className="w-full bg-app-base-profile rounded-xl py-8 px-10 flex items-center gap-8 mb-[4.625rem]">
      <div className="h-36 max-w-fit w-full rounded-lg relative">
        <img
          className="w-full h-full object-cover"
          src={avatarUrl}
          alt={`Foto de perfil de ${name}`}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1">
        <header className="mb-2 flex items-center justify-between w-full">
          <h1 className="font-bold text-2xl leading-tight">{name}</h1>
          <a
            href={htmlUrl}
            className="flex gap-2 text-app-blue text-xs font-bold transition-all hover:brightness-75"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon="up-right-from-square" />
          </a>
        </header>
        <p className="mb-6">{bio}</p>
        <ul className="flex space-x-6">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon={faGithub}
            />
            <a
              className="text-app-base-subtitle transition-all hover:text-app-blue"
              href={htmlUrl}
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon="building"
            />
            <span className="text-app-base-subtitle transition-all">
              {company}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon="user-group"
            />
            <span className="text-app-base-subtitle transition-all">
              {followers}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
