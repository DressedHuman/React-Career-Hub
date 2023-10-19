import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className='font-bold text-2xl'>404 Not Found!</h2>
            <Link to='/' className='btn btn-primary font-bold text-2xl'>Home</Link>
        </div>
    );
};

export default ErrorPage;