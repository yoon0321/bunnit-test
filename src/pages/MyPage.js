import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MyPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 35,
  },
});

export default MyPage;
