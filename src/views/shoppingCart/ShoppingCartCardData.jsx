import PropTypes from 'prop-types'
import { Box, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material"

const ShoppingCartCardData = ({ cardData, onChangeCardData, errorsCardData, setErrorsCardData }) => {

    const { cardNumber, fullName, expirationDate, securityCode } = cardData

    const handleBlurChange = (e) => {
        const { name, value } = e.target
        let newErrors = { ...errorsCardData }
        switch (name) {
            case "cardNumber":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresa el número de la tarjeta" }
                } else {
                    delete newErrors[name]
                }
                break
            case "fullName":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar el nombre" }
                } else {
                    delete newErrors[name]
                }
                break
            case "expirationDate":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar la fecha de expiración" }
                } else {
                    delete newErrors[name]
                }
                break
            case "securityCode":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar el código de seguridad" }
                } else {
                    delete newErrors[name]
                }
                break
            default:
                delete newErrors[name]
                break
        }

        setErrorsCardData(newErrors)
        onChangeCardData(e)
    }

    return (
        <Box
            component="form"
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(2,1fr)" },
                columnGap: "10px"
            }}
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
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsCardData?.cardNumber ? true : false}

                />
                {errorsCardData.cardNumber && (
                    <Typography variant="caption" color="error">
                        {errorsCardData.cardNumber}
                    </Typography>
                )}
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
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsCardData?.fullName ? true : false}

                />
                {errorsCardData.fullName && (
                    <Typography variant="caption" color="error">
                        {errorsCardData.fullName}
                    </Typography>
                )}
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
                    Fecha de vencimiento
                </InputLabel>

                <OutlinedInput
                    name="expirationDate"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    type="date"
                    value={expirationDate}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsCardData?.expirationDate ? true : false}

                />
                {errorsCardData.expirationDate && (
                    <Typography variant="caption" color="error">
                        {errorsCardData.expirationDate}
                    </Typography>
                )}
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
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsCardData?.securityCode ? true : false}

                />
                {errorsCardData.securityCode && (
                    <Typography variant="caption" color="error">
                        {errorsCardData.securityCode}
                    </Typography>
                )}
            </FormControl>




        </Box>
    )
}

ShoppingCartCardData.propTypes = {
    cardData: PropTypes.object.isRequired,
    onChangeCardData: PropTypes.func.isRequired,
    errorsCardData: PropTypes.object.isRequired,
    setErrorsCardData: PropTypes.func.isRequired,

}

export default ShoppingCartCardData