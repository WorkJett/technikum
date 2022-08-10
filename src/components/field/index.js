import {
  FieldBox,
  FieldLabelRow,
  FieldLabel,
  FieldEditBtn,
  FieldValue,
  FieldEditBox,
  FieldEditInput,
  FieldEditSuffix
} from './style'

export const
  DISABLE = 'disable',
  EDIT = 'edit'

export const Field = ({mode, label, value, onEdit, className, onChange}) => {
  const on_field_click = () => {
    if (!mode) onEdit()
  }

  const dis = mode === DISABLE
  const edit = mode === EDIT

  if (!mode || dis) return (
    <FieldBox className={className} dis={dis}>
      <FieldLabelRow>
        <FieldLabel>{label}</FieldLabel>
        <FieldEditBtn onClick={on_field_click} />
      </FieldLabelRow>
      <FieldValue>{value}</FieldValue>
    </FieldBox>
  )

  return (
    <FieldBox className={className} dis={dis}>
      <FieldLabelRow>
        <FieldLabel edit={edit}>{label}</FieldLabel>
      </FieldLabelRow>
      <FieldEditBox>
        <FieldEditInput autoFocus={true} value={value} onChange={onChange} />
        <FieldEditSuffix>сум</FieldEditSuffix>
      </FieldEditBox>
    </FieldBox>
  )
}

export const MoneyField = ({mode, label, value, onEdit, className, onChange}) => {
  const on_field_click = () => {
    if (!mode) onEdit()
  }

  const dis = mode === DISABLE
  const edit = mode === EDIT

  const as_money = value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  if (!mode || dis) return (
    <FieldBox className={className} dis={dis}>
      <FieldLabelRow>
        <FieldLabel>{label}</FieldLabel>
        <FieldEditBtn onClick={on_field_click} />
      </FieldLabelRow>
      <FieldValue>{as_money}</FieldValue>
    </FieldBox>
  )

  return (
    <FieldBox className={className} dis={dis}>
      <FieldLabelRow>
        <FieldLabel edit={edit}>{label}</FieldLabel>
      </FieldLabelRow>
      <FieldEditBox>
        <FieldEditInput autoFocus={true} value={as_money} onChange={onChange} />
        <FieldEditSuffix>сум</FieldEditSuffix>
      </FieldEditBox>
    </FieldBox>
  )
}
