import Input from "../../components/Input";

import "./Price.css";

const Price = ({ handleRadioChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleRadioChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleRadioChange={handleRadioChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleRadioChange={handleRadioChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleRadioChange={handleRadioChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleRadioChange={handleRadioChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
