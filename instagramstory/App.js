import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Profile from './src/components/screens/Profile';
import Activity from './src/components/screens/Activity';

export default function App() {

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const bottomTabScreen = () => {
  return(
    <Tab.Navigator
    screenOptions={({route}) => ({
    tabBarShowLabel: false,
    tabBarStyle:{
      height: 50
    },

    tabBarIcon: ({focused, size, colour}) => {
     let iconName;
     if(route.name==="Home"){
       iconName= focused ? "home-sharp" : "home-outline";
       size = focused ? size + 8 : size + 2;
     } else if (route.name === "Search") {
       iconName = focused ? "search" : "ios-search-outline"
     }

return <Ionicons name={iconName} size={size} color={colour}/>

    }

    })}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Reels" component={Reels}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="Activity" component={Activity}/>
      
    </Tab.Navigator>
  )
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bottom' component={bottomTabScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



