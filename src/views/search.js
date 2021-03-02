import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Image,
  StatusBar,
  Animated,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import {useFocusEffect} from '@react-navigation/native';
import theme from '../utils/theme';

import Bg from '../components/bg';
import {
  CardBody,
  CardContainer,
  CardSummary,
  CardTitle,
} from '../components/SuggestionCard';
import SearchHistoryList from '../components/SearchHistoryList';
import Search from '../components/search';
import {LoaderText} from '../components/LoaderText';

function SearchView({navigation}) {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [heroHeight] = useState(new Animated.Value(285));
  const [homeData, setHomeData] = useState(null);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
      StatusBar.setBackgroundColor(isSearchFocus ? theme.colors.light : 'red');
    }, [isSearchFocus]),
  );

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 230,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 230,
        useNativeDriver: true,
      }).start();
    }
  }, [heroHeight, isSearchFocus]);

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const response = await fetch('https:sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Animated.View
        style={{
          flex: isSearchFocus ? 0 : 0.8,
          zIndex: 1,
        }}>
        {!isSearchFocus && (
          <Bg>
            <Image
              source={require('./../assests/TDK_n.png')}
              style={{marginTop: 60}}
            />
          </Bg>
        )}
        <View
          style={{
            alignItems: 'center',
            marginRight: 10,
            marginLeft: 10,
            bottom: isSearchFocus ? 10 : 26,
            marginTop: isSearchFocus ? 10 : 0,
          }}>
          <Search onChangeFocus={(status) => setSearchFocus(status)} />
        </View>
      </Animated.View>

      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.softRed,
          paddingTop: isSearchFocus ? 0 : 40,
        }}>
        {isSearchFocus ? (
          <SearchHistoryList />
        ) : (
          <ScrollView>
            <View style={{flex: 1, paddingVertical: 15, paddingHorizontal: 16}}>
              <View>
                <Text style={style.txt}>Bir Kelime</Text>
                <CardContainer
                  marginTop={10}
                  onPress={() => {
                    navigation.navigate('Detail', {
                      keyword: homeData?.kelime[0].madde,
                    });
                  }}>
                  {homeData ? (
                    <CardBody>
                      <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                      <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                    </CardBody>
                  ) : (
                    <ActivityIndicator />
                  )}
                </CardContainer>
              </View>

              <View style={{marginTop: 40}}>
                <Text style={style.txt}>Bir Deyim - Atasözü</Text>
                <CardContainer
                  marginTop={10}
                  onPress={() => {
                    navigation.navigate('Detail', {
                      keyword: homeData?.atasoz[0].madde,
                    });
                  }}>
                  {homeData ? (
                    <CardBody>
                      <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                      <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
                    </CardBody>
                  ) : (
                    <>
                      <CardBody>
                        <LoaderText />
                        <LoaderText width={200} marginTop={10} />
                      </CardBody>
                      <CardBody>
                        <LoaderText />
                        <LoaderText width={200} marginTop={10} />
                      </CardBody>
                    </>
                  )}
                </CardContainer>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  txt: {
    color: theme.colors.textLight,
  },
});

export default SearchView;

// const NewsArticle = styled.Text`
//   font-size: 40px;
//   background-color: red;
// `;
