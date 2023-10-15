import React, { useState } from 'react';

function SortableTable({ data, columns, itemsPerPage = 5 }) {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (field) => {
    if (field === sortBy) {
      // If already sorted by this field, reverse the order
      setSortedData([...sortedData].reverse());
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Sort by the selected field
      const sorted = [...data].sort((a, b) => {
        const aValue = a[field];
        const bValue = b[field];
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
      setSortedData(sorted);
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pagesToDisplay = Math.min(totalPages, 5); // Display up to 5 pages

    const pagination = [];
    if (currentPage > 1) {
      pagination.push(
        <li key="prev" className="page-item inline-block mx-2" onClick={() => handlePageChange(currentPage - 1)}>
          <span className="page-link">Previous</span>
        </li>
      );
    }

    // Display the first 2 pages
    for (let i = 1; i <= Math.min(pagesToDisplay, 2); i++) {
      pagination.push(
        <li
          key={i}
          className={`page-item inline-block mx-2 ${currentPage === i ? ' underline' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }

    if (totalPages > pagesToDisplay) {
      pagination.push(
        <li key="skip-forward" className="page-item inline-block mx-2" onClick={() => handlePageChange(currentPage + 2)}>
          <span className="page-link">...</span>
        </li>
      );

      // Display the last 2 pages
      for (let i = totalPages - 1; i <= totalPages; i++) {
        pagination.push(
          <li
            key={i}
            className={`page-item inline-block mx-2 ${currentPage === i ? ' underline' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            <span className="page-link">{i}</span>
          </li>
        );
      }
    }

    if (currentPage < totalPages) {
      pagination.push(
        <li key="next" className="page-item inline-block mx-2" onClick={() => handlePageChange(currentPage + 1)}>
          <span className="page-link">Next</span>
        </li>
      );
    }

    return (
        <ul className="pagination">{pagination}</ul>
    );
  };


  return (
    <div>
    <table className='min-w-full text-center text-sm font-light'>
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          {columns.map((column) => (
            <th scope='col' className='px-6 py-2' key={column.field} onClick={() => handleSort(column.field)}>
              {column.label}
              {sortBy === column.field && (
                <span className={`ml-1 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}>▲</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody >
        {currentData.map((item, index) => (
          <tr className="border-b dark:border-neutral-500" key={index}>
            {columns.map((column) => (
              <td className="whitespace-nowrap px-6 py-2" key={column.field}>{item[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-center mt-4 cursor-default ">{renderPagination()}</div>
  </div>
  );
}

export default SortableTable;
