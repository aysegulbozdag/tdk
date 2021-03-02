import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import theme from '../utils/theme';

const ActionButton = ({children, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        borderRadius: 50,
        backgroundColor: 'white',
        minWidth: theme.sizes.actionButton,
        height: theme.sizes.actionButton,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom:30,
        ...props,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export const ActionButtonTitle = ({children, ...props}) => {
  return (
    <Text style={{color: theme.colors.textLight, marginRight: 8, marginLeft:4, fontWeight:"bold",  ...props}}>
      {children}
    </Text>
  );
};
export default ActionButton;
