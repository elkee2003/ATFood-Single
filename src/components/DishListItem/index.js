import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles'

const DishListItem = ({dish}) => {

  const navigation = useNavigation()
  
  const goToDishDetails = () =>{
    navigation.navigate('Dish', {id: dish.id})
  }

  return (
    <Pressable onPress={goToDishDetails} style={styles.container}>
        <View style={{flex:1}}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.price}>₦{dish.price}</Text>  
        </View>
       { dish.image && <Image source={{uri:dish.image}} style={styles.image}/>}
    </Pressable>
  )
}

export default DishListItem