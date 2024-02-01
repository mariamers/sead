import React from 'react';

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div className="search-column">
      <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder="search"
      />
    </div>
  );
};

export default ColumnFilter;
