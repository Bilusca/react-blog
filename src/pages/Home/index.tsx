import { FaExternalLinkAlt } from 'react-icons/fa'
import { LayoutRoot } from '../../components/LayoutRoot'
// import { useApiUser } from '../../hooks/useApiUser'

export default function Home() {
  // const { user } = useApiUser()

  return (
    <LayoutRoot>
      <main className="container mx-auto -mt-10">
        <div className="w-full bg-app-base-profile rounded-xl py-8 px-10 flex gap-8">
          <div className="h-36 w-36 rounded-lg">
            <img
              className="object-cover"
              src="https://avatars.githubusercontent.com/u/8138318?v=4"
              alt=""
            />
          </div>
          <div>
            <header>
              <h1>Nome da pessoa</h1>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GITHUB <FaExternalLinkAlt />
              </a>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              quaerat, magni aperiam rem consequuntur tempore dolorem ab quae
              officia itaque veritatis totam consequatur aliquam tenetur,
              impedit distinctio assumenda ipsam accusamus!
            </p>
            <ul>
              <li>
                <a href="">link 1</a>
              </li>
              <li>
                <a href="">link 2</a>
              </li>
              <li>
                <a href="">link 3</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </LayoutRoot>
  )
}
