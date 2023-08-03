import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
/* Configs */
import { colors } from '../../configs/colors'



const DownloadNext = () => {
  return (
    <View style={styles.mainContainer}>
    <Text style={styles.txt3}>Orangy</Text>

              <View style={{flexDirection: 'row',marginBottom:10}}>
                <Image style={styles.img} source={require('../../assets/peaky.jpeg')} />
              </View>
  
              <View >
                  <Text style={styles.txt2}>Peaky Blinders</Text>
                  <Text style={styles.txt1}>19.000.000 views</Text>
                  <Text style={[styles.txt1, {color: colors.white}]}>
                  Netflix
                  </Text>
              </View>
              <View style={styles.view4}>
            <Pressable>
              <Text style={{fontSize: 12, fontWeight: '700'}}>
                Download Video
              </Text>
            </Pressable>
          </View>
  </View>
  )
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.black,
        paddingHorizontal:20,
        paddingTop: 20,
      },
      txt3:{fontSize:20,color:colors.yellow,fontWeight:'600'},
   img:{
            
        height:173,
        width:"100%",
        marginTop:25,
        borderRadius:15,
        
              },
              txt2:{fontSize:20,fontWeight:'600',color:colors.white},
              txt1:{fontSize:12,fontWeight:'400',color:colors.black2},
              view4:{backgroundColor:colors.yellow,width:128,height:26,alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:5,marginTop:30},
 
})





export default DownloadNext