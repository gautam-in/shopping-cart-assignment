import Category from '../components/organism/Category/Category'
import withData from '../lib/withData'

function Home(props) {
  return (
    <Category {...props}/>
  )
}

export default withData(Home,'categories')