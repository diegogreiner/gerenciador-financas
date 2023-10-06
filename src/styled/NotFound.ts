import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
`

export const ButtonBack = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(34, 111, 84, 1);
  border: none;
  color: #fff;
  margin: 20px 0px;

  &:hover {
    cursor: pointer;
    background-color: rgba(34, 111, 84, 0.9);
  }
`