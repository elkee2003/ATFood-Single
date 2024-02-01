import { View, FlatList } from 'react-native'
import React from 'react'
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
          <FlatList data={restaurants}
          renderItem={({item})=><RestaurantItem restaurant={item}/>}
          showsVerticalScrollIndicator={false}/>
        </View>
      );
}

export default HomeScreen