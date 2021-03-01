const express = require('express') 
const bodyParser = require('body-parser') 
const repo = require('./repository') 

const app = express() 

const port = process.env.PORT || 3000 

// The body-parser middleware 
// to parse form data 
app.use(bodyParser.urlencoded({extended : true})) 

// Get route to display HTML form 
app.get('/signup', (req, res) => { 
res.send(` 
	<div> 
	<form method='POST'> 
	<div> 
		<div> 
		<label id='email'>Username</label> 
		</div> 
		<input type='text' name='email'
			placeholder='Email'
			for='email'> 
	</div> 
	
	<div> 
		<div> 
		<label id='password'>Password</label> 
		</div> 
		<input type='password' name='password'
				placeholder='Password'
		for='password'> 
	</div> 

	<div> 
		<button>Sign Up</button> 
	</div> 
	</form> 
	</div> 
`) 
}); 

// Post route to handle form submission 
// logic and add data to the database 
app.post('/signup', async (req, res) => { 
const {email, password} = req.body 

const addedRecord = await 
	repo.createNewRecord({email, password}) 

console.log(`Uusi käyttäjä : 
	${JSON.stringify(addedRecord, null, 4)}`) 
	
res.send("Information added to the "
		+ "database successfully.") 
}) 

// Server setup 
app.listen(port, () => { 
console.log(`Server start on port ${port}`) 
}) 
