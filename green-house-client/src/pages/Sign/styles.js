import styled from 'styled-components'
import { Col as BTCol } from 'reactstrap'
import image from 'assets/greenhouse.jpg'

export const Sider = styled(BTCol)`
  height: 100vh;
  background: url(${image}) center no-repeat;
  background-size: 60rem;
`

export const LogCol = styled(BTCol)`
  height: 100vh;
  display: flex;
  align-items: space-around;
  padding: 3rem;
  justify-content: center;
  background: #fff;
`
export const Logo = styled(BTCol)`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  color: green;
  &&:hover {
    transition: 0.3s;
    color: lightgreen;
  }
  &&:
`
