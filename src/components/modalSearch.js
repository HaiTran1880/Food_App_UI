import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    ScrollView
} from 'react-native';
//import Modal from 'react-native-modal';
import images from '../assests/images';
import { fakeData } from '../fake data/fakeData';
import R from '../assests/R';


// Item Popular this week
const ItemPopular = (props) => {
    const { id, name, description, image, rate, countRate } = props.item;
    return (
        <View style={styles.itemPopular}>
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

                </View>
            </View>
        </View>
    )
}
// Item Collections by Fozzi
const ItemCollection = (props) => {
    const { id, name, description, image, } = props.item;
    return (
        <View style={styles.itemCollection}>
            <Image source={image} style={styles.imageCollection} />
            <View style={styles.textCollection}>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>{name}</Text>
                <Text style={{ color: R.colors.gray, fontSize: 13 }}>{description}</Text>
            </View>
        </View>
    )
}
function ModalSearch(props) {
    const { isVisible, onClose } = props;
    return (
        <View>
            <Modal style={styles.container}
                animationType='slide'
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={onClose}
                            style={{ marginBottom: 30 }}
                        >
                            <Image style={{ width: 20, height: 20, }}
                                source={images.icon_close} />
                        </TouchableOpacity>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 34, fontWeight: '700', marginBottom: 15 }}>Search</Text>
                            <View style={{ width: '100%', height: 40, backgroundColor: '#F1F2F6', flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>
                                <Image source={images.icon_search} style={{ marginHorizontal: 10, }} />
                                <TextInput
                                    style={{ backgroundColor: '#F1F2F6', flex: 1, height: '100%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                                    placeholder='Search'
                                    placeholderTextColor='gray'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        {/* Recent search */}
                        <View>
                            <View style={styles.Popular}>
                                <View style={styles.headerTopCate}>
                                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Recent search</Text>
                                    <TouchableOpacity onPress={() => { }}
                                    >
                                        <Text style={{ fontSize: 15, marginRight: 5, color: '#FF8C00' }}>
                                            Clear all
                                        </Text>
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
                        {/* End_Recent search */}
                        {/* Recommend for you */}
                        <View>
                            <View style={styles.Popular}>
                                <View style={styles.headerTopCate}>
                                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Recommend for you</Text>
                                </View>
                                <ScrollView>
                                    <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        data={fakeData.dataPopularThisWeek}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => <ItemPopular item={item} />}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                        {/* End_Recommend for you */}
                    </View>
                </View>
            </Modal>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        flex: 2.5,
        margin: 20,
        justifyContent: 'flex-end',
    },
    content: {
        flex: 7.5,
        marginTop: 10,
        marginHorizontal: 15,
    },
    //Collections by Fozzi
    Popular: {
        // marginLeft: 0,
        // marginTop: 50,
    },
    itemCollection: {
        width: 165,
        height: 190,
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
    imageCollection: {
        width: 165,
        height: 120,
        borderRadius: 5,
        marginBottom: 10
    },
    //End_Collection by Fozzi
    // Top Categories
    Categories: {
        marginLeft: 20,
        marginTop: 50,
    },
    headerTopCate: {
        marginBottom: 10,
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
        // marginLeft: 20,
        // marginTop: 50,
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
})

export default ModalSearch;