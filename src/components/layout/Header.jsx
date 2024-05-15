import { Box, Typography } from "@mui/material"
import Background from "../../assets/bg.jpg"
const Header = () => {
    const dataPokemon = [
        {
            id: 1,
            number: "9 +",
            description: "Todas las generaciones de pokémon"
        },
        {
            id: 2,
            number: "1008 +",
            description: "Todos los pokémones en un solo lugar"
        },
        {
            id: 3,
            number: "30000 +",
            description: "Clientes felices"
        }
    ]
    return (
        <Box
            component="header"
            sx={{
                backgroundImage: `url(${Background})`,
                height: "800px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                overflow: "hidden"
            }}>
            <Box component="div"
                sx={{
                    height: { xs: "89.3%", md: "83.5%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    position: "absolute",
                    content: "''",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "40px", md: "60px" },
                        color: "colors.white",
                        fontWeight: "bold",
                        marginLeft: { xs: "0", md: "30px" },
                        marginTop: "60px",
                        textAlign: { xs: "center", md: "left" },
                        width: { xs: "100%", md: "40%" }
                    }}>
                    Encuentra al pokémon que  vaya más contigo.
                </Typography>

                <Box sx={{
                    color: "colors.white",
                    marginLeft: "30px",
                    display: { xs: "block", md: "grid" },
                    gridTemplateColumns: `repeat(${dataPokemon.length},1fr)`,
                }}>
                    {
                        dataPokemon.map(data => (
                            <Box
                                sx={{
                                    textAlign: { xs: "center", md: "left" }
                                }}
                                key={data?.id}>
                                <Typography variant="h2">
                                    {data.number}
                                </Typography>
                                <Typography variant="body1"
                                    sx={{
                                        fontSize: "18px"
                                    }}>
                                    {data?.description}
                                </Typography>
                            </Box>
                        ))
                    }

                </Box>
            </Box>
        </Box>
    )
}

export default Header