import {
  Container,
  Item,
  FILLED, CURRENT, EMPTY
} from './style'

export const Stepper = ({step, toStep, className}) => {
  const get_type = idx => {
    if (idx < step) return FILLED
    if (idx === step) return CURRENT
    return EMPTY
  }

  const step_click = idx => () => {
    if (!toStep) return
    if (idx < step) toStep(idx)
  }

  return (
    <Container className={className}>
      <Item type={get_type(0)} onClick={step_click(0)} />
      <Item type={get_type(1)} onClick={step_click(1)} />
      <Item type={get_type(2)} onClick={step_click(2)} />
      <Item type={get_type(3)} onClick={step_click(3)} />
      <Item type={get_type(4)} />
    </Container>
  )
}
