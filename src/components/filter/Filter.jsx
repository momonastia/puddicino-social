import { useState } from "react";
import "./index.css";

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const searchHandle = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(
      inputFilter
    ); /* per passare al padre App.jsx il valore di input */
  };

  return (
    <div>
      <form className="Filter" onSubmit={onHandleSubmit} action="">
        <input
          type="text"
          value={inputFilter}
          onChange={searchHandle}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Filter;
