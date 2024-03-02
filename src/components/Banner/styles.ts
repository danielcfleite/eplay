import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
  position: relative;

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
  margin-bottom: 16px;
`
export const Precos = styled.p`
  font-size: 24px;
  font-weight: 400;
  span {
    text-decoration: line-through;
    font-weight: bold;
  }

  p {
    font-weight: bold;
    display: inline;
  }
`
