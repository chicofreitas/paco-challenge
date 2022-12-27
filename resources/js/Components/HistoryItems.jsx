import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export default function HistoryItems(props){
    const {data} = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
   

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

  return (
    <>
        {currentItems.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>{item.from_price}</td>
                    <td>{item.to_price}</td>
                    <td>{item.cotation}</td>
                    <td>{item.created_at}</td>
                </tr>
            );
        })}
        
        <ReactPaginate
            breakLabel="..."
            nextLabel="próximo >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< anterior"
            renderOnZeroPageCount={null}
            containerClassName="flex flex-row px-44 my-10"
            pageLinkClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            previousLinkClassName="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            nextLinkClassName="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            activeLinkClassName="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
        />
    </>
  );
}