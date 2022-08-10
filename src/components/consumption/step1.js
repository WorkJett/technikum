import {EDIT} from 'components/field'
import {PRIMARY} from 'components/Button'

import {
  Amount,
  NextButton
} from './style'

export const Step1 = ({next, data, onDataChange}) => {
  const {amount} = data

  const onAmountChange = e => {
    const {value} = e.target
    if (!value && value !== '') return
    onDataChange({
      ...data,
      amount: value.toString().replace(/\D/g, '')
    })
  }

  const on_next = () => {
    if (amount !== '') next()
  }

  return (
    <>
      <Amount mode={EDIT} label={'Сумма'} value={amount} onChange={onAmountChange} />
      <NextButton onClick={on_next} type={PRIMARY}>Продолжить</NextButton>
    </>
  )
}
