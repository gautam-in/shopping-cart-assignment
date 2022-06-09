import React from 'react'
import { Route } from 'react-router-dom'

function RouteWithLayout(props) {
  const { layout: Layout, component: Component, ...restProps } = props

  return (
    <Route
      {...restProps}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    >
    </Route>
  )
}

export default RouteWithLayout
