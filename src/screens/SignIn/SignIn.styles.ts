import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #5E4B9A;
`;


export const Header = styled.View`
  background-color: #5E4B9A;
  align-items: center;
  justify-content: center;
  width: 100%;
  `;

export const LoginContainer = styled.View`
  padding: 0px 20px;
  margin-top: 20px;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;

`;

export const Column = styled.View`
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #5E4B9A;
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: #5E4B9A;
`;

export const InputArea = styled.View`
  /* justify-content: center;
  align-items: center; */
  /* padding: 40px; */
`;

export const CustomButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  /* background-color: #5E4B9A; */
  background-color: #F58634;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export const SignMessageButton = styled.TouchableOpacity``;

export const SignMessageButtonText = styled.Text`
  color: #fff;
`;

export const SignMessageButtonTextBold = styled.Text``;
