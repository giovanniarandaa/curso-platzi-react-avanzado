import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { usePhoto } from '../hoc/usePhoto'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  const { loading, error, data } = usePhoto(detailId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!...</p>

  const { photo = {} } = data
  return <Layout title={`Fotografía ${detailId}`}><PhotoCard {...photo} /></Layout>
}
