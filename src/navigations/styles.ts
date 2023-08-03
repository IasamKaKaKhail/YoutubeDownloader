import { Platform, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
/* Configs */
import { colors } from '../configs/colors'


const styles = StyleSheet.create({
  tabbarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    paddingTop: hp('1%'),
    height: hp('8%'),
    paddingHorizontal: wp('7%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    /* backgroundColor: 'dodgerblue', */
    height: '90%',
    width: '80%',
    justifyContent:'space-evenly',
  },
  tabItemText: {
    color:colors.black,
    fontSize: hp("3%"),
    fontWeight:'400',
    //lineHeight: '18%',
   
    // paddingTop: hp('4)',
  },
  dropShadow:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

  },
  tabBarIconImage: {
    height:hp('5%'), 
    width:hp('5%')
  }
});
export default styles;