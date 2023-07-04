import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ProfileSkeleton() {
  return (
    <div className="w-full bg-app-base-profile rounded-xl py-8 px-10 flex items-center gap-8 mb-[4.625rem]">
      <div className="h-36 max-w-fit w-full rounded-lg relative">
        <div className="w-36 h-36 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-full"></div>
      </div>
      <div className="flex flex-col flex-1">
        <header className="mb-2 flex items-center justify-between w-full">
          <div className="h-9 w-3/4 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg"></div>
          <span
            className="flex gap-2 text-app-blue text-xs font-bold transition-all hover:brightness-75"
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon="up-right-from-square" />
          </span>
        </header>
        <div className="mb-6 w-5 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg"></div>
        <ul className="flex space-x-6">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon={faGithub}
            />
            <div className="w-8 h-5 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg"></div>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon="building"
            />
            <div className="w-8 h-5 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg"></div>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-lg text-app-base-label"
              icon="user-group"
            />
            <div className="w-8 h-5 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg"></div>
          </li>
        </ul>
      </div>
    </div>
  )
}
