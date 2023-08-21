import { useState } from "react";
import Filter from "../Filter/Filter";
import "./FilterList.scss";

const FilterList = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterChange = (filterLabel: string) => {
    setSelectedFilter(filterLabel);
  };

  return (
    <div className="filter__list">
      <Filter
        label="High ABV (ABV &gt 6%)"
        selected={selectedFilter === "High ABV (ABV &gt 6%)"}
        onChange={() => handleFilterChange("High ABV (ABV &gt 6%)")}
      />
      <Filter
        label="Classic Range (first brewed before 2010)"
        selected={selectedFilter === "Classic Range (first brewed before 2010)"}
        onChange={() =>
          handleFilterChange("Classic Range (first brewed before 2010)")
        }
      />
      <Filter
        label="High Acidity (pH &lt 4)"
        selected={selectedFilter === "High Acidity (pH &lt 4)"}
        onChange={() => handleFilterChange("High Acidity (pH &lt 4)")}
      />
    </div>
  );
};

export default FilterList;
