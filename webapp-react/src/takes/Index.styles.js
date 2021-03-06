import { css } from 'glamor'
import * as colors from 'config/colors'

export const container = css({
  maxWidth: '500px',
  margin: '0 auto',
})

export const lists = css({
  borderTop: `2px solid ${ colors.base6 }`,
  margin: '0',
  padding: '20px 0',
  '@media(max-width: 500px)': {
    padding: '20px',
  },
})
