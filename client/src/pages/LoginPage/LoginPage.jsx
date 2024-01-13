import MovieAddictLogo from '../../images/movie-addict-logo.png';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../main';
import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box'

function LoginPage() {
    return (
        <div style={{backgroundColor:'#000000', minHeight: '100vh', overflow: 'hidden' }}>
            <ThemeProvider theme={theme}>  
                <Box sx={{margin: 'auto', width: '50%', padding: '10px'}}>
                    <div>
                        <img src={MovieAddictLogo} style={{width: '300px', height:'300px', display:'block', marginLeft:'auto', marginRight: 'auto'}}></img>
                    </div>
                    <div style={{color:'blue'}}> 
                            <Button variant='contained' color='secondary' sx={{}}>Sign up with Email</Button>
                            <Button variant='contained' color='white'><GoogleIcon fontSize='small'/>Continue with Google</Button>
                    </div>
                    <div>
                        <h3 style={{fontWeight: 300, color: 'white'}}>Already have an account?</h3>
                        <Button variant='outlined' color='primary' style={{ borderRadius: 10 }}>Login in</Button>
                    </div>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default LoginPage