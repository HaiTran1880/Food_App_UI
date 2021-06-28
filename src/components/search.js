import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import R from '../assests/R';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Search = (props) => {
    const { onSearch } = props;
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TouchableOpacity onPress={onSearch}
                >
                    <Image source={R.images.icon_search}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    placeholder='Search'
                />
            </View>
            <TouchableOpacity>
                <Image source={R.images.icon_filter} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        marginTop: (Platform.OS === 'ios' ? 50 : 5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',


    },
    searchBar: {
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderColor: '#EAECEF',
    },
    icon: {
        marginLeft: 5,
    },
    textInput: {
        fontSize: 17,
        flex: 1,
        height: 40,
        padding: 10,
        borderRadius: 20,
        borderRightWidth: 1,
        width: '70%',
        fontWeight: '500',
        borderColor: '#EAECEF',
        backgroundColor: '#FFF'
    }
})
export default Search;