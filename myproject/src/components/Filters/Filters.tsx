import React, { FunctionComponent } from 'react';
import { FilterWrapper } from './Filters.styled';
interface FiltersProp {
  filters: any;
}
const Filters: FunctionComponent<FiltersProp> = (filters: any) => {
  return (
    <FilterWrapper>
      {filters?.filters.map((filter: any) => (
        <div className="filters">
          <div key={filter.value}>{filter.value}</div>
          <div className="dropdownIcon">^</div>
        </div>
      ))}
    </FilterWrapper>
  );
};

export default Filters;
