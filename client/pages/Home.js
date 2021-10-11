import BannerCarusal from '../components/BannerCarusal'
import CategoryList from '../components/CategoryList'
import Head from 'next/head';
export default function Home() {
    return (
        <div>
            <Head>
             <title>Sabka Bazar - Home Page</title>
            </Head>
           <BannerCarusal />
           <CategoryList />
        </div>
    )
}
