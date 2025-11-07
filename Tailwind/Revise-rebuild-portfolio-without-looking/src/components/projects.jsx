export default function Projects(){
    return (
        <>
        <section id="projects">

        <div className="grid grid-cols-3 sm-h-screen  justify-center">
            <div>
                <h3>Made spotify-clone</h3>
                <img  width={"350"} src="https://s3-alpha.figma.com/hub/file/5266409206/resized/1200x720/52cdf2e2-f990-40c0-becd-4ed2034eca08-cover.png" alt="" />
                <button className="bg-orange-500 rounded-lg p-2 m-4 hover:bg-orange-700 text-white">See live project</button>
            </div>

            <div>
                <h3>portfolio</h3>
                <img width={"350"} src="https://contentwriting101.com/wp-content/uploads/2020/09/Build-Your-Portfolio.png" alt="" />
                 <button className="bg-orange-500 rounded-lg p-2 m-4 hover:bg-orange-700 text-white">See live project</button>
            </div>
            <div>
                <h3>Skysense weather app</h3>
                <img  width={"350"} src="https://static.vecteezy.com/system/resources/previews/020/330/631/original/3d-glassmorphism-weather-forecast-app-template-mobile-interface-template-weather-icons-set-isolated-on-blue-background-vector.jpg" alt="" />
                 <button className="bg-orange-500 rounded-lg p-2 m-4 hover:bg-orange-700 text-white">See live project</button>
            </div>
        </div>
        </section>
        </>
    )
}