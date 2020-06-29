import React from 'react'
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';

export default ResultDetails = (props) => {
    return <View>
        <Image style={styles.imageStyle} source={{uri: props.restruant.image_url}}/>
        <Text style={styles.nameStyle}>{props.restruant.name}</Text>
        <Text>{props.restruant.rating} Stars, {props.restruant.review_count} Reviews</Text>
    </View>
}
const styles = StyleSheet.create({
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 4
    },
    nameStyle:{
        fontWeight: 'bold'
    }
})