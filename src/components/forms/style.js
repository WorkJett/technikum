import styled from 'styled-components'

import edit from 'assets/edit.svg'

export const FieldBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${props => props.dis ? 'opacity: 0.3;' : ''}
`

export const FieldLabelRow = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
`

const field_label_mode = props => {
  if (props.edit) return `
    font-weight: 700;
    font-size: 16px;
    color: #4880FF;
  `
  return `
    font-weight: 600;
    font-size: 14px;
    color: #A3A3A3;
  `
}

export const FieldLabel = styled.div`
  flex: 1 0;
  height: 24px;
  line-height: 24px;
  ${field_label_mode}
`

export const FieldEditBtn = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`

FieldEditBtn.defaultProps = {
  src: edit
}

export const FieldValue = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #1C1B1F;
`

export const FieldEditBox = styled.div`
  width: 300px;
  height: 40px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: stretch;
  background: #FAFAFA;
  border: 1px solid #D5D5D5;
  border-radius: 11px;
`

export const FieldEditInput = styled.input`
  flex: 1 0;
  height: 19px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #404040;
  border: none;
  background-color: transparent;
  outline: none;
  margin-left: 16px;
`

export const FieldEditSuffix = styled.div`
  margin-left: 10px;
  margin-right: 12px;
  height: 15px;
  line-height: 15px;
  font-weight: 400;
  font-size: 12px;
  color: #404040;
`
