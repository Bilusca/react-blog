import { BlogCard } from '../../components/BlogCard'
import { LayoutRoot } from '../../components/LayoutRoot'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
// import { useApiUser } from '../../hooks/useApiUser'

export default function Home() {
  // const { user } = useApiUser()

  return (
    <LayoutRoot>
      <main className="container mx-auto -mt-20">
        <Profile />
        <SearchForm />
        <section className="grid gap-8 grid-cols-2 pb-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
      </main>
    </LayoutRoot>
  )
}
