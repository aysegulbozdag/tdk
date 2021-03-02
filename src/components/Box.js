import styled from 'styled-components'
import { View } from "react-native";
import { color, compose, flexbox, size, space, borderRadius } from 'styled-system'
const Box = styled(View)(compose(color, size, space, flexbox, borderRadius));

export default Box