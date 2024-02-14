import { useLocation } from "react-router"
import "./PathPage.scss"

const PathPage = () => {
    const location = useLocation()
    return (
        <div className='PathPage'>home{location.pathname}</div>
    )
}

export default PathPage