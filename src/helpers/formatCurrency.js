export const formatCurrency = (money) => {
    const moneyFormat = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    })

    return moneyFormat.format(money)
}