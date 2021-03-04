import { keyframes, css } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

export const fadeInListCategories = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframesListCategories} ${type};`

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0px);
    opacity: 1;
  }
`

const fadeInKeyframesListCategories = keyframes`
  from {
    top: -100px
  }

  to {
    top: -20px
  }
`
