import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Platform,
} from 'react-native';
import R from '../assests/R';
import images from '../assests/images';
import Search from '../components/search';
import { fakeData } from '../fake data/fakeData';
import { useNavigation } from '@react-navigation/native';
import ModalSearch from '../components/modalSearch';
import ModalFilter from '../components/modalFilter';
import { use } from 'jscodeshift';
// Item Discover new place
const Item = (props) => {
    const { id, name, description, image, rate, countRate } = props.item
    const { navigation } = props
    return (
        <TouchableOpacity onPress={() => navigation.navigate('RESTAURANT')}
            style={styles.item}>
            <Image source={image} style={styles.image} />
            <Text style={{ fontSize: 17, fontWeight: '600' }}>{name}</Text>
            <Text style={{ color: R.colors.gray, fontSize: 13 }}>{description}</Text>
            <View style={styles.rate}>
                <Image source={images.icon_star} />
                <Text style={{ fontSize: 13 }}> {rate} </Text>
                <Text style={{ color: R.colors.gray, fontSize: 13 }}>({countRate} ratings) </Text>
                <View style={{ backgroundColor: '#FF8C00', borderRadius: 20, paddingVertical: 2, paddingHorizontal: 3 }}>
                    <Text style={{ color: R.colors.white, fontSize: 11 }}>Free delivery</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

// Item Top categories
const ItemCate = (props) => {
    const { id, name, places, image } = props.item;
    return (
        <TouchableOpacity style={styles.itemCate}>
            <Image source={image} style={styles.imageCate} />
            <Text style={{ fontSize: 17, fontWeight: '600' }}>{name}</Text>
            <Text style={{ color: R.colors.gray, fontSize: 13 }}>{places}</Text>
        </TouchableOpacity>
    )
}

// Item Popular this week
const ItemPopular = (props) => {
    const { id, name, description, image, rate, countRate } = props.item;
    return (
        <TouchableOpacity style={styles.itemPopular}>
            <Image source={image} style={styles.imagePopular} />
            <View style={styles.textPopular}>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>{name}</Text>
                <Text style={{ color: R.colors.gray, fontSize: 13 }}>{description}</Text>
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
// Item Collections by Fozzi
const ItemCollection = (props) => {
    const { id, name, description, image, rate, countRate } = props.item;
    return (
        <TouchableOpacity style={styles.itemCollection}>
            <Image source={image} style={styles.imageCollection} />
            <View style={styles.textCollection}>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>{name}</Text>
                <Text style={{ color: R.colors.gray, fontSize: 13 }}>{description}</Text>
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

const Home = () => {
    const navigation = useNavigation();
    const onSearch = () => {

        setModalVisible(true);
    }
    const onFilter = () => {

    }
    const [modalVisible, setModalVisible] = useState(false);
    const [modalFilter, setModalFilter] = useState(false);
    const onClose = () => {
        setModalVisible(false);
    }
    return (
        <View style={styles.container}>
            <Search onSearch={onSearch} />
            <StatusBar
                barStyle='dark-content'
                hidden={false}
                backgroundColor={Platform.OS === 'android' ? '#FF8C00' : null}
            />
            <ModalSearch isVisible={modalVisible} onClose={onClose} />
            <ModalFilter />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* Discover new places */}
                <View style={styles.discoverNewPlaces}>
                    <Text style={styles.title1}>Discover new places</Text>
                    <FlatList
                        data={fakeData.dataDiscoverNewPlaces}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                {/* End_Discover new places */}

                {/* Top categories */}
                <View style={styles.Categories}>
                    <View style={styles.headerTopCate}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Top categories</Text>
                        <TouchableOpacity style={styles.showAll}>
                            <Text style={{ fontSize: 15, marginRight: 5 }}>
                                Show all
                            </Text>
                            <Image source={images.icon_show_all} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={fakeData.dataTopCategories}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ItemCate item={item} />}
                    />
                </View>
                {/* End_Top categories */}

                {/* Popular this week */}
                <View>
                    <View style={styles.Popular}>
                        <View style={styles.headerTopCate}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Popular this week</Text>
                            <TouchableOpacity style={styles.showAll}>
                                <Text style={{ fontSize: 15, marginRight: 5 }}>
                                    Show all
                                </Text>
                                <Image source={images.icon_show_all} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={fakeData.dataPopularThisWeek}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <ItemPopular item={item} />}
                        />
                    </View>
                </View>
                {/* End_Popular this week */}

                {/* Collections by Fozzi */}
                <View>
                    <View style={styles.Popular}>
                        <View style={styles.headerTopCate}>
                            <Text style={{ fontSize: 20, fontWeight: '600' }}>Collections by Fozzi</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('COLLECTIONSSCREEN')}
                                style={styles.showAll}>
                                <Text style={{ fontSize: 15, marginRight: 5 }}>
                                    Show all
                                </Text>
                                <Image source={images.icon_show_all} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={fakeData.dataCollectionsByFozzi}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <ItemCollection item={item} />}
                        />
                    </View>
                </View>
                {/* End_Collections by Fozzi */}

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    // Discover new places
    title1: {
        fontSize: 30,
        fontWeight: '600'
    },
    discoverNewPlaces: {
        backgroundColor: '#FFF',
        marginLeft: 15,
        marginTop: 20
    },
    item: {
        marginRight: 20,
    },
    image: {
        borderRadius: 5,
        height: 250,
        marginVertical: 20,
        width: '100%',
    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    showAll: {
        marginTop: -10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    //End Discover new places

    // Top Categories
    Categories: {
        marginLeft: 20,
        marginTop: 50,
    },
    headerTopCate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemCate: {
        marginRight: 20,
        width: 88,
    },
    imageCate: {
        borderRadius: 5,
        height: 88,
        marginVertical: 20,
        width: '100%',
    },
    //End Top categoriess

    //Popular this week
    Popular: {
        marginLeft: 20,
        marginTop: 50,
    },
    itemPopular: {
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
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    //End_Popular this week

    //Collections by Fozzi
    Popular: {
        marginLeft: 20,
        marginTop: 50,
    },
    itemCollection: {
        marginVertical: 10,
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textCollection: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    rate2: {
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    //End_Collection by Fozzi
})
export default Home;