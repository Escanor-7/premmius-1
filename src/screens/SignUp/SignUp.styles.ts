import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #5E4B9A;
  padding: 0px 30px;
`;

export const Header = styled.View`
  /* background-color: #5E4B9A; */
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;
`;

export const LoginContainer = styled.ScrollView`
  /* margin: 20px 0px; */
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Column = styled.View`
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Title = styled.Text`
  font-size: 24px;
  /* color: #5E4B9A; */
  color: white;
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin: 15px 0 30px 0;
`;

export const InputArea = styled.View`
  /* justify-content: center;
  align-items: center; */
  /* padding: 40px; */
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  /* flex-wrap: wrap; */
  align-items: center ;
  margin: 20px 0px;
`;

export const CheckBoxLabel = styled.Text`
  font-size: 12px;
  color: white;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
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

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const SignMessageButtonText = styled.Text`
  color: #fff;
`;

export const SignMessageButtonTextBold = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-weight: bold;
  margin-bottom: 15px;
`;
