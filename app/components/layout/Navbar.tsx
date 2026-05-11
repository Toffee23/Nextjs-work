import { Search, ShoppingBag, User, Heart, Menu, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full font-sans">
      {/* 1. Slim Top Announcement Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-center text-xs font-medium tracking-wide">
        Shop with confidence! 30-day hassle-free returns.
      </div>

      {/* 2. Main Branding & Search Area */}
      <div className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8">
          
          {/* Logo with modern typography */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-sky-600 p-2 rounded-lg shadow-blue-200 shadow-lg group-hover:rotate-6 transition-transform">
              <ShoppingBag className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-800">
              JUMMALL
            </span>
          </div>

          {/* Premium Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl relative group">
            <div className="flex w-full items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 transition-all">
              <input 
                type="text" 
                placeholder="Search for premium products..." 
                className="flex-1 bg-transparent px-5 py-3 outline-none text-sm text-slate-700"
              />
              <div className="h-6 w-[1px] bg-gray-200" />
              <button className="px-4 flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
                All Categories <ChevronDown size={14} />
              </button>
              <button className="bg-sky-600 p-3 m-1 rounded-lg text-white hover:bg-sky-700 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity">
              <div className="bg-gray-100 p-2.5 rounded-full">
                <User size={20} className="text-slate-600" />
              </div>
              <div className="text-xs">
                <p className="text-gray-400">Hello, Guest</p>
                <p className="font-bold text-slate-800">Login / Register</p>
              </div>
            </div>
            
            <div className="flex gap-4 border-l pl-6 border-gray-100">
              <div className="relative cursor-pointer hover:text-sky-600 transition-colors">
                <Heart size={24} />
                <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center border-2 border-white font-bold">0</span>
              </div>
              <div className="relative cursor-pointer hover:text-sky-600 transition-colors">
                <ShoppingBag size={24} />
                <span className="absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center border-2 border-white font-bold">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Navigation Links & Hotline */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Category Toggle */}
            <button className="bg-sky-600 text-white px-6 py-4 flex items-center gap-3 font-bold text-sm rounded-t-lg">
              <Menu size={18} />
              ALL CATEGORIES
              <ChevronDown size={16} />
            </button>

            {/* Nav Links */}
            <nav className="flex gap-8 text-sm font-semibold text-slate-600">
              {['Home', 'Shop', 'Blog', 'Contact', 'Sell on Jummall'].map((link) => (
                <a key={link} href="#" className="hover:text-sky-600 transition-colors relative group py-4">
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Hotline with Icon */}
          <div className="flex items-center gap-3 text-slate-800">
            <Phone size={18} className="text-sky-600" />
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase leading-none">Hotline:</p>
              <p className="text-sm font-black">+234 905 599 9998</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}