import { gql, useQuery } from '@apollo/client'

const GET_FAVS = gql`
  query getFavs {
    favs{
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const useGetFavorites = () => {
  const { data, loading, error } = useQuery(GET_FAVS, { fetchPolicy: 'network-only' })

  return { data, loading, error }
}
