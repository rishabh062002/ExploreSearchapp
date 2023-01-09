import { data } from "autoprefixer";

const SearchedItemTemplate = ({data}) => {


    function createMarkup(html) {
        return { __html: html };
    }

    
    return (


        <div className="flex flex-col py-3 max-w-[700px] ">
        <div 
        className="group cursor-pointer"
        onClick={() => window.open(data.link) }

        >
            <div className="text-sm truncate text-[#202124] ">
                {data.formattedUrl}

            </div>
            <div className="group-hover:underline text-[#8ab4f8] text-xl pt-2 ">
                {data.title}

            </div> 

        </div>

        <div
                className="text-sm text-[#a4b8d0] leading-6 pt-1"
                dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
            />


        </div>
    );
};

export default SearchedItemTemplate;
