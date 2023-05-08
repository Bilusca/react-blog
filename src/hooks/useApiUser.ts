import { useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'

interface User {
  html_url: string
  bio: string
  followers: number
  avatar_url: string
  name: string
}

export function useApiUser() {
  const [user, setUser] = useState<User>()

  const getUser = useCallback(async () => {
    const reponse = await api.get<User>('/users/bilusca')

    setUser(reponse.data)
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return { user }
}
