

interface ButtonHomeProps {
    children ?: JSX.Element;
    Text?: JSX.Element;
    colapse: boolean
  
}

export function ButtonHome({children, colapse, Text}:ButtonHomeProps) {
  return (
    <div className='w-full h-10 flex  bg-zinc-900 border-l-4 border-blue-400 rounded hover:bg-zinc-700' >
    <button className="flex  justify-center items-center p-4  ">
        <a className="flex flex-row gap-5">  {children}  </a>
        {
          colapse ? (
            <h1>aaaaaa</h1>

          ): <></>
        }
    </button>

</div>
  )
}