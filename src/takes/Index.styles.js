import { css } from 'glamor'
import * as colors from 'config/colors'

export const form = css({
  '& input': {
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.base6,
    display: 'inline-block',
    width: '100%',
    padding: '20px',
    '&:focus': {
      backgroundColor: '#DDE3DE',
      border: 'none',
      outline: 'none',
    },
  },
  '& ul': {
    color: colors.base1,
    fontWeight: '600',
    padding: '20px',
    wordWrap: 'break-word',
  },
  '& li': {
    margin: '10px 0',
  },
  '& button[type="button"]': {
    background: colors.base3,
    border: 'none',
    borderRadius: '50%',
    color: colors.base4,
    height: '1em',
    lineHeight: '1em',
    width: '1em',
  },
  '& button[type="submit"]': {
    backgroundColor: colors.base3,
    border: 'none',
    color: colors.base1,
    fontWeight: '600',
    padding: '20px',
    textTransform: 'uppercase',
    width: '100%',
  }
})

export const container = css({
  maxWidth: '500px',
  margin: '0 auto',
})

export const lists = css({
  borderTop: `1px solid ${ colors.base6 }`,
  margin: '20px 0',
  padding: '20px 0',
})
