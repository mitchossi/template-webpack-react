import React from "react";

'use strict';

const e = React.createElement;

export class ReactCompCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    if (this.state.liked) {
      return 'You liked this.';
    }

  return <button onClick ={ () => this.setState({ liked: true }) }>{this.props.text}</button>
  }
}

// export function renderCheckComp() {
//   const domContainer = document.querySelector('#react-comp-check');
//   ReactDOM.render(e(ReactCompCheck), domContainer);
// }

// reuse component https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda
