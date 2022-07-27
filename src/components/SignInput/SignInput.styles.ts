import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const LabelText = styled.Text`
  font-size: 18px;
  /* color: black; */
  font-weight: 700;
  color: white;
  /* opacity: 0.8; */
`;

export const Input = styled.TextInput`
  border-bottom-width: 2px;
  /* border-bottom-color: #5E4B9A; */
  border-bottom-color: white;
  font-size: 16px;

  &::placeholder {
    color: white;
  }
`;