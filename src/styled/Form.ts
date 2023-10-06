import styled from 'styled-components';

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

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
  }

  input, textarea {
    display: block;
    width: 30vw;
    margin: 5px 0px 15px 0px;
    border-radius: 5px;
    border: 1px solid #226F54;
    padding: 5px;
    font-size: 16px;

    &:focus {
      outline: none;
    }

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

  textarea {
    resize: none;
  }
`

export const ButtonEntrada = styled.button`
  display: block;
  padding: 15px 0px;
  border-radius: 5px;
  background-color: rgba(34, 111, 84, 1);
  border: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: rgba(34, 111, 84, 0.9);
  }
`

export const ButtonBack = styled.button`
  display: none;
  padding: 15px 0px;
  border-radius: 5px;
  background-color: rgba(218, 44, 56, 1);
  border: none;
  color: #fff;
  margin: 5px 0px;

  &:hover {
    cursor: pointer;
    background-color: rgba(218, 44, 56, 0.9);
  }

  @media (max-width: 500px) {
    display: block;
    width: 95vw;
  }
`;
