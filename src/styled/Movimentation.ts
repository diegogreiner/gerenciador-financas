import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30vw;

  div {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgba(218, 44, 56, 1);

    &:hover {
      cursor: pointer;
      background-color: rgba(218, 44, 56, 0.9);
    }
  }

  @media (max-width: 1300px) {
    width: 50vw;
  }

  @media (max-width: 800px) {
    width: 80vw;
  }

  @media (max-width: 500px) {
    width: 95vw;

    div {
      display: none;
    }
  }
`

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  
  h2 {
    margin: 10px 0px 20px;
  }
`

export const ContainerIntern = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;

  div {
    font-weight: bold;
  }

  p {
    display: block;
    width: 30vw;
    margin: 5px 0px 15px 0px;
    padding: 5px;
    font-size: 16px;
    font-weight: normal;
    
    @media (max-width: 1300px) {
      width: 50vw;
    }

    @media (max-width: 800px) {
      width: 80vw;
    }

    @media (max-width: 500px) {
      width: 95vw;
    }
  }
`

export const ButtonBack = styled.button`
  display: none;
  padding: 15px 0px;
  border-radius: 5px;
  background-color: rgba(218, 44, 56, 1);
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: rgba(218, 44, 56, 0.9);
  }

  @media (max-width: 500px) {
    display: block;
    width: 95vw;
  }
`