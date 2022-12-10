import React from 'react';

const InputField = ({className, id, type, placeholder, value, label, min, max, setValue, obj}) => {

  const onChange = (e) => {
    const newValue = {...obj}
    newValue[e.target.id] = e.target.value
    setValue(newValue)
  };
  return (
    <>
      <label>{label}</label>
      <input
        className={className}
        id={id}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default InputField;