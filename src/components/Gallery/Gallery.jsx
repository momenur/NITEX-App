// Importing necessary components and data
import Title from "../Share/Title";
import PhotoAlbum from "react-photo-album";
import { photos } from "../../assets/galleryPhotos";

// Functional component for the Gallery section
const Gallery = () => {
    return (
        <section id="gallery" className="pb-20 border-b-[1px] border-b-gray-100">
            <Title title="Our gallery" description="Capturing Fitness: Moments of Strength" />
            <div data-aos="zoom-in">
                <PhotoAlbum layout="columns" photos={photos} />
            </div>
        </section>
    );
};

export default Gallery;