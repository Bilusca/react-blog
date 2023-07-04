export const dateFormatter = (date: string) => {
  const dateObject = new Date(date)

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
  }).format(dateObject)
}
