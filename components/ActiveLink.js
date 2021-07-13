import { withRouter } from "next/router";

const ActiveLink = ({ router, href, children }) => {

    (function prefetechPages() {
        if (typeof window !== 'undefined') {
            router.prefetch(router.pathname)
        }
    })()

    const handleClick = e => {
        e.preventDefault();
        router.push(href, null, {shallow: true});
    }

    const isCurrentPath = router.pathname === href || router.asPath === href;

    return (
        <div>
            <a href={href} onClick={handleClick} style={{
                margin: 0,
                padding: 0,
                top: 0,
                padding: '16px',
                width: '220px',
                position: 'relative',
                height: 'auto',
                overflow: 'auto',
                backgroundColor: isCurrentPath ? "#555" : "#f1f1f1",
                color: isCurrentPath ? 'white' : 'black',
            }}>
                {children}
            </a>
        </div>
    )
}

export default withRouter(ActiveLink);
