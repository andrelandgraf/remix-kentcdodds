import * as React from 'react'
import {getDiscordAuthorizeURL} from '../utils/misc'
import {useOptionalUser, useRequestInfo} from '../utils/providers'

export default function Discord() {
  const user = useOptionalUser()
  const requestInfo = useRequestInfo()
  const authorizeURL = user ? getDiscordAuthorizeURL(requestInfo.origin) : null
  return (
    <div>
      {user && authorizeURL ? (
        <>
          <div>
            Hello {user.firstName}. You wanna connect your account to discord?
          </div>
          <a href={authorizeURL}>Connect my KCD account to Discord</a>
        </>
      ) : null}
    </div>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  return (
    <div>
      <h2>Error</h2>
      <pre>{error.stack}</pre>
    </div>
  )
}
