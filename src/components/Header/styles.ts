import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  display: flex;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  gap: 16px;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  font-size: 16px;
`
export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
