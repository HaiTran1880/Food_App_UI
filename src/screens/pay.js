import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform,
    Modal
} from 'react-native'
import images from '../assests/images';
import R from '../assests/R';
const ModalPopup = (props) => {
    const { isVisible, onClose } = props;
    return (
        <View>
            {/* Modal */}
            <Modal
                style={{ justifyContent: 'center', alignItems: 'center' }}
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modal}>
                        <Image source={R.images.icon_check_pay} />
                        <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center' }}>
                            Your order is {"\n"} successfully.
                        </Text>
                        <Text style={{ fontSize: 17, textAlign: 'center' }}>
                            You can track the delivery in the {"\n"} "Oders" section.
                        </Text>
                        <TouchableOpacity onPress={onClose}
                            style={styles.buttonDone}
                        >
                            <Text style={{ color: '#FFF', fontSize: 17, fontWeight: '600' }}>Continue Shopping</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* End-Modal */}
        </View>
    )
}
const Pay = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const onClose = () => {
        setModalVisible(false);
    }
    return (
        <>
            <View style={modalVisible ? [styles.container, styles.bg] : styles.container}>
                <StatusBar
                    barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
                />
                <ModalPopup isVisible={modalVisible} onClose={onClose} />
                <View style={styles.header}>
                    <View style={styles.containHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={images.icon_back} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>Checkout</Text>
                        <TouchableOpacity onPress={() => { }}
                        >
                            <Text style={{ fontSize: 17, color: '#FF8C00' }}>      </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 9 }}>
                    <View style={styles.edit}>
                        <View style={styles.containItem}>
                            <View style={{ flex: (Platform.OS === 'ios' ? 3 : 2.5), padding: 10 }}>
                                <View>
                                    <Text>DELIVERY ADDRESS</Text>
                                    <View style={styles.row1}>
                                        <View>
                                            <Text style={{ color: '#FF8C00', fontSize: 13, fontWeight: '600' }}>HOME ADDRESS</Text>
                                            <Text style={{ fontSize: 17 }}>928 Lehner Junction Apt. 047</Text>
                                        </View>
                                        <Image source={images.icon_check} />
                                    </View>
                                </View>
                                <View style={{ marginTop: (Platform.OS === 'ios' ? 30 : 15) }}>
                                    <Text style={{ fontSize: 13 }}>PAYMENT METHOD</Text>
                                    <View style={styles.row2}>
                                        <Image source={images.icon_visa} />
                                        <Text style={{ fontSize: 17 }}>    **** *** **** 5967</Text>
                                    </View>
                                    <View style={styles.row1}>
                                        <Image source={images.icon_paya} />
                                        <Text style={{ fontSize: 17 }}> hai_euro@gmail.com</Text>
                                        <Image source={images.icon_check} />
                                    </View>
                                    <View style={styles.row2}>
                                        <Image source={images.icon_mastercard} />
                                        <Text style={{ fontSize: 17 }}>    **** *** **** 5967</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: (Platform.OS === 'ios' ? 0.8 : 0.4), justifyContent: 'flex-end', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => setModalVisible(true)}
                                    style={styles.btnPay}>
                                    <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '600' }}>Payment</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center', marginTop: 40 }}>
                            <Image style={{ marginBottom: 10 }}
                                source={images.vantay} />
                            <Text style={{ fontSize: 17 }}>
                                Pay with Touch ID
                            </Text>
                        </View>
                    </View>
                </View>
            </View >
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    },
    containHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    edit: {
        flex: 3,
        width: 360,
        height: 504,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
    },

    containItem: {
        flex: 1,
        borderRadius: 10,
        padding: (Platform.OS === 'ios' ? 20 : 10),
    },
    itemList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modal: {
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 470,
        width: 320,
        borderRadius: 20,
        marginTop: -50,
    },
    buttonDone: {
        height: 50,
        width: 250,
        borderRadius: 30,
        backgroundColor: '#FF8C00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg: {
        backgroundColor: 'rgba(30, 36, 50, 0.45)'
    },
    row1: {
        borderRadius: 5,
        borderColor: '#FF8C00',
        marginTop: 10,
        borderWidth: 0.5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row2: {
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',

    },
    btnPay: {
        borderRadius: 10,
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8C00',

    }
})
export default Pay;