import { Link } from 'react-router-dom'
import removeMarkdown from 'remove-markdown'
import { dateFormatter } from '../../utils/dateFormatter'

interface BlogCardProps {
  title: string
  body: string
  createdAt: string
  id: number
}

export function BlogCard({ id, title, body, createdAt }: BlogCardProps) {
  const bodyToDisplay = removeMarkdown(body, {
    stripListLeaders: true,
    listUnicodeChar: '',
    gfm: true,
  })

  const splicedText = bodyToDisplay.slice(0, 80)
  const date = dateFormatter(createdAt)

  return (
    <Link to={`/post/${id}`}>
      <div className="rounded-xl p-8 bg-app-base-post">
        <header className="flex justify-between mb-5">
          <h4 className="text-xl text-app-base-title font-bold">{title}</h4>
          <span>{date}</span>
        </header>
        <p>{splicedText}...</p>
      </div>
    </Link>
  )
}
