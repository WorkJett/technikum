import {useState} from 'react'

import {
  Container,
  Fields,
  Field,
  Button
} from './style'
import {Navigation} from 'components/navigation'
import {ACCENT, PRIMARY} from 'components/Button'
import {Modal} from 'components/modal'
import {DISABLE, EDIT} from 'components/field'

export const Form = ({back}) => {
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)

  const open_modal = () => setOpen(true)
  const close_modal = () => setOpen(false)
  const edit_field = () => setEdit(true)
  const save_field = () => setEdit(false)
  const confirm_modal = () => {
    close_modal()
    edit_field()
  }
  const get_edit_mode = () => {
    if (edit) return EDIT
  }

  const get_dis_mode = () => {
    if (edit) return DISABLE
  }

  return (
    <Container>
      <Navigation back={back} title={'Оплачена заявка'} />
      <Fields>
        <Field label={'Сумма'} value={'5 000 000 сум'} onEdit={open_modal} mode={get_edit_mode()} />
        <Field label={'Форма оплаты'} value={'Наличные Person'} onEdit={open_modal} mode={get_dis_mode()} />
        <Field label={'Проект'} value={'Голова'} onEdit={open_modal} mode={get_dis_mode()} />
        <Field label={'Cтатья расходов'} value={'Top 1'} onEdit={open_modal} mode={get_dis_mode()} />
        <Field label={'Комментарий'} value={'текстовое поле в 3 строки для длинных длинных длинных комментариев'} onEdit={open_modal} mode={get_dis_mode()} />
      </Fields>
      {!edit && <Button type={ACCENT} onClick={back}>Сохранить</Button>}
      {edit && <Button type={PRIMARY} onClick={save_field}>Внести изменения</Button>}
      {open && <Modal onConfirm={confirm_modal} onCancel={close_modal} />}
    </Container>
  )
}
