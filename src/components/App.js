import {useState} from 'react'
import {createGlobalStyle} from 'styled-components'

import {Main} from 'components/main'
import {Consumption} from 'components/consumption'
import {Order} from 'components/order'

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

  const toMain = () => setView(MAIN_VIEW)
  const toConsumption = () => setView(CONSUMPTION_VIEW)
  const toOrder = () => setView(ORDER_VIEW)

  return (
    <>
      <GlobalStyle />
      {view === MAIN_VIEW && <Main toConsumption={toConsumption} toOrder={toOrder} />}
      {view === CONSUMPTION_VIEW && <Consumption back={toMain} />}
      {view === ORDER_VIEW && <Order back={toMain} />}
    </>
  )
}
