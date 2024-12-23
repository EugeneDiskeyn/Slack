import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <>
            <h1>404</h1>
            <Link to="/main">Return to the main page</Link>
        </>
    );
}

export default Page404;