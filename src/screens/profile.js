
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native'
import images from '../assests/images';
import { fakeData } from '../fake data/fakeData';

const Item = (props) => {
    const { id, name, image, more } = props.item;
    return (
        <TouchableOpacity style={styles.item}>
            <Image source={image} />
            <View style={styles.text}>
                <Text style={{ fontSize: 17 }}>{name}</Text>
                <Image source={more} />
            </View>
        </TouchableOpacity >
    )
}

const Profile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.contentTop}>
                    <TouchableOpacity onPress={() => navigation.navigate('EDITPROFILESCREEN')}>
                        <Image source={images.avata}
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('EDITPROFILESCREEN')}
                            style={styles.goToEdit}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Hai Euro</Text>
                            <Image source={images.icon_more} />
                        </TouchableOpacity>
                        <Image source={images.vip_member} />
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <FlatList style={styles.flatlist}
                    data={fakeData.dataListUser}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Item item={item} />}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: (Platform.OS === 'ios' ? 2.8 : 2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTop: {
        marginTop: (Platform.OS === 'ios' ? 50 : 10),
        marginLeft: -80,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bottom: {
        flex: 7.2,
        backgroundColor: '#FFF'
    },
    flatlist: {
        margin: 20,
    },
    item: {
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    goToEdit: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Profile;