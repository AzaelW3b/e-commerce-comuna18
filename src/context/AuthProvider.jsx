import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    const [errorAuth, setErrorAuth] = useState(false)
    const [openToast, setOpenToast] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [toastAttributes, setToastAttributes] = useState({
        icon: "",
        message: "",
        background: "",
    })

    const navigate = useNavigate()
    const users = [
        { id: 1, name: "Azael", lastName: "Garcia Jaimes", email: "azaelweb1@gmail.com", password: "conker123" },
        { id: 2, name: "Evelin", lastName: "Garcia Morales", email: "evelin@gmail.com", password: "conker123" },
    ]

    useEffect(() => {
        autenticarUsuario()
    }, [])

    const iniciarSesion = (auth) => {
        const usuarioExiste = users.find(user => user.password === auth.password && user.email === auth.email)
        console.log(usuarioExiste)
        if (usuarioExiste) {
            setCargando(false)
            setErrorAuth(false)
            localStorage.setItem('token', usuarioExiste?.userId)
            localStorage.setItem('usuario', JSON.stringify(usuarioExiste))
            setUsuario(usuarioExiste)
            navigate("/inicio")

        } else {
            setOpenToast(true)
            setToastAttributes({
                icon: "error",
                message:
                    "Los datos de tu email o contraseña son incorrectos. Verifica tus datos e inténtalo más tarde.",
                background: "#FF5252",
            })
            setErrorAuth(true)
        }
    }
    const autenticarUsuario = () => {
        const token = localStorage.getItem('token')
        const usuarioStr = localStorage.getItem('usuario')

        if (token) {
            setCargando(false)
        }
        setCargando(false)

        if (!token || !usuarioStr) return

        setUsuario(JSON.parse(usuarioStr))
    }

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')
        setUsuario(null)
        navigate("/")
        setCargando(false)
    }

    return (
        <AuthContext.Provider
            value={{
                // state
                usuario,
                cargando,
                errorAuth,
                toastAttributes,
                openToast,
                //metodos
                iniciarSesion,
                cerrarSesion,
                setOpenToast


            }}
        >{children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthContext