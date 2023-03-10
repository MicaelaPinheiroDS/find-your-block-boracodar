import { listCarnivalGroups } from './ListCarnivalGroups'
import { SwitchTheme } from '../SwitchTheme'
export function ContentCornivalGroups(){
    const cards  = listCarnivalGroups.map(card => {
        return (
        <div className="card max-w-96" key={card.id}>
                <div className="card-body flex flex-col gap-4">
                    <img className=' rounded-t' src={card.img} alt={'imagem do card ' + card.title}></img>
                    <h3 className="card-title text-[20px] leading-[140%] font-bold">{card.title}</h3>
                    <p className="card-text text-base leading-[160%]">{card.description}</p>
                    <div className='flex  gap-2'>
                        <img src="./images/location.svg" alt="" />
                        <p className=' text-base leading-[160%] opacity-75'>{card.localization}</p>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <section className="mt-[100px] lg:w-fit px-5 lg:px-0 m-auto max-w-[1200px]">
            <div className="flex flex-col md:flex-row md:text-center justify-between items-center mx-10 lg:mx-0">
                <h2 className="text-[32px] text-black dark:text-white font-bold">Blocos recomendados</h2>
                <div className="font-bold flex gap-2 items-center">
                    <SwitchTheme />
                    <button className="bg-purple text-white px-6 py-1 rounded">Lista</button>
                    <button className="px-6 py-1 rounded bg-white dark:bg-black text-purple">Mapa</button>
                </div>
            </div>
            <div className='w-fill grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>{cards}</div>


        </section>
    )
}