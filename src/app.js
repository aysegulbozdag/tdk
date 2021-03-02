import React from 'react';
import { View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';

import Navigation from './navigation';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View flex={1} as={SafeAreaView}>
         <Navigation/>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
