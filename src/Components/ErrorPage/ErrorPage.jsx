import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Ooops</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {
                error && (error.statusText || error.status) && <p>{error.statusText || error.status}</p>  
            }
        </div>
    );
};

export default ErrorPage;