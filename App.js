import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import GameContainer from './components/GameContainer';
import { NavigationContainer } from '@react-navigation/native';
import { StartScreen } from './components/StartScreen';
import { Store } from './components/Store';
   const Stack = createStackNavigator();
export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            running: true, 
            score: 0,
            played: 0,
        };
    }

    
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} options={{
          headerShown: false
          }} />
      <Stack.Screen name="GameContainer" component={GameContainer} options={{
          headerShown: false
      }} />
      <Stack.Screen name="Store" component={Store} options={{
          title: "Store",
          }} />
    </Stack.Navigator>
            </NavigationContainer>
        );
    }
}