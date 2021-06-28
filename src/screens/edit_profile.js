import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform
} from 'react-native'
import images from '../assests/images';

const EditProfile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
            />
            <View style={styles.header}>
                <View style={styles.containHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={images.icon_back} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17, fontWeight: '600' }}>Edit Profile</Text>
                    <TouchableOpacity onPress={() => { }}
                    >
                        <Text style={{ fontSize: 17, color: '#FF8C00' }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.edit}>
                <View style={styles.contentEdit}>
                    <View style={styles.avata}>
                        <View style={styles.contai2avata}>
                            <View style={styles.avataMain}>
                                <Image style={styles.avataUser}
                                    source={images.avata} />
                            </View>

                            <TouchableOpacity onPress={() => { }}
                            >
                                <Image style={{ alignSelf: 'flex-end', marginTop: -50 }}
                                    source={images.icon_camera} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containItem}>
                        <View style={styles.itemList}>
                            <Text style={styles.inforLable}>Username</Text>
                            <Text style={styles.infor}> Hai Euro</Text>
                        </View>
                        <View style={styles.itemList}>
                            <Text style={styles.inforLable}>Email</Text>
                            <Text style={styles.infor}>hai_euro@gmail.com</Text>
                        </View>
                        <View style={styles.itemList}>
                            <Text style={styles.inforLable}>Phone</Text>
                            <Text style={styles.infor}>+84 969453725</Text>
                        </View>
                        <View style={styles.itemList}>
                            <Text style={styles.inforLable}>Gender</Text>
                            <Text style={styles.infor}>Male</Text>
                        </View>
                        <View style={styles.itemList}>
                            <Text style={styles.inforLable}>Date of birth</Text>
                            <Text style={styles.infor}>01/01/1999</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray'
    },
    edit: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentEdit: {
        width: 360,
        height: 504,
        marginTop: -20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
    },
    avata: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avataMain: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

    },
    contai2avata: {
        // marginBottom: Platform.OS === 'ios' ?,
        marginTop: (Platform.OS === 'ios' ? -150 : 0)
    },
    containItem: {
        flex: 6,
        paddingHorizontal: 10,
        paddingBottom: 20,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: 'space-between'
    },
    itemList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containHeader: {
        marginBottom: 10,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
    },
    inforLable: {
        fontSize: 17,
        color: 'gray'
    },
    infor: {
        fontSize: 17
    },
    avataUser: {
        width: 142,
        height: 142,
        borderRadius: 100,
        margin: 2,
        borderWidth: 2,
        borderColor: '#FFF'
    }
})
export default EditProfile;