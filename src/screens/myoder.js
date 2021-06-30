import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import images from '../assests/images';
import { deleteFood, addOne, minusOne } from '../actions/oderFood';
import R from '../assests/R';
import { set } from 'react-native-reanimated';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MyOder = (props) => {
    const navigation = useNavigation();
    const { myOder, } = props.myOder;
    const { count, } = props.count;
    const [totalCost, setTotalCost] = useState()
    let leng = myOder.length;
    const caculatMoney = () => {
        let cost = 0;
        let i = 0;
        for (i; i < leng; i++) {
            cost += myOder[i].cost * count[i];
        }
        setTotalCost(cost)
    }
    useEffect(() => {
        caculatMoney();
    }, [props.count]);
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
            <View style={myOder.length == 0 ? styles.contentEmpty : styles.content}>
                {myOder.length == 0 ?
                    <View style={styles.cartEmpty}>
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
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <View style={styles.detailCart}>
                            <View style={styles.bill}>
                                <View style={{ flex: 1.5 }}>
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
                                </View>
                                <View style={{ flex: 4 }}>
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        style={{ flex: 1 }}
                                    >
                                        {myOder.map((item, index) =>
                                            <View style={[styles.topRow2, styles.borderRow]}>
                                                <View style={{ flexDirection: 'row', height: '100%' }}>
                                                    <View style={{ flex: 3, justifyContent: 'center', }}>
                                                        <Text style={styles.text1}>{item.name}</Text>
                                                        <Text style={styles.text2}>{item.decription}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                                                        <TouchableOpacity onPress={() => props.addOne(index)}
                                                        >
                                                            <Image style={{ width: 20, height: 20 }}
                                                                source={images.icon_asen} />
                                                        </TouchableOpacity>
                                                        <Text style={styles.text1}>{count[index]}</Text>
                                                        <TouchableOpacity onPress={() => props.minusOne(index)}
                                                        >
                                                            <Image style={{ width: 20, height: 20 }}
                                                                source={images.icon_descen} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={{ flexDirection: 'row', width: 70, justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <Text style={styles.text2}>$ {((item.cost * count[index]).toPrecision(3))}</Text>
                                                            <TouchableOpacity onPress={() => props.deleteFood(item.id)}>
                                                                <Image source={images.icon_delte_food} />
                                                            </TouchableOpacity>

                                                        </View>
                                                    </View>
                                                </View>
                                            </View>)}
                                    </ScrollView>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('HOMESCREEN')}
                                        style={[styles.topRow, styles.addMore]}>
                                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#FF2D55' }}>Add more items</Text>

                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 2 }}>

                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <View style={{ flex: 3, justifyContent: 'space-around' }}>
                                <View>
                                    <View style={styles.row}>
                                        <Text style={styles.section}>Subtotal</Text>
                                        <Text style={styles.value}>$ {totalCost.toPrecision(3)}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.row}>
                                        <Text style={styles.section}>Tax & Fees</Text>
                                        <Text style={styles.value}>$ 5.00</Text>
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
                                    <Text style={{ color: '#FFF', fontSize: 17, marginRight: 30, fontWeight: '600' }}>$ {(totalCost + 5.00).toPrecision(3)}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

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
    },
    contentEmpty: {
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
        width: '100%',
        padding: 10,
        backgroundColor: '#FFF',
        flex: 3,
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
        paddingHorizontal: 20,
        backgroundColor: '#F8F8F8'
    },
    topRow2: {
        marginHorizontal: 20,
        height: 60,
    },
    bgRow: {
        flex: 1.3,
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    borderRow: {
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
        borderBottomColor: 'gray',
        justifyContent: 'center',
    },
    addMore: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    bill: {
        flex: 6,
        margin: 10,
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
const mapStateToProps = (state) => {
    return {
        myOder: state.oderFood,
        count: state.oderFood,
    };
};
export default connect(mapStateToProps, { deleteFood, addOne, minusOne })(MyOder);