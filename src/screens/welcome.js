import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    StatusBar

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from '../assests/R';
import { getFontXD } from '../config/functions';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                style={{ width: WIDTH, height: HEIGHT, }}
                source={R.images.background}
            >
                <LinearGradient
                    start={{ x: 0.1, y: 0.1 }} end={{ x: 0, y: 1 }}
                    locations={[0, 0, 1]}
                    colors={
                        [
                            'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)',
                            ' rgba(0, 0, 0, 0.9)', ' rgba(0, 0, 0, 0.9)',
                            ' rgba(0, 0, 0, 0.9)'
                        ]}
                    style={styles.linearGradient}
                >
                    <View style={styles.text}>
                        <Text style={styles.title}>
                            DELIVERED{"\n"}FAST FOOD{"\n"}TO YOUR{"\n"}DOOR.
                        </Text>
                        <Text style={styles.describe}>
                            Set exact location to find the right {"\n"} restaurants near you.
                        </Text>
                    </View>
                    <View style={styles.containButton}>
                        <TouchableOpacity onPress={() => navigation.navigate('LOGINSCREEN')}
                            style={[styles.button, styles.bgButtonLogin]}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}
                            style={[styles.button, styles.bgButtonFacebook]}>
                            <Image style={styles.iconFacebook}
                                source={R.images.logoFB} />
                            <Text style={styles.buttonText}>Connect with facebook</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        width: WIDTH,
        height: HEIGHT,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    title: {
        fontSize: 44,
        marginVertical: 20,
        marginTop: 200,
        color: '#fff',
        fontWeight: '700',
    },
    describe: {
        color: '#fff',
        fontSize: 20,
    },
    containButton: {
        marginTop: 100,
        marginBottom: 50,
    },
    button: {
        width: 350,
        height: 50,
        marginVertical: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,

    },
    bgButtonLogin: {
        backgroundColor: '#FF8C00'
    },
    bgButtonFacebook: {
        flexDirection: 'row',
        backgroundColor: '#007AFF'
    },
    iconFacebook: {
        marginRight: 10,
        width: 20,
        height: 20
    }
})
export default Welcome;