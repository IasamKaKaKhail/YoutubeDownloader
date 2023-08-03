import {StyleSheet} from 'react-native';


/* Configs */
import { colors } from '../../../configs/colors'
// import {FONTS} from '@theme/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal:20,
    paddingTop: 20,
  },
  change: {
    borderRadius: 15,
    width: 150,
    justifyContent:'center',
    alignItems:'center',
    height:26,
  },
  textStyle: {
    color: colors.white,
    fontSize: 12,
    fontWeight:'700',
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    borderColor: colors.black,
    backgroundColor: colors.black,
    borderRadius: 20,
    
  },
  
  txt: {
    color: colors.white,
    fontSize: 15,
    alignItems:'center',
    marginLeft:10,
    justifyContent:'center',
    alignSelf:'center',},
  
    view1: {
    width: "100%", 
    borderRadius: 21, 
    height: 38, 
    marginTop: 27,
    marginBottom:18
      },
  txt3:{
    fontSize:20,
    color:colors.yellow,
    fontWeight:'600'},
  
  view3:{
    height:38,
    backgroundColor:colors.black1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
    borderRadius:13},
  view4:{
    backgroundColor:colors.yellow,
    width:128,
    height:26,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5},
  list:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:7,
    paddingBottom:20,
    borderRadius:8,
    borderBottomColor: '#C4C4C4'
     
  },  
   img:{
    height:92,
    width:133,
    backgroundColor:'#092857',
    borderRadius:15,
    paddingLeft:20,
    alignSelf:'center',
    
    },
   txt2:{
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
});

export default styles;
