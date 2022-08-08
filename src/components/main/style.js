import styled from 'styled-components'

import logo from 'assets/logo.png'
import {Button} from 'components/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Logo = styled.img`
  margin-top: 90px;
  width: 132px;
  height: 20px;
`

Logo.defaultProps = {
  src: logo
}

export const Menu = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  height: 48px;
  width: 300px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #4880FF;
  text-align: center;
`

export const FirstBtn = styled(Button)`
  margin-top: 48px;
`

export const SecondBtn = styled(Button)`
  margin-top: 24px;
`
