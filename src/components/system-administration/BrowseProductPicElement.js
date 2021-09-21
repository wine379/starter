import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';

const BrowseProductPicElement = () => {
    const [] = useState({ pictures: [] });

    const onDrop = (pictureFiles ) => {
        setState({
            pictures: pictureFiles
        });
    }
    return (
        <ImageUploader
                withIcon={true}
                buttonText='Add image for product'
                onChange={onDrop}
                imgExtension={['.jpg  ', '.png ']}
                maxFileSize={5242880}
            />
    )
}

export default BrowseProductPicElement

