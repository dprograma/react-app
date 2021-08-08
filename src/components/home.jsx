import React, { Component } from 'react';
import Carousel from './carousel';
import Navbar from './navbar';

class Home extends Component {
    state = { 
        styles:{
            style1: {
                color:'red',
                fontWeight: 'bolder'
            },
            style2:{
                color:'black',
                fontWeight: 'bolder'
            },
            style3:{
                minHeight: '450px'
              }
    
        },
        imageUrls:{
            image1:'images/alex1.jpg',
            image2:'images/alfred1.jpg',
            image3:'images/benjamin1.jpg'
        }
     }
    render() { 
        return ( 
            <div>
                <Navbar styles={this.state.styles} />
                <Carousel styles={this.state.styles} imageUrls={this.state.imageUrls} />
            </div>
         );
    }
}
 
export default Home;