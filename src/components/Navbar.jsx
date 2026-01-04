import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 引入图标以增强视觉表现
import { Cpu, Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Methodology', href: '#eval' },
    { name: 'AIGC Lab', href: '#lab' },
    { name: 'Engineering', href: '#code' },
    { name: 'About', href: '#about' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="flex items-center gap-8 px-6 md:px-8 py-3 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto relative group">
        
        {/* 1. 隐藏的背景流光：当导航栏加载时或鼠标移入时会有微弱的能量感 */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        {/* 2. Logo 部分：强化专家身份感 */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="relative">
            <Cpu className="w-4 h-4 text-blue-400" />
            <div className="absolute inset-0 bg-blue-400/50 blur-md animate-pulse" />
          </div>
          <span className="text-sm font-bold tracking-tighter text-white uppercase flex items-center gap-1">
            Data<span className="text-blue-500">.</span>Expert
          </span>
        </div>

        {/* 分隔线 */}
        <div className="hidden md:block w-px h-4 bg-white/10" />

        {/* 3. 桌面端导航链接 */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="relative text-[11px] font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em] group/link"
            >
              {link.name}
              {/* 悬停时的能量下划线 */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </div>

        {/* 4. 状态按钮与移动端切换 */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="hidden md:block w-px h-4 bg-white/10" />
          
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-zinc-300 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all group/btn">
            <FileText className="w-3 h-3 text-zinc-500 group-hover/btn:text-blue-400 transition-colors" />
            RESUME
          </button>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden p-1 text-zinc-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* 5. 移动端展开菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 rounded-3xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 md:hidden flex flex-col gap-4 shadow-2xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-mono uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;