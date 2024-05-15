// import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import CssBaseline from '@mui/material/CssBaseline'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// 

// const drawerWidth = 240

// function MainLayout() {
//    








//     if (cargando) return ''


//     return (
//         <>
//             {
//                 usuario?.id ? (
//                     <Box sx={{ display: 'flex' }}>
//                         <CssBaseline />
//                         <AppBar
//                             position='fixed'
//                             sx={{
//                                 backgroundColor: 'colores.gris',
//                                 boxShadow: 'unset',
//                                 borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//                                 width: { sm: `calc(100% - ${drawerWidth}px)` },
//                                 ml: { sm: `${drawerWidth}px` },
//                             }}
//                         >
//                             <Toolbar sx={{ justifyContent: { sm: 'space-between', md: 'flex-end' }, marginRight: { sm: '0px', md: '30px' } }}>
//                                 <IconButton
//                                     color='inherit'
//                                     aria-label='open drawer'
//                                     edge='start'
//                                     onClick={handleDrawerToggle}
//                                     sx={{ mr: 2, display: { sm: 'block', md: 'none', color: '#000' } }}
//                                 >
//                                     <MenuIcon />
//                                 </IconButton>
//                                 <Box sx={{
//                                     ':hover': 'none'
//                                 }}>
//                                     <IconButton
//                                         sx={{ '&:hover': { backgroundColor: 'transparent' } }}
//                                         onClick={handleMenuOpen}>
//                                         <AccountCircleOutlinedIcon />
//                                         <Typography sx={{ marginLeft: '5px' }}>Perfil</Typography>
//                                         <ArrowDropDownIcon />
//                                     </IconButton>
//                                     <Menu
//                                         anchorEl={anchorEl}
//                                         open={Boolean(anchorEl)}
//                                         onClose={handleMenuClose}
//                                     >
//                                         <MenuItem onClick={handleMenuClose}>
//                                             <Box>
//                                                 <Box>
//                                                     <Typography sx={{ fontWeight: 'bold' }}>{`${usuario?.name} ${usuario?.lastName}`}</Typography>

//                                                     <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
//                                                         {usuario?.position?.description}
//                                                     </Typography>

//                                                     <Typography sx={{ fontSize: 14 }} gutterBottom>
//                                                         {usuario?.email}
//                                                     </Typography>
//                                                     <Divider />
//                                                     <IconButton
//                                                         sx={{ '&:hover': { backgroundColor: 'transparent' } }}
//                                                         onClick={() => cerrarSesion()}>
//                                                         <LogoutIcon />
//                                                         <Typography sx={{ marginLeft: '5px', }}>Cerrar sesión</Typography>
//                                                     </IconButton>
//                                                 </Box>
//                                             </Box>
//                                         </MenuItem>

//                                     </Menu>
//                                 </Box>
//                             </Toolbar>
//                         </AppBar>
//                        
//                     </Box>
//                 ) : 
//             }
//         </>

//     )
// }

// MainLayout.propTypes = {
//     window: PropTypes.func,
// }

// export default MainLayout

import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import useAuth from '../hooks/useAuth'
import { Outlet, Navigate } from 'react-router-dom'
import { Divider } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
const pages = ['Products', 'Pricing', 'Blog']

const MainLayout = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [dynamicHeight, setDynamicHeight] = useState('100vh')
    const [mobileOpen, setMobileOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const { usuario, cerrarSesion, cargando } = useAuth()


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }


    const handleDrawerToggle = () => {
        if (window.innerWidth <= 600) {
            setMobileOpen(!mobileOpen)
        }
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
                                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    LOGO
                                </Typography>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {pages.map((page) => (
                                            <MenuItem key={page} onClick={handleCloseNavMenu}
                                                sx={{
                                                    color: "colors.titleColorBlack"

                                                }}>
                                                <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    LOGO
                                </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                        <Button
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: "colors.titleColorBlack", display: 'block' }}
                                        >
                                            {page}
                                        </Button>
                                    ))}
                                </Box>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Toolbar sx={{ justifyContent: { sm: 'space-between', md: 'flex-end' }, marginRight: { sm: '0px', md: '30px' } }}>
                                        <IconButton
                                            color='inherit'
                                            aria-label='open drawer'
                                            edge='start'
                                            onClick={handleDrawerToggle}
                                            sx={{ mr: 2, display: { sm: 'block', md: 'none', color: '#000' } }}
                                        >
                                            <MenuIcon />
                                        </IconButton>
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
                    <Box
                        component='main'
                        sx={{
                            backgroundColor: 'colores.gris',
                            flexGrow: 1,
                            p: 3,
                            height: dynamicHeight,
                        }}
                    >
                        <Toolbar />
                        <Outlet />
                    </Box>
                </>

            ) : <Navigate to='/' />}

        </>

    )
}
export default MainLayout