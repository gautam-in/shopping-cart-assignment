import React from "react"
import { Route } from "react-router-dom"

const RouteLayout = (props) => {
    const { component: Component, layout: Layout, ...rest } = props


    return (
        <Route
            {...rest}
            render={(matchingprops) => (
                <Layout>
                    <Component {...matchingprops} />
                </Layout>

            )

            }></Route>

    )






}

export default RouteLayout