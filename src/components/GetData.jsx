import React, { useState } from 'react'
import axios from 'axios'

const GetData = () => {
  // REST API 
  const [data, setData] = useState([]);

  const getData = async () => {
    // API urls from Google - "Lorem Picsum"
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
    // console.log(response.data);
  }

  return (
    <section className='pt-25 pb-10 px-5 bg-gray-100 h-screen w-full'>

      <button onClick={getData} className='bg-black text-white py-2 px-4 rounded-md mb-4 hover:bg-gray-700 cursor-pointer'>Fetch Data</button>

      <ul className='w-full flex flex-wrap justify-between -m-1'>
        {data.map((item) => (
          <li className='w-1/3 p-1 max-h-64' key={item.id}>
            <img src={item.download_url} className='h-full w-full object-cover' alt={item.author} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GetData
