import { Button, TextField, Typography } from "@mui/material";
import styles from "./login_page.module.css" 
import Link from "next/link";

const Login = () => {
    return <div className={styles.login_page}>
        <Typography variant="h4">Login</Typography>
        <TextField required variant="standard" label = "username"></TextField>
        <TextField required type="password" variant="standard" label="passwords"></TextField>
        <Button variant="contained">Login </Button>
        <div className={styles.login_page_links}>
            <Link href= "#">Forgot password</Link>
            <Link href="registration">Registration</Link>
        </div>       
    </div>
}

export default Login;