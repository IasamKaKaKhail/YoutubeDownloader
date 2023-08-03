import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { Image } from 'react-native-svg';
import styles from '../styles';
import {colors} from '../../../configs/colors';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
const API_KEY = 'AIzaSyA0HSWFUuvaUJ9WvpJNhBJlD2K4Qn-oYKQ';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}


type RootStackParamList = {
  Home: undefined;
  Search: { url: string };
  // other screens in your stack
};

type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

type Props = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};

const YoutubeSearch = ({route} : Props)=> {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const rt = useRoute();
  const { url } = route.params;
  const query = url;

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);

      const isConnected = await NetInfo.fetch().then((state) => state.isConnected);

      if (isConnected) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=40&key=${API_KEY}`,
          );

          const videoData = response.data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
          }));

          setVideos(videoData);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('No internet connection');
      }
    };

    fetchVideos();
  }, []);

  return (
<>
<View style={{flex: 1, backgroundColor: colors.black}}>
  <FlatList
    showsVerticalScrollIndicator={false}
    data={videos.map((video) => (
      {
        img: video.thumbnail,
        title: video.title,
        name: video.description,
      }
    ))}
    renderItem={({item}) => (
      <TouchableOpacity>
      <View style={[styles.list]}>
        <View style={{flexDirection: 'row', flex: 0.48, marginLeft:'5%'}}>
        <ImageBackground style={styles.img} source={{uri: item.img}} />
        </View>

        <View style={{flexDirection: 'row', flex: 0.5}}>
          <View style={{flexDirection: 'column', marginBottom: '1.5%'}}>
            <Text numberOfLines={2} style={styles.txt2}>{item.title}</Text>
            
          </View>
        </View>
      </View>
      </TouchableOpacity>
    )}
  />
</View>
</>

  );
};

export default YoutubeSearch;