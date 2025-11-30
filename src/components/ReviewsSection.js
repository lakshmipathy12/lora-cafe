import React, { useState, useEffect } from "react";
import "./ReviewsSection.css";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Anjali",
      text:
        "Perfect place to work with a laptop. Wi-Fi is fast, staff is kind and the coffee is consistently great.",
      rating: "4.9",
    },
    {
      name: "Rahul",
      text:
        "Loved the ambience. Soft lighting, good music and the desserts are top-notch.",
      rating: "4.8",
    },
    {
      name: "Meera",
      text:
        "Feels like a second home; the team remembers my usual order. Highly recommended!",
      rating: "5.0",
    },
    {
      name: "Vikram",
      text:
        "Their cold brew is one of the best in the city. Calm place to sit and read for hours.",
      rating: "4.9",
    },
    {
      name: "Sneha",
      text:
        "Friendly staff, clean space and great music. I bring my friends here every weekend.",
      rating: "4.8",
    },
    {
      name: "Arjun",
      text:
        "Great value for money. Good portions, tasty food and the ambience is perfect for dates or meetings.",
      rating: "4.7",
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
    setRating(0);
    setName("");
    setReviewText("");
    setShowThankYou(false);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setShowThankYou(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setShowThankYou(true);

    // auto-close after a short delay
    setTimeout(() => {
      setIsFormOpen(false);
      setShowThankYou(false);
    }, 2000);
  };

  const isValid = rating > 0 && name.trim() && reviewText.trim();

  // optional: close on ESC key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <section id="reviews" className="reviews">
      <div className="section-wrapper">
        <div className="reviews-header-row">
          <div>
            <p className="section-label">Reviews</p>
            <h2>What our guests feel</h2>
          </div>

          <button className="new-review-btn" onClick={openForm}>
            New visitor review
          </button>
        </div>

        <div className="review-row">
          {reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <div className="review-rating">{rev.rating}★</div>
              <p className="review-text">"{rev.text}"</p>
              <p className="review-name">- {rev.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form Modal */}
      {isFormOpen && (
        <div className="review-modal" onClick={closeForm}>
          <div
            className="review-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="review-modal-close" onClick={closeForm}>
              ×
            </button>

            {!showThankYou && (
              <form className="review-form" onSubmit={handleSubmit}>
                <h3>Share your experience</h3>

                {/* Stars */}
                <label className="review-label">Your rating</label>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={
                        "star-button " + (rating >= star ? "selected" : "")
                      }
                      onClick={() => setRating(star)}
                    >
                      ★
                    </button>
                  ))}
                </div>

                {/* Name */}
                <label className="review-label" htmlFor="reviewerName">
                  Your name
                </label>
                <input
                  id="reviewerName"
                  type="text"
                  className="review-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                {/* Review text */}
                <label className="review-label" htmlFor="reviewText">
                  Your review
                </label>
                <textarea
                  id="reviewText"
                  className="review-textarea"
                  placeholder="Tell us what you loved at LORA Café"
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />

                <button
                  type="submit"
                  className="review-submit-btn"
                  disabled={!isValid}
                >
                  Submit review
                </button>
              </form>
            )}

            {showThankYou && (
              <div className="thankyou-popup">
                <p>Thank You For Your Review</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
