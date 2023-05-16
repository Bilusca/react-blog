export function SearchForm() {
  return (
    <div className="container mx-auto mb-12">
      <header className="flex justify-between mb-3">
        <h3 className="text-lg font-bold text-app-base-subtitle">
          Publicações
        </h3>
        <span className="text-sm text-app-base-span">6 publicações</span>
      </header>
      <form className="w-full" action="">
        <input
          className="px-4 py-3 placeholder:text-app-base-label rounded-md bg-app-base-input border border-app-base-border w-full outline-0 focus-visible:border-app-blue"
          type="text"
          placeholder="Buscar conteúdo"
        />
      </form>
    </div>
  )
}
