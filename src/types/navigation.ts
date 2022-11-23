export type MEALSOVERVIEW = {
    catId: string,
    catName: string
}

export type AppStackParamList = {
    "Categories": undefined,
    "Meals Overview": MEALSOVERVIEW
}

export interface RootStackParamList extends AppStackParamList{
    
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }