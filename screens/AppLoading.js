
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
// import Lottie from 'lottie-react-web'
import LottieView from 'lottie-react-native'
import Colors from '../constants/Colors'
import Images from '../constants/Images'

export default function AppLoading(props) {

    const { checkingUpdates } = props
    const [slowLoading, setSlowLoading] = React.useState(false)
    const [updating, setUpdating] = React.useState(false)

    React.useEffect(() => {
        let handler = setTimeout(() => {
            setSlowLoading(true)
        }, 7000)

        return () => clearTimeout(handler)
    }, [])
    return (
        <View style={styles.loadingWrap}>

            <View style={{ paddingVertical: 70 }}>
                <Image
                    source={Images[0]}
                    style={{
                        width: 300,
                        height: 200,
                        marginTop: -20,
                        // marginBottom: 50
                    }}
                />
            </View>
            <LottieView
                style={{height:100}}
                loop
                autoPlay
                source={require('../assets/lottie/2867-tractor-animation.json')}
            />
            <Text style={{fontSize: 18, marginTop: 30, textAlign: 'center', marginHorizontal: 20}}>
                { slowLoading ? 'Slow connection...' : ''}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    loadingWrap: {
        flex: 1,
        // backgroundColor: 'blue',
        backgroundColor: Colors.light,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: 'center',
    },
});