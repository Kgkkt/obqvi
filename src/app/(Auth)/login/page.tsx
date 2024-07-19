import { Button, TextField } from "@mui/material";
import styles from "./login.module.css" 
import Link from "next/link";

const Login = () => {
    return <div className={styles.login_page}>
        
        <TextField required variant="standard" label = "username"></TextField>
        <TextField required type="password" variant="standard" label="passwords"></TextField>
        <Button variant="contained">Login </Button>
        <div className={styles.login_page_links}>
            <Link href= "d#">Забраве парола</Link>
            <Link href="d#">Нова регистрация</Link>
        </div>
    </div>
}

export default Login;