import React, { useState, useRef } from 'react';
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
    Platform,
} from 'react-native';
import R from '../assests/R';
import DropDownPicker from 'react-native-dropdown-picker';
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Verify = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
                hidden={false}
                backgroundColor={Platform.OS === 'android' ? '#FF8C00' : null}
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
                    <Text style={styles.title}>Verify your {"\n"}phone number</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10 }}>
                        We have sent you an SMS with a code to {"\n"}
                        number +84 905070017{"\n"}

                    </Text>
                </View>
                <View style={styles.touch}>
                    <View style={{ borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5E5EA' }}>
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={value}
                            defaultCode="VN"
                            layout="first"
                            onChangeText={(text) => {
                                setValue(text);
                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }}
                            withLightTheme
                            withShadow
                            autoFocus
                            textContainerStyle={{ backgroundColor: '#E5E5EA' }}
                            containerStyle={styles.phoneInput}
                        />
                        <TouchableOpacity style={{}}
                            onPress={() => { }}>
                            <Image source={R.images.icon_delete_textinput} />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.textInputContain}>
                        <Image source={require('../assests/images/flag_vn.png')} />
                        <View style={{ width: 80, marginHorizontal: 10 }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={styles.dropDow}
                            />
                        </View>
                        <TextInput style={styles.textInput}
                            placeholder='Your email'
                            keyboardType='number-pad'
                        />
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assests/images/delete_text_input.png')} />
                        </TouchableOpacity>
                    </View> */}
                    <View style={styles.otherLogin}>
                        <Text style={{ color: 'gray', fontSize: 15 }}>Or login with{" "}</Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ color: '#FF8C00', fontSize: 15 }}>Social network</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('OTPSCREEN')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    touch: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginTop: (Platform.OS === 'ios' ? 70 : 20),
        marginHorizontal: 20
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: (Platform.OS === 'ios' ? 60 : 20),
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: WIDTH,
        height: 50,
        marginVertical: 10,
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
        flex: 1,
    },
    textInputContain: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 350,
        borderRadius: 20,
        marginVertical: 30,
        padding: 10,
        fontSize: 18,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        opacity: 0.8
    },
    otherLogin: {
        flexDirection: 'row',
        marginVertical: (Platform.OS === 'ios' ? 30 : 20)
    },
    dropDow: {
        borderWidth: 0,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        opacity: 0.8
    },
    phoneInput: {
        backgroundColor: '#E5E5EA',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    }
})
export default Verify;