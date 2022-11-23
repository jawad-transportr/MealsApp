import {View, Pressable, Platform, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MEAL_TYPE} from '../../types/types';

type PROPS = {
    mealItem: MEAL_TYPE;
};

const MealItem: React.FC<PROPS> = ({mealItem}) => {
    const {
        title,
        affordability,
        categoryIds,
        complexity,
        duration,
        id,
        imageUrl,
        ingredients,
        isGlutenFree,
        isLactoseFree,
        isVegan,
        isVegetarian,
        steps,
    } = mealItem;
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                // style={pressed => (pressed ? styles.buttonPressed : null)} // Causing bug in android - opacity 0.5 default
                >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>
                            {complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailItem}>
                            {affordability.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});

export default MealItem;
