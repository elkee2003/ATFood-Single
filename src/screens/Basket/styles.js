import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%",
        padding:10,
        paddingVertical:40
    },
    image:{
        height:"100",
        aspectRatio:6/4,
        borderRadius:10,
    },
    name:{
        fontSize:24,
        fontWeight:"600",
        marginVertical:10,
    },
    item:{
        fontSize:20,
        fontWeight:'400',
        marginTop:20,
    },
    separator:{
        height:1,
        backgroundColor:"lightgrey",
        marginVertical:10
    },

    quantity:{
        fontSize:25,
        marginHorizontal:40,
    },
    button:{
        backgroundColor:'black',
        marginTop:'auto',
        padding:20,
        marginHorizontal:10,
        borderRadius:20,
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:20,
        letterSpacing:1,
    },
})

export default styles