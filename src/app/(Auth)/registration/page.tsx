import { Button, TextField, Typography } from '@mui/material';
import styles from './registration_page.module.css'

const Registration = () => {

    return <div className={styles.reg_page}>
        <Typography variant="h4">New registration</Typography>
        <TextField required variant="standard" label="username"></TextField>
        <TextField required type="email" variant="standard" label="username"></TextField>
        <TextField required type="password" variant="standard" label="passwords"></TextField>
        <TextField required type="password" variant="standard" label="re-passwords"></TextField>
        <Button variant="contained">Registration </Button>
    </div>
}

export default Registration;