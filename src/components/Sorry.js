import { useRouteError } from "react-router-dom"

const Sorry = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Sorry, error found</h1>
            <h3>{err.status}</h3>
        </div>
    )
}

export default Sorry