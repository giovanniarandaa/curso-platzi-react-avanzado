import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
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
