import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PostCard from './PostCardComponent';
import ListHeader from './ListHeaderComponent';
import {getData} from './API';
import SkeletonComponent from './SkeletonComponent';
import BottomComponent from './BottomComponent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ModalComponent from './ModalComponent';

const MainApp = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [dataPost, setDataPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [selectedPost, setSelectedPost] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await getData(page, limit);
        setIsLoading(false);
        if (page === 1) {
          setDataPost(res);
        } else {
          if (res.length === 0) {
            setIsEnd(true);
          } else setDataPost([...dataPost, ...res]);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, [page, isRefresh]);

  const handleRefresh = () => {
    if (!isLoading) {
      setIsEnd(false);
      setIsLoading(true);
      setDataPost([]);
      if (page === 1) {
        setIsRefresh(!isRefresh);
      } else {
        setPage(1);
      }
    }
  };
  const handleFetchMore = () => {
    if (!isLoading && !isEnd) {
      setIsLoading(true);
      setPage(page + 1);
    } else return;
  };

  const renderFooter = () => {
    if (isLoading) {
      return (
        <View>
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
        </View>
      );
    } else if (isEnd && dataPost.length > 0) {
      return <Text style={styles.emptyPost}>That's all the post ~</Text>;
    }
  };

  const renderHeader = () => {
    return <View style={{height: 76}}></View>;
  };
  const handleSeeDetails = i => {
    setSelectedPost(i);
    setModalVisible(true);
  };
  const renderPostCard = i => {
    const {title, body, id} = i.item;
    return (
      <Pressable onPress={() => handleSeeDetails(i.item)}>
        <PostCard title={title} body={body} />
      </Pressable>
    );
  };
  const renderEmptyList = i => {
    if (!isLoading) {
      return (
        <Text style={styles.emptyPost}>
          Sorry, we couldn't find any post for you.
        </Text>
      );
    }
  };
  const handleSetEmpty = () => {
    setIsEnd(true);
    setDataPost([]);
  };
  return (
    <View style={styles.container}>
      <ModalComponent
        setModalVisible={() => setModalVisible(false)}
        modalVisible={modalVisible}
        item={selectedPost}
      />
      <FlatList
        data={dataPost}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}
        renderItem={renderPostCard}
        keyExtractor={i => i.id}
        numColumns={1}
        refreshing={false}
        onRefresh={handleRefresh}
        onEndReachedThreshold={0.3}
        onEndReached={handleFetchMore}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyList}
      />
      <ListHeader
        page={page}
        limit={limit}
        onGetEmpty={() => handleSetEmpty()}
        animHeaderValue={scrollOffsetY}
      />
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(229, 149, 26)',
  },
  emptyPost: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    marginVertical: 16,
  },
});
