import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Whatsapp from '../Screens/Whatsapp';
import Updates from '../Screens/Whatsapp/Updates';
import Communities from '../Screens/Whatsapp/Communities';
import Calls from '../Screens/Whatsapp/Calls';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#1f2c34',
                height: 70,
            }
        }}
        >
            <Tab.Screen name="Whatsapp" component={Whatsapp} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <View style={{ backgroundColor: focused ? 'rgba(128,128,128,0.4)' : 'transparent', width: 52, alignItems: 'center', borderRadius: 20, height: 28, marginBottom: 1 }}>
                            <Image source={require('../Assets/Icons/chat.png')} style={{ width: 22, height: 20, tintColor: 'white', resizeMode: 'contain', top: 4 }}></Image>
                        </View>
                        <Text style={{ color: 'white', fontWeight: 'bold', width: 100, textAlign: 'center' }}>Chats</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Updates" component={Updates} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ backgroundColor: focused ? 'rgba(128,128,128,0.4)' : 'transparent', width: 52, alignItems: 'center', borderRadius: 20, height: 28, marginBottom: 1 }}>
                            <Image source={require('../Assets/Icons/update.png')} style={{ width: 22, height: 20, resizeMode: 'contain', top: 4 }}></Image>
                        </View>
                        <Text style={{ color: 'white', width: 100, textAlign: 'center' }}>Updates</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Communities" component={Communities} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ backgroundColor: focused ? 'rgba(128,128,128,0.4)' : 'transparent', width: 52, alignItems: 'center', borderRadius: 20, height: 28, marginBottom: 1 }}>
                            <Image source={require('../Assets/Icons/people.png')} style={{ width: 23, height: 23, tintColor: 'white', resizeMode: 'contain', top: 4 }}></Image>
                        </View>
                        <Text style={{ color: 'white', width: 100, textAlign: 'center' }}>Communities</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Calls" component={Calls} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                       <View style={{ backgroundColor: focused ? 'rgba(128,128,128,0.4)' : 'transparent', width: 52, alignItems: 'center', borderRadius: 20, height: 28, marginBottom: 1 }}>
                            <Image source={require('../Assets/Icons/phone-call.png')} style={{ width: 22, height: 20, tintColor: 'white', resizeMode: 'contain', top: 4 }}></Image>
                        </View>
                        <Text style={{ color: 'white', width: 100, textAlign: 'center' }}>Calls</Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

export default BottomNavigation;