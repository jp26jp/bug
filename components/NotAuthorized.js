import "../_sass/global.scss"
import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <h1>You can't see this!</h1>
    <p>You're not authenticated yet. <Link href='/auth/sign-in'><a>Sign in</a></Link> and see what happens.</p>
  </div>
)
