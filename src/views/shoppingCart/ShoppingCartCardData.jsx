import PropTypes from 'prop-types'
import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material"

const ShoppingCartCardData = ({ cardData, onChangeCardData }) => {

    const { cardNumber, fullName, expirationDate, securityCode } = cardData

    return (
        <Box
            component="form"
            display="grid"
            gridTemplateColumns="repeat(2,1fr)"
            columnGap="10px"
        >
            <FormControl
                variant="standard"
                sx={{
                    width: "100%"
                }}
            >
                <InputLabel shrink sx={{
                    fontSize: "20px",
                    color: "#000",
                }}>
                    Número de tarjeta
                </InputLabel>

                <OutlinedInput
                    name="cardNumber"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el número de tarjeta"
                    value={cardNumber}
                    onChange={(e) => onChangeCardData(e)}
                />

            </FormControl>

            <FormControl
                variant="standard"
                sx={{
                    width: "100%"
                }}
            >
                <InputLabel shrink sx={{
                    fontSize: "20px",
                    color: "#000",
                }}>
                    Nombre y apellido
                </InputLabel>

                <OutlinedInput
                    name="fullName"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el nombre"
                    value={fullName}
                    onChange={(e) => onChangeCardData(e)}
                />
            </FormControl>

            <FormControl
                variant="standard"
                sx={{
                    width: "100%"
                }}
            >
                <InputLabel shrink sx={{
                    fontSize: "20px",
                    color: "#000",
                }}>
                    Fecha de vencimiento de vencimiento
                </InputLabel>

                <OutlinedInput
                    name="expirationDate"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    type="date"
                    placeholder="Ingresa el número de tarjeta"
                    value={expirationDate}
                    onChange={(e) => onChangeCardData(e)}
                />
            </FormControl>

            <FormControl
                variant="standard"
                sx={{
                    width: "100%"
                }}
            >
                <InputLabel shrink sx={{
                    fontSize: "20px",
                    color: "#000",
                }}>
                    Código de seguridad
                </InputLabel>

                <OutlinedInput
                    name="securityCode"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el número de tarjeta"
                    value={securityCode}
                    onChange={(e) => onChangeCardData(e)}
                />
            </FormControl>




        </Box>
    )
}

ShoppingCartCardData.propTypes = {
    cardData: PropTypes.object.isRequired,
    onChangeCardData: PropTypes.func.isRequired,

}

export default ShoppingCartCardData