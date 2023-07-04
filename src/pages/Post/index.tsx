import { Link, useParams } from 'react-router-dom'
import { LayoutRoot } from '../../components/LayoutRoot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/axios'
import { Post as IPost } from '../../@types/Post.interface'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function Post() {
  const { slug } = useParams<{ slug: string }>()

  const { isLoading, data: post } = useQuery({
    queryKey: ['selectedPost'],
    queryFn: async () => {
      const { data } = await api.get<IPost>(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${slug}`,
      )

      return data
    },
  })

  return (
    <LayoutRoot>
      <main className="container mx-auto -mt-20">
        {isLoading ? <h1>Carregando...</h1> : null}
        {post ? (
          <>
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
                  href={post.url}
                >
                  Ver no github <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
              <h1 className="text-2xl text-app-base-title font-bold mb-2">
                {post.title}
              </h1>
              <div className="flex gap-8 items-center">
                <a
                  href="https://github.com/Bilusca"
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
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </article>
          </>
        ) : null}
      </main>
    </LayoutRoot>
  )
}
