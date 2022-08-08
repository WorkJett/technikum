import {
  Container,
  Box,
  Title,
  ButtonsRow,
  Button
} from './style'
import {PRIMARY, SELECTED} from 'components/Button'

export const Modal = ({onConfirm, onCancel}) => {
  return (
    <Container onClick={onCancel}>
      <Box>
        <Title>Ты уверен, что хочешь внести изменения?</Title>
        <ButtonsRow>
          <Button type={PRIMARY} onClick={onConfirm}>Да</Button>
          <Button type={SELECTED} onCancel={onCancel}>Отменить</Button>
        </ButtonsRow>
      </Box>
    </Container>
  )
}
