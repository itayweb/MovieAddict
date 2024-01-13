import { ThemeProvider } from '@emotion/react';
import { theme } from '../../main';
import Box from '@mui/material/Box'
import MovieAddictLogo from '../../images/movie-addict-logo.png';
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import {InputAdornment, IconButton, FilledInput} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function SignupPage() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div style={{ minHeight: '100vh', overflow: 'hidden'}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box sx={{m: 0.5}}>
                    <Box>
                        <img src={MovieAddictLogo} style={{width: '300px', height:'300px', display:'block', marginLeft:'auto', marginRight: 'auto'}}></img>
                    </Box>
                    <Box>
                        <Grid
                            container
                            spacing={1}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                            wrap="wrap"
                        >
                            <TextField
                                id="emailTxt"
                                label="Email"
                                variant="filled"
                                required
                                type="email"
                            />
                            <TextField
                                id="usernameTxt"
                                label="Username"
                                variant="filled"
                                required
                                type="text"
                            />
                            <TextField
                                id="firstNameTxt"
                                label="First Name"
                                variant="filled"
                                required
                                type="text"
                            />
                            <TextField
                                id="lastNameTxt"
                                label="Last Name"
                                variant="filled"
                                required
                                type="text"
                            />
                            <FilledInput
                                id="passwordTxt"
                                label="Password"
                                variant="filled"
                                required
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder='Password'
                            />
                        </Grid>
                    </Box>
                    <Box>
                        <Button variant="contained" color="secondary" sx={{display:'block',marginLeft:'auto', marginRight: 'auto'}}>Submit</Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default SignupPage