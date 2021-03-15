import React from 'react'
import { useGetPhotos } from '../../hoc/withPhotos'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)
  if (loading) return null

  if (error) return null

  return (
    <ul>
      {
        data.photos.map(photoCard => <PhotoCard key={photoCard.id} {...photoCard} />)
      }
    </ul>
  )
}
