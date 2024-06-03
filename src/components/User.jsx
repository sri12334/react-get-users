
import PropTypes from 'prop-types'
import './User.css'

const user = ({user}) => {
  return (
    <li>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
    </li>
  )
}

user.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
}

export default user