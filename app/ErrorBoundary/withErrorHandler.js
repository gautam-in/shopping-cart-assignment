import React from 'react';
import FallbackComponent from './FallbackComponent';
 
const withErrorHandler = (Component) => {
    class WithErrorHandler extends React.Component {
      constructor () {
        super()
  
        this.state = {
          hasError: false,
          error: null,
          errorInfo: null
        }
      }
  
      componentDidCatch (error, info) {
        this.setState({ hasError: true, error, errorInfo: info })
      }
  
      render () {
        if (this.state.hasError) {
          return (
            <FallbackComponent/>
          )
        }
  
        return <Component {...this.props} />
      }
    }
    return WithErrorHandler
}
export default withErrorHandler