import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Library from './pages/Library';
import MyPage from './pages/MyPage';

const Tab = createBottomTabNavigator();

const App = () => {
  // pages에서 각 페이지들을 가져와 bottom tab의 각 탭과 연결
  return (
    <NavigationContainer initialRouteName="HOME">
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#f5f5f5',
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#808080',
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'HOME') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'CALENDAR') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'LIBRARY') {
              iconName = focused ? 'barbell' : 'barbell-outline';
            } else if (route.name === 'MY PAGE') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        })}>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="CALENDAR" component={Calendar} />
        <Tab.Screen name="LIBRARY" component={Library} />
        <Tab.Screen name="MY PAGE" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
