"use strict"
const React = require('react');

class MainView extends React.Component{
  static propTypes = {
    session: React.PropTypes.object,
  }

  static defaultProps = {
    count: 0,
  }

  render(){
    return(
      <html>
        <head>
          <script src="assets/bundle.js"></script>
        </head>
        <body>
          Main! You've visited this page {this.props.session.count} time{this.props.session.count===1?"":"s"}.
        </body>
      </html>
    );
  }
};

module.exports = MainView;
