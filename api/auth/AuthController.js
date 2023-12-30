let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
let User = require('../user/User');

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let VerifyToken = require('./VerifyToken');
//let config = require('../config');

const secret = "supersecret";



router.post('/login', async(req, res) => {


  try{

    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(404).send("User not found");

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordCorrect) return next(createError(400, "Wrong password or username"));

    // a token is genereted using JWT, at the time of successfull login and it is send to client as a cookie.
    const token = jwt.sign({ id: user._id }, secret, {
          expiresIn: 86400 // expires in 24 hours
         });
    const { password, isAdmin, ...otherDetails } = user._doc;

    res.cookie("access_token", token, {httpOnly: true}).status(200).json({...otherDetails});

} catch (err) {
    res.send("An error occured " + err);
}

});


router.post('/register', async(req, res) =>  {
  

  const  hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    await User.create({
      name : req.body.name,
      email : req.body.email,
      mobile: req.body.mobile,
      password : hashedPassword
    },
    function (err, user) {
      if (err){
        //console.log(err);
        res.status(500).send(err)
      } //return res.status(500).send("There was a problem registering the user.")
      // create a token
      let token = jwt.sign({ id: user._id }, secret, {
        expiresIn: 86400 // expires in 24 hours, 86400 is seconds in 24 hours
      });
      res.status(200).send({ auth: true, token: token, status: "registered" });
    }); 
 
  });


  router.get('/me', VerifyToken, async(req, res, next) =>  {

    await User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      
      res.status(200).send({status: "you are authenticated"});
      // console.log(user);
      // console.log(user.id)
    });
    
  });


  module.exports = router;