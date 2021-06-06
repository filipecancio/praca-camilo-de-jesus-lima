
import styled from "styled-components"
import {_ubuh1,_ubutext} from '../../../Styles/generic/Typography';


export const Container = styled.div`
    text-align: left;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    p{
      ${_ubutext}
        margin: 10px 0;
        line-height: 1.5;
    }
`

export const Content = styled.section`
  max-width: 1000px;

    a {
    text-decoration: none;
    color: #61dafb;
  }
`

export const Map = styled.iframe`
    margin-top: 50px;
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 10px;

`

export const Title = styled.h1`
  ${_ubuh1}
  margin: 10px 0;
`

export const Table = styled.table`
`

export const Row = styled.tr``

export const Column = styled.td`
  padding: 3px 5px;
`
