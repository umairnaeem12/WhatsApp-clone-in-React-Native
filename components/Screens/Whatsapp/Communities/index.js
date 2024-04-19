import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Icons from '../../../Assets';
import { CommunityData, Data } from '../../../Utils/StaticData';

const Communities = () => {
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

      <ScrollView>

        {/* Communities */}
        <View style={[styles.commContainer, { marginVertical: 10, flexDirection: 'row' }]}>
          <View style={{ backgroundColor: '#627884', padding: 10, borderRadius: 10 }}>
            <Image source={require('../../../Assets/Icons/people.png')} style={styles.commImage}></Image>
            <TouchableOpacity style={styles.plusIcon}><Image source={Icons.add} style={styles.plusIconIcon}></Image></TouchableOpacity>
          </View>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 15 }}>New Community</Text>
        </View>

        {/* Communities */}
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#1f2c34', padding: 15 }}>

          <View style={{ backgroundColor: '#627884', padding: 10, borderRadius: 10 }}>
            <Image source={Icons.communities} style={styles.commImage}></Image>
          </View>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 15 }}>Shopify Premium</Text>
        </View>

        <View style={{ height: 0.4, backgroundColor: 'grey' }}></View>

        <View style={{ backgroundColor: '#1f2c34' }}>
          <FlatList
            data={CommunityData}
            renderItem={({ item }) => {
              return (
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
                  <Image source={item.image} style={{ width: 45, height: 45, borderRadius: 7 }}></Image>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>{item.name}</Text>
                    <Text style={{ color: 'white' }}>{item.message}</Text>
                  </View>
                </View>
              )
            }}
          >
          </FlatList>

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20, alignItems: 'center' }}>
            <Image source={Icons.right} style={{ width: 10, height: 10, tintColor: '#a8b5bd' }}></Image>
            <Text style={{ color: '#a8b5bd', fontSize: 18, marginLeft: 30 }}>View all</Text>
          </View>

        </View>

        {/* Communities 1 */}
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#1f2c34', padding: 15, marginTop: 10 }}>

          <View style={{ backgroundColor: '#627884', padding: 10, borderRadius: 10 }}>
            <Image source={Icons.communities} style={styles.commImage}></Image>
          </View>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 15 }}>Shopify Premium</Text>
        </View>

        <View style={{ height: 0.4, backgroundColor: 'grey' }}></View>

        <View style={{ backgroundColor: '#1f2c34' }}>
          <FlatList
            data={CommunityData}
            renderItem={({ item }) => {
              return (
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
                  <Image source={item.image} style={{ width: 45, height: 45, borderRadius: 7 }}></Image>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>{item.name}</Text>
                    <Text style={{ color: 'white' }}>{item.message}</Text>
                  </View>
                </View>
              )
            }}
          >
          </FlatList>

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20, alignItems: 'center' }}>
            <Image source={Icons.right} style={{ width: 10, height: 10, tintColor: '#a8b5bd' }}></Image>
            <Text style={{ color: '#a8b5bd', fontSize: 18, marginLeft: 30 }}>View all</Text>
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default Communities;

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
  commContainer: {
    alignItems: 'center',
    // margin: 10,
    backgroundColor: '#1f2c34',
    // marginVertical: 10,
    padding: 15,

  },
  commImage: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  plusIcon: { position: 'absolute', bottom: -3, right: -5, backgroundColor: '#31af6a', borderRadius: 20, width: 25, height: 25, alignItems: 'center', justifyContent: 'center' },
  plusIconIcon: { width: 15, height: 15, tintColor: "white" },
})