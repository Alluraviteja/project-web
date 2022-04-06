import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const theme = createTheme();

function Login() {
        
    return (
    <Router>
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1562813733-b31f71025d54)',
                    //https://images.unsplash.com/photo-1603664670791-21b11ecfd70a
                    //https://images.unsplash.com/photo-1562813733-b31f71025d54
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                />
                
                <Routes>
                    <Route path="/" element={<SignIn /> } />
                    <Route path="/signIn" element={<SignIn /> } />
                    <Route path="/signUp" element={<SignUp />} />
                </Routes>
                
            </Grid>
        </ThemeProvider>
    </Router>
    );
}

export default Login