import React from 'react';

const styles = {
  Card: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '13px',
    boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
  },
  Text: {
    color: '#7d8188',
    fontSize: '11px',
    fontFamily: 'Work Sans',
    lineHeight: '19px',
    textAlign: 'center',
    marginTop: '8px',
  },
  ImageContainer: {
    width: '70px',
    height: '70px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    border: '2px solid #ddd',
  },
  ImagesContainer: {
    display: 'flex',
    gap: '2px', // Reduced gap between images
    overflowX: 'auto', // Enables horizontal scrolling
    padding: '2px 0', // Adds padding to avoid cutting off the images
    whiteSpace: 'nowrap', // Ensure items stay in a single line
    scrollbarWidth: 'none', // For Firefox
    '-ms-overflow-style': 'none', // For Internet Explorer and Edge
  },
  ImageWrapper: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '110px', // Ensure there is enough space for the image and text
  },
};

const defaultProps = {
  images: [
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Your Story' },
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Justin Rosser' },
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Davis Dorwart' },
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Randy Saris' },
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Charlie Press' },
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Zaire Herwitz' },
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Talan Philips' },
    { src: 'https://assets.api.uizard.io/api/cdn/stream/5fadadd7-eb37-441f-bc12-27571976f1d4.png', text: 'Corey Gouse' },
  ],
};

const Image = ({ image, text }) => {
  return (
    <div style={styles.ImageWrapper}>
      <div
        style={{
          ...styles.ImageContainer,
          backgroundImage: `url(${image})`,
        }}
      />
      <div style={styles.Text}>{text}</div>
    </div>
  );
};

const Stories = ({ images = defaultProps.images }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.ImagesContainer} className="no-scrollbar">
        {images.map((item, index) => (
          <Image key={index} image={item.src} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
