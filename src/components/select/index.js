import {useState} from 'react'

import {
  Container,
  MainBtn,
  Title,
  Down,
  Up,
  List,
  Item
} from './style'

export const Select = ({title, value, items, onSelect, className}) => {
  const [open, setOpen] = useState(false)

  const on_main = () => setOpen(!open)
  const on_select = item => () => {
    setOpen(false)
    if (onSelect) onSelect(item)
  }
  const current_title = value ? value.title : title 

  return (
    <Container className={className}>
      <MainBtn open={open} selected={!!value} onClick={on_main}>
        <Title>{current_title}</Title>
        {open && <Up />}
        {!open && <Down />}
      </MainBtn>
      {open && (
        <List>
          {items.map(item => (
            <Item key={`select_item_${item.id}`} onClick={on_select(item)}>{item.title}</Item>
          ))}
        </List>
      )}
    </Container>
  )
}
