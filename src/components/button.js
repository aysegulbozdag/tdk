import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';
import {borderRadius, color, compose, flexbox, size, space} from 'styled-system';
const Button = styled(TouchableOpacity)(compose(color, size, space, flexbox, borderRadius));

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
export default Button;
