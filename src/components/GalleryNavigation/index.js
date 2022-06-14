import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    console.log(galleries)
    return (
        <nav>
            {galleries.map((gallery) => (
                <NavLink to={`/galleries/${gallery.id}`}>
                    {gallery.name}
                </NavLink>
            ))}
            <h1>Galleries</h1>
            <NavLink to="/"/>
        </nav>
    )
}

export default GalleryNavigation;
