import React, {useState} from 'react';
import {View, Text, Pressable, FlatList, Image, TouchableOpacity} from 'react-native';

/* Configs */
import { colors } from '../../../configs/colors'

/* Styles */
import styles from './styles';


const Songs = () => {
    const data = [
      {
        img: require('../../../assets/peaky.jpeg'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/peaky.jpeg'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/peaky.jpeg'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
      {
        img: require('../../../assets/peaky.jpeg'),
        title: 'Peaky Blinders',
        name: '23 MB',
      },
    ];
    return (
      <View style={styles.screenContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity>
            <View style={[styles.list]}>
              <View style={styles.view2}>
                <Image style={styles.imgg} source={item.img} />
              </View>
  
              <View style={{flexDirection: 'row', flex: 0.5}}>
                <View style={{flexDirection: 'column', marginBottom: '8%'}}>
                  <Text style={styles.txt}>{item.title}</Text>
                  <Text style={styles.txt1}>{item.name}</Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };


export default Songs