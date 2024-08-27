import React from 'react';
import '../App.css';

const NewsItem = ({ title, description, src, url, isDarkTheme }) => {
  const placeholderStyle = {
    height: '200px',
    width: '360px',
    objectFit: 'cover',
    background: 'linear-gradient(to right, #e0e0e0, #b0bec5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: '55px',
    textAlign: 'center',
  };

  return (
    <div className={`card mb-3 d-inline-block my-3 mx-3 px-2 py-2 ${isDarkTheme ? 'card-dark' : 'card-light'}`} style={{ maxWidth: '345px' }}>
      <div
        style={src ? {} : placeholderStyle}
        className="card-img-top"
      >
        {src ? (
          <img
            src={src}
            style={{ height: '200px', width: '360px', objectFit: 'cover' }}
            className="card-img-top"
            alt={title || 'News Image'}
          />
        ) : (
          'News'
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : 'No Description Click on read More to know more about this article'}
        </p>
        <a
          href={url}
          className="btn"
          style={{ backgroundColor: '#4682B4', color: '#fff' }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
