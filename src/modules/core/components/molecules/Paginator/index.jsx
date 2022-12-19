import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { BiChevronRight, } from 'react-icons/bi';
import './styles.scss';

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.number
};

export default function Pagination({ totalItems, pageSize = 10, initialPage =1, onPageChange}) {
  const totalPages = getFlooredToatalPages(totalItems, pageSize);
  const [currentPage, setCurrentPage] = useState(initialPage);

  function onNextpageClick() {
    const nextPage = getNextPage(currentPage , totalPages);
    setCurrentPage(nextPage +1);
  }

  // function onPreviousPageClick() {
  //   const prevPage = getPreviousePage(currentPage);
  //   setCurrentPage(prevPage);
  // }

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage ]);

  return (
    <div className="mvl-paginator">
      <span className="mvl-paginator__text">
        Page <strong>{currentPage} 2 3 4 5</strong>...<strong>{totalPages}</strong>
      </span>
      <div className="mvl-paginator__actions">
        {/* <button disabled={isFirstPage(currentPage)} onClick={onPreviousPageClick}>
        <BiChevronLeft /> 
        </button> */}
        <button disabled={isLastPage(currentPage, totalPages)} onClick={onNextpageClick}>
          NEXT <BiChevronRight />
        </button>
      </div>
    </div>
  );
}

// function isinitialPage(currentPage) {
//   return currentPage === 1;
// }

function isLastPage(currentPage, maxPage) {
  return currentPage === maxPage;
}


// function getPreviousePage(currentPage) {
//   return currentPage > 1 ? currentPage - 1 : currentPage;
// }

function getNextPage(currentPage, maxPage) {
  return currentPage < maxPage ? currentPage +1 : maxPage;
}

function getFlooredToatalPages(totalItems, pageSize) {
  return Math.floor(getToatalPages(totalItems, pageSize));
}

function getToatalPages(totalItems, pageSize) {
  return totalItems / pageSize;
}
