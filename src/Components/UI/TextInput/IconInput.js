import './IconInput.css';

const IconInput = ({ className, placeholder, type, onChange, icon }) => {
  return (
    <span className={`text-input__container ${className}`}>
      {icon}
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
