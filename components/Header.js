import "../_sass/global.scss"
import React from 'react'
import {Nav} from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'next/link'

const links = [
  {href: '/', text: 'Dashboard'},
  {href: '/about', text: 'About'},
  {href: '/secret', text: 'Top Secret', authRequired: true},
  {href: '/auth/sign-in', text: 'Sign In', anonymousOnly: true},
  {href: '/auth/sign-off', text: 'Sign Off', authRequired: true}
]

const getAllowedLinks = isAuthenticated => links
  .filter(link => !link.authRequired || (link.authRequired && isAuthenticated))
  .filter(link => !isAuthenticated || (isAuthenticated && !link.anonymousOnly))

const Header = ({isAuthenticated, currentUrl}) => (
  <Nav vertical>
    {getAllowedLinks(isAuthenticated).map(link => (
      <Link prefetch key={link.href} href={link.href}><a>{link.text}</a></Link>
    ))}
  </Nav>
)

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl     : PropTypes.string.isRequired
}

export default Header
