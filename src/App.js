import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  // pages에서 각 페이지들을 가져와 bottom tab의 각 탭과 연결
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App</Text>
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

export default App;
