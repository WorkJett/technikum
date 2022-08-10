import {useEffect, useState} from 'react'

import {
  Container,
  ItemBox,
  ItemRow,
  ItemLabel,
  ItemText
} from './style'
import {REQUESTS_URL} from 'settings'

import {Navigation} from 'components/navigation'

const Item = ({data: {sum, payment_type, comment}, onClick}) => {
  const as_money = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  return (
    <ItemBox onClick={onClick}>
      <ItemRow>
        <ItemLabel>Сумма</ItemLabel>
        <ItemText>{as_money}</ItemText>
      </ItemRow>
      <ItemRow>
        <ItemLabel>Форма оплаты</ItemLabel>
        <ItemText>{payment_type}</ItemText>
      </ItemRow>
      <ItemRow>
        <ItemLabel>Комментарий</ItemLabel>
        <ItemText>{comment}</ItemText>
      </ItemRow>
    </ItemBox>
  )
}

export const List = ({back, select}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      const requests = await fetch(REQUESTS_URL)
        .then(res => res.json()).then(res => res.data)
      setItems(requests)
    })()
  }, [])

  const on_item_click = item => () => select(item)

  return (
    <Container>
      <Navigation back={back} title={'Выбор заявки'} />
      {items.map(item => (
        <Item key={`order_item_${item.id}`} data={item} onClick={on_item_click(item)} />
      ))}
    </Container>
  )
}
