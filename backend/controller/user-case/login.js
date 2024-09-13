exports.login = (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    // Perform validation on the input data
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
  
    // Simulate checking credentials (replace this with actual logic)
    if (email === 'user@example.com' && password === '123') {
      // Authentication successful
      return res.status(200).json({ message: 'Login correcto!' });
    } else {
      // Authentication failed
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
  };
  