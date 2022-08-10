import styled from 'styled-components'

import {Stepper as StepperBase} from 'components/stepper'
import {Navigation as NavigationBase} from 'components/navigation'
import {Field as FieldBase, MoneyField, EDIT} from 'components/field'
import {Button} from 'components/Button'
import {Select as SelectBase} from 'components/select'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-bottom: 50px;
`

export const Stepper = styled(StepperBase)`
  margin-top: 46px;
`

export const Navigation = styled(NavigationBase)`
  margin-top: 46px;
`

export const Field = styled(FieldBase)`
  margin-top: 24px;
`

const money_field_mode = ({mode}) => {
  if (mode === EDIT) return `
    margin-top: 220px;
  `
  return `
    margin-top: 24px;
  `
}

export const Amount = styled(MoneyField)`
  ${money_field_mode}
`

export const NextButton = styled(Button)`
  margin-top: 36px;
  width: 300px;
`

export const PayButton = styled(Button)`
  margin-top: 16px;
  width: 300px;
  font-weight: 600;
  font-size: 14px;
`

export const Select = styled(SelectBase)`
  margin-top: 16px;
`

export const Divider = styled.div`
  height: 1px;
  width: 300px;
  margin-top: 24px;
  background-color: #D5D5D5;
`

export const Title = styled.div`
  margin-top: 36px;
  width: 300px;
  height: 22px;
  line-height: 22px;
  font-weight: 700;
  font-size: 16px;
  color: #4880FF;
`

export const Comment = styled.textarea`
  width: 300px;
  height: 100px;
  min-height: 100px;
  background: #FAFAFA;
  border: 1px solid #D5D5D5;
  border-radius: 11px;
  font-weight: 400;
  font-size: 14px;
  color: #404040;
  margin-top: 16px;
  outline: none;
  padding: 9px 16px;
  flex-basis: 100px;
  box-sizing: border-box;
  flex: 1 0;

  &::placeholder {
    color: #D5D5D5;
  }
`
