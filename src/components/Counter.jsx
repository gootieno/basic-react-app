import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
    };

    formatCount(){
        const { count } = this.state
        return count === 0 ? 'Zero' : count;
    }

    render() {
        const { count } = this.state
        return (
            <>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </>
        )
    }
}

export default Counter;