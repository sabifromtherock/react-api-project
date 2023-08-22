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
        selected={selectedFilter === "abv"}
        onChange={() => handleFilterChange("abv")}
      />
      <Filter
        label="Classic Range (first brewed before 2010)"
        selected={selectedFilter === "brewed"}
        onChange={() => handleFilterChange("brewed")}
      />
      <Filter
        label="High Acidity (pH < 4)"
        selected={selectedFilter === "ph"}
        onChange={() => handleFilterChange("ph")}
      />
      <Filter
        label="All"
        selected={selectedFilter === "all"}
        onChange={() => handleFilterChange("all")}
      />
    </div>
  );
};

export default FilterList;
