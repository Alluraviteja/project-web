import React from 'react';
import Grid from '@mui/material/Grid';
import LoginCopyright from './LoginCopyright';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link as NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(2).max(25).required()
})

function SignIn() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = (data) => {
        
    }

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(submitForm)} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    {...register('email')}
                />
                <small>{errors.email?.message}</small>
                <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    {...register('password')}
                />
                <small>{errors.password?.message}</small>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    margin="normal"
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <NavLink to="/signUp">
                            Forgot password?
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to="/signUp">
                            {"Don't have an account?"}
                        </NavLink>
                    </Grid>
                </Grid>
                <LoginCopyright sx={{ mt: 5 }} />
            </Box>
            </Box>
        </Grid>
    )
}

export default SignIn