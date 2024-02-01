import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const RestaurantItem =({restaurant})=>{

  const navigation= useNavigation()

  const onPress = () =>{
    navigation.navigate('Restaurant', {id: restaurant.id})
  }
    return(
        <Pressable
        style={styles.restaurantContainer}
        onPress={onPress}>
          <Image source={{uri:restaurant.image}} style={styles.image}/>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>
              {restaurant.name}
              </Text>
              <Text style={styles.subTitle}>
                ₦ ${restaurant.deliveryFee} {" "}{restaurant.minDeliveryTime} 
                &#8226; 
                {restaurant.maxDeliveryTime} minutes
              </Text>
            </View>
            <View style={styles.rating}>
              <Text>{restaurant.rating}</Text>
            </View>
          </View>
          
        </Pressable>
    )
  }

export default RestaurantItem