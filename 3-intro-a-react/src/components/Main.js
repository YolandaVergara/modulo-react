import React from 'react';
import '../stylesheets/Main.scss';


function Main(props) {
  return (
    <div className="text">
<p>{props.text}</p>

    </div>
  );
}

export default Main;