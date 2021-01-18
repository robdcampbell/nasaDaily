import React, { useState, useEffect } from "react";
const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  const fetchPhoto = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    const data = await response.json();
    setPhotoData(data);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  if (!photoData) return <h1>No photo data retreived!</h1>;

  return (
    <div>
      {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={`NASA photo of the day: ${photoData.title}`}
        />
      ) : (
        <iframe
          title="Nasa-video"
          src={photoData.url}
          alt={`NASA photo of the day: ${photoData.title}`}
          frameBorder="0"
          gesture="media"
          allow="excrypted-media"
          allowFullScreen
          className="photo"
        />
      )}

      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
};

export default NasaPhoto;
