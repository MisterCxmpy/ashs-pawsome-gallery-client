import React from 'react'
import ReactPlaceholder from 'react-placeholder'

export default function Loading({children, ready}) {
  return (
    <ReactPlaceholder type='rect' rows={6} ready={ready}>
      {children}
    </ReactPlaceholder>
  )
}
