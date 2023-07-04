import { useQuery } from '@tanstack/react-query'
import { BlogCard } from '../../components/BlogCard'
import { LayoutRoot } from '../../components/LayoutRoot'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { api } from '../../lib/axios'
import { User } from '../../@types/User.interface'
import { ProfileSkeleton } from '../../components/Skeleton'
import { Post } from '../../@types/Post.interface'
import { BlogCardSkeleton } from '../../components/Skeleton/BlogCardSkeleton'

interface PostsData {
  total_count: number
  items: Post[]
}

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const { data } = await api.get<User>('/users/bilusca')
      return data
    },
  })

  const { isLoading: isLoadingPosts, data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await api.get<PostsData>(
        '/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge',
      )

      return data.items
    },
  })

  return (
    <LayoutRoot>
      <main className="container mx-auto -mt-20">
        {isLoading && <ProfileSkeleton />}
        {!!data && (
          <Profile
            avatarUrl={data.avatar_url}
            bio={data.bio}
            company={data.company}
            followers={data.followers}
            htmlUrl={data.html_url}
            name={data.name}
          />
        )}
        <SearchForm />
        <section className="grid gap-8 grid-cols-2 pb-10">
          {posts
            ? posts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.number}
                  title={post.title}
                  body={post.body}
                  createdAt={post.created_at}
                />
              ))
            : null}
          {isLoadingPosts ? (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          ) : null}
        </section>
      </main>
    </LayoutRoot>
  )
}
