import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { Outlet, Navigate } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import LogoPokemon from '../components/logoPokemon'
import Header from '../components/layout/Header'
import Paginator from '../components/layout/Paginator'
import usePokemonList from '../hooks/usePokemonList'


const MainLayout = () => {
    const [dynamicHeight, setDynamicHeight] = useState('100vh')
    const [anchorEl, setAnchorEl] = useState(null)
    const { usuario, cerrarSesion, cargando } = useAuth()

    const { loadingPokemons } = usePokemonList()

    const handleMenuClose = () => {
        setAnchorEl(null)
    }



    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }


    const handleResize = () => {
        const windowHeight = window.innerHeight
        const calculatedHeight = windowHeight > 600 ? '100vh' : 'auto'
        setDynamicHeight(calculatedHeight)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if (cargando) return

    return (
        <>
            {usuario?.id ? (
                <>
                    <AppBar
                        position="fixed"
                        sx={{
                            backgroundColor: 'colors.white',
                            boxShadow: 'unset',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                            color: "colors.titleColorBlack"
                        }}>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <LogoPokemon
                                    size={"120px"}
                                />


                                <Box sx={{ flexGrow: 1 }}>
                                    <Toolbar sx={{ justifyContent: { sm: 'space-between', md: 'flex-end' }, marginRight: { sm: '0px', md: '30px' } }}>
                                        <Box sx={{
                                            ':hover': 'none'
                                        }}>
                                            <IconButton
                                                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                                                onClick={handleMenuOpen}>
                                                <AccountCircleOutlinedIcon />
                                                <Typography sx={{ marginLeft: '5px' }}>Perfil</Typography>
                                                <ArrowDropDownIcon />
                                            </IconButton>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleMenuClose}
                                            >
                                                <MenuItem onClick={handleMenuClose}>
                                                    <Box>
                                                        <Box>
                                                            <Typography sx={{ fontWeight: 'bold' }}>{`${usuario?.name} ${usuario?.lastName}`}</Typography>


                                                            <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                                {usuario?.email}
                                                            </Typography>
                                                            <Divider />
                                                            <IconButton
                                                                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                                                                onClick={() => cerrarSesion()}>
                                                                <LogoutIcon />
                                                                <Typography sx={{ marginLeft: '5px', }}>Cerrar sesión</Typography>
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                </MenuItem>

                                            </Menu>
                                        </Box>
                                    </Toolbar>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                    <Header />
                    {loadingPokemons ? 'cargando ...' : (
                        <Box
                            component='main'
                            sx={{
                                backgroundColor: 'colores.gris',
                                flexGrow: 1,
                                p: 3,
                                height: dynamicHeight,
                                margin: "0 auto",
                                maxWidth: "1200px",
                                width: "95%"
                            }}
                        >
                            <Toolbar />
                            <Outlet />
                            <Paginator />

                        </Box>
                    )}

                </>

            ) : <Navigate to='/' />}

        </>

    )
}
export default MainLayout