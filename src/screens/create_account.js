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
    StatusBar,
    TextInput,
    Platform
} from 'react-native';
import R from '../assests/R';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CreateAccount = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === 'ios' ? 'dark-content' : 'dark-content'}
            />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={R.images.icon_back}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.content}>
                <View style={styles.text}>
                    <Text style={{ fontSize: 36, fontWeight: '700' }}>Create an account</Text>
                </View>
                <View style={styles.touch}>
                    <View style={styles.input}>
                        <TextInput style={styles.textInput}
                            placeholder='Username'
                        />
                        <TextInput style={styles.textInput}
                            placeholder='Email'
                        />
                        <TextInput style={styles.textInput}
                            placeholder='Phone'
                        />
                        <TextInput style={styles.textInput}
                            placeholder='Date of birth'
                        />
                        <TextInput style={styles.textInput}
                            placeholder='Password'
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('VERIFYSCREEN')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={{ color: 'gray', fontSize: 15 }}>
                        By clicking Sign up you agrre to following
                    </Text>
                    <View style={styles.about}>
                        <TouchableOpacity style={{ marginRight: 5 }}>
                            <Text style={{ fontSize: 13 }}>
                                Terms and Conditions
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'gray', fontSize: 13 }}>
                            without reservation
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        marginTop: (Platform.OS === 'ios' ? 70 : 30),
        marginHorizontal: 20,
    },
    content: {
        flex: 1,
        marginTop: (Platform.OS === 'ios' ? 60 : 40),
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 350,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8C00'

    },
    buttonText: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '700',

    },
    textInput: {
        height: 50,
        width: 350,
        borderRadius: 20,
        marginVertical: 5,
        padding: 10,
        fontSize: 18,
        fontWeight: '600',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        opacity: 0.8
    },
    input: {
        marginVertical: 30
    },
    about: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CreateAccount;