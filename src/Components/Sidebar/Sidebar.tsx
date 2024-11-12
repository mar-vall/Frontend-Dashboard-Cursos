const Sidebar = () => {
  return (
    <div className="w-[345px] h-screen">
      <div className="w-[345px] px-10 py-[52px] justify-start items-center gap-2 inline-flex">
        <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
        <div className="text-[#22242c] text-lg font-semibold">
          Leonidasesteban.com
        </div>
      </div>
      <nav>
        <div className="px-10 py-4">
            <p className="text-[#22242c] text-lg font-semibold">Cursos</p>
        </div>
      </nav>
      <div className="w-[345px] px-10 pb-10 left-0 bottom-0 absolute items-center gap-4 inline-flex">
        <img
          className="w-[60px] h-[60px] rounded-[40px]"
          src="https://via.placeholder.com/60x60"
        />
        <div className="text-[#22242c] text-lg font-semibold">
          Robert Fox
        </div>
        <div className="w-6 h-6 relative" />
      </div>
    </div>
  )
}

export default Sidebar
