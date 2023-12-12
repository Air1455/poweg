const SET_SCROLL_CURRENT_SECTION= 'SET_SCROLL_CURRENT_SECTION'

const initState= {
    scrollCurrentSection: '',
}

export const setScrollCurrentSection= content=> {
    return {
        type: SET_SCROLL_CURRENT_SECTION,
        payload: content
    }
}

export const homeReducer= (state= initState, action)=> {
    switch (action.type) {
        case SET_SCROLL_CURRENT_SECTION:
            return {...state, scrollCurrentSection: action.payload}
        default:
            return state
    }
}