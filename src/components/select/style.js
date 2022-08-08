import styled from 'styled-components'

import down from 'assets/down.svg'
import up from 'assets/up.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: stretch;
`

const main_state = ({open, selected}) => {
  if (open) return `
    border: 1px solid #4880FF;
    color: #404040;
  `
  if(selected) return `
    border: 1px solid #4880FF;
    color: #4880FF;
  `
  return `
    border: 1px solid #404040;
    color: #404040;
  `
}

export const MainBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  border-radius: 11px;
  ${main_state}
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
`

export const Down = styled.img`
  margin-left: 12px;
  width: 16px;
  height: 16px;
  object-fit: contain;
`

Down.defaultProps = {
  src: down
}

export const Up = styled.img`
  margin-left: 12px;
  width: 16px;
  height: 16px;
  object-fit: contain;
`

Up.defaultProps = {
  src: up
}

export const List = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: stretch;
  border-radius: 11px;
  border: 1px solid #404040;
`

export const Item = styled.div`
  margin-top: 16px;
  margin-left: 18px;
  margin-right: 18px;
  font-weight: 400;
  font-size: 14px;
  color: #1C1B1F;

  &:last-child {
    margin-bottom: 16px;
  }
`
