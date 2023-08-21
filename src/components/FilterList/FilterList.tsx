import Filter from "../Filter/Filter";
import "./FilterList.scss";

type FilterListProps = {
  selectedFilter: string;
  setSelectedFilter: (selectedFilter: string) => void;
};

const FilterList = ({ selectedFilter, setSelectedFilter }: FilterListProps) => {
  const handleFilterChange = (filterLabel: string) => {
    setSelectedFilter(filterLabel);
  };

  return (
    <div className="filter__list">
      <Filter
        label="High ABV (ABV > 6%)"
        selected={selectedFilter === "&abv_gt=6"}
        onChange={() => handleFilterChange("&abv_gt=6")}
      />
      <Filter
        label="Classic Range (first brewed before 2010)"
        selected={selectedFilter === "&brewed_before=01-2010"}
        onChange={() => handleFilterChange("&brewed_before=01-2010")}
      />
      <Filter
        label="High Acidity (pH < 4)"
        selected={selectedFilter === "High Acidity"}
        onChange={() => handleFilterChange("High Acidity")}
      />
    </div>
  );
};

export default FilterList;
