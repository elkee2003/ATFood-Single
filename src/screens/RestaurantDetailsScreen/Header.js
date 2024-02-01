import { View, Text, Image } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles'

const restaurant = restaurants[0]

const Header = ({restaurant}) => {
  return (
    <View>
        <Image source={{uri: restaurant.image}} style={styles.image}/>

        <View style={styles.containerTitles}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subTitle}>
                ₦ ${restaurant.deliveryFee} {" "}{restaurant.minDeliveryTime} 
                &#8226; 
                {restaurant.maxDeliveryTime} minutes
            </Text>

            <Text style={styles.menuTitle}>Menu</Text>
        </View>
    </View>
  )
}

export default Header