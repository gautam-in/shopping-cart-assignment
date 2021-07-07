import Head from 'next/head';
const useTitle = (title) => {
  return (
    <Head>
      <title>{`Sabka Bazaar - ${title}`}</title>
    </Head>
  );
};
export default useTitle;