import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      likes,
      likes
    }
  }
`

export const useLikeMutations = () => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO)
  return { toggleLikePhoto }
}
