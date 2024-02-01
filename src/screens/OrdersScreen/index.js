import { View, Text, FlatList} from 'react-native'
import React from 'react'
import OrderListItem from '../../components/OrderListItem'
import orders from '../../../assets/data/orders.json'
import styles from './styles'

const OrderScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList data={orders}
      renderItem={({item})=><OrderListItem order={item}/>}/>
    </View>
  )
}

export default OrderScreen