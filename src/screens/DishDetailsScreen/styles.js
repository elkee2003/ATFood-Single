import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%",

    },
    details:{
        padding:10,
    },
    image:{
        height:"100",
        aspectRatio:6/4,
        borderRadius:10,
    },
    name:{
        fontSize:30,
        fontWeight:"600",
        marginVertical:10,
    },
    description:{
        fontSize:18
    },
    separator:{
        height:1,
        backgroundColor:"lightgrey",
        marginVertical:10
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
    },
    quantity:{
        fontSize:25,
        marginHorizontal:40,
    },
    button:{
        backgroundColor:'black',
        marginTop:'auto',
        padding:10,
        marginHorizontal:10,
        borderRadius:20,
        alignItems:'center',
        marginBottom:20
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:20,
        letterSpacing:1,
    },
})

export default styles