import React from 'react';
import { Text } from 'react-native';
import * as S from './Button.styles';

type ButtonProps = {
  text: string;
  buttonStyle?: any;
  onPress?: (e: any) => void;
}

export const Button = ({ text, buttonStyle, onPress }: ButtonProps) => {
  return (
    <S.Button
      style={buttonStyle}
      onPress={onPress}
    >
      <S.ButtonText>
        {text}
      </S.ButtonText>
    </S.Button>
  )
}