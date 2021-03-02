import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import theme from '../utils/theme';

export const SimpleCardTitle = ({children}) => {
  return <Text style={{fontSize: 16, fontWeight: 'bold'}}>{children}</Text>;
};


export const SimpleCardContainer = ({children, onPress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
     
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        ...props,
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

