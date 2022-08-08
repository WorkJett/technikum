import styled from 'styled-components'

import arrow from 'assets/arrow_back.svg'

export const Container = styled.div`
  width: 300px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: stretch;
`

export const Arrow = styled.img`
  width: 10px;
  height: 15px;
  object-fit: contain;
`

Arrow.defaultProps = {
  src: arrow
}

export const Title = styled.div`
  flex: 1 0;
  margin-left: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #404040;
`
