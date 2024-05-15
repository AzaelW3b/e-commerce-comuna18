import PropTypes from 'prop-types'
import { Box, FormControl, InputLabel, OutlinedInput} from '@mui/material'

const ShoppingCartDeliveryAddress = ({ deliveryAddress, onChangeDeliveryAddress}) => {

    const { name, postalCode, state, municipality, colony, street, outdoorNumber, interiorNumber, email, phone } = deliveryAddress

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
                    Nombre completo
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Código postal
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Estado
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Municipio
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Colonia
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Calle
                </InputLabel>

                <OutlinedInput
                    name="street"
                    sx={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        fontSize: "14px"
                    }}
                    placeholder="Ingresa la street"
                    value={street}
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Número exterior
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Correo
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
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
                    Télefono de contacto
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
                    onChange={(e) => onChangeDeliveryAddress(e)}
                />

            </FormControl>

        </Box>
    )
}
ShoppingCartDeliveryAddress.propTypes = {
    deliveryAddress: PropTypes.object.isRequired,
    onChangeDeliveryAddress: PropTypes.func.isRequired,

}
export default ShoppingCartDeliveryAddress