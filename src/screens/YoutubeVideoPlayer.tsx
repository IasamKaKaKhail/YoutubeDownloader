import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';

interface Props {
  videoId: string;
}

const YouTubeVideoScreen: React.FC<Props> = ({videoId}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoId}
        onChangeState={event => console.log(event)}
        onReady={() => setPlaying(true)}
        onError={e => console.log(e)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YouTubeVideoScreen;