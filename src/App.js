import React, { Component } from 'react';

// react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AstroPhoto from './containers/AstroPhoto';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // sample data for astroPhoto
  state = {
    astroPhoto: {
      "copyright": "Ralf Rohner",
      "date": "2018-09-22",
      "explanation": "On the August 18 night flight from San Francisco to Zurich, a window seat offered this tantalizing view when curtains of light draped a colorful glow across the sky over Hudson Bay. Constructed by digitally stacking six short exposures made with a hand held camera, the scene records the shimmering aurora borealis or northern lights just as the approaching high altitude sunrise illuminated the northeastern horizon. It also caught the flash of a Perseid meteor streaking beneath the handle stars of the Big Dipper of the north. A few days past the meteor shower's peak, its trail still points across the sky toward Perseus. Beautiful aurorae and shower meteors both occur in Earth's upper atmosphere at altitudes of 100 kilometers or so, far above commercial airline fights. The aurora are caused by energetic charged particles from the magnetosphere, while meteors are trails of comet dust.",
      "hdurl": "https://apod.nasa.gov/apod/image/1809/CurtainsofLightRohner.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Window Seat over Hudson Bay",
      "url": "https://apod.nasa.gov/apod/image/1809/CurtainsofLightRohner1024.jpg"
    } 
  }


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <AstroPhoto />
        </div>
      </Router>
      
    );
  }
}

export default App;

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )
// export default BasicExample