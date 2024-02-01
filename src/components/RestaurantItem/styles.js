import {StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
    },
    restaurantContainer:{
      width:'100%',
      marginVertical:10
    },
    image:{
      width:"100%",
      aspectRatio:5/3,
      borderRadius:20,
      marginBottom:5,
    },
    title:{
      fontSize:16,
      fontWeight:'500',
      marginVertical:5,
    },
    subTitle:{
      color:'gray'
    },
    row:{
      flexDirection:"row",
      alignItems:'center',
    },
    rating:{
      marginLeft:'auto',
      backgroundColor:'lightgray',
      width:25,
      height:25,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10
    },
  });

export default styles