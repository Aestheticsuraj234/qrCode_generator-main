import { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Screens/Authentication/SignUp/SignUp'
import Login from './Screens/Authentication/Login/Login'
import Hero from './Screens/HeroScreen/Hero'
import ScannerScreen from './Screens/Scanner/ScannerScreen'
import UrlScreen from './Screens/UrlScreen/UrlScreen'
import TextScreen from './Screens/TextScreen/TextScreen'
import MailScreen from './Screens/MailScreen/MailScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import EditScreen from './Screens/EditScreen/EditScreen'
import { QrCodeProvider } from './context/QrCodeContext'


const Stack = createNativeStackNavigator();
function App() {

  return (
    <QrCodeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Home" component={Hero} />
          <Stack.Screen name="Scanner" component={ScannerScreen} />
          <Stack.Screen name="URL-QR" component={UrlScreen} />
          <Stack.Screen name="TEXT-QR" component={TextScreen} />
          <Stack.Screen name="Mail-QR" component={MailScreen} />
          <Stack.Screen name="Contact-QR" component={ContactScreen} />
          <Stack.Screen
            name="Edit-QR"
            component={EditScreen}
            options={{
              headerStyle: {
                backgroundColor: '#7286d3',
                elevation: 0, 
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QrCodeProvider>
  );
}

export default App;