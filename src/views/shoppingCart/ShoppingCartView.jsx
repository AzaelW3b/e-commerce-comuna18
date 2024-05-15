import PropTypes from 'prop-types'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel
} from "@mui/material"
import { useState } from "react"
import { formatCurrency } from "../../helpers/formatCurrency"
import ShoppingCartDetail from './ShoppingCartDetail'
import useShoppingCart from '../../hooks/useShoppingCart'
import ShoppingCartDeliveryAddress from './ShoppinCartDeliveryAddress'
import ShoppingCartCardData from './ShoppingCartCardData'
import ShoppingCartConfirmacion from './ShoppingCartConfirmation'

const ShoppingCartView = ({ setOpen, open }) => {
    const steps = ['Carrito de compras', 'Dirección de entrega', 'Datos de tarjeta']

    const { shoppingCart, setShoppingCart } = useShoppingCart()

    const [errorsAddress, setErrorsAddress] = useState({})
    const [deliveryAddress, setDeliveryAddress] = useState({
        name: "",
        postalCode: "",
        state: "",
        municipality: "",
        colony: "",
        street: "",
        outdoorNumber: "",
        interiorNumber: "",
        email: "",
        phone: ""
    })
    const [cardData, setCardData] = useState({
        cardNumber: "",
        fullName: "",
        expirationDate: "",
        securityCode: ""
    })


    const handleClose = () => {
        setOpen(false)
    }

    const sumTotal = () => shoppingCart.reduce((sum, productoIndex) => productoIndex.total + sum, 0)


    const [activeStep, setActiveStep] = useState(0)
    const [skipped, setSkipped] = useState(new Set())


    const isStepSkipped = (step) => {
        return skipped.has(step)
    }

    const handleNext = async () => {
        if (activeStep + 1 === 2) {
            if (
                deliveryAddress?.name?.trim() === '' &&
                deliveryAddress?.postalCode?.trim() === '' &&
                deliveryAddress?.state?.trim() === '' &&
                deliveryAddress?.municipality?.trim() === '' &&
                deliveryAddress?.street?.trim() === '' &&
                deliveryAddress?.outdoorNumber?.trim() === '' &&
                deliveryAddress?.email?.trim() === '' &&
                deliveryAddress?.phone?.trim() === ''
            )
                setErrorsAddress({
                    name: "Debes ingresa el nombre",
                    postalCode: "Debes ingresar el código postal",
                    state: "Debes ingresar el estado",
                    municipality: "Debes ingresar el municipio",
                    colony: "Debes ingresar la colonia",
                    street: "Debes ingresar la calle",
                    outdoorNumber: "Debes ingresar el número exterior",
                    email: "Debes ingresar el correo",
                    phone: "Debes ingresar el teléfono",
                })
            return
        }
        let newSkipped = skipped
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values())
            newSkipped.delete(activeStep)
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped(newSkipped)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }


    const handleReset = () => {
        setOpen(false)
        setShoppingCart([])
        setDeliveryAddress({
            name: "",
            postalCode: "",
            state: "",
            municipality: "",
            colony: "",
            street: "",
            outdoorNumber: "",
            interiorNumber: "",
            email: "",
            phone: ""
        })
        setCardData({
            cardNumber: "",
            fullName: "",
            expirationDate: "",
            securityCode: ""
        })
        setActiveStep(0)
    }

    const increaseQuantity = (pokemon) => {
        const newShoppingCart = shoppingCart.map(item => {
            if (item.id === pokemon.id) {
                return { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
            }
            return item
        })
        setShoppingCart(newShoppingCart)
    }
    const decreaseQuantity = (pokemon) => {
        const newShoppingCart = shoppingCart.map(item => {
            if (item.id === pokemon.id) {
                if (item.quantity <= 1) return item
                return { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
            }
            return item
        })
        setShoppingCart(newShoppingCart)
    }
    const onChangeDeliveryAddress = (e) => {
        setDeliveryAddress({ ...deliveryAddress, [e.target.name]: e.target.value })
    }

    const onChangeCardData = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
        console.log(cardData)
    }
    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>Detalles de compras</Typography>
            </DialogTitle>

            <DialogContent>
                <Box sx={{ width: '100%' }}>
                    <Stepper sx={{
                        backgroundColor: "#fff",
                        marginBottom: "20px",
                        "& .MuiSvgIcon-root": { fontSize: "25px" },
                        "& .MuiStepIcon-text": { fontSize: "15px !important" },
                        "& .Mui-disabled .MuiStepIcon-root": { color: "#e0e0e0" },
                    }} activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {}
                            const labelProps = {}

                            if (isStepSkipped(index)) {
                                stepProps.completed = false
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <ShoppingCartConfirmacion
                                handleReset={handleReset}
                                deliveryAddress={deliveryAddress}
                                sumTotal={sumTotal}
                            />
                        </>
                    ) : (
                        <>
                            {activeStep + 1 === 1 && (
                                <>
                                    {shoppingCart.length === 0 ?
                                        <Typography>
                                            No hay elementos en el carrito de compras.
                                        </Typography> : (
                                            shoppingCart.map(pokemon => (
                                                <ShoppingCartDetail
                                                    key={pokemon.id}
                                                    pokemon={pokemon}
                                                    increaseQuantity={increaseQuantity}
                                                    decreaseQuantity={decreaseQuantity}
                                                />
                                            ))
                                        )}
                                    <Box>
                                        <Typography sx={{ fontSize: "20px", marginTop: "20px" }}><b>Total:</b> {formatCurrency(sumTotal())}</Typography>
                                    </Box>
                                </>
                            )}

                            {activeStep + 1 === 2 && (
                                <ShoppingCartDeliveryAddress
                                    deliveryAddress={deliveryAddress}
                                    onChangeDeliveryAddress={onChangeDeliveryAddress}
                                    errorsAddress={errorsAddress}
                                    setErrorsAddress={setErrorsAddress}
                                />
                            )}

                            {activeStep + 1 === 3 && (
                                <ShoppingCartCardData
                                    cardData={cardData}
                                    onChangeCardData={onChangeCardData}
                                />
                            )}
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1, fontSize: "15px" }}
                                >
                                    Atras
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />

                                <Button
                                    sx={{
                                        fontSize: "15px"
                                    }}
                                    onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ShoppingCartView

ShoppingCartView.propTypes = {
    setOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
}