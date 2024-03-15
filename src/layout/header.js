import { Link } from "react-router-dom";

function header(){
    
    //JSX
    return(
        <div>
            <nav className ="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <ul className="nav">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/Board'} className="nav-link">Board</Link>
                </li>
                <li className="nav-item">
                      </li>
                <li className="nav-item">
                     </li>
             </ul>
            </nav>
        </div>
    );
}
export default header;