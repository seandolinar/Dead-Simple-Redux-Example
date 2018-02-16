import React from 'react'


// radio button switch that has an onChange event listener
// and derives it's checked property from this.props.power
class LightSwitch extends React.Component {

    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        // e.target.value will be either "on" or "off"
        this.props.onChange(e.target.value)
    }

    render () {
        return <div>
            <div>ON</div>
            <input type="radio" name="light-switch" value="on" label="ON" onChange={this.handleChange} checked={this.props.power == 'on'} />
            <div>OFF</div>
            <input type="radio" name="light-switch" value="off" label="OFF" onChange={this.handleChange} checked={this.props.power == 'off'}/>
        </div>
    }
}

export default LightSwitch