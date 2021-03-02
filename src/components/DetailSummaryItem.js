import React from 'react';
import {Text, View} from 'react-native';
import theme from '../utils/theme';

export const DetailSummaryItemContainer = ({
  children,
  order,
  type,
  ...props
}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 28,
        marginTop: 1,
        ...props,
      }}>
      <View style={{flexDirection: 'row', ...props}}>
        {order && (
          <Text
            style={{
              marginLeft: -14,
              marginRight: 8,
              color: theme.colors.textLight,
            }}>
            1
          </Text>
        )}
        {type && <Text style={{color: 'red'}}>İsim</Text>}
      </View>
      <View>{children}</View>
    </View>
  );
};

export const DetailSummaryItemTitle = ({children, ...props}) => {
  return <Text style={{fontWeight: '600'}}>{children}</Text>;
};

export const DetailSummaryItemSummary = ({children, ...props}) => {
  return (
    <Text
      style={{
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 12,
        color: theme.colors.textLight,
      }}>
      {children}
    </Text>
  );
};
