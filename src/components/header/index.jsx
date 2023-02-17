export function Header(){
    return (
        <header className="relative flex justify-center  w-screen h-[532px]">
            <div className="absolute z-0 w-full h-full">
                <img className="absolute top-0 left-0" src="./src/assets/img/ilustra-01.png" alt="" />
                <img className="absolute bottom-0 right-0" src="./src/assets/img/ilustra-02.png" alt="" />
            </div>
            <div>
                <div className='relative z-10 mt-[100px] flex flex-col items-center text-center'>
                    <h2 className="uppercase font-medium text-base leading-[160%] text-red mb-[18px]">Find you block</h2>
                    <h1 className=' text-black dark:text-white text-4xl font-bold leading-[125%] w-[647px]'>Encontre os <span className='text-purple'>melhores blocos</span> de carnaval de 2023</h1>
                </div>
                <div className='relative z-10 p-10 flex items-center gap-3'>
                    <div className='relative flex items-center'>
                        <div className='bg-[url(./src/assets/img/icon-search.svg)] bg-no-repeat w-6 h-6 absolute left-0 ml-[14px]'></div>
                        <input className='w-[348px] py-3 pl-[50px] pr-2 dark:bg-black' type="text" placeholder='Pesquise por nome' />
                    </div>
                    <div className='relative flex items-center'>
                        <div className='bg-[url(./src/assets/img/location.svg)] bg-no-repeat w-6 h-6 absolute left-0 ml-[14px]'></div>
                        <div className='bg-[url(./src/assets/img/chevron-down.svg)] bg-no-repeat w-6 h-6 absolute right-0 m-[12px] cursor-pointer'></div>
                        <input className='w-[348px] py-3 pl-[50px] pr-2 dark:bg-black' type="text" placeholder='Selecione uma cidade' />
                    </div>
                   
                    <button className='uppercase bg-purple text-white px-8 py-3 rounded'>Buscar agora</button>
                </div>
            </div>
        </header>
    )
}