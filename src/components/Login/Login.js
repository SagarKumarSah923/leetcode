import React, { useState } from 'react';
import "./Login.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We can add our login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <AccountCircle fontSize="small" style={{ marginRight: '8px' }} />
          ),
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <LockIcon fontSize="small" style={{ marginRight: '8px' }} />
          ),
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
};

export default Login;
