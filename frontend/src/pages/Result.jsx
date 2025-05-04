import React from 'react'

const Result = () => {
    return (
        <div className='flex flex-col items-center border border-black m-6 p-6'>
            <div>
                <h1 className='mt-6 text-center text-3xl leading-9 font-extrabold m-4 p-4  text-green-700'>The Person Do Not Have Brain Tumer.</h1>
            </div>
            <div>
                <a className="mb-6 m-4 p-4 w-full rounded bg-primary text-white px-6 py-2 text-xs font-medium uppercase leading-normal" href="/home">Return Home</a>
                <a className='mb-6 m-4 p-4 w-full rounded bg-primary text-white px-6 py-2 text-xs font-medium uppercase leading-normal' href="/home">Check Again</a>
            </div>
        </div>
    )
}

export default Result
