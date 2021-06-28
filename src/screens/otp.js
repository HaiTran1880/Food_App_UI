import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import R from '../assests/R';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const OTP = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={R.images.icon_back}
                    style={{ width: 20, height: 20 }}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.text}>
                    <Text style={{ fontSize: 37, fontWeight: '700' }}>Xác thực số điện thoại</Text>
                    <Text style={{ textAlign: 'center', fontSize: 17, marginTop: 20 }}>
                        Nhập mã OTP của bạn tại đây
                    </Text>
                </View>
                <View style={styles.otpCode}>
                    <View style={[styles.number, styles.bgCode]}>
                        <TextInput
                            maxLength={1}
                            keyboardType='number-pad'
                            style={styles.code}>2</TextInput>
                    </View>
                    <View style={styles.number}>
                        <TextInput
                            maxLength={1}
                            keyboardType='number-pad'
                            style={styles.code}></TextInput>
                    </View>
                    <View style={styles.number}>
                        <TextInput
                            maxLength={1}
                            keyboardType='number-pad'
                            style={styles.code}></TextInput>
                    </View>
                    <View style={styles.number}>
                        <TextInput
                            maxLength={1}
                            keyboardType='number-pad'
                            style={styles.code}></TextInput>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                <Text style={{ color: '#B8BBC6', fontSize: 17 }}>Bạn không nhận được mã OTP?</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#FF8C00', fontSize: 17 }}>Gửi lại mã OTP mới</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        marginTop: 70,
        marginHorizontal: 20
    },
    touch: {

    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    otpCode: {
        flexDirection: 'row',
        marginTop: 40
    },
    number: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginHorizontal: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAECEF'
    },
    bgCode: {
        backgroundColor: '#FF8C00'
    },
    code: {
        flex: 1,
        height: 60,
        width: 60,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: '600',
        color: '#FFF',
    }

})
export default OTP;