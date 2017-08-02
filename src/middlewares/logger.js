export default store => next => action => {
    console.log('---------Previous state---------:', store.getState());
    console.log('---------Dispatching action---------: ', action);
    const result = next(action);
    console.log('---------Next state---------:', store.getState());
    return result;
};