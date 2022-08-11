import {useContext} from 'react'

import {
  Amount,
  Field,
  Divider,
  Title,
  Select,
  NextButton
} from './style'
import {PRIMARY} from 'components/Button'
import {State} from 'state'

export const Step4 = ({to_step, data, onDataChange}) => {
  const {categories} = useContext(State)
  const {amount, paymentItem, mainProject, courseProject, category} = data

  const edit_amount = () => {
    onDataChange({
      ...data,
      amount: null
    })
    to_step(0)
  }

  const edit_payment = () => {
    onDataChange({
      ...data,
      paymentType: null,
      paymentItem: null
    })
    to_step(1)
  }

  const edit_project = () => {
    onDataChange({
      ...data,
      mainProject: null,
      courseProject: null
    })
    to_step(2)
  }

  const is_next = !!category

  const get_categories = () => {
    const res = [...categories]
    res.forEach(item => item.id = item.operationCategoryId)
    return res
  }

  const set_category = category => {
    onDataChange({
      ...data,
      category
    })
  }

  const get_project_str = () => {
    if (mainProject) return mainProject.title
    return courseProject.title
  }

  return (
    <>
      <Amount label={'Сумма'} value={amount} onEdit={edit_amount} />
      <Field label={'Форма оплаты'} value={paymentItem.title} onEdit={edit_payment} />
      <Field label={'Проект'} value={get_project_str()} onEdit={edit_project} />
      <Divider />
      <Title>Cтатья расходов</Title>
      <Select title={'Выберите пункт'} value={category} items={get_categories()} onSelect={set_category} />
      {is_next && <NextButton onClick={() => to_step(4)} type={PRIMARY}>Продолжить</NextButton>}
    </>
  )
}
