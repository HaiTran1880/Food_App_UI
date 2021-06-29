import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import images from '../assests/images';
import { getWidth, getHeight } from '../config/functions';
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';
const List = [
    {
        id: '0',
        title: 'American',
    },
    {
        id: '1',
        title: 'Asia',
    },
    {
        id: '2',
        title: 'Shushi',
    },
    {
        id: '3',
        title: 'Pizza',
    },
    {
        id: '4',
        title: 'Desserts',
    },
    {
        id: '5',
        title: 'FastFood',
    },
    {
        id: '6',
        title: 'Vietnamese',
    }
]
const List2 = [
    {
        id: '4',
        title: 'Desserts',
    },
    {
        id: '5',
        title: 'FastFood',
    },
    {
        id: '6',
        title: 'Vietnamese',
    }
]
const Item = (props) => {
    const { id, title } = props.item;
    return (
        <TouchableOpacity style={styles.itemChose}>
            <Text style={{ color: '#B8BBC6' }}>{title}</Text>
        </TouchableOpacity>
    )

}
const number = getHeight() * 5 / 10;
function ModalFilter(props) {
    const closeFilter = () => {
        sheetRef.current.snapTo(2)
    }

    const renderContent = () => (
        <View
            style={{
                alignItems: 'center',
                backgroundColor: '#FFF',
                padding: 16,
                height: getHeight(),
            }}
        >
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.section}>CUISINES</Text>
                <View style={{
                    width: '100%', alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10, marginBottom: 10
                }}>
                    <FlatList
                        horizontal={true}
                        data={List}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Item item={item} />}
                    />
                    <FlatList
                        style={{ marginTop: 10 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={List2}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Item item={item} />}
                    />
                </View>
                <Text style={styles.section}>SORT BY</Text>
                <View>
                    <View style={styles.row}>
                        <Text>Top Rated</Text>
                        <Image style={{ marginRight: 30 }}
                            source={images.icon_check01} />
                    </View>
                    <View style={styles.row}>
                        <Text>Nearest</Text>
                        <Image style={{ marginRight: 30 }}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text>Cost High to Low</Text>
                        <Image style={{ marginRight: 30 }}
                            source={images.icon_check01} />
                    </View>
                </View>

                <Text style={styles.section}>FILTER</Text>
                <View>
                    <View style={styles.row2}>
                        <Text>Open Now</Text>
                        <Image style={{ marginRight: 30 }}
                            source={images.icon_check01} />
                    </View>
                    <View style={styles.row2}>
                        <Text>Credit Cards</Text>
                        <Image style={{ marginRight: 30 }}
                        />
                    </View>
                    <View style={styles.row2}>
                        <Text>Alcohol Served</Text>
                        <Image style={{ marginRight: 30 }}
                            source={images.icon_check01} />
                    </View>
                </View>

                <Text style={styles.section}>PRICE</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 20 }}>$0.00</Text>
                    <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 20, marginRight: 20 }}>$200.0</Text>
                </View>
                <Slider
                    style={{ width: getWidth() * 9 / 10, height: 50, }}
                    minimumValue={0}
                    maximumValue={200}
                    step={1}
                    value={150}
                    onValueChange={() => { }}
                    thumbTintColor='#FF8C00'
                    minimumTrackTintColor="#FF8C00"
                    maximumTrackTintColor="#EFEFF4"

                />

            </View>
        </View>
    );
    const renderHeader = () => (
        <View
            style={{
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
                height: 70,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomWidth: 0.5,
                borderBottomColor: '#D8D8D8'
            }}
        >
            <View style={{ width: 70, height: 5, backgroundColor: '#B8BBC6', }} />

            <View
                style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <TouchableOpacity><Text style={{ fontSize: 17 }}>Reset</Text></TouchableOpacity>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>Filters</Text>
                <TouchableOpacity onPress={closeFilter}
                ><Text style={{ fontSize: 17, color: '#FF8C00' }}>Done</Text></TouchableOpacity>
            </View>
        </View>
    );
    const sheetRef = React.useRef(null);
    return (
        <>
            <View
                style={{
                    flex: 1,
                    opacity: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
            </View>
            <BottomSheet
                style={{ flex: 1 }}
                ref={sheetRef}
                snapPoints={[0, number, getHeight() * 9 / 10,]}
                borderRadius={10}
                renderHeader={renderHeader}
                renderContent={renderContent}
            />
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        height: 50,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    section: {
        color: '#B8BBC6',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 30
    },
    row2: {
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between'
    },
    itemChose: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginRight: 20
    }
})
const mapStateToProps = (state) => {
    return {
        isOpen: state.openModal,
    };
};
export default connect(mapStateToProps, {})(ModalFilter);