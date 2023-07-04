export function BlogCardSkeleton() {
  return (
    <div>
      <div className="rounded-xl p-8 bg-app-base-post">
        <header className="flex justify-between mb-5">
          <div className="w-3/5 h-5 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg" />
          <div className="w-1/5 h-4 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg" />
        </header>
        <div className="w-full h-4 mb-1 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg" />
        <div className="w-full h-4 mb-1 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg" />
        <div className="w-full h-4 mb-1 bg-gradient-to-br from-neutral-400 to-neutral-100 animate-pulse rounded-lg" />
      </div>
    </div>
  )
}
