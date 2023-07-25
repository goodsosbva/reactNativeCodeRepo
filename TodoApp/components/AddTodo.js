import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');

  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일 입력ㄱ!"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.buttonStyle}>{button}</View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#6495ED',
    borderRadius: 24,
  },
});

export default AddTodo;
