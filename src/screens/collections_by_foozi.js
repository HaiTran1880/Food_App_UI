import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ImageBackground,
    TouchableOpacity,

} from 'react-native';
import images from '../assests/images';
import { fakeData } from '../fake data/fakeData';

const Item = (props) => {
    const { id, name, image, place } = props.item;
    const { onClick } = props;
    return (
        <TouchableOpacity onPress={onClick}
            style={{ marginVertical: 10 }}>
            <ImageBackground source={image}
                style={styles.image}>
                <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#FFF', fontSize: 17, fontWeight: '700' }}>{name}</Text>
                    <Text style={{ color: '#FFF', fontSize: 17, }}>{place}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const CollectionsByFozzi = () => {
    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('PLACESSCREEN');
    }
    return (
        <View style={styles.contain}>
            <View style={styles.header}>
                <View style={{ marginBottom: 10, paddingHorizontal: 15, flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.icon_back} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>Collections by Fozzi</Text>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <FlatList style={{ margin: 10 }}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    showsVerticalScrollIndicator={false}
                    data={fakeData.dataListCollections}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Item item={item} onClick={onClick} />}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    header: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    content: {
        flex: 9,
        //marginHorizontal: 15,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
    },
    image: {
        borderRadius: 10,
        width: 165,
        height: 191,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
export default CollectionsByFozzi;