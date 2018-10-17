import "../_sass/global.scss"
import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Header from '../components/Header'
import { getUserFromLocalCookie, getUserFromServerCookie } from '../utils/auth'

export default Page => class DefaultPage extends Component {
  static getInitialProps (ctx) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req)
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    return {
      ...pageProps,
      loggedUser,
      currentUrl     : ctx.pathname,
      isAuthenticated: !!loggedUser
    }
  }
  
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  
  logout (eve) {
    if (eve.key === 'logout') {
      Router.push(`/?logout=${eve.newValue}`)
    }
  }
  
  componentDidMount () {
    window.addEventListener('storage', this.logout, false)
  }
  
  componentWillUnmount () {
    window.removeEventListener('storage', this.logout, false)
  }
  
  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <title>Next.js + auth0</title>
        </Head>
        <div>
          <div>
            <Header {...this.props} />
            <Page {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}
