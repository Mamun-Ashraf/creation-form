import React, { useState } from 'react';

function ImageUploader() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    return (
        <div>
            <input className="form-control mb-3" type="file" onChange={handleImageUpload} />
            <div className='border border-1 text-center' style={{ width: 150, height: 150 }}>
                <img src={selectedImage} alt="ছবি" className='img-fluid' />
            </div>
        </div>
    );
}

export default ImageUploader;
