import styled from 'styled-components'

export const
  PRIMARY = 'primary',
  SELECTED = 'selected',
  SECONDARY = 'secondary',
  ACCENT = 'accent'

const btn_type = ({type}) => {
  if (type === PRIMARY) return `
    background-color: #4880FF;
    color: #FFFFFF;
  `
  if (type === SELECTED) return `
    border: 1px solid #4880FF;
    color: #4880FF;
  `
  if (type === ACCENT) return `
    background-color: #FF8743;
    color: #FFFFFF;
  `
  return `
    border: 1px solid #404040;
    color: #404040;
  `
}

export const Button = styled.div`
  width: 260px;
  height: 52px;
  border-radius: 11px;
  ${btn_type}
  line-height: 52px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
`

