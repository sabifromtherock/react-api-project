import "./Filter.scss";

type FilterProps = {
  label: string;
  selected: boolean;
  onChange: () => void;
};

const Filter = ({ label, selected, onChange }: FilterProps) => {
  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__input"
          type="radio"
          name="filter"
          checked={selected}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Filter;
