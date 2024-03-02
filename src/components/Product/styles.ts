import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
  margin-top: 16px;
`

export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
