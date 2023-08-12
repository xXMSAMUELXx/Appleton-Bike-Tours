// YelpReviewSection.tsx
import React from "react";
import "./yelp.css"; // Make sure the CSS file name matches the import

const YelpReviewSection: React.FC = () => {
  // Hypothetical Yelp reviews data
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 4.5,
      reviewText: "Great place! Delicious food and excellent service.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5.0,
      reviewText: "Amazing experience! Will definitely come back.",
    },
    // Add more hypothetical reviews as needed
  ];

  return (
    <div className="yelp-review-section">
      <h2 className="yelp-title">Yelp Reviews</h2>
      <ul className="yelp-reviews-list">
        {reviews.map((review) => (
          <li key={review.id} className="yelp-review-item">
            <div className="yelp-review-header">
              <p className="yelp-review-name">{review.name}</p>
              <p className="yelp-review-rating">
                Rating: {review.rating}{" "}
                {/* Optional: Add a star icon for rating */}
              </p>
            </div>
            <p className="yelp-review-text">{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YelpReviewSection;
