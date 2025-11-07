function Navbar(){
    return (
        <>

        <div className="flex justify-between item-center px-6 py-4 shadow-md text-lg rounded-lg">
            <div>Shivshankar</div>
            <div className="flex gap-5">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        </>
    )
}

export default Navbar;