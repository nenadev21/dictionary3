function Photos({ photos }) {
  if (photos) {
    console.log(photos);
    return (
      <div className="columns is-multiline">
        {photos.map(function (photo, index) {
          return (
            <div className="column is-one-fifth">
              <figure className="image" key={index}>
                <img src={photo.src.landscape} alt="landscape" />
              </figure>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Photos;
