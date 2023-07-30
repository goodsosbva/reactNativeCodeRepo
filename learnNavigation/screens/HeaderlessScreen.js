import React from 'react';
import {View, Text, Button} from 'react-native';

function HeaderlessScreen({navigaton}) {
  return (
    <View>
      <Text>Header가 없네?</Text>
      <Button onPress={() => navigaton.pop()} title="뒤로가기" />
    </View>
  );
}

export default HeaderlessScreen;
