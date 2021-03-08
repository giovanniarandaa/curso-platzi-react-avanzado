import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { usePhoto } from '../hoc/usePhoto'

export const Detail = ({ detailId }) => {
  const { loading, error, data } = usePhoto(detailId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!...</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
