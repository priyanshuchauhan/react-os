export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const barAction = (data) => {
    return {
        type: 'BAR_ACTION',
        payload: data
    }
}