
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useGetMovieSearchQuery } from '../utils/slice/movieApiSlice';
import { FaCalendarAlt } from "react-icons/fa";
import { TbRating12Plus } from "react-icons/tb";
import { TbRating18Plus } from "react-icons/tb";
import Loader from "./Loader"
export default function SearchModal({modal, setModal}) {
    const [query, setQuery] = useState("")
    const [finalQuery, setFinalQuery] = useState(null)

  
        let {data: searchResults, isFetching } = useGetMovieSearchQuery(finalQuery, {
            skip: !finalQuery
        })


    
    useEffect(() =>{
        const handler = setTimeout(() =>{
            setFinalQuery(query)
        }, 1000)

        return () => clearTimeout(handler)
    },[query])

    const onSearch = (e) => {
        setQuery(e.target.value)
    }
    const closeModal = () => {
      setModal(false)
    }

  return (
    <Dialog open={modal} onClose={closeModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 top-20 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="sticky bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex gap-2 sm:items-start">
                <div className="mx-auto flex  size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <FaSearch />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  <input className='border-2 border-red-600 rounded-lg px-8 py-2 text-xl' type="text" defaultValue={query} placeholder='Search For Movies' onChange={onSearch}/>
                  </DialogTitle>
                  <div className="mt-2">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full border-b-2 border-red-600'></div>
            <div className="bg-black bg-opacity-25 px-4 py-3 sm:px-6 text-white overflow-y-auto scrollbar scrollbar-thumb-red-600 scrollbar-track-black max-h-[300px] md:max-h-[500px]">
                {isFetching && <Loader/>}
                {!isFetching && searchResults?.results.length == 0 && <div className='text-red-600'>No Result. Try Something Else.</div>}
                {!isFetching && searchResults?.results.map(res => {
                    return (
                        <div key={res.id} className="flex gap-3 sm:flex-row sm:flex-nowrap mx-2 my-4 bg-black">
                            <img src={`https://image.tmdb.org/t/p/w185/${res.poster_path}`} alt={res.title} className="w-24 h-24 sm:w-32 sm:h-32"/>
                            <div className="flex-1">
                                <h3 className="md:text-xl font-bold">{res.title}</h3>
                                <div className="text-xs flex my-2 gap-2 items-center"> <FaCalendarAlt className='text-red-600'/> {res.release_date}</div>
                                <div className='flex gap-2 my-2'>
                                  {
                                  Array(Math.floor(res.vote_average)).fill(0).map(e => <div>🌟</div>)
                                  }
                                </div>
                               
                              </div>
                        </div>
                    )
                })}
                <div className=''>

                </div>
              {/* <button
                type="button"
                data-autofocus
                onClick={() => setModal(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button> */}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}