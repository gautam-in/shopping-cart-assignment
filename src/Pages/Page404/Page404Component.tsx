import "./Page404Component.scss";

const Page404Component: React.FC = () => {
    const BASE_CLASSNAME: string = "Page404";
    return (
        <div className={BASE_CLASSNAME}>
            <h1>404</h1>
            <p>Something Went Wrong...</p>
        </div>
    );
};

export default Page404Component;
