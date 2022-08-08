import styled from 'styled-components'

import {Button as ButtonBase} from 'components/Button'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Box = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #FFFFFF;
  border-radius: 11px;
`

export const Title = styled.div`
  margin: 24px 24px 0 24px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #1C1B1F;
`

export const ButtonsRow = styled.div`
  margin: 24px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled(ButtonBase)`
  width: 120px;
  height: 44px;
  line-height: 44px;
`
