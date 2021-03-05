import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useLikeMutations } from '../../hoc/useLikeMutations'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { toggleLikePhoto } = useLikeMutations()

  const handleFavClick = () => {
    setLiked(!liked)
    !liked && toggleLikePhoto(
      {
        variables: {
          input: { id }
        }
      }
    )
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}
