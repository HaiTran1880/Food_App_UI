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
import images from '../assests/images';
import R from '../assests/R';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MyOder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='default'
            />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', }}>
                    {/* <TouchableOpacity>
                        <Image source={R.images.icon_back}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity> */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>
                            My Order
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                {/* <View style={styles.cartEmpty}>
                    <View style={styles.imageCart}>
                        <View style={{ width: 216, height: 216, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 500, }}>
                            <Image source={images.icon_cart} />
                        </View>
                    </View>
                    <View style={styles.text}>
                        <Text style={{ color: 'gray', fontSize: 24, fontWeight: '600' }}>Cart Empty</Text>
                        <Text style={{ color: 'gray', fontSize: 17, textAlign: 'center', marginTop: 10 }}>
                            Good food is always cooking! Go {'\n'}
                            ahead, order some yummy items from {'\n'}
                            the menu
                        </Text>
                    </View>
                </View> */}
                <View style={styles.detailCart}>
                    <View style={styles.bill}>
                        <View style={[styles.topRow, styles.bgRow]}>
                            <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 10 }}>Little Creatures - Club Street</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image style={{ marginRight: 5 }} source={images.icon_location} />
                                <Text style={{ fontSize: 15, color: 'gray' }}>856 Esta Underpass</Text>
                                <View style={{ backgroundColor: '#FF8C00', borderRadius: 20, paddingVertical: 2, paddingHorizontal: 3, marginLeft: 20 }}>
                                    <Text style={{ color: R.colors.white, fontSize: 11 }}>Free delivery</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.topRow, styles.borderRow]}>
                            <Text style={styles.text1}>Special Gajananad Bhel</Text>
                            <View style={styles.row1}>
                                <Text style={styles.text2}>Mixed vegetables, Chicken Egg</Text>
                                <Text style={styles.text2}>$ 17.20</Text>
                            </View>
                        </View>
                        <View style={[styles.topRow, styles.borderRow]}>
                            <Text style={styles.text1}>Cold Bournvita</Text>
                            <View style={styles.row1}>
                                <Text style={styles.text2}>Extra Hot Mild</Text>
                                <Text style={styles.text2}>$ 15.00</Text>
                            </View>
                        </View>
                        <View style={[styles.topRow, styles.borderRow]}>
                            <Text style={styles.text1}>Butter Jam Maska Bun</Text>
                            <View style={styles.row1}>
                                <Text style={styles.text2}>SweetFire Chicken Breast</Text>
                                <Text style={styles.text2}>$ 29.50</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.topRow, styles.addMore]}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#FF2D55' }}>Add more items</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2 }}>

                    </View>
                </View>
                {/* Bottom */}
                <View style={styles.bottom}>
                    <View style={{ flex: 3, justifyContent: 'space-around' }}>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.section}>Subtotal</Text>
                                <Text style={styles.value}>$100</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.section}>Tax & Fees</Text>
                                <Text style={styles.value}>$5.00</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.section}>Delivery</Text>
                                <Text style={styles.value}>Free</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PAY')}
                        style={styles.button}>
                        <View style={{ flex: 1, }}></View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#FFF', fontSize: 17, fontWeight: '600' }}>Continue</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#FFF', fontSize: 17, marginRight: 30, fontWeight: '600' }}>$105</Text>
                        </View>
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
    header: {
        flex: (Platform.OS === 'ios' ? 1 : 0.5),
        padding: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    },
    content: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartEmpty: {
        width: 320,
        height: 400,
    },
    imageCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#FFF',
        flex: 3,
        padding: 10,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,

    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FF8C00',
        flex: 1,
        height: 50,
        borderRadius: 10,
    },
    detailCart: {
        flex: 7,
    },
    topRow: {
        marginHorizontal: 20,
    },
    bgRow: {
        flex: 1.3,
        width: 324,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        justifyContent: 'center',
        //backgroundColor: '#F8F8F8'
    },
    borderRow: {
        flex: 1,
        width: 324,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        justifyContent: 'center',
    },
    addMore: {
        flex: 0.7,
        justifyContent: 'center',
    },
    bill: {
        flex: 6,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        backgroundColor: '#FFF',
        justifyContent: 'space-around'
    },
    text2: {
        fontSize: 13,
        color: 'gray'
    },
    text1: {
        fontSize: 15,
        fontWeight: '500'
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    section: {
        fontSize: 15,
        color: '#333A4D'
    },
    value: {
        fontSize: 15
    }
})
export default MyOder;