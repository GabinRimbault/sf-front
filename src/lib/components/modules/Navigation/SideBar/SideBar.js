import {Link} from "react-router-dom";

const SideBar = ({children}) => {
    return (
        <div className={"sidebar"}>
            {children}
        </div>
    )
}

SideBar.Item = ({ children }) => {
    return (
        <>
            <li className="sidebar-item">
                {children}
            </li>
        </>
    )
}

SideBar.Link = ({ link, children }) => {
    return (
        <>
            <Link to={link} className="sidebar-link">
                {children}
            </Link>
        </>
    )
}

SideBar.Label = ({ children }) => {
    return (
        <>
            <span className="sidebar-label">
                {children}
            </span>
        </>
    )
}



export default SideBar;