import React from 'react';
import Navbar from './components/Navbar';
import MobiusBackground from './components/MobiusBackground';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="relative min-h-screen bg-[#010208] text-white">
      {/* 1. 背景层：莫比乌斯能量流 */}
      <MobiusBackground />

      {/* 2. 导航层 */}
      <Navbar />

      {/* 3. 内容层：通过增加 pt-72 让卡片整体下沉 */}
      {/* pt-72 约等于 288px，你可以根据视觉感官微调为 pt-64 或 pt-[320px] */}
      <main className="relative z-10 pt-72 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 标题部分：增加 mb-24 拉开与卡片的距离 */}
          <header className="mb-24 px-2">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              MODELING <br />
              <span className="text-white/20">THE LOOP.</span>
            </h1>
            <p className="mt-6 text-blue-400/50 font-mono text-sm uppercase tracking-[0.4em]">
              Data Strategy & Eval Framework // 2026
            </p>
          </header>

          {/* 4. 玻璃态便当盒卡片 */}
          <BentoGrid />
        </div>
      </main>

      {/* 极简页脚 */}
      <footer className="relative z-10 py-12 text-center border-t border-white/5">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
          Synthesized with precision // 2026
        </p>
      </footer>
    </div>
  );
}

export default App;