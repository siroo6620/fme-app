import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Modal, Platform } from 'react-native'
// import { GenStyles } from '../constants/Styles'
// import { useColorScheme } from 'react-native-appearance'
// import LottieView from 'lottie-react-native'
// import layout from '../constants/Layout'

export default function Loader(props) {
    // const scheme = useColorScheme()

    useEffect(() => {

        if (Platform.OS === 'web') {
            if (props.visible) {
                props.setVisible(false)
                alert(props.text)
            }
        }
    })

    if (Platform.OS === 'web') {
        return (
            <View></View>
        )
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            ariaHideApp={false}
        >
            <View style={styles.container}>
                <View style={[styles.main]}>
                    {/* <LottieView
                        style={{ height: 80, marginTop: -5 }}
                        loop
                        autoPlay
                        source={require('../assets/lottie/2867-tractor-animation.json')}
                    /> */}
                    <Text>Loading</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },

    main: {
        // width: '50%',
        // height: layout.width * 0.5,
        padding: 30,
        backgroundColor: 'rgba(230,230,230,1)',
        borderRadius: 6,
        elevation: 5
    },

    text: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 18
    },

    button: {
        padding: 8,
        backgroundColor: 'green',
        borderRadius: 25,
    },

    buttonText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    }
})