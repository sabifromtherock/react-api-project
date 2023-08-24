import "./Pagination.scss";
import rightArrow from "../../assets/images/right-arrow.png";
import leftArrow from "../../assets/images/left-arrow.png";
import rightDoubleArrow from "../../assets/images/right-arrow-double.png";
import leftDoubleArrow from "../../assets/images/left-arrow-double.png";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  lastPage: number;
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  lastPage,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="pagination">
      {currentPage > 2 && (
        <img
          className="pagination__image"
          src={leftDoubleArrow}
          alt="left double arrow"
          onClick={() => handlePageChange((currentPage = 1))}
        />
      )}
      {currentPage > 1 && (
        <img
          className="pagination__image"
          src={leftArrow}
          alt="left arrow"
          onClick={() => handlePageChange(currentPage - 1)}
        />
      )}
      {currentPage === 1 ? null : currentPage === 2 ? (
        <span> 1 </span>
      ) : (
        <span> 1 ... </span>
      )}
      <span>
        <strong>{` Page ${currentPage} `}</strong>
      </span>

      {currentPage === lastPage ? null : currentPage === lastPage - 1 ? (
        <span> {lastPage} </span>
      ) : (
        <span> ... {lastPage} </span>
      )}
      {currentPage !== lastPage && (
        <img
          className="pagination__image"
          src={rightArrow}
          alt="right arrow"
          onClick={() => handlePageChange(currentPage + 1)}
        />
      )}
      {currentPage < lastPage - 1 && (
        <img
          className="pagination__image"
          src={rightDoubleArrow}
          alt="right double arrow"
          onClick={() => handlePageChange((currentPage = lastPage))}
        />
      )}
    </div>
  );
};

export default Pagination;
