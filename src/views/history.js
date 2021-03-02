import React, {useCallback} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

function HistoryView() {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>History!</Text>
    </View>
  );
}

export default HistoryView;
