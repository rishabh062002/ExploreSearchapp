import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/expl.png";
import { pagination } from "../utils/Constants";

const Pagination = ({queries}) => {
    const {query} = useParams();
    const [page,setPage] = useState(pagination[0].startIndex);
    const navigate = useNavigate();

    useEffect(() => {
  setPage(pagination[0].startIndex);
    }, [query])



    const paginationClickHandler = (startIndex) => {
        setPage(startIndex);
        navigate(`/${query}/${startIndex}`)

    }

      
    return (
        <div className="flex flex-col items-center py-14 max-w-[700px]">
        <div className="relative text-[white]">
            {queries.previousPage && (
                <div
                    className="absolute left-[-30px] md:left-[-40px] top-[10px]"
                    onClick={() =>
                        paginationClickHandler(
                            queries.previousPage[0].startIndex
                        )
                    }
                >
                    <FiChevronLeft size={20} className="cursor-pointer" />
                    <span className="cursor-pointer  absolute left-[-80px] top-[30px] hidden md:block hover:text-[#8ab4f8] hover:underline hover:text-[19px]">
                        Previous
                    </span>
                </div>
            )}
            <img className="w-[250px] md:w-[250px]" src={Logo} alt="Sorry can't load image, some error occurred"/>
            {queries.nextPage && (
                <div
                    className="absolute right-[-30px] md:right-[-40px] top-[10px]"
                    onClick={() =>
                        paginationClickHandler(
                            queries.nextPage[0].startIndex
                        )
                    }
                >
                    <FiChevronRight size={20} className="cursor-pointer" />
                    <span className="cursor-pointer absolute left-[60px] top-[30px] hidden md:block hover:text-[#8ab4f8] hover:underline hover:text-[19px]">
                        Next
                    </span>
                </div>
            )}
        </div>
        <div className="flex gap-3 text-[white] text-l">
            {pagination.map((p) => (
                <span
                    key={p.page}
                    onClick={() => paginationClickHandler(p.startIndex)}
                    className={`cursor-pointer ${
                        page === p.startIndex ? " underline text-[#8ab4f8]  " : ""
                    }`}
                >
                    {p.page}
                </span>
            ))}
        </div>
    </div>
    );
};

export default Pagination;
