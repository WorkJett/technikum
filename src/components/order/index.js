import {useState} from 'react'

import {List} from './list'
import {Consumption} from 'components/consumption'

const
  LIST_VIEW = 'list_view',
  FORM_VIEW = 'form_view'

export const Order = ({back}) => {
  const [view, setView] = useState(LIST_VIEW)
  const [item, setItem] = useState()

  const toList = () => setView(LIST_VIEW)
  const toForm = () => setView(FORM_VIEW)

  const on_select = selected_item => {
    setItem(selected_item)
    toForm()
  }

  return (
    <>
      {view === LIST_VIEW && <List back={back} select={on_select} />}
      {view === FORM_VIEW && item && <Consumption back={toList} item={item} />}
    </>
  )
}
