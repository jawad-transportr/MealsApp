/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Text } from 'react-native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
            />
            <Navigation />
        </SafeAreaView>
    );
};

export default App;
