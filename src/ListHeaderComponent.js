import {
  Animated,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

const ListHeader = ({page, limit, onGetEmpty, animHeaderValue}) => {
  const animatedHeaderTop = animHeaderValue.interpolate({
    inputRange: [0, 90],
    outputRange: [0, -35],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[styles.container, {top: animatedHeaderTop}]}>
      <Text style={styles.title}>Technical Test</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.desc}>
          Page{' '}
          <Text style={{color: '#cd6700', fontWeight: 'bold'}}>{page}</Text> /
          Limit{' '}
          <Text style={{color: '#cd6700', fontWeight: 'bold'}}>{limit}</Text>
        </Text>
        <TouchableHighlight onPress={onGetEmpty}>
          <View style={styles.button}>
            <Text style={styles.textButton}>GET EMPTY</Text>
          </View>
        </TouchableHighlight>
      </View>
    </Animated.View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 4,
    // borderRadius: 12,
    alignSelf: 'center',
    elevation: 2,
    position: 'absolute',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cd6700',
    textTransform: 'capitalize',
  },
  button: {
    backgroundColor: '#cd6700',
    borderRadius: 4,
    padding: 5,
    elevation: 3,
  },
  textButton: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
