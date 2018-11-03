export default (state = {}, action) => {
    switch (action.type) {
        case 'BAR_ACTION':
            return {
                name: action.payload
            }
        default:
            return state
    }
}