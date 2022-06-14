import { useParams } from 'react-router-dom';

const GalleryView = (props) => {
    const { galleryId } = useParams();
    // console.log(useParams());

    const specificGallery = props.galleries.find((gallery) => gallery.id === +galleryId);
    // console.log(`this is a specific gallery`, specificGallery)

    return (
        <div>
            <h2>{specificGallery.name}</h2>
        </div>
    )
}

export default GalleryView;
