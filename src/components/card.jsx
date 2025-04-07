import { FaStar, FaRegStar, FaShoppingBag, FaHeart } from "react-icons/fa";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="product-image" />
      <div className="card-content">
        <h3 className="product-name">{title}</h3>

        {/* Star Rating */}
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) =>
            index < star ? <FaStar key={index} className="star filled" /> : <FaRegStar key={index} className="star" />
          )}
          <span className="review-count">{reviews}</span>
        </div>

        {/* Price */}
        <p className="price">
          <del>{prevPrice}</del> ${newPrice}
        </p>

        {/* Icons */}
        <div className="icons">
          <button className="icon-btn">
            <FaShoppingBag className="icon" />
          </button>
          <button className="icon-btn heart">
            <FaHeart className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;