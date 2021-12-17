import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PostList} from './PostList';
import {PostDetail} from './PostDetail';
import {PostAdd} from './PostAdd';
import {PostEdit} from './PostEdit';

const Stack = createNativeStackNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PostList">
                <Stack.Screen name="PostList" 
                            component={PostList} 
                            options={{ title: 'Timeline' }}/>
                <Stack.Screen name="PostDetail" 
                          component={PostDetail} 
                          options={{ title: 'Detail Post' }}/>
                <Stack.Screen name="PostAdd" 
                          component={PostAdd} 
                          options={{ title: 'Add Post' }}/>
                <Stack.Screen name="PostEdit" 
                          component={PostEdit} 
                          options={{ title: 'Edit Post' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppHome;