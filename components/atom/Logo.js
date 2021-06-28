import Link from 'next/link';
import Image from 'next/image'

const Logo = ({link,src})=>{
    console.log("src is",src);
    return (
        <Link href={link} passHref>
            <Image src={src} alt='Logo' height="60" width="120"/>
        </Link>
    )
}

export { Logo }