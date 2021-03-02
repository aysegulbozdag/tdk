import {View, TouchableOpacity, Text, Button} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function TabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label == 'Search' ? (
          <View
            style={{
              padding: 15,
              paddingBottom: 3,
              marginTop: -15,
              backgroundColor: 'white',
              borderRadius: 50,
            }}
            key={label}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                borderRadius: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
              }}
              onPress={() => {
                onPress();
              }}>
              <MaterialIcons name="search" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            key={label}
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
              }}
              onPress={() => {
                onPress();
              }}>
              {label == 'History' && (
                <MaterialIcons
                  name="rotate-left"
                  size={30}
                  color={isFocused ? 'red' : '#758291'}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'white'}}
              onPress={onPress}>
              {label == 'Favorite' && (
                <MaterialIcons
                  name="bookmark-border"
                  size={30}
                  color={isFocused ? 'red' : '#758291'}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: isFocused ? 'red' : 'white',
                height: 5,
                width: 5,
                borderRadius: 50,
              }}>
              <Text style={{fontSize: 1}}>circle</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
/// <Box size={3} bg={isFocused ? 'red' : 'white'} mt={8} />
export default TabBar;
