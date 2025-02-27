import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import {GrNext,GrPrevious} from 'react-icons/gr'

import './styles.scss';

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default function Pagination({ totalItems, pageSize, initialPage, onPageChange }) {
  const [currentItem, setCurrentItem] = useState(initialPage);
  const pageCount = Math.ceil(totalItems/pageSize);
  
  useEffect(() => {
    onPageChange(currentItem);
  }, [currentItem]);

  const handlePageClick = (event) => { 
    const newOffset = (event.selected+1);
    setCurrentItem(newOffset);
  };

  return (
    <>

      <ReactPaginate
        breakLabel="..."
        nextLabel={<GrNext />}
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<GrPrevious />}
        renderOnZeroPageCount={null}
        containerClassName = "pagination"
        nextLinkClassName='page-num'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </>
  );
}