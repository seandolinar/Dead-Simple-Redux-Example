// reducer takes state and action (in our a javascript object) as parameters
// then returns a state
// in our dead simple example the state is just a string, but can be a js object

// in this we check to see if the action is actually a 'FLIP_SWITCH' type (and not an intializer)
// then set the state as the action value, which is either 'on' or 'off' in this example

const lightSwitch = (state='off', action) => {
    if (action.type == 'FLIP_SWITCH') {
        state = action.value
    }
    return state
}

export default lightSwitch