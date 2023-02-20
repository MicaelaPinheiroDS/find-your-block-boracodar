export function Header(){
    return (
        <header className="relative flex justify-center w-full h-[532px]">
            <div className="absolute z-0 w-full h-full">
                <div className="absolute top-0 left-0 bg-illustration-1 max-w-[407px] w-full h-[345px] bg-no-repeat"></div>
                <div className="absolute bottom-0 right-0 lg:bg-illustration-2 w-[414px] h-[330px] bg-no-repeat"></div>
            </div>
            <div>
                <div className='relative z-10 mt-[100px] flex flex-col items-center text-center'>
                    <h2 className="uppercase font-medium text-base leading-[160%] text-red mb-[18px]">Find you block</h2>
                    <h1 className=' text-black dark:text-white text-4xl font-bold leading-[125%] sm:w-[647px]'>Encontre os <span className='text-purple'>melhores blocos</span> de carnaval de 2023</h1>
                </div>
                <div className='relative z-10 py-10 md:p-10 flex flex-col lg:flex-row items-center gap-3'>
                    <div className='relative flex items-center'>
                        <div className='bg-icon-search bg-no-repeat w-6 h-6 absolute left-0 ml-[14px]'></div>
                        <input className='max-w-[348px] w-full py-3 pl-[50px] pr-2 dark:bg-black' type="text" placeholder='Pesquise por nome' />
                    </div>
                    <div className='relative flex items-center'>
                        <div className='bg-icon-location bg-no-repeat w-6 h-6 absolute left-0 ml-[14px]'></div>
                        <div className='bg-chevron-down bg-no-repeat w-6 h-6 absolute right-0 m-[12px] cursor-pointer'></div>
                        <input className='max-w-[348px] w-full py-3 pl-[50px] pr-2 dark:bg-black' type="text" placeholder='Selecione uma cidade' />
                    </div>
                   
                    <button className='uppercase bg-purple text-white px-8 py-3 rounded max-w-[348px] w-full lg:w-full'>Buscar agora</button>
                </div>
            </div>
        </header>
    )
}