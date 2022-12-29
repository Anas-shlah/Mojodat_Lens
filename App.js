import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import ScanBarcodeScreen from './src/screens/ScanBarcodeScreen';
import AssetSearch from './src/screens/AssetSearch';
import {COLORS} from './src/constants';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false, animation: 'simple_push'}}
          />
          <Stack.Screen
            name="ScanBarcodeScreen"
            component={ScanBarcodeScreen}
            options={{headerShown: false, animation: 'slide_from_left'}}
          />
          <Stack.Screen
            name="AssetSearch"
            component={AssetSearch}
            options={{
              headerShown: false,
              animation: 'slide_from_bottom',
              contentStyle: {backgroundColor: COLORS.background},
            }}
            initialParams={{Barcodescan: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
