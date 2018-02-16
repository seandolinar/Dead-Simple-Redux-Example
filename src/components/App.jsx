import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import LightBulb from './LightBulb'
import LightSwitch from './LightSwitch'

import flipSwitch from '../action'
import store from '../store'
import reducer from '../reducer'
import { connect } from 'react-redux'


// basic top level component that houses our lighting containers
class App extends React.Component {

    render () {
        return <div>
                <LightBulb power={this.props.power} />
                <LightSwitch onChange={this.props.onChange} power={this.props.power}/>
            </div>
    }
}

// maps the dispatch function into a function we can pass into React component
// this one we pass the flipSwitch action with the value parameter into the dispatch
// and then it gets passed in the the App component as a prop
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (value) => {
            dispatch(flipSwitch(value))
        }
    }
}

// this takes the output of the reducer (which for our example is a string) and puts it into the props of the app
// state will only be 'on' or 'off' in this app and it's accessible as this.props.power
const mapStateToProps = (state) => {
    return {
      power: state
    }
  }

// takes the two mapping funcitons and connect them to the App component
const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


// renders everything
// also note the Provider component and the store.
ReactDOM.render(<Provider store={store}>
                    <ConnectedApp />
                </Provider>
                , document.getElementById('light')) 
