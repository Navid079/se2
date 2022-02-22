import './IconInput.css';

const IconInput = ({ className, placeholder, type, onChange, children }) => {
  return (
    <span className={`text-input__container ${className}`}>
      {children}
      <input
        className="text-input"
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
      />
    </span>
  );
};

export default IconInput;
