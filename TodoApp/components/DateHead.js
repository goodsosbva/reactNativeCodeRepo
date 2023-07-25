import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;
  return (
    <>
      <View style={[styles.statusBarPlaceholder]} />
      <StatusBar backgroundColor="#6495ED" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '6495ED',
  },
  block: {
    padding: 16,
    backgroundColor: '#6495ED',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
