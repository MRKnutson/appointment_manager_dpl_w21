import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAxiosOnMount = (url) =>{

  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    try {
      let response = await axios.get(url);
    setData(response.data)
    } catch (error) {
      alert("Error getting data, debug")
    }
  };

  return {data, setData};

};

export default useAxiosOnMount;


// const useAxiosOnMount = (url, returnPath) => {

//   const [data, setData] = useState(null);
//   // const [error, setError] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//       getData();
//   },[])

//   const getData = async () =>{
//     try { 
//       let res = await axios.get(url)

//       // making assumption that this is how data is returned
//       {returnPath ? setData(returnPath) : setData(res.data)}
//       setData(res.data)
//       setLoading(false)
//     } catch (err){
//       setError('Error Occured');
//       setLoading(false)
//     }
//   };

//   return {data, error, setData, loading}
// };

// export default useAxiosOnMount;