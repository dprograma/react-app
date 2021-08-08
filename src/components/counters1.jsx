import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
     }

    //  styles = {
    //     fontSize: 15,
    //     fontWeight: 'bold'
    //  }

    // render() { 
    //     return ( 
    //         <div>
    //             <span style={this.styles} className="badge badge-warning m-2">{ this.formatCount() }</span>
    //             <button className="btn btn-secondary">Increment</button>
    //         </div>
    //      );
    // }

    // render() { 
    //     return ( 
    //         <div>
    //            <Counter />
    //            <Counter />
    //            <Counter />
    //            <Counter />
    //         </div>
    //      );
    // }

    render() { 
        return ( 
            <div>
               {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} selected={true} />)}
            </div>
         );
    }


    //   
}
 
export default Counters;
