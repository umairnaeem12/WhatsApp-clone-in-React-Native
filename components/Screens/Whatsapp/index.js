import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, StatusBar } from 'react-native';
import Icons from '../../Assets';
import { Data } from '../../Utils/StaticData';


const Whatsapp = () => {

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={'#1f2c34'} />

            {/* Top Header */}
            <View style={styles.headerView}>
                <View>
                    <Text style={styles.headerText}>WhatsApp</Text>
                </View>
                <View style={styles.headerImagesContainer}>
                    <Image source={Icons.camera} style={[styles.headerImages, { width: 25, height: 25, marginRight: 20 }]}></Image>
                    <Image source={Icons.search} style={[styles.headerImages, { width: 18, height: 18, marginRight: 20 }]}></Image>
                    <Image source={Icons.dots} style={[styles.headerImages, { width: 20, height: 20 }]}></Image>
                </View>
            </View>

            {/* Chat Scetion */}
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.chatcontainer}>
                            <View>
                                <Image source={item.image} style={styles.profileImage}></Image>
                            </View>
                            <View style={styles.chattextcontainer}>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.chatname}>{item.name}</Text>
                                    <Text style={{ color: '#ceced9' }}>{item.message.split(' ').slice(0, 5).join(' ') + (item.message.split(' ').length > 5 ? ' ...' : '')}
                                    </Text>
                                </View>
                                <View style={{ bottom: 10 }}>
                                    <Text style={{ color: '#ceced9', fontSize: 13 }}>{item.Date}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            >
            </FlatList>

            <View style={{ backgroundColor: '#00a884', width: 57, height: 57, position: 'absolute', bottom: 0, right: 0, borderRadius: 17, marginVertical: 20, marginRight: 20 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image source={require('../../Assets//Icons/chat.png')} style={{ width: 23, height: 23 }}></Image>
                </View>
            </View>

        </View>
    )
}

export default Whatsapp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2c34',
    },
    headerView: {
        backgroundColor: '#1f2c34',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 65,
        paddingHorizontal: 10,
    },
    headerText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 23
    },
    headerImagesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerImages: {
        tintColor: 'white'
    },
    chatcontainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#141d24',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 30
    },
    chattextcontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    chatname: {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: '700',
        color: '#ebebed',
        marginBottom: 3
    }
})