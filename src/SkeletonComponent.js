import {StyleSheet, View} from 'react-native';
import React from 'react';
import AnimationComponent from './AnimationComponent';

const SkeletonComponent = ({}) => {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 12,
        width: '96%',
        backgroundColor: 'white',
        marginTop: 8,
        alignSelf: 'center',
      }}>
      <AnimationComponent
        style={{
          height: 20,
          width: '100%',
          backgroundColor: 'rgb(229, 149, 26)',
          borderRadius: 6,
        }}
      />
      <AnimationComponent
        style={{
          marginTop: 6,
          height: 16,
          width: '100%',
          backgroundColor: 'black',
          borderRadius: 6,
        }}
      />
      <AnimationComponent
        style={{
          marginTop: 6,
          height: 16,
          width: '70%',
          backgroundColor: 'black',
          borderRadius: 6,
        }}
      />
    </View>
  );
};

export default SkeletonComponent;

const styles = StyleSheet.create({});
