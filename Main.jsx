
import React, {useEffect} from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './Screen/Home'
import Login from './Screen/Login'
import Footer from './Components/Footer';
import Profile from './Screen/Profile'
import Register from './Screen/Register'
import Camera from './Screen/Cameracomp.jsx'
import ForgetPassword from './Screen/ForgetPassword'
import ResetPassword from './Screen/ResetPassword'
import ChangePassword from './Screen/ChangePassword';
import Verify from './Screen/Verify'



const Stack = createNativeStackNavigator()
const Main = () => {


  return (
  
   
  <NavigationContainer>
    <Stack.Navigator initialRouteName= "login" > 
       <Stack.Screen name='home' component={Home}  options={{headerShown:false}} />
       <Stack.Screen name='login' component={Login} options={{headerShown:false}}  />
       <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
       <Stack.Screen name='camera' component={Camera} options={{ headerShown: false }} />
       <Stack.Screen name='profile' component={Profile} />
       <Stack.Screen name='forgetpassword' component={ForgetPassword} options={{ headerShown: false }} />
       <Stack.Screen name='resetpassword' component={ResetPassword} options={{ headerShown: false }} />
       <Stack.Screen name='changepassword' component={ChangePassword} options={{ headerShown: false }} />
       <Stack.Screen name='verify' component={Verify} options={{ headerShown: false }} />
       </Stack.Navigator>
       <Footer />

  </NavigationContainer>
  )
}

export default Main