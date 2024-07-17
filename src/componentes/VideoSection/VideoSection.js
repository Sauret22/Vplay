import React, { useState } from 'react';
import './VideoSection.css';

const initialCategories = [
   
];

const featured = {
    videoUrl: "https://www.youtube.com/embed/R9uaBxgCkyA", // URL de la imagen destacada
    title: "Featured Video Title"
};

function VideoSection() {
    const [categories, setCategories] = useState(initialCategories);

    const removeVideo = (categoryIndex, videoIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].videos.splice(videoIndex, 1);
        setCategories(newCategories);
    };

    return (
        <section className="video-section">
            <div className="featured-video">
                {featured.imageUrl && (
                    <img src={featured.imageUrl} alt={featured.title} className="featured-image" />
                )}
                <iframe
                    width="560"
                    height="315"
                    src={featured.videoUrl}
                    title={featured.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="video-categories">
                {categories.map((category, index) => (
                    <div className="category" key={index}>
                        <h2>{category.title}</h2>
                        <div className="videos">
                            {category.videos.map((video, vidIndex) => (
                                <div className="video" key={vidIndex}>
                                    <img src={video.thumbnail} alt={video.title} />
                                    <p>{video.title}</p>
                                    <button onClick={() => removeVideo(index, vidIndex)}>Eliminar</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default VideoSection;
