'use client'

import React,{useState} from 'react'

export default function sortingviz() {
    const [array, setArray] = useState<number[]>([]);

    const generateArray = () => {
      const newArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);
      setArray(newArray);
      console.log(array);
    };
    return (
   
    <div className="flex flex-col items-center bg-">
        <h1 className="text-2xl font-bold mb-4">Sorting Visualizer</h1>
        <div className="w-full flex   justify-between ">
            <button onClick={generateArray}className="btn-blue">
                Generate new array
            </button>

        <div className='flex space-x-4 mr-10'>
             <button className="btn-blue">Bubble Sort</button>
            <button className="btn-blue">Selection Sort</button>
            <button className="btn-blue">Merge Sort</button>
            <button className="btn-blue">Quick Sort</button>
        </div> 
        </div>
     </div>
  )
}

   


    
