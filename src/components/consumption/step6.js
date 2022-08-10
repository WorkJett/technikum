import {
  Amount,
  Field,
  NextButton
} from './style'
import {ACCENT} from 'components/Button'
import {SAVE_URL} from 'settings'

export const Step6 = ({to_step, data, onDataChange, onSave, paymentRequestId}) => {
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

  const edit_comment = () => {
    onDataChange({
      ...data,
      category: null
    })
    to_step(4)
  }

  const save = () => {
    fetch(SAVE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accountId: paymentItem.accountId,
        accountTitle: paymentItem.accountTitle,
        companyId: paymentItem.companyId,
        mainProjectTitle: mainProject.title,
        projectId: courseProject.projectId,
        projectTitle: courseProject.title,
        operationCategoryId: category.operationCategoryId,
        comment,
        sum: parseInt(amount.toString().replaceAll(' ', '')),
        payment_request_id: paymentRequestId || undefined
      })
    })
    onSave()
  }

  return (
    <>
      <Amount label={'Сумма'} value={amount} onEdit={edit_amount} />
      <Field label={'Форма оплаты'} value={paymentItem.title} onEdit={edit_payment} />
      <Field label={'Проект'} value={`${mainProject.title}, ${courseProject.title}`} onEdit={edit_project} />
      <Field label={'Cтатья расходов'} value={category.title} onEdit={edit_category} />
      <Field label={'Комментарий'} value={comment} onEdit={edit_comment} />
      <NextButton onClick={save} type={ACCENT}>Сохранить</NextButton>
    </>
  )
}
