/* eslint-disable no-unused-expressions */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import OrderSummary from '../components/checkout/OrderSummary';
import PriceSummary from '../components/checkout/PriceSummary';
import styles from '../styles/CheckoutPage.module.css';
import { useAuth } from '../Authcontext';

export default function CheckoutPage() {
  const { currentUser } = useAuth();
  const [checkoutState, setCheckoutState] = useState(false);
  const [checkoutMsg, setCheckoutMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    function redirectUnAuthUser() {
      setCheckoutMsg('User not signed in. Redirecting to Login Page');
      setTimeout(() => {
        router.push('/login');
      }, 2500);
    }

    if (currentUser) setCheckoutState(true);
    else {
      redirectUnAuthUser();
    }
  }, [currentUser, router]);

  return (
    <div className={styles.CheckoutPageContainer}>
      {checkoutState ? (
        <>
          <div className={styles.OrderSummaryContainer}>
            <div className={styles.OrderSummaryHeading}>
              Order Summary
            </div>
            <div className={styles.OrderSummaryContent}>
              <OrderSummary />
            </div>
          </div>
          <div className={styles.PriceSummaryContainer}>
            <div className={styles.PriceSummaryHeading}>
              <PriceSummary />
            </div>
          </div>
        </>
      ) : checkoutMsg}
    </div>
  );
}
