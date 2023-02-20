export function Footer(){
    return (
        <footer className="relative w-full h-[350px]  mt-[100px]">
            <div className="absolute  w-full h-full bg-illustration-1 bg-no-repeat origin-botton rotate-180"></div>
            <div className="pt-32 m-auto flex flex-col lg:flex-row lg:w-full w-fit justify-around items-center lg:static relative z-20 p-5 rounded bg-white/75 dark:bg-black/75 ">
                <div className="flex flex-col items-center gap-7">
                    <h1><img src="./images/icon-carnaval.png" alt=""></img></h1>
                    <p>2023 - Micaela Pinheiro.</p>
                </div>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/micaelapinheiro/" target="_blank" rel="noreferrer"><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
                    <a href="https://github.com/MicaelaPinheiroDS" target="_blank" rel="noreferrer"><ion-icon size="large" name="logo-github"></ion-icon></a>
                    <a href="https://www.instagram.com/mica.mew/" target="_blank" rel="noreferrer"><ion-icon size="large" name="logo-instagram"></ion-icon></a>
                    <a href="https://twitter.com/micaelapinheir7" target="_blank" rel="noreferrer"><ion-icon size="large" name="logo-twitter"></ion-icon></a>
                </div>
            </div>
           
        </footer>
    )
}