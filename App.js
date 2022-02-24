
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Register';
import SignUp from './SignUp';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName='Register'
      >
        <Stack.Screen name='Register' component={Register}/> 
        {/* <Stack.Screen name='SignUp' component={SignUp}/>     */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
