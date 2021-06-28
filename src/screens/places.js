import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Image,
    FlatList,

} from 'react-native';
import R from '../assests/R';
import images from '../assests/images';
import { fakeData } from '../fake data/fakeData';
import { SliderBox } from "react-native-image-slider-box";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
function myFunction(value, index, array) {
    return value;
}
// Item
const ItemPopular = (props) => {
    const { id, name, description, image, rate, countRate, favourite } = props.item;
    const onFavourite = (id) => {
        let index = id - 1;
        fakeData.dataPopularThisWeek[index].favourite = !fakeData.dataPopularThisWeek[index.favourite];
        console.log(fakeData.dataPopularThisWeek[index].favourite);
    }

    return (
        <View style={styles.itemPopular}>
            <TouchableOpacity onPress={() => { }}>
                <Image source={image} style={styles.imagePopular} />
            </TouchableOpacity>
            <View style={styles.textPopular}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => { }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>{name}</Text>
                    </TouchableOpacity>
                    {favourite == true ?
                        <TouchableOpacity onPress={() => onFavourite(id)}
                        >
                            <Image style={{ position: 'absolute', right: -15, top: -10 }} source={images.icon_bookmark} />
                        </TouchableOpacity>
                        : <TouchableOpacity onPress={() => onFavourite(id)}
                        >
                            <Image style={{ position: 'absolute', right: -15, top: -10 }} source={images.icon_bgbookmark} />
                        </TouchableOpacity>}
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={images.icon_location} />
                    <Text style={{ color: R.colors.gray, fontSize: 13, marginLeft: 5 }}>{description}</Text>
                </View>
                <View style={styles.rate2}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={images.icon_star} />
                        <Text style={{ fontSize: 13, marginHorizontal: 5 }}> {rate} </Text>
                        <Text style={{ color: R.colors.gray, fontSize: 13 }}>({countRate} ratings) </Text>
                    </View>
                    <View style={{ backgroundColor: '#FF8C00', borderRadius: 20, paddingVertical: 2, paddingHorizontal: 3 }}>
                        <Text style={{ color: R.colors.white, fontSize: 11 }}>Free delivery</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Places = () => {
    const [images, setImages] = useState([
        R.images.banner,
        R.images.banner1,
        R.images.banner3,
    ])
    return (
        <View style={styles.container}>

            <View style={styles.banner}>
                <SliderBox
                    images={images}
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
                style={{ position: 'absolute', top: (Platform.OS === 'ios' ? 20 : 20), left: (Platform.OS === 'ios' ? 20 : 20) }}>
                <Image source={images.icon_white_arrow} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <StatusBar
                barStyle={'light-content'}
            />
            <View style={styles.list}>
                <View style={styles.Popular}>
                    <Text style={{ fontSize: 17, }}>
                        128 places
                    </Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={fakeData.dataPopularThisWeek}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ItemPopular item={item} />}
                    />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    banner: {
        flex: 3,

    },
    list: {
        flex: 7,
    },
    //Popular this week
    Popular: {
        marginLeft: 20,
        marginTop: 10,
    },
    itemPopular: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textPopular: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    rate2: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    //End_Popular this week
    header: {
        position: 'absolute',
        top: 30,
        left: 30,
    }
})
export default Places;