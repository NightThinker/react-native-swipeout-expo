import React from 'react'
import { StyleSheet, ImageBackground, View, TouchableOpacity, Text } from 'react-native';
// import { LinearGradient } from 'expo';

// import { HeaderText, SubText } from '../Text/StyledText'

const cardPlan = (props) => (
    // <TouchableOpacity onPress={props.clicked}>
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://alwaysimmaculate.com/wp-content/uploads/2016/06/office-clean.jpg'}} style={styles.image}>
                <Text style={styles.textStyle} >title</Text>
                <Text style={styles.textBodyStyle} >description</Text>
            </ImageBackground>
        </View>
    // </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        height: 150,
        borderWidth: 0.5,
        borderRadius: 5,
        // marginBottom: 15,
        borderColor: 'black',
        overflow: 'hidden'
    },
    image: {
        width: "100%", 
        height: '100%', 
    },
    textStyle: {
      color: '#fff',
      marginLeft: 20,
      marginTop: 20,
    },
    textBodyStyle: {
      color: '#fff',
      marginLeft: 20,
    },
    linear: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 150,
    }
});

export default cardPlan