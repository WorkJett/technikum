import {
  Container,
  ItemBox,
  ItemRow,
  ItemLabel,
  ItemText
} from './style'

import {Navigation} from 'components/navigation'

const Item = ({data: {summ, type, comment}, onClick}) => {
  return (
    <ItemBox onClick={onClick}>
      <ItemRow>
        <ItemLabel>Сумма</ItemLabel>
        <ItemText>{summ}</ItemText>
      </ItemRow>
      <ItemRow>
        <ItemLabel>Форма оплаты</ItemLabel>
        <ItemText>{type}</ItemText>
      </ItemRow>
      <ItemRow>
        <ItemLabel>Комментарий</ItemLabel>
        <ItemText>{comment}</ItemText>
      </ItemRow>
    </ItemBox>
  )
}

const data = [
  {id: 0, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 1, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 2, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 3, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 4, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 5, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 6, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 7, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 8, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'},
  {id: 9, summ: '5 000 000 сум', type: 'P2P', comment: 'текстовое поле в 3 строки для комментариев'}
]

export const List = ({back, select}) => {
  const on_item_click = id => () => select(id)

  return (
    <Container>
      <Navigation back={back} title={'Выбор заявки'} />
      {data.map(datum => (
        <Item key={`order_item_${datum.id}`} data={datum} onClick={on_item_click(datum.id)} />
      ))}
    </Container>
  )
}
