import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'

import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div id="navIcon">
      <img src="./img/mediumEggs/blue.png" />
      <img src="./img/mediumEggs/2chicken.png" />
      <img src="./img/mediumEggs/yellow.png" />
      <h2>Egg Hunter</h2>
      <img src="./img/mediumEggs/red.png" />
      <img src="./img/mediumEggs/binocular.png" />
      <img src="./img/mediumEggs/orange.png" />
    </div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">
            <Button outline color="warning">
              HOME
            </Button>
          </Link>
          <a href="#" onClick={handleClick}>
            <Button href="#" color="danger">
              LOGOUT
            </Button>
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/">
            <Button outline color="danger">
              MAIN
            </Button>
          </Link>

          <Link to="/signup">
            <Button outline color="success">
              SIGN UP
            </Button>
          </Link>

          <Link to="/login">
            <Button outline color="primary">
              LOGIN
            </Button>
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
