import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostCard = ({title, body, id}) => {
  return (
    // const {userId, id, title, body} = i.item;
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={2}>{body}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    width: '96%',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 4,
    borderRadius: 12,
    alignSelf: 'center',
    elevation: 2,
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#cd6700',
    textTransform: 'capitalize',
  },
});
