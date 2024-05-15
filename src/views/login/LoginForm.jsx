import { useEffect, useState } from 'react'
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button,
    InputAdornment,
    OutlinedInput,
    IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import BackGround from '../../assets/bg.jpg'
import useAuth from "../../hooks/useAuth"
import ToastAlert from '../../components/ToastAlert'
import LogoPokemon from '../../components/logoPokemon'

const LoginForm = () => {
    const [checked, setChecked] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [auth, setAuth] = useState({
        email: 'azaelweb1@gmail.com',
        password: 'conker123'
    })
    const { email, password } = auth

    const { iniciarSesion, toastAttributes, openToast, setOpenToast, errorAuth } = useAuth()

    useEffect(() => {
        const usuarioRecordado = localStorage.getItem('usuarioRecordado')
        const usuarioRecordadoFlag = Boolean(localStorage.getItem('recordarUsuario'))
        if (!usuarioRecordadoFlag) return
        setAuth(JSON.parse(usuarioRecordado))
        setChecked(usuarioRecordadoFlag)
    }, [])



    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleCloseToast = () => setOpenToast(false)

    const onChangeAuth = e => setAuth({ ...auth, [e.target.name]: e.target.value })

    const authSubmit = (e) => {
        e.preventDefault()
        iniciarSesion(auth)
        if (checked) {
            localStorage.setItem('usuarioRecordado', JSON.stringify(auth))

        }

    }

    const handleChangeChecked = (event) => {
        if (event.target.checked) {
            localStorage.setItem('recordarUsuario', event.target.checked)
        } else {
            localStorage.removeItem("usuarioRecordado")
            localStorage.removeItem("recordarUsuario")
        }
        setChecked(event.target.checked)



    }

    return (
        <Box
            sx={{
                display: { xs: "block", md: "grid" },
                gridTemplateColumns: "repeat(2, 1fr)",
                height: "100vh"

            }}>
            <Box
                component="form"
                onSubmit={e => authSubmit(e)}
                sx={{
                    padding: '40px',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>


                <Box sx={{
                    marginBottom: "40px"
                }}>
                    <Box sx={{
                        marginBottom: "20px"
                    }}>
                        <LogoPokemon
                            size={"200px"}
                        />
                        <Typography sx={{ color: '#3F3F3F', fontSize: '28px', marginTop: "30px", fontWeight: "bold" }}>Inicia sesión</Typography>
                        <Typography sx={{ color: '#949494', fontSize: '16px' }}>Introduce tu correo y contraseña</Typography>
                    </Box>

                    <FormControl variant="standard" sx={{ width: "100%" }}>
                        <InputLabel shrink sx={{ fontSize: "20px", color: "#000" }}>
                            Correo
                        </InputLabel>
                        <OutlinedInput
                            sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
                            name="email"
                            onChange={(e) => onChangeAuth(e)}
                            value={email}
                            id="outlined-basic"
                            variant="outlined" />
                    </FormControl>
                    <FormControl
                        variant="standard"
                        sx={{ width: "100%" }}>
                        <InputLabel shrink sx={{ fontSize: "20px", color: "#000" }}>
                            Contraseña
                        </InputLabel>

                        <OutlinedInput
                            sx={{ width: "100%", marginTop: "20px" }}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            onChange={(e) => onChangeAuth(e)}
                            value={password}

                            endAdornment={
                                <InputAdornment
                                    position="end">
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
                        />
                    </FormControl>

                    <FormGroup sx={{
                        marginTop: "20px"
                    }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChangeChecked}
                                />
                            }
                            label="Recordar mi usuario" />
                    </FormGroup>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "50px"
                }}>
                    <Button
                        sx={{ marginBottom: "30px", width: { xs: "100%", md: "40%" } }}
                        variant="contained"
                        type="submit">
                        Iniciar sesión
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(13, 62, 163, 0.6)',
                        mixBlendMode: 'hard-light',
                        zIndex: 1
                    }
                }}
            >
                <img
                    src={BackGround}
                    alt="Background imagen"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />
            </Box>


            {errorAuth && (
                <ToastAlert
                    openToast={openToast}
                    message={toastAttributes.message}
                    background={toastAttributes.background}
                    icon={toastAttributes.icon}
                    handleClose={handleCloseToast}
                ></ToastAlert>
            )}

        </Box>
    )
}

export default LoginForm