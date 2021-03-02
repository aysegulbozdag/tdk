import styled from 'styled-components'
import { View } from "react-native";
import { color, compose, size, space } from 'styled-system'
import Box from './Box';
const BoxCenter = styled(Box)({});

BoxCenter.defaultProps = {
flex:1,
justifyContent: 'center',
alignItems:'center'
}
export default BoxCenter