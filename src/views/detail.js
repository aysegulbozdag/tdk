import React, {useCallback} from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import {
  DetailSummaryItemContainer,
  DetailSummaryItemSummary,
  DetailSummaryItemTitle,
} from '../components/DetailSummaryItem';
import {LoaderText} from '../components/LoaderText';
import {useEffect, useState} from 'react/cjs/react.development';

function DetailView({route}) {
  const [data, setData] = useState(null);
  // const keyword = route.params?.keyword;
  const keyword = 'milliyet';
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    }, []),
  );

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();
    setData(data[0]);
    console.log(data);
  };

  const type =
    (data?.ozelliklerListe && data.ozelliklerListe.map((_) => _.tam_adi)) ||
    'isim';
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.softRed,
        padding: 16,
        flex: 1,
      }}>
      <ScrollView>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>{keyword}</Text>
          <Text style={{color: theme.colors.textLight, marginTop: 6}}>
            {data?.lisan}
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 24}}>
          <ActionButton marginRight={12} disabled={!data}>
            <MaterialIcons
              name="volume-up"
              size={27}
              color={theme.colors.textLight}
            />
          </ActionButton>
          <ActionButton marginRight={12} disabled={!data}>
            <MaterialIcons
              name="bookmark"
              size={27}
              color={theme.colors.textLight}
            />
          </ActionButton>

          <ActionButton disabled={!data}>
            <MaterialCommunityIcons
              name="hand-pointing-up"
              size={27}
              color={theme.colors.textLight}
              style={{marginLeft: 8}}
            />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </View>

        {data ? (
          <View>
            {data.anlamlarListe.map((item) => {
              return (
                <DetailSummaryItemContainer>
                  <DetailSummaryItemTitle>{item.anlam}</DetailSummaryItemTitle>
                  <DetailSummaryItemSummary>
                    {item.orneklerListe[0].ornek}
                  </DetailSummaryItemSummary>
                </DetailSummaryItemContainer>
              );
            })}
          </View>
        ) : (
          <View>
            <DetailSummaryItemContainer>
              <LoaderText />
              <LoaderText width={200} marginTop={10} />
            </DetailSummaryItemContainer>
            <DetailSummaryItemContainer>
              <LoaderText />
              <LoaderText width={200} marginTop={10} />
            </DetailSummaryItemContainer>
            <DetailSummaryItemContainer>
              <LoaderText />
              <LoaderText width={200} marginTop={10} />
            </DetailSummaryItemContainer>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailView;
