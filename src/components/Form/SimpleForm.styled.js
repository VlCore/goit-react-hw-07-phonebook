import styled from 'styled-components';

export const NewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;
export const Button = styled.button`
  padding: 7px 15px;
  background-color: lightgray;
  border: 1px solid black;
  width: fit-content;
  align-self: center;
  border-radius: 8px;
  transition: background-color 250ms ease-out;
  &:hover {
    background-color: gray;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const FieldNew = styled.input`
  padding: 8px;
  margin-left: 15px;
`;
export const Lable = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;