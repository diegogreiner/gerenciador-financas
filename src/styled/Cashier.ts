import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #226F54;
  min-height: 20vh;
  gap: 10px;
  color: #fff;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100%;
    flex-direction: column;
    margin: 10px 20px 20px;
  }

  & div div {
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    border: none;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    color: #000;
  }

  & p {
    font-size: 24px;
    text-align: center;
  }

  @media (max-width: 600px) {
    gap: 10;
    min-height: 0;
    padding: 0px 10px;

    & div {
      border-radius: 10px;
      margin: 5px 0px;
      flex-basis: auto;
      width: 100vw;
    }

    h1 {
      font-size: 18px;
    }

    & p {
      font-size: 18px;
    }

  }

  @media (max-width: 450px) {
    & div div {
      width: 100%;
      padding: 2px 5px;
    }

    h1 {
      font-size: 16px;
    }

    & p {
      font-size: 14px;
    }
  }
`
