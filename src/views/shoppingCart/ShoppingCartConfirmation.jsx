import PropTypes from 'prop-types'
import { Box, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import useShoppingCart from '../../hooks/useShoppingCart'
import { formatCurrency } from '../../helpers/formatCurrency'

const ShoppingCartConfirmacion = ({ handleReset, deliveryAddress, sumTotal }) => {
    const { shoppingCart } = useShoppingCart()
    return (
        <>
            <Box sx={{ marginTop: "30px", backgroundColor: "#fff", padding: "40px" }}>
                <Box sx={{ textAlign: "center", marginTop: "30px" }}>
                    <CheckCircleIcon sx={{ fontSize: { xs: "80px", sm: "100px" }, color: "#3ABB47", borderRadius: "50%" }} />
                    <Typography sx={{ mt: 2, mb: 1, fontWeight: "bold", fontSize: { xs: "24px", sm: "30px" } }}>
                        Compra realizada con exito
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 1, fontSize: { xs: "16px", sm: "20px" } }}>
                        Resumen de compra:
                    </Typography>
                </Box>

                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="right">Nombre pokémon</TableCell>
                                    <TableCell align="right">Cantidad de pokémones</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {shoppingCart.map((row) => (
                                    <TableRow
                                        key={row?.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                           <img style={{ width: "100px" }} src={row?.sprites?.other?.home?.front_default}/>
                                        </TableCell>
                                        <TableCell align="right">{row?.name}</TableCell>
                                        <TableCell align="right">{row?.quantity}</TableCell>
                                        <TableCell align="right">{row?.price}</TableCell>
                                        <TableCell align="right">{row?.total}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box sx={{
                        marginTop: "20px"
                    }}>
                        <Typography>
                            <b>Nombre: </b>
                            {deliveryAddress?.name}
                        </Typography>
                        <Typography>
                            <b>Dirección: </b>
                            {deliveryAddress?.street}   #{deliveryAddress?.outdoorNumber} {deliveryAddress?.colony} {deliveryAddress?.state}, {deliveryAddress?.municipality}
                        </Typography>
                        <Typography sx={{ fontSize: "20px", marginTop: "20px" }}><b>Total:</b> {formatCurrency(sumTotal())}</Typography>

                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button sx={{
                    fontSize: "15px"
                }} onClick={handleReset}>Volver al inicio</Button>
            </Box>
        </>

    )
}
ShoppingCartConfirmacion.propTypes = {
    handleReset: PropTypes.func.isRequired,
    deliveryAddress: PropTypes.object.isRequired,
    sumTotal: PropTypes.func.isRequired
}
export default ShoppingCartConfirmacion