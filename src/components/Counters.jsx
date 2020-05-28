import React, { Component } from 'react'
import Counter from './Counter';


export default class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.state.filter(counter => counter.id !== counterId)
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => counter.value = 0)
        this.setState({ counters})
    }


    render() {
        return (
            <>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button><br/>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter}/>
                )}
            </>
        );
    }
}
