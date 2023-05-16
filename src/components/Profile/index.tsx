import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <div className="w-full bg-app-base-profile rounded-xl py-8 px-10 flex items-center gap-8 mb-[4.625rem]">
      <div className="h-36 max-w-fit w-full rounded-lg relative">
        <img
          className="w-full h-full object-cover"
          src="https://avatars.githubusercontent.com/u/8138318?v=4"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <header className="mb-2 flex items-center justify-between">
          <h1 className="font-bold text-2xl leading-tight">Nome da pessoa</h1>
          <a
            href="https://github.com"
            className="flex gap-2 text-app-blue text-xs font-bold transition-all hover:brightness-75"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon="up-right-from-square" />
          </a>
        </header>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quaerat,
          magni aperiam rem consequuntur tempore dolorem ab quae officia itaque
          veritatis totam consequatur aliquam tenetur, impedit distinctio
          assumenda ipsam accusamus!
        </p>
        <ul className="flex space-x-6">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon={faGithub}
            />
            <a
              className="text-app-base-subtitle transition-all hover:text-app-blue"
              href=""
            >
              link 1
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon="building"
            />
            <a
              className="text-app-base-subtitle transition-all hover:text-app-blue"
              href=""
            >
              link 2
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon="user-group"
            />
            <a
              className="text-app-base-subtitle transition-all hover:text-app-blue"
              href=""
            >
              link 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
