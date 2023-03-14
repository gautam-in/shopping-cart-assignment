import styles from './layout.module.scss';

/**
 * @returns A footer component with a copyright message.
 */
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; 2011-2018 Sabka Bazaar Grocery Suppliers Pvt Ltd
    </footer>
  );
};
