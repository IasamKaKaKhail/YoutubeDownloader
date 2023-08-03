import React, {useState} from 'react';
import {View, Text, Pressable, Image, TextInput, FlatList, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
    Link21
} from 'iconsax-react-native';
/* Configs */
import { colors } from '../../../configs/colors'
/* Styles */
import styles from './styles';
type TargetScreenParams = {
  url: string;
};

export const Paste = () => { 

  const [pastedURL, setPastedURL] = useState('');
  const navigation = useNavigation();
  const handlePress = () => {
    const param = [{url : pastedURL}]
    navigation.navigate('Search', {url : pastedURL});
  };
    return (
      <>
        <View style={{flex: 1, backgroundColor: colors.black}}>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Link21 
                size="32" 
                color={colors.white}
                style={{
                    height: 18,
                    width: 18,
                    marginLeft: 10,
                  }}
               />
              <TextInput
                style={[styles.txt, {color: colors.white}]}
                placeholder="Search a youtube video"
                placeholderTextColor={'#FFFFFF33'}
                value={pastedURL}
                onChangeText={txt => setPastedURL(txt)}
              />
            </View>
          </View>
          <View style={styles.view4}>
            <TouchableOpacity onPress={handlePress}>
           <Text style={{fontSize: 12, fontWeight: '700'}}>
              Search
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };