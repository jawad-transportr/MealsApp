import {View, Button, FlatList, ListRenderItem} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {MEAL_TYPE} from '../../types/types';
import useOrientation from '../../../hooks/useOrientation';
import MealItem from '../../molecules/mealItem';
import { useNavigation } from '@react-navigation/native';

type PROPS = {
    meals: MEAL_TYPE[];
};


const Meals: React.FC<PROPS> = ({meals}) => {
    const {width, height, isPortrait} = useOrientation();
    const navigation = useNavigation();

    const headerButtonPressHandler = () => {
        console.log("Pressed")
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title='Tap Me' onPress={headerButtonPressHandler}/>
            }
        })
        return () => {};
    }, [navigation, headerButtonPressHandler]);

    const renderItem: ListRenderItem<MEAL_TYPE> = ({item}) => {
        // const onPressHandler = () => {
        //     navigation.navigate('Meals Overview', {
        //         catId: id,
        //     });
        // };
        return (
            <MealItem
                mealItem={item}
                // onPress={onPressHandler}
            />
        );
    };

    return (
        <View>
            <FlatList
                data={meals}
                key={isPortrait ? 'h' : 'v'}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                // numColumns={numOfColumns}
            />
        </View>
    );
};

export default Meals;
