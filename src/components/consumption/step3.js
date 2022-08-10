import {useContext} from 'react'

import {
  Amount,
  Field,
  PayButton,
  Divider,
  Title,
  Select,
  NextButton
} from './style'
import {PRIMARY, SELECTED} from 'components/Button'
import {State} from 'state'

export const Step3 = ({to_step, data, onDataChange}) => {
  const {projects} = useContext(State)
  const {amount, paymentItem, mainProject, courseProject} = data

  const edit_amount = () => {
    onDataChange({
      ...data,
      amount: null
    })
    to_step(0)
  }

  const edit_payment = () => {
    onDataChange({
      ...data,
      paymentType: null,
      paymentItem: null
    })
    to_step(1)
  }

  const is_next = !!mainProject && !!courseProject

  const set_main_project = project => () => {
    onDataChange({
      ...data,
      mainProject: project
    })
  }

  const get_main_projects = () => {
    const res = []
    for (let project in projects.main_projects) res.push(projects.main_projects[project])
    return res
  }

  const get_course_projects = () => {
    const res = [...projects.course_projects]
    res.forEach(item => item.id = item.projectId)
    return res
  }

  const set_course_project = project => {
    onDataChange({
      ...data,
      courseProject: project
    })
  }

  const clear_main_project = () => {
    onDataChange({
      ...data,
      mainProject: null
    })
  }

  return (
    <>
      <Amount label={'Сумма'} value={amount} onEdit={edit_amount} />
      <Field label={'Форма оплаты'} value={paymentItem.title} onEdit={edit_payment} />
      <Divider />
      <Title>Проект</Title>
      {!mainProject && get_main_projects().map(project => (
        <PayButton key={`main_project_${project.title}`} onClick={set_main_project(project)}>{project.title}</PayButton>
      ))}
      {mainProject && <PayButton type={SELECTED} onClick={clear_main_project}>{mainProject.title}</PayButton>}
      <Select title={'Выберите пункт'} value={courseProject} items={get_course_projects()} onSelect={set_course_project} />
      {is_next && <NextButton onClick={() => to_step(3)} type={PRIMARY}>Продолжить</NextButton>}
    </>
  )
}
