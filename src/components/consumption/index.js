import {useState} from 'react'

import {
  Container,
  Stepper,
  Navigation,
  Field,
  NextButton,
  PayButton,
  Divider,
  Select,
  Title,
  Comment
} from './style'
import {EDIT} from 'components/forms'
import {PRIMARY, SELECTED, ACCENT} from 'components/Button'

const point_items = [
  {id: 0, title: 'Наличные Юра'},
  {id: 1, title: 'Наличные Дима'},
  {id: 2, title: 'Наличные Person'}
]

const course_items = [
  {id: 0, title: 'course one'},
  {id: 1, title: 'course two'},
  {id: 2, title: 'course three'},
  {id: 3, title: 'course four'},
  {id: 4, title: 'course five'}
]

const entry_items = [
  {id: 0, title: 'option one'},
  {id: 1, title: 'option two'},
  {id: 2, title: 'option three'},
  {id: 3, title: 'option four'},
  {id: 4, title: 'option five'}
]

const
  CASH = 'cash',
  P2P = 'p2p',
  TRNS = 'trns'

export const Consumption = ({back}) => {
  const [step, setStep] = useState(0)
  const [pay, setPay] = useState()
  const [cash, setCash] = useState()
  const [project, setProject] = useState()

  const second_step = () => setStep(step + 1)
  const to_step = idx => setStep(idx)
  const is_next = (step !== 1  || pay) && step !== 5
  const set_pay = value => () => {
    setPay(value)
    second_step()
  }

  return (
    <Container>
      <Stepper step={step} toStep={to_step} />
      <Navigation back={back} title={'Произведен расход'} />
      <Field mode={step === 0 ? EDIT : ''} label={'Сумма'} value={'5 000 000 сум'} onEdit={() => setStep(0)} />
      {step > 1 && cash && (
        <Field label={'Форма оплаты'} value={'Наличные Person'} onEdit={() => setStep(1)} />
      )}
      {step > 2 && (
        <Field label={'Проект'} value={'Голова'} onEdit={() => setStep(1)} />
      )}
      {step > 3 && (
        <Field label={'Cтатья расходов'} value={'Top 1'} onEdit={() => setStep(3)} />
      )}
      {step > 4 && (
        <Field label={'Комментарий'} value={'текстовое поле в 3 строки большой большой большой большой большой большой для комментариев'} onEdit={() => setStep(4)} />
      )}
      {step === 1 && (
        <>
          <Divider />
          <Title>Форма оплаты</Title>
          <PayButton onClick={set_pay(CASH)}>Наличные</PayButton>
          <PayButton onClick={set_pay(P2P)}>P2P</PayButton>
          <PayButton onClick={set_pay(TRNS)}>Перечисление</PayButton>
        </>
      )}
      {step === 2 && (
        <>
          <Divider />
          {!cash && (
            <>
              <Title>Форма оплаты</Title>
              <PayButton type={SELECTED}>Наличные</PayButton>
              <Select title={'Выберите пункт'} items={point_items} onSelect={setCash} />
            </>
          )}
          {cash && (
            <>
              <Title>Проект</Title>
              <Select title={'Курс + поток'} items={course_items} onSelect={setProject} />
            </>
          )}
        </>
      )}
      {step === 3 && (
        <>
          <Divider />
          <Title>Cтатья расходов</Title>
          <Select title={'Другая'} items={entry_items} />
        </>
      )}
      {step === 4 && (
        <>
          <Divider />
          <Title>Комментарий</Title>
          <Comment placeholder="Дополнительная информация" />
        </>
      )}
      {is_next && <NextButton onClick={second_step} type={PRIMARY}>Продолжить</NextButton>}
      {step === 5 && <NextButton onClick={back} type={ACCENT}>Сохранить</NextButton>}
    </Container>
  )
}
