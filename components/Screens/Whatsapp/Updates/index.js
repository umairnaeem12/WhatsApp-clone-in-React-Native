import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Icons from '../../../Assets';

const Data = [
    {
        id: 1,
        // img: require('../../../Assets/Images/lastoption.png'),
        img: { uri: 'https://media.licdn.com/dms/image/D4D03AQF-gdUjpTsK0Q/profile-displayphoto-shrink_800_800/0/1682877136792?e=2147483647&v=beta&t=abLnJqOLJXXFYzZf5GTErOVj8WRqzz9sg1WTZ2ZEQw0' },
        status: 'My status',
        text: 'Tap to add status update'
    },
]

const StatusData = [
    {
        id: 1,
        img: { uri: 'https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713225600&semt=sph' },
        status: 'Ahmed Choudhary',
        text: '6 minutes ago'
    },
    {
        id: 2,
        img: { uri: 'https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.jpg' },
        status: 'Ali Ahmed',
        text: '8 hours ago'
    },
    {
        id: 3,
        img: { uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/100-best-luxury-cars.jpg?itok=wCsUrm0B' },
        status: 'Abdul Moied',
        text: '10 minutes ago'
    },
    {
        id: 4,
        img: { uri: 'https://img.freepik.com/free-photo/yellow-car-with-number-70-side_1340-23401.jpg' },
        status: 'Hammad Ali',
        text: '10:30 AM'
    },
    {
        id: 5,
        img: { uri: 'https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/09/23074716/sports-vs-supercars-cover-230920221250-420x230.jpg' },
        status: 'Ahamd Uni',
        text: '9:21 PM'
    },
    {
        id: 6,
        img: { uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg' },
        status: 'Usama Aleem',
        text: '1:30 AM'
    },
    {
        id: 7,
        img: require('../../../Assets/Images/lastoption.png'),
        status: 'Abid Hussain',
        text: '10 minutes ago'
    },
]

const Updates = () => {
    return (
        <View style={styles.container}>

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

            {/* Status */}
            <View style={styles.StatusContainer}>
                <Text style={styles.StatusText}>Status</Text>
                <Image source={Icons.dots} style={[styles.headerImages, { width: 20, height: 20 }]}></Image>
            </View>

            <View>
                <FlatList
                    data={Data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={[styles.statusView, { flexDirection: 'row' }]}>
                                <View>
                                    <Image source={item.img} style={styles.statusImage}></Image>
                                    <TouchableOpacity style={styles.plusIcon}><Image source={Icons.add} style={styles.plusIconIcon}></Image></TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 17 }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginBottom: 5 }}>{item.status}</Text>
                                    <Text style={{ color: '#f2f3f5', fontSize: 15 }}>{item.text}</Text>
                                </View>
                            </View>
                        )
                    }}
                >
                </FlatList>

            </View>

            <Text style={styles.recentUpdates}>Recent updates</Text>


            {/* <View> */}
            <FlatList
                data={StatusData}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={[styles.statusView, { top: 5 }]}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Image source={item.img} style={styles.statusImage}></Image>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', marginBottom: 3 }}>{item.status}</Text>
                                    <Text style={{ color: '#f2f3f5' }}>{item.text}</Text>
                                </View>
                            </View>
                            {index === StatusData.length - 1 && ( // Check if it's the last item
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                                    <Text style={{ color: '#f2f3f5', fontWeight: '700', marginVertical: 15, fontSize: 16 }}>Recent updates</Text>
                                    <Image source={Icons.arrowdown} style={{ width: 20, height: 20, tintColor: 'white' }}></Image>
                                </View>
                            )}
                        </View>
                    )
                }}
            />
            {/* </View> */}



            <View style={{ backgroundColor: '#00a884', width: 57, height: 57, position: 'absolute', bottom: 0, right: 0, borderRadius: 14, marginVertical: 20, marginRight: 20 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image source={Icons.camerafill} style={{ width: 23, height: 23 }}></Image>
                </View>
            </View>
            <View style={{ backgroundColor: '#6f7073', width: 45, height: 45, position: 'absolute', bottom: 0, right: 0, borderRadius: 13, marginVertical: 100, marginRight: 27 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image source={Icons.pencil} style={{ width: 20, height: 20, tintColor: 'white' }}></Image>
                </View>
            </View>

        </View>
    )
}

export default Updates;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#141d24',
    },
    headerView: {
        backgroundColor: '#1f2c34',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 65,
        paddingHorizontal: 10
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
    plusIcon: { position: 'absolute', bottom: 1, right: -5, backgroundColor: '#31af6a', borderRadius: 20, width: 25, height: 25, alignItems: 'center', justifyContent: 'center' },
    plusIconIcon: { width: 15, height: 15, tintColor: "white" },
    recentUpdates: { color: '#f2f3f5', fontWeight: '700', marginHorizontal: 20, marginVertical: 5, fontSize: 16 },
    StatusContainer: {
        // flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    statusView: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 20

    },
    StatusText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
    },
    statusImage: {
        width: 55,
        height: 55,
        borderRadius: 50
    }
})