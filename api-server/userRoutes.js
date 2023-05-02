const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('./schemas/userSchema');
const router = express.Router();
const app = express();
app.use(express.json());


//creating users SIGN UP
router.post("/", async (req, res) => {
	const plainTextPassword = req.body.password;
	const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
	try{
		const user = {
			name: req.body.name,
			userName: req.body.userName,
			email: req.body.email,
			password: hashedPassword
		};
		const userDocument = new User(user);
		console.log(userDocument);
		await userDocument.save();
		res.json({"message": "User signed up successfully"});
	}
	catch(e){
		res.status(500).send('Something went wrong');
	}
});

//LOGIN
router.post("/login", async(req,res)=>{
	try{
		const user = await User.find({userName: req.body.userName});
		if(user && user.length > 0){
			const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
			
			if(isValidPassword){
				//generating token
				const token = jwt.sign({
					userName: user[0].userName,
					userId: user[0]._id
				}, process.env.JWT_SECRET,{
					expiresIn: '1h'
				});
				
				res.status(200).json({
					'accessToken': token,
					'message': 'Login Successfull'
				});
			}
			else{
				res.status(401).json({
					"error": "Authentication failed!"
				});
			}
		}
		else{
			res.status(401).json({
				"error": "Authentication failed!"
			});
		}
		
	}catch{
		res.status(401).json({
				"error": "Authentication failed!"
			});
	}
})

module.exports = router;