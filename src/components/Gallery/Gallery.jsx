import Title from "../Share/Title";
import PhotoAlbum from "react-photo-album";
import { photos } from "../../assets/galleryPhotos";

const Gallery = () => {
    
    return (
        <section id="gallery" className="pb-20 border-b-[1px] border-b-gray-100">
            <Title title="Our gallery" description="Capturing Fitness: Moments of Strength" />
            <div>
                <PhotoAlbum layout="columns" photos={photos} key={Math.random(10)} />
            </div>
        </section>
    );
};

export default Gallery;