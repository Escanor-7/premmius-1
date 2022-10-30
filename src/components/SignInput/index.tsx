import React from 'react';
import * as S from './SignInput.styles';

type SignInputProps = {
  label: string;
  placeholder?: string;
  value?: string | undefined;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  password?: boolean | undefined;
  placeholderColor?: string;
  labelStyle?: any;
  inputStyle?: any;
}

export const SignInput = ({ label, placeholder, value, onChange, onBlur, password, placeholderColor, labelStyle, inputStyle }: SignInputProps) => {

  return (
    <S.Container>
      <S.LabelText style={labelStyle} >
        {label}
      </S.LabelText>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        secureTextEntry={password}
        placeholderTextColor={placeholderColor}
        style={inputStyle}
      />
    </S.Container>
  )
}