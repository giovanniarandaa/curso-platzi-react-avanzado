import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavorites } from '../hoc/useGetFavorites'

export default () => {
  const { data, loading, error } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { favs } = data

  return (
    <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <ListOfFavs favs={favs} />
    </Layout>
  )
}
