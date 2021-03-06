import React, { useState } from 'react';

export const useDropdown = (
  label: string,
  initialValue: string,
  options: string[],
): [string, React.Dispatch<string>, () => JSX.Element] => {
  const [value, setValue] = useState(initialValue);
  const id = `use-dropdown-${label.replace(' ', '').toLocaleLowerCase()}`;
  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = ({ target: { value: newVal } }) =>
    setValue(newVal);

  const dropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        name={label}
        id={id}
        value={value}
        onChange={onSelectChange}
        onBlur={onSelectChange}
        disabled={options.length === 0}
      >
        <option value='All'>All</option>
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [value, setValue, dropDown];
};
