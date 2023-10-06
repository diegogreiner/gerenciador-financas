import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  table {
    width: 80%;
  }

  thead {
    background-color: #226F54;
    
    th {
      padding: 5px 3px;
      color: #fff;
      text-align: start;
      width: 20%;
      font-size: 20px;
      padding: 3px 5px;
    }
  }

  table, td {
    border-bottom: 1px solid black;
    padding: 3px 5px;
    border-collapse: separate;
    border-spacing: 0;
  }

  td:nth-child(2) {
    max-width: 20vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  table {
    border: none;
  }

  td:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 950px) {
    table {
      width: 85%;
    }

    td:last-child {
      width: 20vw;
    }
  }

  @media (max-width: 750px) {
    table {
      width: 95%;
    }

    td:last-child {
      width: 30vw;
    }
  }

  @media (max-width: 550px) {
    display: block;
    overflow-x: auto;

    table {
      width: 100vw;
    }

    td:last-child {
      width: 50vw;
    }
  }
`

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(218, 44, 56, 1);
  padding: 3px 0px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  flex-grow: 1;
  text-align: center;
  
  &:hover {
    cursor: pointer;
    background-color: rgba(218, 44, 56, 0.9);
  }

  @media (max-width: 750px) {
    padding: 3px 5px;
    margin-top: 1px;
  }
`

export const ViewMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 3px 0px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  background-color: rgba(34, 111, 84, 1);
  flex-grow: 1;

  &:hover {
    cursor: pointer;
    background-color: rgba(34, 111, 84, 0.9);
  }

  @media (max-width: 750px) {
    padding: 3px 5px;
  }
`

export const Entrada = styled.span`
  color: #226F54;
  font-weight: bold;
`

export const Saida = styled.span`
  color: #DA2C38;
  font-weight: bold;
`
