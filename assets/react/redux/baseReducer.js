const SHOW_APP_BAR= 'SHOW_APP_BAR'

const initState= {
    appBarIsDisplay: false,
}

export const setDisplayAppBar= content=> {
    return {
        type: SHOW_APP_BAR,
        payload: content
    }
}

export const baseReducer= (state= initState, action)=> {
    switch (action.type) {
        case SHOW_APP_BAR:
            return {...state, appBarIsDisplay: action.payload}
        default:
            return state
    }
}