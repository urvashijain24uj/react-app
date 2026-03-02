import React, { useState } from 'react'
import axios from 'axios'
import { X } from 'lucide-react'

const NotesPage = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, details);

    const addNote = [...task, { title: title, details: details }];

    setTask(addNote);

    setTitle('');
    setDetails('');
  }

  const handleRemove = (idx) => {
    const updatedNote = [...task]
    updatedNote.splice(idx, 1);

    setTask(updatedNote);
  }

  return (
    <section className="bg-white h-screen w-full">
      <div className='pt-30 pb-20 flex flex-col lg:flex-row gap-15 lg:gap-0'>
        <div className='lg:w-1/2'>

          <h2 className='text-4xl font-bold mb-12 text-center'>Add Notes Form</h2>
          <form onSubmit={(e) => submitHandler(e)} className='w-full flex flex-col gap-7 px-12'>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter notes title' className='h-16 border-2 border-gray-400 py-4 px-6 rounded-xl text-xl' />

            <textarea rows={4} value={details} onChange={(e) => setDetails(e.target.value)} placeholder='Enter details' className='border-2 border-gray-400 py-4 px-6 rounded-xl text-xl'></textarea>

            <button type="submit" className='bg-black text-white py-4 px-7 rounded-xl text-xl hover:bg-gray-800'>Add Note</button>
          </form>
        </div>

        <div className='lg:w-1/2 px-10 lg:border-l-2 border-gray-300'>
          <h2 className='text-4xl font-bold mb-12 text-center'>Recent Notes</h2>
          <ul className="w-full m-0 p-0 list-none flex flex-wrap -mx-3">
            {
              task.map((note, idx) => (
                <li key={note.title - idx} className='px-3 min-w-[12rem] w-1/3 mb-5'>
                  <div className="relative bg-yellow-100 p-4 rounded-2xl shadow-md w-full flex flex-col">
                    <h3 className="text-2xl font-bold wrap-break-word pe-4">{note.title}</h3>
                    <p className="text-xl font-normal text-gray-500 wrap-break-word">{note.details}</p>
                    <button onClick={() => handleRemove(idx)} className='rounded-full absolute top-3 right-3 bg-red-400 text-white p-1 hover:bg-red-500 cursor-pointer'>
                      <X size={16} />
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default NotesPage
