import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import defaultPage from '../hocs/defaultPage'

const createLink = (href, text) => <a href={href}>{text}</a>

const Index = ({isAuthenticated}) => (
  <div>
    {isAuthenticated && <div>This is a super secret div.</div>}
    <div>
      <h1>Hello, friend!</h1>
      <p>This is a super simple example of how to use <a href="https://github.com/zeit/next.js">next.js</a> and <a href="https://auth0.com/">Auth0</a> together.</p>
      {!isAuthenticated && (
        <p>You're not authenticated yet. <Link href='/auth/sign-in'>{createLink('/auth/sign-in', 'Sign in')}</Link> and see what happens</p>
      )}
      </div>
  </div>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default defaultPage(Index)
