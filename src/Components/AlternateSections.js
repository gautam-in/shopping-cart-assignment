import '../CSS/alternateSection.css'
import { useNavigate } from 'react-router-dom'
import '../CSS/mobile.css';
const AlternateSections = ({uniqueId, geometry, imgUrl, heading, desc, btnText }) => {
const navigate = useNavigate()

const goToProductPage = (id) => {
  navigate(`/products/${id}`)
}

  return (
    <div className="container-alternate">
      {
        geometry === 'right' ?

          <div className='md-12 flex-r'>
            <img alt={heading} src={imgUrl} className='md-5'/>
            <div className='text-block md-5 offset-md-1 flex-c align-center justify-spc-between'>
                <h2>{heading}</h2>
                <p className='semi-bold descr'>{desc}</p>
                <div title={btnText} onClick={()=>{goToProductPage(uniqueId)}} className='btn pointer'>
                  {`Explore ${btnText}`}
                </div>
            </div>
          </div>

          :

          <div className='md-12 flex-r'>
            <div className='text-block flex-c md-5 align-center justify-spc-between'>
                <h2>{heading}</h2>
                <p className='semi-bold descr'>{desc}</p>
                <div title={btnText} onClick={()=>{goToProductPage(uniqueId)}} className='btn pointer'>
                  {`Explore ${btnText}`}
                </div>
            </div>
            <img alt={heading} src={imgUrl} className='md-5 offset-md-1'/>
          </div>

      }
    </div>
  )
}

export default AlternateSections;
