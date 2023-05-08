import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

export function useApiUser() {
  const [user, setUser] = useState()

  async function getUser() {
    const reponse = await api.get('/users/bilusca')

    console.log(reponse.data)
    setUser(reponse.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return { user }
}
