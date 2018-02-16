// we'll either flip the switch on or off 
// the action is a javascript object
// the type is just a label
// the value is what we are going to pass to the state
// in our case the value will either be 'on' or 'off'

export default function flipSwith(value) {
    return {
      type: 'FLIP_SWITCH',
      value
    }
  }
