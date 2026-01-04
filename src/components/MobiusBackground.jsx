import React from 'react';
import { motion } from 'framer-motion';

const MobiusBackground = () => {
  // 宽屏 8 字路径：左上方向和右下方向对冲
  const leftPath = "M 100,50 C 60,10 20,90 100,50 Z";
  const rightPath = "M 100,50 C 140,90 180,10 100,50 Z";

  // 二进制下落矩阵
  const matrixLines = Array.from({ length: 32 }).map((_, i) => ({
    id: i,
    x: (i * 100) / 32,
    content: Math.random() > 0.5 ? "101101" : "011010",
    duration: 15 + Math.random() * 20,
    delay: Math.random() * -20,
    opacity: 0.15 + Math.random() * 0.2
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#010208]">
      
      {/* 1. 数字矩阵背景 */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {matrixLines.map(line => (
          <motion.div
            key={line.id}
            initial={{ y: "-10%" }}
            animate={{ y: "110%" }}
            transition={{ duration: line.duration, repeat: Infinity, ease: "linear", delay: line.delay }}
            className="absolute font-mono text-[10px] text-blue-400/50 tracking-[1em]"
            style={{ left: `${line.x}%`, writingMode: 'vertical-rl' }}
          >
            {line.content.repeat(8)}
          </motion.div>
        ))}
      </div>

      {/* 2. 环境氛围光 */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[70%] flex justify-center gap-[10%] opacity-80 pointer-events-none">
        <div className="w-[45%] h-full bg-blue-600/20 blur-[160px] rounded-full animate-pulse" />
        <div className="w-[45%] h-full bg-purple-600/20 blur-[180px] rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      <svg
        viewBox="0 0 200 100"
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] h-[100vh] overflow-visible pointer-events-none"
      >
        <defs>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 高能渐变：白光核心 */}
          <linearGradient id="blueEnergy" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="#ffffff" /> 
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>

          <linearGradient id="purpleEnergy" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
          </linearGradient>
        </defs>

        {/* 3. 莫比乌斯骨架 - 确保形状完整可见 */}
        <path d={leftPath} fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.1" />
        <path d={rightPath} fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.1" />

        {/* 4. 对称对冲能量流 */}
        
        {/* 蓝色光束：从中心往左上方喷涌 */}
        <motion.path
          d={leftPath}
          fill="none"
          stroke="url(#blueEnergy)"
          strokeWidth="3.8"
          strokeLinecap="round"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0.8, pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* 紫色光束：从中心往右下方喷涌 */}
        <motion.path
          d={rightPath}
          fill="none"
          stroke="url(#purpleEnergy)"
          strokeWidth="3.8"
          strokeLinecap="round"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0.8, pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* 【已移除中心点的脉冲圆/方块】 */}

      </svg>
      
      {/* 5. 最终质感：数字噪点 */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
    </div>
  );
};

export default MobiusBackground;