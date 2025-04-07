const Input = ({ handleRadioChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} onChange={handleRadioChange} value={value} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>{title}
    </label>
  )
}

export default Input;