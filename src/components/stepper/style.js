import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 6px;
  display: flex;
  justify-content: space-between;
`

export const
  FILLED = 'filled',
  CURRENT = 'current',
  EMPTY = 'empty'

const item_type = props => {
  if (props.type === FILLED) return `
    background-color: #4880FF;
  `
  if (props.type === CURRENT) return `
    border: 1px solid #4880FF;
  `
  return `
    background-color: #F1F4F9;
  `
}

export const Item = styled.div`
  width: 56px;
  height: 6px;
  border-radius: 3px;
  ${item_type}
`
