import React from 'react'

const Nav = () => {
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
    <a
      className="py-3 px-5 border rounded border-blue-200 text-blue-300"
      href="/create"
    >
      Add New Product
    </a>
    <hr className="my-3 w-[80%]" />
    <h1 className="text-2xl  mb-3 w-[80%]">Category Filter</h1>
    <ul className="w-[80%]">
      <li className="flex items-center bg-red-100 mb-3">
        <span className="rounded-full w-[15px] h-[15px] bg-blue-100"></span>
        cat 1
      </li>
      <li className="flex items-center bg-red-100 mb-3">
        <span className="rounded-full w-[15px] h-[15px] bg-red-100"></span>
        cat 1
      </li>
      <li className="flex items-center bg-red-100 mb-3">
        <span className="rounded-full w-[15px] h-[15px] bg-green-100"></span>
        cat 1
      </li>
      <li className="flex items-center bg-red-100 mb-3">
        <span className="rounded-full w-[15px] h-[15px] bg-yellow-100"></span>
        cat 1
      </li>
    </ul>
  </nav>
  )
}

export default Nav