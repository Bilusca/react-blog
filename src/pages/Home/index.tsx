import { LayoutRoot } from '../../components/LayoutRoot'
import { Profile } from '../../components/Profile'
// import { useApiUser } from '../../hooks/useApiUser'

export default function Home() {
  // const { user } = useApiUser()

  return (
    <LayoutRoot>
      <main className="container mx-auto -mt-20">
        <Profile />
      </main>
    </LayoutRoot>
  )
}
