import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import theme from '../utils/theme';
import { SimpleCardContainer, SimpleCardTitle } from './SimpleCard';


const SearchHistoryList = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <>
      <FlatList
        data={DATA}
        keyExtractor={(item) => {
          return item.id;
        }}
        ListHeaderComponent={
          <Text style={[style.txt, {marginBottom: 5}]}>SON ARAMALAR</Text>
        }
        renderItem={({item}) => (
          <View style={{paddingVertical: 6}}>
            <SimpleCardContainer>
              <SimpleCardTitle>{item.title}</SimpleCardTitle>
            </SimpleCardContainer>
          </View>
        )}
      />
    </>
  );
};

const style = StyleSheet.create({
    txt: {
      color: theme.colors.textLight,
    },
  });

export default SearchHistoryList;
