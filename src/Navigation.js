import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import theme from './utils/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SearchView from './views/search';
import FavoriteView from './views/favorite';
import HistoryView from './views/history';
import DetailView from './views/detail';
import TabBar from './components/Tabbar';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={SearchView}
        options={() => {
          return {headerShown: false};
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({route, navigation}) => {
          return {
           
            headerStyle: {
              backgroundColor: theme.colors.softRed,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '100%',
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={25}
                  color={theme.colors.textDark}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '100%',
                  paddingHorizontal: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <MaterialIcons
                  name="more-horiz"
                  size={25}
                  color={theme.colors.textDark}
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {position: 'absolute'},
        }}
        initialRouteName="Search"
        tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
