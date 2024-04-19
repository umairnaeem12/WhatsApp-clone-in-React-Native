import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Icons from '../../../Assets';
import { CallData } from '../../../Utils/StaticData';

const Calls = () => {

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

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
        <View style={{ backgroundColor: '#31af6a', padding: 12, borderRadius: 50 }}>
          <Image source={Icons.link} style={{ width: 30, height: 30, overflow: 'hidden' }}></Image>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Create call link</Text>
          <Text style={{ color: 'white' }}>share a link for your WhatsApp call</Text>
        </View>
      </View>

      <Text style={{ color: 'white', fontSize: 18, marginLeft: 15 }}>Recent</Text>

      <FlatList
        data={CallData}
        renderItem={({ item }) => {

          let iconTintColor = '#31af6a'; // Default tint color for outgoing calls
          let nameTextColor = 'white'; // Default text color

          // Check if the icon is for an incoming call
          if (item.icon === Icons.incommingcall) {
            iconTintColor = 'red'; // Set tint color to green for incoming calls
            nameTextColor = 'red'; // Default text color
          }
          
          return (
            <View style={{ flexDirection: 'row', margin: 15, alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 30, overflow: 'hidden' }}></Image>

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ color: nameTextColor, fontSize: 18 }}>{item.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.icon} style={{ width: 20, height: 20, tintColor: iconTintColor, marginRight: 10 }}></Image>
                    <Text style={{ color: 'white' }}>{item.time}</Text>
                  </View>
                </View>
                <Image source={Icons.call} style={{ width: 20, height: 20, tintColor: '#31af6a' }}></Image>
              </View>
            </View>
          )
        }}
      ></FlatList>

      <View style={{ backgroundColor: '#31af6a', width: 57, height: 57, position: 'absolute', bottom: 0, right: 0, borderRadius: 17, marginVertical: 20, marginRight: 20 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Image source={require('../../../Assets/Icons/phone-call.png')} style={{ width: 23, height: 23 }}></Image>
        </View>
      </View>

    </View>
  )
}

export default Calls;

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
})