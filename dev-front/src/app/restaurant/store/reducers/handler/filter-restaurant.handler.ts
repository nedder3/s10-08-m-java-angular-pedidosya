import {RestaurantState} from "@root/restaurant/store/restaurant.store";
import {
  INITIAL_FILTER_STATE,
  RestaurantCustomFilter,
  RestaurantFilter
} from "@shared/filters/restaurant-filter.interface";
import {RestaurantSortedBy} from "@shared/enums/restaurant-sorted-by";


export const handleUpdateRestaurantFilter = (state: RestaurantState, {filtersSelected}: { filtersSelected: Partial<RestaurantFilter> }): RestaurantState => {
  return {
    ...state,
    filtersSelected: {...state.filtersSelected, ...filtersSelected}
  }
}

export const handleUpdateRestaurantCustomFilter = (state: RestaurantState, {filtersCustom}: { filtersCustom: Partial<RestaurantCustomFilter> }): RestaurantState => {
  return {
    ...state,
    filtersSelected: {
      ...state.filtersSelected,
      filtersCustom: {
        ...state.filtersSelected.filtersCustom,
        ...filtersCustom
      }

    }
  }
}

export const handleUpdateRestaurantSortedBy = (state: RestaurantState, {sortedBy}: { sortedBy: RestaurantSortedBy }): RestaurantState => {
  return {
    ...state,
    sortedBy
  }
}


export const handleResetRestaurantFilter = (state: RestaurantState): RestaurantState => {
  return {
    ...state,
    filtersSelected: {...INITIAL_FILTER_STATE},
    sortedBy: RestaurantSortedBy.Recommended
  }
}
