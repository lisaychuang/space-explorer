// astronomy photo of the day container
// https://api.nasa.gov/api.html#apod

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AstronomyPhoto extends Component {

  render() {
    return (
      <div>
        <h1>Astronomy photo of the day</h1>
      </div>
    );
  }
}

export default AstronomyPhoto;

// const mapStateToProps = state => {
//   return { quotes: state.quotes }
// }

// //add arguments to connect as needed
// export default connect(mapStateToProps)(Quotes);
