import React from 'react'
import PropTypes from 'prop-types'

import securePage from '../hocs/securePage'

const Secret = ({loggedUser}) => (
  <div>
    <p>Hi <strong>{loggedUser.email}</strong>. Try loading this page again using the incognito/private mode of your browser.</p>
  </div>
)

Secret.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

export default securePage(Secret)
