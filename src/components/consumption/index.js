import {useState} from 'react'

import {
  Container,
  Stepper,
  Navigation
} from './style'
import {Step1} from './step1'
import {Step2} from './step2'
import {Step3} from './step3'
import {Step4} from './step4'
import {Step5} from './step5'
import {Step6} from './step6'

const init_data = {
  amount: ''
}

export const Consumption = ({back, item}) => {
  const [step, setStep] = useState(item ? 1 : 0)
  const [data, setData] = useState(item ? {
    amount: item.sum,
    paymentType: item.payment_type,
    comment: item.comment
  } : init_data)

  const to_step = idx => setStep(idx)

  return (
    <Container>
      <Stepper step={step} toStep={to_step} />
      <Navigation back={back} title={'Произведен расход'} />
      {step === 0 && <Step1 next={() => to_step(1)} data={data} onDataChange={setData} />}
      {step === 1 && <Step2 to_step={to_step} data={data} onDataChange={setData} />}
      {step === 2 && <Step3 to_step={to_step} data={data} onDataChange={setData} />}
      {step === 3 && <Step4 to_step={to_step} data={data} onDataChange={setData} />}
      {step === 4 && <Step5 to_step={to_step} data={data} onDataChange={setData} />}
      {step === 5 && <Step6 to_step={to_step} data={data} onDataChange={setData} onSave={back} paymentRequestId={item ? item.id : null} />}
    </Container>
  )
}
