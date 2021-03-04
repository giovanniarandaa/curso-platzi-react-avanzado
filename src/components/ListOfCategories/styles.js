import styled, { css } from 'styled-components'
import { fadeInListCategories } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;

  ${props => props.fixed && css`
  {
    ${fadeInListCategories({ time: '.5s' })}
    background-color: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    transform: scale(.5);
    z-index: 1;
    top: -20px;
  }
  `}
`

export const Item = styled.ul`
  padding: 0 8px;
`
