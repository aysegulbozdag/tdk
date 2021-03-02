import React from 'react';
import {ImageBackground} from 'react-native';
import background from '../assests/bg.jpg';
export const bg = ({children, ...props}) => {
  return (
    <ImageBackground
      source={background}
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
      }}
      {...props}>
      {children}
    </ImageBackground>
  );
};

export default bg;
