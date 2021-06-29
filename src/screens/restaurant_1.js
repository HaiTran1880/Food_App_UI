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
import R from '../assests/R';
import { connect } from 'react-redux';
import images from '../assests/images';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';
import { fakeData } from '../fake data/fakeData';
import { addFood } from '../actions/oderFood';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Restaurant1 = (props) => {
    const navigation = useNavigation();
    const os = Platform.OS;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [image, setImages] = useState([
        R.images.banner,
        R.images.banner1,
        R.images.banner3,
    ])
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
        <View style={styles.container}>
            {os === 'ios' ? <StatusBar
                barStyle='light-content'
            /> : <StatusBar
                hidden={true}
            />}
            <View style={styles.banner}>
                <SliderBox
                    images={image}
                    //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    //currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                    dotColor="#FFF"
                    inactiveDotColor="gray"
                    sliderBoxHeight={(HEIGHT / 10) * 4}
                    autoplay={true}
                    dotStyle={{
                        width: 13,
                        height: 13,
                        borderRadius: 15,
                        marginHorizontal: -5,
                        padding: 0,
                        margin: 15,
                    }}

                />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={{ position: 'absolute', top: (Platform.OS === 'ios' ? 50 : 30), left: (Platform.OS === 'ios' ? 20 : 30) }}>
                <Image source={images.icon_white_arrow} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <StatusBar
                barStyle={Platform.OS === 'android' ? 'light-content' : 'light-content'}
                hidden={false}
                backgroundColor={Platform.OS === 'android' ? '#FF8C00' : null}
            />
            <View style={styles.inFor}>
                <ScrollView showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 30, fontWeight: '700' }}>Chocolat' N Spice</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.icon_location} />
                            <Text style={{ color: 'gray', fontSize: 15, marginLeft: 5 }}>03 Jameson Manor Apt. 1777</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <View style={{ backgroundColor: '#FF8C00', borderRadius: 20, paddingVertical: 2, paddingHorizontal: 3 }}>
                                <Text style={{ color: R.colors.white, fontSize: 11 }}>Free delivery</Text>
                            </View>
                            <Text style={{ fontSize: 13, marginHorizontal: 20 }}> 33 min </Text>
                            <Text style={{ color: R.colors.gray, fontSize: 13 }}>27 miles </Text>
                        </View>
                    </View>

                    <View style={{ width: '100%', backgroundColor: '#F7F8FA', height: 70, flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ marginRight: 5 }}
                                source={images.icon_star00} />
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: '600', }}>4.5</Text>
                                <Text style={{ fontSize: 13, color: 'gray', marginTop: 5 }}>Ratings</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <View style={{ width: 1, height: 30, backgroundColor: 'gray' }} />

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ marginRight: 5 }}
                                    source={images.icon_mark00} />
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: '600' }}>137k</Text>
                                    <Text style={{ fontSize: 13, marginTop: 5, color: 'gray' }}>Bookmark</Text>
                                </View>
                            </View>

                            <View style={{ width: 1, height: 30, backgroundColor: 'gray' }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ marginRight: 5 }}
                                source={images.icon_image00} />
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: '600' }}>346</Text>
                                <Text style={{ fontSize: 13, marginTop: 5, color: 'gray' }}>Photos</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.content, styles.content2]}>
                        <Text style={{ marginTop: 30, fontSize: 17, lineHeight: 25 }}>
                            From the French countryside, to your {'\n'}
                            doorstep. PAUL was founded in 1889 as a{'\n'}
                            family bakery and patisserie. Savour a selection of viennoiserie...
                        </Text>

                        <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 30, marginBottom: 5 }}>Photo</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Image source={images.pt0} />
                            <Image style={{ marginLeft: 10 }} source={images.pt1} />
                            <Image style={{ marginLeft: 10 }} source={images.pt2} />
                            <Image style={{ marginLeft: 10 }} source={images.pt3} />
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
                                <View style={{ backgroundColor: '#F7F8FA', marginBottom: 20 }}>
                                    {fakeData.listFoodOder.map((item) =>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
                                            <View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text>
                                                        {item.name}
                                                    </Text>
                                                    {item.bestsell ? <Image style={{ marginLeft: 50 }}
                                                        source={images.icon_bestsell} /> : null}
                                                </View>
                                                <Text>
                                                    $ {item.cost}
                                                </Text>
                                            </View>
                                            <TouchableOpacity onPress={() => handleAddFood(item.id)}>
                                                <Image source={images.icon_add} />
                                            </TouchableOpacity>
                                        </View>)}
                                </View>
                                : <View></View>}
                        </View>
                        {/* <TouchableOpacity style={{ backgroundColor: '#FF8C00', height: 50, flexDirection: 'row', borderRadius: 10, marginRight: 10, marginTop: 20, marginBottom: 30 }}>
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

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    banner: {
        flex: 4
    },
    inFor: {
        flex: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: -20,
        backgroundColor: '#FFF',
    },
    content: {
        marginHorizontal: 15,
        marginTop: 50,

    },
    content2: {
        flex: 1,
        marginTop: 0,
    }
})
const mapStateToProps = (state) => {
    return {
        myOder: state.oderFood,
    };
};
export default connect(mapStateToProps, { addFood })(Restaurant1);