"use strict"
const React = require('react');

class LoginView extends React.Component{
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
          <form action="/login" method="post">
              <div>
                  <label>Email</label>
                  <input type="text" name="email" />
              </div>
              <div>
                  <label>Password</label>
                  <input type="password" name="password" />
              </div>
              <button type="submit">Login</button>
          </form>
        </body>
      </html>
    );
  }
};

module.exports = LoginView;
