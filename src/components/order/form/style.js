import styled from 'styled-components'

import {Field as FieldBase} from 'components/field'
import {Button as ButtonBase} from 'components/Button'

export const Container = styled.div`
  margin-top: 100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Fields = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Field = styled(FieldBase)`
  &:not(:first-child) {
    margin-top: 24px;
  }
`

export const Button = styled(ButtonBase)`
  margin-top: 36px;
  width: 300px;
`
