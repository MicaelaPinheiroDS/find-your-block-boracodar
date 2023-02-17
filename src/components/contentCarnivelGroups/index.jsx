import { listCarnivalGroups } from './ListCarnivalGroups'

export function ContentCornivalGroups(){
    const cards  = listCarnivalGroups.map(card => {
        return (
        <div className="card" key={card.id}>
                <div className="card-body flex flex-col gap-4">
                    <img className=' rounded-t' src={card.img} alt={'imagem do card ' + card.title}></img>
                    <h3 className="card-title text-[20px] leading-[140%] font-bold">{card.title}</h3>
                    <p className="card-text text-base leading-[160%]">{card.description}</p>
                    <div className='flex  gap-2'>
                        <img src="./src/assets/img/location.svg" alt="" />
                        <p className=' text-base leading-[160%] opacity-75'>{card.localization}</p>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <section className="mt-[100px] w-[1213px] m-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-[32px] text-black dark:text-white font-bold">Blocos recomendados</h2>
                <div className="font-bold">
                    <button className="bg-purple text-white px-6 py-1 rounded">Lista</button>
                    <button className="px-6 py-1 rounded bg-white dark:bg-black text-purple">Mapa</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8 mt-10'>{cards}</div>


        </section>
    )
}