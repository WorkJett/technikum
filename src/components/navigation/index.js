import {
  Container,
  Arrow,
  Title
} from './style'

export const Navigation = ({back, title, className}) => {
  return (
    <Container className={className}>
      <Arrow onClick={back} />
      <Title>{title}</Title>
    </Container>
  )
}
