import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Platform,
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import R from '../assests/R';
import { connect } from 'react-redux';
import images from '../assests/images';
import { fakeData } from '../fake data/fakeData';
import { addFood } from '../actions/oderFood';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Restaurant2 = (props) => {
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const checkOdered = (id) => {
        if (props.myOder.myOder.find(x => x.id === id)) {
            return true;
        }
        else return false;
    }
    const handleAddFood = (index) => {
        let food = fakeData.listFoodOder.find(x => x.id === index)
        props.addFood(food)
    }
    return (
        <ImageHeaderScrollView
            maxHeight={Platform.OS === 'ios' ? 352 : 250}
            minHeight={0}
            renderFixedForeground={() => {
                return (
                    <View style={styles.headerBar}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={images.icon_white_arrow} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { }}>
                                <Image style={{ marginRight: 20 }}
                                    source={images.icon_share_white} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <Image source={images.icon_mark_white01} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}
            headerImage={images.banner_restaurant}
            renderForeground={() => (
                <View style={styles.foregroundContainer}>
                    <View style={{ flex: 4 }}>
                        <View style={styles.inFor}>
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF8C00', width: 80, borderRadius: 20, paddingVertical: 2, paddingHorizontal: 3 }}>
                                    <Text style={{ color: R.colors.white, fontSize: 11 }}>Free delivery</Text>
                                </View>
                                <Text style={{ fontSize: 30, fontWeight: '600', color: '#FFF', textAlign: 'left' }}>
                                    Boon Lay Ho Huat Fried {'\n'}
                                    Praw Noodle
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                    <Image source={images.icon_location} />
                                    <Text style={{ color: '#B8BBC6', fontSize: 15, marginLeft: 10, fontWeight: '700' }}>03 Jameson Manor Apt. 1777</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomBar}>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={images.icon_star01} />
                                    <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '700', marginLeft: 5 }}>4.5</Text>
                                </View>
                                <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>315 Ratings</Text>
                            </View>
                        </View>


                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ width: 0.5, height: 50, backgroundColor: '#D8D8D8' }} />
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={images.icon_mark01} />
                                        <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '700', marginLeft: 5 }}>137k</Text>
                                    </View>
                                    <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Bookmark</Text>
                                </View>
                                <View style={{ width: 0.5, height: 50, backgroundColor: '#D8D8D8' }} />
                            </View>
                        </View>



                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={images.icon_image01} />
                                    <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '700', marginLeft: 5 }}>346</Text>
                                </View>
                                <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Photo</Text>
                            </View>
                        </View>

                    </View>
                </View>
            )}
        >
            <StatusBar
                barStyle='light-content'
                hidden={false}
                backgroundColor={Platform.OS === 'android' ? '#FF8C00' : null}
            />
            <View style={styles.content}>
                <TriggeringView onHide={() => console.log('text hidden')}>
                    <ScrollView>
                        <View style={{ height: 85, backgroundColor: 'rgba(255,140,0,0.16)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                            <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                                <Text style={{ fontWeight: '700', fontSize: 15, color: '#FF8C00' }}>New! Try Pickup</Text>
                                <Text style={{ fontSize: 13, }}>Pickup on your time. Your order is</Text>
                            </View>
                            <View style={{ height: 40, width: 100, backgroundColor: '#FF8C00', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Text style={{ fontSize: 13, fontWeight: '600', color: '#FFF' }}>Order now</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, paddingLeft: 10, marginTop: 20 }}>
                            <Text style={{ marginBottom: 15, fontWeight: '700', fontSize: 20 }}>Featured Items</Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View>
                                    <Image source={images.food9} />
                                    <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 10, marginBottom: 5 }}>Peannut Chaat with Dahi</Text>
                                    <Text style={{ fontSize: 13, color: '#B8BBC6' }}>$ 9.50</Text>
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Image source={images.food8} />
                                    <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 10, marginBottom: 5 }}>Peannut Chaat with Dahi</Text>
                                    <Text style={{ fontSize: 13, color: '#B8BBC6' }}>$ 9.50</Text>
                                </View>
                            </ScrollView>

                            <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 10, justifyContent: 'space-between', alignContent: 'center' }}>
                                <Text style={{ marginBottom: 15, fontWeight: '700', fontSize: 20 }}>Full menu</Text>
                                <Text style={{ color: '#FF8C00', fontSize: 16, marginRight: 10 }}>View all </Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={() => setIsOpen2(!isOpen2)}
                                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, borderBottomWidth: 0.5 }}>
                                    <Text style={{ fontSize: 15 }}>Popular items</Text>
                                    <View style={{ flexDirection: 'row', marginRight: 20, width: 25, justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, color: '#B8BBC6', }}>{fakeData.listFoodOder.length}</Text>
                                        <Image source={isOpen2 == true ? images.icon_down : images.icon_more_detail} />
                                    </View>
                                </TouchableOpacity>
                                {isOpen2 == true ?
                                    <View style={{ backgroundColor: '#F7F8FA' }}>
                                        {fakeData.listFoodOder.map((item) =>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text>
                                                            {item.name}
                                                        </Text>
                                                        {item.bestsell ? <Image style={{ marginLeft: 20 }}
                                                            source={images.icon_bestsell} /> : null}
                                                    </View>
                                                    <Text>
                                                        $ {item.cost}
                                                    </Text>
                                                </View>
                                                {checkOdered(item.id) ?
                                                    <View>
                                                        <Image style={{ marginRight: 20 }}
                                                            source={images.icon_check} />
                                                    </View>
                                                    :
                                                    <TouchableOpacity onPress={() => handleAddFood(item.id)}>
                                                        <Image source={images.icon_add} />
                                                    </TouchableOpacity>
                                                }
                                            </View>)}
                                    </View>
                                    : <View></View>}
                            </View>
                            <View >
                                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}
                                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, borderBottomWidth: 0.5 }}>
                                    <Text style={{ fontSize: 15 }}>Salads</Text>
                                    <View style={{ flexDirection: 'row', marginRight: 20, width: 25, justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, color: '#B8BBC6', }}>{fakeData.listFoodOder.length}</Text>
                                        <Image source={isOpen == true ? images.icon_down : images.icon_more_detail} />
                                    </View>
                                </TouchableOpacity>
                                {isOpen == true ?
                                    <View style={{ backgroundColor: '#F7F8FA' }}>
                                        {fakeData.listFoodOder.map((item) =>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text>
                                                            {item.name}
                                                        </Text>
                                                        {item.bestsell ? <Image style={{ marginLeft: 20 }}
                                                            source={images.icon_bestsell} /> : null}
                                                    </View>
                                                    <Text>
                                                        $ {item.cost}
                                                    </Text>
                                                </View>
                                                {checkOdered(item.id) ?
                                                    <View>
                                                        <Image style={{ marginRight: 20 }}
                                                            source={images.icon_check} />
                                                    </View>
                                                    :
                                                    <TouchableOpacity onPress={() => handleAddFood(item.id)}>
                                                        <Image source={images.icon_add} />
                                                    </TouchableOpacity>
                                                }
                                            </View>)}
                                    </View>
                                    : <View></View>}
                            </View>
                            {/* <TouchableOpacity style={{ backgroundColor: '#FF8C00', height: 50, flexDirection: 'row', borderRadius: 10, marginRight: 10, marginTop: 20 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: '#FFF', fontWeight: '600' }}>Add to Order</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 17, color: '#FFF', fontWeight: '600' }}>$90.00</Text>
                                </View>
                            </TouchableOpacity> */}
                        </View>
                    </ScrollView>
                </TriggeringView>
            </View>
        </ImageHeaderScrollView>
    );
}
const styles = StyleSheet.create({
    foregroundContainer: {
        flex: 1,

    },
    header: { backgroundColor: 'transparent' },
    content: { height: 1000 },
    headerBar: {
        padding: (Platform.OS === 'ios' ? 20 : 20),
        position: 'absolute',
        top: (Platform.OS === 'ios' ? 40 : 0),
        left: 0,
        right: 0,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomBar: {
        flex: 1,
        borderTopWidth: 0.5,
        borderTopColor: '#D8D8D8',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inFor: {
        flex: 1,
        marginBottom: 20,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
})
const mapStateToProps = (state) => {
    return {
        myOder: state.oderFood,
    };
};
export default connect(mapStateToProps, { addFood })(Restaurant2);