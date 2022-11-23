import {FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import Category from '../../molecules/category';
import useOrientation from '../../../hooks/useOrientation';
import {useNavigation} from '@react-navigation/native';

type CATEGORY = {
    id: string;
    title: string;
    color: string;
};

type PROPS = {
    data: CATEGORY[];
};

const Categories: React.FC<PROPS> = ({data}) => {
    const {width, height, isPortrait} = useOrientation();
    const numOfColumns = width > 680 ? 3 : 2;
    const navigation = useNavigation();

    const renderItem: ListRenderItem<CATEGORY> = ({item}) => {
        const {id, color, title} = item;
        const onPressHandler = () => {
            navigation.navigate('Meals Overview', {
                catId: id,
                catName: title
            });
        };
        return (
            <Category
                id={id}
                color={color}
                title={title}
                onPress={onPressHandler}
            />
        );
    };

    return (
        <FlatList
            data={data}
            key={isPortrait ? 'h' : 'v'}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={numOfColumns}
            // extraData={}
        />
    );
};

Categories.defaultProps = {
    data: [],
};

export default Categories;
