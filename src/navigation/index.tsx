import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';
import CategoriesScreen from '../components/screens/categories/categories';
import MealsOverview from '../components/screens/mealsOverview/mealsoverview';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={{
                    headerStyle: {backgroundColor: '#351401'},
                    headerTintColor: 'white',
                    cardStyle: {backgroundColor: '#3f2f25'}, 
                }}>
                <Stack.Screen
                    name="Categories"
                    options={{title: 'All Categories'}}
                    component={CategoriesScreen}
                />
                <Stack.Screen
                    name="Meals Overview"
                    options={({route}) => ({title: route.params.catName})}
                    // options={{headerRight: () => ...anything}} // for setting header right button
                    component={MealsOverview}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
4;

export default Navigation;
