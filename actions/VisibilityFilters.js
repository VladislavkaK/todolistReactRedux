export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setVisibilityFilter = filter => {
    
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
  