import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from '../utils/theme';

function Search({onChangeFocus}) {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setvalue] = useState('');

  useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus, onChangeFocus]);

  const onCancel = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  const onClear = () => {
    setvalue('');
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          style={{
            backgroundColor: theme.colors.white,
            height: 56,
            borderWidth: 1,
            borderColor: 'transparent',
            borderRadius: 8,
            paddingLeft: 52,
            color: theme.colors.textDark,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 24,
          }}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor={theme.colors.textMedium}
          onFocus={() => {
            setIsFocus(true);
          }}
          value={value}
          onChangeText={(e) => {
            setvalue(e);
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 10,
            top: 14,
          }}>
          <MaterialIcons
            name="search"
            size={25}
            color={theme.colors.textMedium}
          />
        </View>
        {value.length > 0 && (
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: 14,
              flex: 1,
            }}>
            <TouchableOpacity onPress={onClear}>
              <MaterialIcons
                name="close"
                size={25}
                color={theme.colors.textDark}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {isFocus && (
        <TouchableOpacity
          style={{justifyContent: 'center', padding: 20}}
          onPress={onCancel}>
          <Text>Vazgeç</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Search;
