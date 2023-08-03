import {StyleSheet} from 'react-native';

/* Configs */
import { colors } from '../../configs/colors'


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal:20,
    paddingTop: 20,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.black
  },
  change: {
    borderRadius: 15,
    width: 150,
    height:26,
    justifyContent:'center',
    alignItems:'center',

  },
  textStyle: {
    color: colors.white,
    fontSize: 12,
    fontWeight:'700',
  },
  list:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    paddingVertical:7,
    paddingBottom:20,
    borderRadius:8,
  
     borderBottomColor: '#C4C4C4'
     
  },    img:{
        
    height:92,
    width:133,
    borderRadius:15,
    paddingLeft:20,
    alignSelf:'center',
  },
    imgg:{
        
      height:33,
      width:30,
      paddingLeft:20,
    
    },
     txt:{
      flexDirection:'row',
      flex:1,
      fontSize:20,
      fontWeight:'600',
      color:colors.white},
      
    txt1:{
      flexDirection:'row',
      flex:1,
      fontSize:12,
      fontWeight:'400',
      color:colors.black2,
      marginTop:10},
    view1:{
      height:38,
      backgroundColor:colors.black1,
      alignItems:'center',
      justifyContent:'center',
      marginTop:25,
      borderRadius:13,
      marginBottom:22},
    view2:{
      flexDirection:'row',
      flex:0.48,
      justifyContent:'center'},
});

export default styles;
