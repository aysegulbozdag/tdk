import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import theme from '../utils/theme';

export const CardTitle = ({children}) => {
  return <Text style={{fontSize: 18, fontWeight: 'bold'}}>{children}</Text>;
};

export const CardSummary = ({children}) => {
  return (
    <Text style={{fontSize: 14, color: theme.colors.textMedium, marginTop: 8}}>
      {children}
    </Text>
  );
};

export const CardContainer = ({children, onPress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        ...props,
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export const CardBody = ({children}) => {
  return (
    <View
      style={{
        borderLeftWidth: 3,
        borderLeftColor: theme.colors.light,
        paddingLeft: 12,
      }}>
      {children}
    </View>
  );
};
