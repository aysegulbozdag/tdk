import React from 'react';
import {Text, View} from 'react-native';
import theme from '../utils/theme';


export const LoaderText = ({children, ...props}) => {
  return (
    <View
      style={{
          backgroundColor: theme.colors.light,
          width: 120,
          height:16,
        ...props,
      }}></View>
  );
};
