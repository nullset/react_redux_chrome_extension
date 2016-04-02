// import React from 'react';
// import Note from './Note.jsx';
//
// export default class App extends React.Component {
//   render() {
//     return <Note />;
//   }
// }



import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Click Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
