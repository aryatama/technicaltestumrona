import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomComponent = () => {
  return (
    <View style={styles.container}>
      <Text>BottomComponent</Text>
    </View>
  );
};

export default BottomComponent;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
});
