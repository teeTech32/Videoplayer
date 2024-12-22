type Props = {
  onClick: () => void;
  hasMore: boolean;
};

const PaginationButton = ({ onClick, hasMore }: Props) =>{

  return<div className=" flex justify-center pb-20 pt-10 ">
          <button
          onClick={onClick}
          disabled={!hasMore}
          className="mt-4 p-2 bg-gray-300 hover:bg-green-600 text-black font-bold rounded disabled:bg-gray-400"
        >
          {hasMore ? 'Load More' : 'No More Videos'}
          </button>
        </div>
}
  
;
export default PaginationButton