import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import "./auth.css"

const useStyles = makeStyles(theme => ({

    primaryBtn: {
        margin: theme.spacing(3),
        color: theme.palette.common.white,
      },
      
    secondaryBtn: {
        margin: theme.spacing(3),
        color: theme.palette.secondary,
      },
      
    container: {
      margin: 'auto',
      flexWrap: 'wrap',
      width: '400px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '15px',
      display: 'contents',
    },
    textField: {
      width: 300,
      borderRadius: '5px',
      '& label.Mui-focused': {
        color: theme.palette.primary,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: theme.palette.primary.light,
        borderBottomWidth: '4px',
      },
    },
  }));


export default function RegisterForm(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        username: '',
        password: '',
        confirmation: '',
      });

    const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }
    
    const handleCancel = () => {
        props.close()
    }
    
    
    return (
        <form className={classes.container} noValidate autoComplete="off">            
            <TextField
                id="email"
                label="Email"
                value={values.email}
                onChange={handleChange('email')}
                type="email"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}          
                margin="normal"
                variant="filled"                
            />            
            <TextField
                id="username"
                label="Username"
                value={values.username}
                onChange={handleChange('username')}
                type="text"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}          
                margin="normal"
                variant="filled"                
            />
            <TextField
                id="password"
                label="Password"
                value={values.password}
                onChange={handleChange('password')}
                type="password"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />
            <TextField
                id="confirmation"
                label="Confirm Password"
                value={values.confirmation}
                onChange={handleChange('confirmation')}
                type="password"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />
            <div>
                <Button 
                    variant="contained" 
                    color="default" 
                    className={classes.secondaryBtn}
                    onClick={handleCancel}
                >
                Cancel
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.primaryBtn}
                    type="submit"
                    onClick={handleSubmit}
                >
                Sign in
                </Button>
            </div>

        </form>
    )
}
