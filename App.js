import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddData from './screen/AddData';
import ViewData from './screen/ViewData';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

     <Stack.Navigator>
      <Stack.Screen name="AddData" component={ViewData}  options={{ headerShown: false }}  />
      <Stack.Screen name="ViewData" component={ViewData}  options={{ headerShown: false }}  />

    </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignContent: 'center',
   justifyContent: 'center',
    backgroundColor: 'white'
    },
  input:{
      width: '100%'
  }
});