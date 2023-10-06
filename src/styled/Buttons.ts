import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  margin: 20px auto;
  font-size: 20px;

  h2 {
    text-align: center;
    flex-basis: 100%;
    font-size: 40px;
  }

  @media (max-width: 850px) {
    width: 80vw;

    h2 {
      flex-basis: auto;
    }
  }

  @media (max-width: 600px) {
    width: 95vw;

    flex-direction: column;
    h2 {
      order: 2;
    }
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 10px;

  div {
    max-width: 30%;
    display: flex;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    justify-content: center;
  }

  @media (max-width: 1350px) {
    div {
      max-width: 50%;
    }
  }

  @media (max-width: 850px) {
    width: 70%;
    div {
      max-width: 80%;
    }
  }

  & div:first-child {
    flex-grow: 1;
    border: 2px solid #226F54;
    background-color: rgba(34, 111, 84, 1);

    &:hover {
      cursor: pointer;
      background-color: rgba(34, 111, 84, 0.9);
    }
  }

  & div:last-child {
    flex-grow: 1;
    border: 2px solid #DA2C38;
    background-color: rgba(218, 44, 56, 1);

    &:hover {
      cursor: pointer;
      background-color: rgba(218, 44, 56, 0.9);
    }
  }


  @media (max-width: 600px) {
    gap: 5px;
    justify-content: center;
    margin: 10px 0px 20px;
    width: 95%;

    div {
      font-size: 18px;
      max-width: 95%;
    }

    div:first-child {
      margin-left: 2px;
    }

    div:last-child {
      margin-right: 2px;
    }
  }
`