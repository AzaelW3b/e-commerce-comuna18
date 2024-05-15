import Logo from '../assets/logo.png'
import PropTypes from 'prop-types'

const LogoPokemon = ({ size }) => {
    return (
        <img
            style={{ width: size }}
            src={Logo}
            alt="logo pokemon"
        />
    )
}
LogoPokemon.propTypes = {
    size: PropTypes.string.isRequired
}
export default LogoPokemon