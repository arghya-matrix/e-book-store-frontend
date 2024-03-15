import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailsComponent = () => {
  const [product, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();
  const { productId } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Fetch product data based on productId
    axios
      .get(`http://192.168.1.98:5000/details/${productId}`, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setMyData(response.data);
      })
      .catch((error) => {
        setIsError(error.message);
      });
  }, [productId]);

  useEffect(() => {
    // Fetch related products based on productId
    axios
      .get(`http://192.168.1.98:5000/recommend/${productId}`, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      })
      .then((response) => {
        setRelatedProducts(response.data);
      })
      .catch((error) => {
        setIsError(error.message);
      });
  }, [productId]);

  useEffect(() => {
    if (isError !== "" || !relatedProducts.length) {
      setRelatedProducts([
        {
          ISBN: "0345339711",
          "Book-Title": "The Two Towers (The Lord of the Rings, Part 2)",
          "Book-Author": "J.R.R. TOLKIEN",
          "Year-Of-Publication": 1986,
          Publisher: "Del Rey",
          "Image-URL-S":
            "http://images.amazon.com/images/P/0345339711.01.THUMBZZZ.jpg",
          "Image-URL-M":
            "http://images.amazon.com/images/P/0345339711.01.MZZZZZZZ.jpg",
          "Image-URL-L":
            "http://images.amazon.com/images/P/0345339711.01.LZZZZZZZ.jpg",
        },
        {
          ISBN: "0345339703",
          "Book-Title":
            "The Fellowship of the Ring (The Lord of the Rings, Part 1)",
          "Book-Author": "J.R.R. TOLKIEN",
          "Year-Of-Publication": 1986,
          Publisher: "Del Rey",
          "Image-URL-S":
            "http://images.amazon.com/images/P/0345339703.01.THUMBZZZ.jpg",
          "Image-URL-M":
            "http://images.amazon.com/images/P/0345339703.01.MZZZZZZZ.jpg",
          "Image-URL-L":
            "http://images.amazon.com/images/P/0345339703.01.LZZZZZZZ.jpg",
        },
        {
          ISBN: "059035342X",
          "Book-Title":
            "Harry Potter and the Sorcerer's Stone (Harry Potter (Paperback))",
          "Book-Author": "J. K. Rowling",
          "Year-Of-Publication": 1999,
          Publisher: "Arthur A. Levine Books",
          "Image-URL-S":
            "http://images.amazon.com/images/P/059035342X.01.THUMBZZZ.jpg",
          "Image-URL-M":
            "http://images.amazon.com/images/P/059035342X.01.MZZZZZZZ.jpg",
          "Image-URL-L":
            "http://images.amazon.com/images/P/059035342X.01.LZZZZZZZ.jpg",
        },
        {
          ISBN: "0590353403",
          "Book-Title": "Harry Potter and the Sorcerer's Stone (Book 1)",
          "Book-Author": "J. K. Rowling",
          "Year-Of-Publication": 1998,
          Publisher: "Scholastic",
          "Image-URL-S":
            "http://images.amazon.com/images/P/0590353403.01.THUMBZZZ.jpg",
          "Image-URL-M":
            "http://images.amazon.com/images/P/0590353403.01.MZZZZZZZ.jpg",
          "Image-URL-L":
            "http://images.amazon.com/images/P/0590353403.01.LZZZZZZZ.jpg",
        },
        {
          ISBN: "0439064872",
          "Book-Title": "Harry Potter and the Chamber of Secrets (Book 2)",
          "Book-Author": "J. K. Rowling",
          "Year-Of-Publication": 2000,
          Publisher: "Scholastic",
          "Image-URL-S":
            "http://images.amazon.com/images/P/0439064872.01.THUMBZZZ.jpg",
          "Image-URL-M":
            "http://images.amazon.com/images/P/0439064872.01.MZZZZZZZ.jpg",
          "Image-URL-L":
            "http://images.amazon.com/images/P/0439064872.01.LZZZZZZZ.jpg",
        },
        {
          ISBN: "0613329740",
          "Book-Title": "Quidditch Through the Ages",
          "Book-Author": "J. K. Rowling",
          "Year-Of-Publication": 2001,
          Publisher: "Sagebrush Education Resources",
          "Image-URL-S":
            "http://images.amazon.com/images/P/0613329740.01.THUMBZZZ.jpg",
          "Image-URL-M":
            "http://images.amazon.com/images/P/0613329740.01.MZZZZZZZ.jpg",
          "Image-URL-L":
            "http://images.amazon.com/images/P/0613329740.01.LZZZZZZZ.jpg",
        },
      ]);
    }
  }, [isError, relatedProducts]);

  useEffect(() => {
    if (isError !== "" || !product.length) {
      setMyData([
        {
          ISBN: "0345339711",
          "Book-Title": "The Two Towers (The Lord of the Rings, Part 2)",
          "Book-Author": "J.R.R. TOLKIEN",
          "Year-Of-Publication": 1986,
          Publisher: "Del Rey",
          "Image-URL-S":
            "http://images.amazon.com/images/P/0345339711.01.THUMBZZZ.jpg",
          "Image-URL-M":
            "http://images.amazon.com/images/P/0345339711.01.MZZZZZZZ.jpg",
          "Image-URL-L":
            "http://images.amazon.com/images/P/0345339711.01.LZZZZZZZ.jpg",
        },
      ]);
    }
  }, [isError, product]);

  const handleClick = (productId) => {
    navigate(`/details/${productId}`);
  };

  const goToCart = () => {
    navigate("/cart");
  };
  const handleSubmitReview = (e) => {
    e.preventDefault();
    setReview("");
    setRating(0);
  };

  return (
    <div className="container mt-5">
      {isError !== "" && <h2>{isError}</h2>}
      {product.map((data) => (
        <div
          className="card shadow"
          key={data.ISBN}
          style={{
            overflow: "hidden",
            transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          <div className="card-body row">
            <div
              className="col-md-6"
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <div className="preview">
                <div className="tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img
                      src={data["Image-URL-L"]}
                      alt={productId}
                      className="img-fluid"
                      style={{
                        maxWidth: "100%",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </div>
                  {/* Add more tab-panes for other images if needed */}
                </div>
                <ul
                  className="preview-thumbnail nav nav-tabs me-2"
                  style={{
                    padding: "8px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src={data["Image-URL-S"]} alt="Thumbnail" />
                    </a>
                  </li>
                  {/* Add more thumbnails if needed */}
                </ul>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: "20px",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <div
                className="details"
                style={{
                  textAlign: "left",
                  wordWrap: "break-word",
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <h3
                  className="product-title"
                  style={{
                    color: "#333",
                    marginBottom: "10px",
                    fontSize: "1.5rem",
                  }}
                >
                  {data["Book-Title"]}
                </h3>
                <div className="rating" style={{ marginBottom: "10px" }}>
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span
                    className="review-no"
                    style={{ marginLeft: "5px", color: "#888" }}
                  >
                    41 reviews
                  </span>
                </div>
                <p
                  className="description"
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    marginBottom: "15px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h4
                  className="price"
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    marginBottom: "5px",
                  }}
                >
                  ISBN: {data.ISBN}
                </h4>
                <h4
                  className="author"
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    marginBottom: "5px",
                  }}
                >
                  Author: {data["Book-Author"]}
                </h4>
                <h4
                  className="year"
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    marginBottom: "5px",
                  }}
                >
                  Year-Of-Publication: {data["Year-Of-Publication"]}
                </h4>
                <h4
                  className="publisher"
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    marginBottom: "15px",
                  }}
                >
                  Publisher: {data.Publisher}
                </h4>
                {/* <h5
                className="colors"
                style={{
                  color: "#333",
                  fontSize: "1rem",
                  marginBottom: "10px",
                }}
              >
                Colors:
                <span
                  className="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In Store"
                ></span>
                <span className="color green"></span>
                <span className="color blue"></span>
              </h5> */}
                <div className="action mt-3">
                  <button
                    className="add-to-cart btn btn-primary"
                    type="button"
                    onClick={() => goToCart()}
                  >
                    Add to Cart
                  </button>
                  <button className="like btn btn-danger" type="button">
                    <span className="fa fa-heart"></span> Add to Wishlist
                  </button>
                </div>
                <div className="container mt-5">
                  <h2 className="mb-4">Submit Review</h2>
                  <form
                    onSubmit={handleSubmitReview}
                    style={{ maxWidth: "400px" }}
                  >
                    <div className="mb-3">
                      <label htmlFor="review" className="form-label">
                        Review:
                      </label>
                      <textarea
                        className="form-control"
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                        rows="4"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                      <label htmlFor="rating" className="form-label me-2">
                        Rating:
                      </label>
                      <div className="rating-input d-flex align-items-center">
                        <button
                          type="button"
                          className="btn btn-link me-2"
                          onClick={() => setRating(Math.max(rating - 1, 1))}
                        >
                          <i className="fa fa-minus-circle"></i>
                        </button>
                        <input
                          type="text"
                          className="form-control rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                          min="1"
                          max="5"
                          required
                          readOnly
                        />
                        <button
                          type="button"
                          className="btn btn-link ms-2"
                          onClick={() => setRating(Math.min(rating + 1, 5))}
                        >
                         <i className="fa fa-plus-circle"></i>
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="container mt-5">
        <h2>Related Books</h2>
        <div className="row related-products">
          {relatedProducts.map((product) => (
            <div className="col-md-3 mb-3" key={product.ISBN}>
              <div className="card product-card">
                <img
                  src={product["Image-URL-L"]}
                  alt={product["Book-Title"]}
                  className="card-img-top img-fluid"
                  style={{ height: "200px", objectFit: "contain" }} // Use 'contain' to fit without cutting
                />
                <div className="card-body text-left">
                  <h5 className="author">{product["Book-Author"]}</h5>
                  <p className="card-text">{product["Year-Of-Publication"]}</p>
                  <p className="card-text">{product.Publisher}</p>
                  <button
                    className="btn btn-primary text-center"
                    onClick={() => handleClick(product["Book-Title"])}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
