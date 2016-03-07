User = require('../../models/user');

function* handlePost(){
  console.log("Create page!")
  console.log(this.request.body);
  // Check existence:

  // Check email/password validity

  // Check
  var user = new User({email: this.request.body.email});
  user.setPassword(this.request.body.password);
  user.save(function(err, user){
    if(err){
      console.error('Mongo Error: '+err);
    }else{
      console.log('User created: ', user);
    }
  });

  this.redirect('/');
}

module.exports = {post: handlePost};
