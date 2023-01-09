import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";


const params = {
    key : 'AIzaSyBV_Im1TxZkOtK_ZwvDIKr1fdQ4t1L4o3Y',
    cx : '643982db669fd48c0'
}

export const fetchDataFromApi = async (payload) => {

    const {data} = await axios.get(BASE_URL, {
        
  

        params : { ...params, ...payload},
    });
    
    return data;




};
