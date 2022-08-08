import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ItemBox = styled.div`
  width: 300px;
  border: 1px solid #A3A3A3;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 16px;

  &:nth-child(2) {
    margin-top: 36px;
  }
`

export const ItemRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 4px 16px 0 16px;

  &:first-child {
    margin-top: 16px;
  }

  &:last-child {
    margin-bottom: 16px;
  }
`

export const ItemLabel = styled.div`
  width: 100px;
  flex-basis: 100px;
  height: 19px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #A3A3A3;
`

export const ItemText = styled.div`
  flex: 1 0;
  margin-left: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #1C1B1F;
`
