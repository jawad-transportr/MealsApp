import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackParamList} from '../../../types/navigation';
import {MEALS} from '../../../../dummy-data';
import Meals from '../../organism/meals';
import { MEAL_TYPE } from '../../types/types';

type MealsOverviewRouteType = RouteProp<AppStackParamList, 'Meals Overview'>;

const MealsOverview = () => {
    const {
        params: {catId},
    } = useRoute<MealsOverviewRouteType>();

    const displayedMeals:MEAL_TYPE[] = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    return <Meals meals={displayedMeals}/>;
};

export default MealsOverview;
