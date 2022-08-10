import {
  Amount,
  Field,
  Divider,
  Title,
  Comment,
  NextButton
} from './style'
import {PRIMARY} from 'components/Button'

export const Step5 = ({to_step, data, onDataChange}) => {
  const {amount, paymentItem, mainProject, courseProject, category, comment} = data

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

  const edit_category = () => {
    onDataChange({
      ...data,
      category: null
    })
    to_step(3)
  }

  const set_comment = e => {
    onDataChange({
      ...data,
      comment: e.target.value
    })
  }

  return (
    <>
      <Amount label={'Сумма'} value={amount} onEdit={edit_amount} />
      <Field label={'Форма оплаты'} value={paymentItem.title} onEdit={edit_payment} />
      <Field label={'Проект'} value={`${mainProject.title}, ${courseProject.title}`} onEdit={edit_project} />
      <Field label={'Cтатья расходов'} value={category.title} onEdit={edit_category} />
      <Divider />
      <Title>Комментарий</Title>
      <Comment placeholder="Дополнительная информация" value={comment} onChange={set_comment} />
      <NextButton onClick={() => to_step(5)} type={PRIMARY}>Продолжить</NextButton>
    </>
  )
}
