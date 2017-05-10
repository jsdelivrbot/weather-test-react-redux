import React, {Component} from 'react';

// ref system in react, anywhere call this.refs.ref-value, will give you actual html element
class GoogleMap extends Component {
  // life cycle mehod, get call after the components render in the screen
  componentDidMount(){  // this arg,googlemap will find the this.refs.map html element on the screen and embed to it 
    new google.maps.Map(this.refs.map,{  // creat google map inside our doc
      zoom: 12,
      center:{
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }


  render(){
    return <div ref='map' />
  }
}

export default GoogleMap;
