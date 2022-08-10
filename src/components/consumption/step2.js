import {useContext} from 'react'

import {
  Amount,
  PayButton,
  Divider,
  Title,
  Select,
  NextButton
} from './style'
import {PRIMARY, SELECTED} from 'components/Button'
import {State} from 'state'

export const Step2 = ({to_step, data, onDataChange}) => {
  const {payment} = useContext(State)
  const {amount, paymentType, paymentItem} = data

  const edit_amount = () => {
    onDataChange({
      ...data,
      amount: null
    })
    to_step(0)
  }

  const get_payments = () => {
    const res = []
    for (let field in payment) res.push(field)
    return res
  }

  const is_next = !!paymentType && !!paymentItem

  const set_payment = payment_method => () => {
    onDataChange({
      ...data,
      paymentType: payment_method
    })
  }

  const get_items = () => {
    if (!paymentType) return []
    const res = payment[paymentType]
    res.forEach(item => item.id = item.accountId)
    return res
  }

  const set_payment_item = item => {
    onDataChange({
      ...data,
      paymentItem: item
    })
  }

  const clear_payment = () => {
    onDataChange({
      ...data,
      paymentType: null,
      paymentItem: null
    })
  }

  return (
    <>
      <Amount label={'Сумма'} value={amount} onEdit={edit_amount} />
      <Divider />
      <Title>Форма оплаты</Title>
      {!paymentType && get_payments().map(field => (
        <PayButton key={`payment_type_${field}`} onClick={set_payment(field)}>{field}</PayButton>
      ))}
      {paymentType && <PayButton type={SELECTED} onClick={clear_payment}>{paymentType}</PayButton>}
      {paymentType && <Select title={'Выберите пункт'} value={paymentItem} items={get_items()} onSelect={set_payment_item} />}
      {is_next && <NextButton onClick={() => to_step(2)} type={PRIMARY}>Продолжить</NextButton>}
    </>
  )
}
