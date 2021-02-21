
import React from 'react';

import {NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenContainer from './ScreenContainer/ScreenContainer';
import Settings from './Settings/Settings';
import {StyleSheet} from 'react-native';
import Profile from './Profile/Profile';
import FAQ from './FAQ/FAQ';
const App: () => React$Node = () => {
  const Stack = createStackNavigator();


  return (
    <>
     <NavigationContainer>
       <Stack.Navigator
           screenOptions={{
             headerShown: false,
             cardStyle: { backgroundColor: "transparent" },
             cardOverlayEnabled: true,
             cardStyleInterpolator: ({
                                       current: { progress },
                                     }) => ({
               cardStyle: {
                 opacity: progress.interpolate({
                   inputRange: [0, 0.5, 0.9, 1],
                   outputRange: [0, 0.25, 0.7, 1],
                 }),
               },
               overlayStyle: {
                 opacity: progress.interpolate({
                   inputRange: [0, 1],
                   outputRange: [0, 0],
                   extrapolate: "clamp",
                 }),
               },
             }),
           }}
           mode="modal"
           initialRouteName="profile"
           headerMode="none"
       >
         <Stack.Screen
             name={'settings'}
             component={() => (
                 <ScreenContainer>
                   <Settings/>
                 </ScreenContainer>
             )}/>
           <Stack.Screen
               name={'profile'}
               component={() => (
                   <ScreenContainer>
                       <Profile/>
                   </ScreenContainer>
               )}/>
           <Stack.Screen
               name={'faq'}
               component={() => (
                   <ScreenContainer>
                       <FAQ/>
                   </ScreenContainer>
               )}/>
       </Stack.Navigator>
     </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
