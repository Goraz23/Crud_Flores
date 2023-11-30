import {Link, Outlet } from 'react-router-dom'
import 'boxicons'


function navbar() {
  return (
    <>
      <div className="bg-white dark:bg-[#242424] dark:text-white   text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            <Link to={"/"}>
            Beuty Flowers
            </Link>
          </h1>
        </div>
        
        <div className="flex flex-colum">
          <div className="flex flex-column items-center justify-center border-2 p-2 rounded-3xl gap-2">
            <div className="pl-2 flex items-center justify-center">
            <box-icon name="search" color="gray"></box-icon>
            </div>
            <input
              className="bg-white outline-none dark:bg-[#242424] dark:text-white] py-1"
              type="search"
              placeholder="Buscar"
            ></input>
          </div>
          <div className="flex flex-column items-center px-4 gap-4">
          <Link to={"/"}>
          <box-icon name='florist' type='solid' animation='tada' flip='horizontal' color='#f67284'Link to={"/"} >
          </box-icon>
          </Link>
          
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default navbar
