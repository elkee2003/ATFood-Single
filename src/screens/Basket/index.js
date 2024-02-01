import { View, Text, FlatList} from 'react-native'
import React from 'react'
import styles from './styles'
import BasketDishItem from '../../components/BasketDishItem'
import restaurants from '../../../assets/data/restaurants.json'
import {AntDesign} from "@expo/vector-icons"

const restaurant = restaurants[0]

const BasketScreen = () => {

  return (
    <View style={styles.page}>
        {/* {dish.image && <Image source={{uri: dish.image}} style={styles.image}/>} */}

        <View style={styles.details}>
            <Text style={styles.name}>{restaurant.name}</Text>

            <Text style={styles.item}>Your Items</Text>

            <FlatList data={restaurant.dishes}
            renderItem={({item})=><BasketDishItem basketDish = {item}/>}/>

            <View style={styles.separator}/> 
        </View>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Create Order
            </Text>
        </View>     
    </View>
  )
}

export default BasketScreen