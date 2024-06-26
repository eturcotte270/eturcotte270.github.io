'use strict'; 
const e = React.createElement; 
class myButton extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { isliked: false }; 
  } 
 
  render() { 
    if (this.state.isliked) { 
      return 'I like this page!!!'; 
    } 
 
    return e( 
      'button', 
      { onClick: () => this.setState({ isliked: true }) }, 
      'Like Button' 
    ); 
  } 
} 
const domContainer = document.querySelector('#like_button_container'); 
ReactDOM.render(e(myButton), domContainer);