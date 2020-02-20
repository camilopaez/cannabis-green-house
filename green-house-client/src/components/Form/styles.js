import styled from 'styled-components'
import { Col as BTCol } from 'reactstrap'

export const Col = styled(BTCol)`
  margin: 0 0 4rem 0;
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin: -2rem 0 0 0;
  border: none;
  border-bottom: 1px solid #aaa;
  padding: 0 0 0 1rem;
  &&:hover {
    transition: 0.5s;
    border: none;
    border-bottom: 1px solid #888;
  }
  &&:focus {
    outline-color: green;
  }
`