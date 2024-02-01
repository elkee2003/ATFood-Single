import { StyleSheet,} from 'react-native'


const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    image:{
        width:'100%',
        aspectRatio:5/3,
    },

    imageIcon:{
        position:'absolute',
        top: 30,
        left: 10,
        color:'white'

    },
    containerTitles:{
        margin:10,
    },
    title:{
        fontSize:35,
        fontWeight:"600",
        marginVertical:10
    },
    menuTitle:{
        marginTop:20,
        marginVertical:10,
        marginLeft:10,
        fontSize:18,
        letterSpacing:0.6
    },
    subTitle:{
        fontSize:15,
        color:'#777575',
    }
})

export default styles
