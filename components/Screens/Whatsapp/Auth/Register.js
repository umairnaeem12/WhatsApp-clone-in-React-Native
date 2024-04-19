import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

const Register = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.conatiner}>
        <Image source={{ uri: 'https://freepngimg.com/thumb/web_security/8-2-web-security-png-hd-thumb.png' }} style={styles.topimage}></Image>
        <Text style={styles.signinText}>Register</Text>
        <View style={[styles.textinputcontainer, { marginBottom: 10 }]}>
          <Image source={require('../../../Assets/Icons/user.png')} style={styles.textinputicon}></Image>
          <TextInput placeholder='User Name' placeholderTextColor={'black'}></TextInput>
        </View>
        <View style={[styles.textinputcontainer, { marginBottom: 10 }]}>
          <Image source={require('../../../Assets/Icons/email.png')} style={styles.textinputicon}></Image>
          <TextInput placeholder='Email Address' placeholderTextColor={'black'}></TextInput>
        </View>
        <View style={[styles.textinputcontainer, { marginBottom: 10 }]}>
          <Image source={require('../../../Assets/Icons/padlock.png')} style={styles.textinputicon}></Image>
          <TextInput placeholder='Password' placeholderTextColor={'black'}></TextInput>
        </View>
        <View style={styles.textinputcontainer}>
          <Image source={require('../../../Assets/Icons/user.png')} style={styles.textinputicon}></Image>
          <TextInput placeholder='Profile Url' placeholderTextColor={'black'}></TextInput>
        </View>
        {/* <TouchableOpacity style={{width: '90%', paddingVertical: 10}}><Text style={{textAlign: 'right'}}>Forget Password?</Text></TouchableOpacity> */}
        <TouchableOpacity style={styles.siginbutton}><Text style={styles.siginbuttontext}>Sign in</Text></TouchableOpacity>
        <View style={styles.bottomtext}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{color: 'red', fontWeight: '800'}}>Sign in</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topimage: {
    width: 200,
    height: 200
  },
  signinText: {
    fontSize: 25,
    fontWeight: '800',
    color: 'black',
    marginBottom: 30
  },
  textinputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,0.2)',
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  textinputicon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  siginbutton: {
    backgroundColor: 'red',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20
  },
  siginbuttontext: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700'
  },
  bottomtext: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10
  }
})