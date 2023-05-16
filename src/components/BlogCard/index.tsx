import { Link } from 'react-router-dom'

export function BlogCard() {
  return (
    <Link to="/post/teste">
      <div className="rounded-xl p-8 bg-app-base-post">
        <header className="flex justify-between mb-5">
          <h4 className="text-xl text-app-base-title font-bold">
            JavaScript data types and data structures
          </h4>
          <span>Há 1 dia</span>
        </header>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </div>
    </Link>
  )
}
