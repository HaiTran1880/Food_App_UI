import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

const TextField = props => {
  return (
    <View>
      <TextInput
        style={{
          height: 50,
          width: 350,
          borderRadius: 20,
          marginVertical: 5,
          padding: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : 'gray'
        }
      />
      <View
        style={{
          height: 20,
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <Text style={{color: 'red'}}>{props.error}</Text>
      </View>
    </View>
  );
};
export default TextField;
