import {RowsPhotoAlbum} from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {useRef, useState} from "react";


const Gallery = () => {
    const images = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', {eager: true});
    const [index, setIndex] = useState(-1);
    const thumbnailsRef = useRef(null);
    const imageList = Object.values(images).map((image) => {
        return {
            src: image.default,
            width: 600,
            height: 400,
            srcSet: null,
        };
    });
    console.log(imageList);

    return (
        <>
            <RowsPhotoAlbum
                layout="rows"
                photos={imageList}
                columns={3}
                padding={4}
                onClick={({ index: current }) => setIndex(current)}

            />
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={imageList.map((image) => ({src: image.src}))}
                index={index}
                plugins={[Thumbnails]}
                thumbnails={{ref: thumbnailsRef}}
            />
        </>
    );
}


export default Gallery;


