import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const BasketDishItem = ({basketDish}) => {
  return (
    <View style={styles.row}>
        <View style={styles.quantityContainer}>
            <Text>1</Text>
        </View>
        <Text style={styles.packType}>{basketDish.name}</Text>
        <Text style={styles.price}>₦{basketDish.price}</Text>
    </View>
  )
}

export default BasketDishItem