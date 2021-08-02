import React, {useEffect, useState} from 'react'
import { Header } from '../Header'
import { auth } from '../../config/firebase';
import { useDispatch } from "react-redux";
import { fetchUser } from '../../common/app.action'
const ApplicationLayout = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user)=> {
      if (user) {
      //   db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
      //     setUser(snapshot?.data()?.email)
      // })
        dispatch(fetchUser(user))
        setLoading(false)
      } else {
        setLoading(false)
      }
    })
  }, [])
    if (isLoading) {
      return <div></div>
    }
    return (
      <>
        <Header />
        <main id="content-wrapper">
        {children}
        </main>
      </>
    )
}


// ApplicationLayout.propTypes = {
//     children: propTypes.any
// } 
export default ApplicationLayout
