import { View, Text, Image, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import OrderDetailsScreen from '../../screens/OrderDetails'

const OrderListItem = ({order}) => {

  const navigation = useNavigation()

  const goToOrderDetails = ()=>{
    navigation.navigate('Order', {id: order.id})
  }

  return (
    <Pressable onPress = {goToOrderDetails} style={styles.page}>
      <Image source={{uri: order.Restaurant.image}} style={styles.image}/>

      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.price}>3 items ₦700.69</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>

    </Pressable>
  )
}

export default OrderListItem