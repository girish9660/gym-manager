export const InputComponent = ({ value, onChange, placeholder, inputTitle }) => {
  return (
    <div className="app-input-container">
        <label className="app-input-label"> {inputTitle}</label>
        <input
            className="app-input-component"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
        />
    </div>
  );
};
