import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ModalComponent = ({modalVisible, setModalVisible, item}) => {
  const {title, body, id, userId} = item;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible()}>
      <Pressable style={styles.centeredView} onPress={() => setModalVisible()}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{fontSize: 12, marginVertical: 6}}>
              ID : <Text style={styles.textColor}>{id}</Text> / USER ID :{' '}
              <Text style={styles.textColor}>{userId}</Text>
            </Text>
            <Text>{body}</Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     width: '100%',
  //     backgroundColor: 'rgba(0,0,0,0.4)',
  //   },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#cd6700',
    textTransform: 'capitalize',
  },
  textColor: {
    fontWeight: 'bold',
    color: '#cd6700',
  },
});
