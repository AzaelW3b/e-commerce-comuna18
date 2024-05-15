import PropTypes from 'prop-types'
import { Box, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material'

const ShoppingCartDeliveryAddress = ({ deliveryAddress, onChangeDeliveryAddress, errorsAddress, setErrorsAddress }) => {

    const { name, postalCode, state, municipality, colony, street, outdoorNumber, interiorNumber, email, phone } = deliveryAddress

    const handleBlurChange = (e) => {
        const { name, value } = e.target
        let newErrors = { ...errorsAddress }
        switch (name) {
            case "name":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresa el nombre" }
                } else {
                    delete newErrors[name]
                }
                break
            case "postalCode":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes el código postal" }
                } else {
                    delete newErrors[name]
                }
                break
            case "state":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar el estado" }
                } else {
                    delete newErrors[name]
                }
                break
            case "municipality":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar el municipio" }
                } else {
                    delete newErrors[name]
                }
                break
            case "colony":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar la colonia" }
                } else {
                    delete newErrors[name]
                }
                break
            case "street":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar la calle" }
                } else {
                    delete newErrors[name]
                }
                break
            case "outdoorNumber":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar el número exterior" }
                } else {
                    delete newErrors[name]
                }
                break
            case "email":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresar el correo" }
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors = { ...newErrors, [name]: "Debes ingresar un correo electrónico válido" }
                } else {
                    delete newErrors[name];
                }
                break;
            case "phone":
                if (value.trim() === "") {
                    newErrors = { ...newErrors, [name]: "Debes ingresare el télefono" }
                } else {
                    delete newErrors[name]
                }
                break
            default:
                delete newErrors[name]
                break
        }

        setErrorsAddress(newErrors)
        onChangeDeliveryAddress(e)
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
                    Nombre completo*
                </InputLabel>

                <OutlinedInput
                    name="name"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el nombre completo"
                    value={name}
                    error={errorsAddress?.name ? true : false}
                    onChange={(e) => handleBlurChange(e)}
                />
                {errorsAddress.name && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.name}
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
                    Código postal*
                </InputLabel>

                <OutlinedInput
                    name="postalCode"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el código"
                    value={postalCode}
                    error={errorsAddress?.postalCode ? true : false}
                    onChange={(e) => handleBlurChange(e)}
                />
                {errorsAddress.postalCode && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.postalCode}
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
                    Estado*
                </InputLabel>

                <OutlinedInput
                    name="state"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el state"
                    value={state}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsAddress?.state ? true : false}

                />
                {errorsAddress.state && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.state}
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
                    Municipio*
                </InputLabel>

                <OutlinedInput
                    name="municipality"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el municipio"
                    value={municipality}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsAddress?.municipality ? true : false}

                />
                {errorsAddress.municipality && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.municipality}
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
                    Colonia*
                </InputLabel>

                <OutlinedInput
                    name="colony"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa la región"
                    value={colony}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsAddress?.colony ? true : false}

                />
                {errorsAddress.colony && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.colony}
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
                    Calle*
                </InputLabel>

                <OutlinedInput
                    name="street"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa la calle"
                    value={street}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsAddress?.street ? true : false}

                />
                {errorsAddress.street && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.street}
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
                    Número exterior*
                </InputLabel>

                <OutlinedInput
                    name="outdoorNumber"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el número exterior"
                    value={outdoorNumber}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsAddress?.street ? true : false}
                />
                {errorsAddress.outdoorNumber && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.outdoorNumber}
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
                    Nº interior/Depto (opcional)
                </InputLabel>

                <OutlinedInput
                    name="interiorNumber"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el número interior"
                    value={interiorNumber}
                    onChange={(e) => handleBlurChange(e)}
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
                    Correo*
                </InputLabel>

                <OutlinedInput
                    name="email"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el email"
                    value={email}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsAddress?.email ? true : false}

                />
                {errorsAddress.email && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.email}
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
                    Télefono de contacto*
                </InputLabel>
                <OutlinedInput
                    name="phone"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa el télefono"
                    value={phone}
                    onChange={(e) => handleBlurChange(e)}
                    error={errorsAddress?.phone ? true : false}

                />
                {errorsAddress.phone && (
                    <Typography variant="caption" color="error">
                        {errorsAddress.phone}
                    </Typography>
                )}
            </FormControl>

        </Box>
    )
}
ShoppingCartDeliveryAddress.propTypes = {
    deliveryAddress: PropTypes.object.isRequired,
    onChangeDeliveryAddress: PropTypes.func.isRequired,
    errorsAddress: PropTypes.object.isRequired,
    setErrorsAddress: PropTypes.func.isRequired,

}
export default ShoppingCartDeliveryAddress