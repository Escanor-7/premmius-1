import React from 'react';
import * as S from './SignInput.styles';

type SignInputProps = {
  label: string;
  placeholder: string;
  value: string | undefined;
  onChange: (e: string) => void;
  password?: boolean | undefined;
}

export const SignInput = ({ label, placeholder, value, onChange, password }: SignInputProps) => {

  return (
    <S.Container>
      <S.LabelText>
        {label}
      </S.LabelText>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={password}
      />
    </S.Container>
  )
}