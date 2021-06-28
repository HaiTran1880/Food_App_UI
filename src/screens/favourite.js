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
    FlatList,
    TextInput,
    Platform,

} from 'react-native';
import R from '../assests/R';
import images from '../assests/images';
import { fakeData } from '../fake data/fakeData';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

// Item Popular this week
const ItemPopular = (props) => {
    const { id, name, description, image, rate, countRate } = props.item;
    return (
        <TouchableOpacity style={styles.itemPopular}>
            <Image source={image} style={styles.imagePopular} />
            <View style={styles.textPopular}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>{name}</Text>
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
        </TouchableOpacity>
    )
}

const Favourite = () => {
    const [tab, setTab] = useState(true);
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='default'
            />
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    {/* <TouchableOpacity>
                        <Image source={R.images.icon_back}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity> */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>
                            My Favourite
                        </Text>
                    </View>
                </View>
                <View style={styles.containTab}>
                    <TouchableOpacity onPress={() => setTab(true)}
                        style={tab == true ? [styles.tab, styles.tabSelect] : styles.tab}>
                        <Text style={tab === true ? styles.tabIsSelect : styles.tabIsNotSelect}>Places</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab(false)}
                        style={tab == false ? [styles.tab, styles.tabSelect] : styles.tab}>
                        <Text style={tab === false ? styles.tabText : styles.tabText2}>Food</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {tab == true ? <View style={styles.content}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={fakeData.dataPopularThisWeek}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemPopular item={item} />}
                />
            </View> : <View style={{ flex: 8 }}></View>}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        padding: 10,
        justifyContent: (Platform.OS == 'android' ? 'space-between' : 'flex-end'),
        backgroundColor: '#fff',
    },
    content: {
        flex: 8,
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
    containTab: {
        width: '70%',
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        alignSelf: 'center',
        borderRadius: 20
    },
    tab: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabSelect: {
        backgroundColor: '#FF8C00'
    },
    tabIsNotSelect: {


        color: '#B8BBC6',
        fontSize: 15,
        fontWeight: '600'
    },
    tabIsSelect: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600'
    },
    tabText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600'
    },
    tabText2: {
        color: '#B8BBC6',
        fontSize: 15,
        fontWeight: '600'
    }

})
export default Favourite;