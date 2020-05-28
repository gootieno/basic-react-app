import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };


    formatValue(){
        const { value } = this.state
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    handleIncrement = () =>{
        this.setState({ value: this.state.value + 1})
    }

    render() {
        return (
            <>  
                <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button><br/>
            </>
        )
    }
}



export default Counter;