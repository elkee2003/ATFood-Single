import { View, Text, Image, Pressable, } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import restaurants from '../../../assets/data/restaurants.json'
import {AntDesign} from "@expo/vector-icons"

const dish = restaurants[0].dishes[0]

const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1)

    const navigation = useNavigation()

    const goToBasket = ()=>{
        navigation.navigate('Basket')
    }

    const onMinus = ()=>{
        if (quantity > 1){
            setQuantity(quantity - 1)
        } 
    }

    const onPlus = ()=>{
        setQuantity(quantity + 1)
    }

    const getTotal = () =>{
        return (dish.price * quantity).toFixed(2)
    }

  return (
    <View style={styles.page}>
        {dish.image && <Image source={{uri: dish.image}} style={styles.image}/>}

        <View style={styles.details}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator}/> 

            <View style={styles.row}>
                <AntDesign name='minuscircleo' size={60} color={'black'} onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}
                </Text>
                <AntDesign name='pluscircleo' size={60} color={'black'} onPress={onPlus}/>
            </View>
        </View>
        <Pressable onPress={goToBasket} style={styles.button}>
            <Text style={styles.buttonText}>Add {quantity} to basket
            </Text>
            <Text style={styles.buttonText}>${getTotal()}</Text>
        </Pressable>     
    </View>
  )
}

export default DishDetailsScreen