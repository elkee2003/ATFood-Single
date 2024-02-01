import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import {Ionicons} from  '@expo/vector-icons'
import restaurants from '../../../assets/data/restaurants.json'
import Header from './Header'
import DishListItem from '../../components/DishListItem'
import { useRoute, useNavigation } from '@react-navigation/native'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {

  const route = useRoute();
  const navigation = useNavigation()

  const id = route.params?.id
  console.warn(id)

  const goBack = ()=>{
    navigation.goBack()
  }

  return (
    <View style={styles.page}>
      
      <FlatList 
      data={restaurant.dishes}
      ListHeaderComponent={()=><Header restaurant={restaurant}/>}
      renderItem={({item})=><DishListItem dish={item}/>}
      />
      <Ionicons name='arrow-back-circle' size={55} style={styles.imageIcon}
      onPress={goBack}/>
    </View>
  )
}

export default RestaurantDetailsScreen