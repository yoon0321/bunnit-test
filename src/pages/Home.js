import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // StyleSheet.create를 쓰는 이유 - CSS 자동완성기능 됨 -> 편함
  container: {
    // container는 이름을 지을 때 어떠한 규칙을 따를 필요가 없음
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 35,
  },
});

export default Home;
