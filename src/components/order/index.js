import {useState} from 'react'

import {List} from './list'
import {Form} from './form'

const
  LIST_VIEW = 'list_view',
  FORM_VIEW = 'form_view'

export const Order = ({back}) => {
  const [view, setView] = useState(LIST_VIEW)

  const toList = () => setView(LIST_VIEW)
  const toForm = () => setView(FORM_VIEW)

  return (
    <>
      {view === LIST_VIEW && <List back={back} select={toForm} />}
      {view === FORM_VIEW && <Form back={toList} />}
    </>
  )
}
