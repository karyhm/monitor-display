const validateEmail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

const validatePassword = (password) => {
	const sPassword = String(password)
	let regExp = /([^\s*$])/

	if (password.length < 6) {
		console.log('Password must be larger than 6 chars')
		return false
	}

	if (!regExp.test(sPassword)) {
		console.log('Pasword should not cointain whitespaces')
		return false
	}

	regExp = /([0-9])/
	if (!regExp.test(sPassword)) {
		console.log('Password must contain a number')
		return false
	}

	regExp = /([A-Z])/
	if (!regExp.test(sPassword)) {
		console.log('Must contain at least one capital letter')
		return false
	}

	return true
}

const logNote = (note, body) => {
	//Break on this and use repl to output note
	console.log('--------')
	console.log(`Title: ${note}`)
	console.log(`Body: ${body}`)
}

module.exports = {
	validateEmail,
	validatePassword,
	logNote
}