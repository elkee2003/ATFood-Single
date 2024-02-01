import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:20,
        paddingVertical:20,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        flexDirection:'row',
    },
    name:{
        fontWeight:'600',
        fontSize:18,
        letterSpacing:0.5
    },
    description:{
        color:'grey',
    },
    price:{
        fontSize:16
    },
    image:{
        height:"200",
        aspectRatio:1,
        borderRadius:10,
    },
})


export default styles