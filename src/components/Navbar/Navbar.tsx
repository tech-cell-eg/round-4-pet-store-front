

import { FaSearch } from 'react-icons/fa';
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="bg-[#FFF6E9] shadow-md w-full">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-[28px] font-black text-[#003459] leading-none">Monito</span>
          <span className="text-[10px] text-[#99A2A5] mt-2">Pets for Best</span>
        </div>

        {/* Center: Navigation */}
   <div className="flex gap-8 text-[14px] font-medium text-[#003459]">
  <a href="/" className="hover:text-[#002A3A] transition-colors duration-200">Home</a>
  <a href="/category" className="hover:text-[#002A3A] transition-colors duration-200">Category</a>
  <a href="/about" className="hover:text-[#002A3A] transition-colors duration-200">About</a>
  <a href="/contact" className="hover:text-[#002A3A] transition-colors duration-200">Contact</a>
</div>


        
        <div className="flex items-center gap-4">
          
    <div className="relative w-[280px] h-[40px]">
  <FaSearch className="absolute left-3 top-[50%] -translate-y-1/2 text-[#99A2A5] w-4 h-4 pointer-events-none" />
  <input
    type="text"
    placeholder="Search something here!"
    className="w-full h-full pl-10 pr-4 text-sm text-[#667479] placeholder-[#99A2A5] bg-[#FDFDFD] border border-[#CCD1D2] rounded-[10px] focus:outline-none"
  />
</div>



      
          <button className="bg-[#003459] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#002A3A] transition">
            Join the community
          </button>

          <div className="flex items-center gap-1 cursor-pointer select-none">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-sm text-[#003459] font-medium">VND</span>
            <svg className="w-4 h-4 text-[#003459]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 7l4.5 4.5L14.5 7H5.5z" />
            </svg>
          </div>

        </div>
      </div>
    </nav>
  );
}
