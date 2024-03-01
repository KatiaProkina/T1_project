const StarRating = ({ rating }: { rating: number }) => {
  const roundedRating = Math.round(rating);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= roundedRating ? 'filled' : 'empty'}`}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;