const resumeReducer = (state = "", action) => {
    switch (action.type) {
        case "REGESTRATION_SUCCESS":
            return action.payload;
        case 'REGESTRATION_FAILURE':
            return '';
        default:
            return state;
    }
}

export default resumeReducer;