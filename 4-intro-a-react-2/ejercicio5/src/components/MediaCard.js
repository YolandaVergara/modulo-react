import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
    <Header title={this.props.title} date={this.props.date}/>
    
    <Main text={this.props.text}/>
    <Footer />
      </div>
    );
  }
}

export default MediaCard;
