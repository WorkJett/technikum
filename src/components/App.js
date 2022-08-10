import {useState, useEffect} from 'react'
import {createGlobalStyle} from 'styled-components'

import {Main} from 'components/main'
import {Consumption} from 'components/consumption'
import {Order} from 'components/order'
import {state as default_state, State} from 'state'
import {PAYMENT_URL, PROJECTS_URL, CATEGROIES_URL} from 'settings'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans';
  }
`

const
  MAIN_VIEW = 'main_view',
  CONSUMPTION_VIEW = 'consumption_view',
  ORDER_VIEW = 'order_view'

export const App = () => {
  const [view, setView] = useState(MAIN_VIEW)
  const [state, setState] = useState(default_state)

  useEffect(() => {
    (async () => {
      const payment = await fetch(PAYMENT_URL)
        .then(res => res.json()).then(res => res.data)
      const projects = await fetch(PROJECTS_URL)
        .then(res => res.json()).then(res => res.data)
      const categories = await fetch(CATEGROIES_URL)
        .then(res => res.json()).then(res => res.data)
      setState({payment, projects, categories})
    })()
  }, [])

  const toMain = () => setView(MAIN_VIEW)
  const toConsumption = () => setView(CONSUMPTION_VIEW)
  const toOrder = () => setView(ORDER_VIEW)

  return (
    <State.Provider value={state}>
      <GlobalStyle />
      {view === MAIN_VIEW && <Main toConsumption={toConsumption} toOrder={toOrder} />}
      {view === CONSUMPTION_VIEW && <Consumption back={toMain} />}
      {view === ORDER_VIEW && <Order back={toMain} />}
    </State.Provider>
  )
}
