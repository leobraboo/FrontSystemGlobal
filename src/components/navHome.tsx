import { Alien, User ,UserCircle,Users, UserCirclePlus, UserList, UserPlus, Truck,  Trash ,TrendUp, Tote, Tag, Storefront ,ShoppingCart ,Receipt ,Printer, Package, Gear  } from "phosphor-react";
import { useState } from "react";
import {ButtonHome} from './form/buttonHome'


interface NavHomeProps {
  colapse: boolean
  
}

export function NavHome({colapse}: NavHomeProps) {
  const [open , setOpen] = useState(true);

  return (
    <div onClick={()=> setOpen((state)=> !state)} className={`${open ? "w-80" : "w-20"}   h-screen flex flex-col items-center duration-700   bg-black opacity-95 border-r-4 border-blue-400 `} >
      <div className="flex flex-col justify-center items-center gap-5 ">
        <UserCircle weight="light" className="w-16 h-16 flex  justify-center mt-16  bg-zinc-400 rounded-full "/>
        <h1 className={`${open ? "visible" : ""} duration-300 text-blue-400 text-lg text-center `}>ROOTS</h1>
      </div>
      <div className={`${open ? "w-72" : "w-16"} duration-700 flex flex-col items-center mt-16 gap-5 justify-between`}>
        
      <div className='w-full h-10 flex bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center  items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <UserList weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300 text-lg font-semibold text-zinc-300 items-center`}>Clientes</h1>
              ): <></>

          }
        </button>
        
      </div>
      <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <ShoppingCart weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300  text-lg font-semibold text-zinc-300 items-center`}>Produtos</h1>

            ): <></>
          }
        </button>
      </div>
      <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <Truck weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300  text-lg font-semibold text-zinc-300 items-center`}>Transportadora</h1>

            ): <></>
          }
        </button>
      </div>
      <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <Package weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300  text-lg font-semibold text-zinc-300 items-center`}>Vendas</h1>

            ): <></>
          }
        </button>
      </div>
      <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <TrendUp weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300  text-lg font-semibold text-zinc-300 items-center`}>Gráficos</h1>

            ): <></>
          }
        </button>
      </div>
      
      <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <Storefront weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300  text-lg font-semibold text-zinc-300 items-center`}>Nota fiscal</h1>

            ): <></>
          }
        </button>
      </div>
      <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <Gear weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300  text-lg font-semibold text-zinc-300 items-center`}>Configurações</h1>

            ): <></>
          }
        </button>
      </div>

      <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
        <button className="flex  justify-center items-center p-4 gap-7 ">
          <a className="flex flex-row ">  <Tote weight="fill" color="white" size={28}/>  </a>
          {
            colapse ? (
              <h1 className={`${open ? "visible" : "invisible"} duration-300  text-lg font-semibold text-zinc-300 items-center`}>Sair</h1>

            ): <></>
          }
        </button>
      </div>

       
      
      </div>
    
    </div>
  )
}