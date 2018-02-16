import React from 'react'

// just a basic div with a class that is dependent on a prop
class LightBulb extends React.Component {
    
    render () {
        return <div className={'light-bulb ' + this.props.power }></div>
    }
}

export default LightBulb