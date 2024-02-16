import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setPriceRange } from "../reducers/reducers";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


// eslint-disable-next-line
const RangeSlider = ({ priceRange, setPriceRange, products }) => {
  const [sliderValue, setSliderValue] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setSliderValue(priceRange);
  }, [priceRange]);

  const handleSliderChange = (newSliderValue) => {
    setSliderValue(newSliderValue);
    setPriceRange(newSliderValue);

    const filtered = products.filter(
      (product) =>
        product.price >= newSliderValue[0] && product.price <= newSliderValue[1]
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>All Products</h2>
      <p>Total Products: {filteredProducts.length}</p>
      <div style={{ margin: "20px" }}>
        <Slider
          min={0}
          max={1000}
          range
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p>Min Price: ${sliderValue[0]}</p>
        <p>Max Price: ${sliderValue[1]}</p>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Cod Available: {product.cod_available ? "Yes" : "No"}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

RangeSlider.propTypes = {
  priceRange: PropTypes.array.isRequired,
  setPriceRange: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  priceRange: state.priceRange.priceRange,
  products: state.products.products,
});

const mapDispatchToProps = {
  setPriceRange,
};

// eslint-disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider);
