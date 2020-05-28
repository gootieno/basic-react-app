import React, { Component } from 'react'
import Counter from './Counter';


export default class Counters extends Component {
    render() {
        const { onReset, onDelete, onIncrement, counters } = this.props
        return (
            <>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button><br/>
                {counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement} 
                        counter={counter}
                    />
                ))}
            </>
        );
    }
}
