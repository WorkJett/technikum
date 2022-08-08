import {
  Container,
  Logo,
  Menu,
  Title,
  FirstBtn,
  SecondBtn
} from './style'

export const Main = ({toConsumption, toOrder}) => {

  return (
    <Container>
      <Logo />
      <Menu>
        <Title>Выбери, какое действие было совершено</Title>
        <FirstBtn onClick={toOrder}>Оплачена заявка</FirstBtn>
        <SecondBtn onClick={toConsumption}>Произведен расход</SecondBtn>
      </Menu>
    </Container>
  )
}
