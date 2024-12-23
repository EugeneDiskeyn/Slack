import { Link } from "react-router-dom";

const Main = () => {

    const isAccessGranted = localStorage.getItem("token") === null? false : true;

    return (
        <>
        { isAccessGranted? (
            <div>
                <h1>Main</h1> 
            </div>
            ) : (
                <div>
                    <h1>You do not have access to this page</h1>
                </div>
            ) 
        }
        <Link to = {"/"}>Return</Link>
        </>
    )
}

export default Main;