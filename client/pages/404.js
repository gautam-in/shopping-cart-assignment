import React, {useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const NotFound= () => {
    const router = useRouter();
    useEffect(() => {
          setTimeout(() => router.push('/'), 3000)

    }, [])
    return (
        <div className="not-found">
            <h2>404 Page Doesn't Exist</h2>
            <p>Go back to <Link href="/"><a>home</a></Link></p>

        </div>
    );
};

export default NotFound;