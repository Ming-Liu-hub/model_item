import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, BarChart3, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
// 确认图片路径正确
import jimengImage from './assets/jimeng.png'; 

const BentoCard = ({ children, className = "", title, subtitle, icon: Icon, borderHoverColor = "hover:border-blue-500/50" }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.01 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative group overflow-hidden rounded-[2rem] p-6 md:p-8 
                bg-white/[0.03] backdrop-blur-2xl border border-white/10 
                transition-all duration-500 ${borderHoverColor} ${className}`}
  >
    {/* 卡片内部的高光掠影效果 */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
          {Icon && <Icon className="text-white/80 w-6 h-6" />}
        </div>
        <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors w-5 h-5" />
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-white/40 font-mono uppercase tracking-wider mb-4">{subtitle}</p>
      </div>

      <div className="flex-grow">
        {children}
      </div>
    </div>
  </motion.div>
);

const BentoGrid = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6">
      {/* 优化：手机端 auto-rows-auto 防止溢出，电脑端固定 md:auto-rows-[200px] [cite: 6] */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-auto md:auto-rows-[200px]">
        
        {/* 1. 核心定位：Identity */}
        <BentoCard 
          className="md:col-span-2 md:row-span-2" 
          title="Model Data Expert" 
          subtitle="Data Strategy & Closed Loop"
          icon={Cpu}
        >
          <div className="mt-6 relative h-full">
            <p className="text-white/80 leading-relaxed text-xl font-medium tracking-tight">
              在噪声中提炼认知纯度，<br />
              构建从 <span className="text-blue-400">原始反馈</span> 到 <span className="text-purple-400">模型指标</span> 的量化闭环 [cite: 7]。
            </p>

            {/* 数据闭环可视化 [cite: 8, 9] */}
            <div className="mt-10 mb-8 relative flex justify-center py-6">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
              </div>
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {[
                  { label: "Prompt", color: "bg-blue-500" },
                  { label: "Data", color: "bg-cyan-500" },
                  { label: "Model", color: "bg-purple-500" },
                  { label: "Eval", color: "bg-indigo-500" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_10px_#3b82f6] mb-2`} />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-tighter">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 flex-wrap mt-auto">
              {["SFT 数据工程", "RLHF 奖励模型", "自动化评测 SOP", "Prompt 架构设计"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white/40 text-[11px] font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* 2. 技术栈：Python Lab [cite: 11, 12, 13, 14] */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1" 
          title="Python Lab" 
          subtitle="Automation & Data Engineering"
          icon={Terminal}
          borderHoverColor="hover:border-blue-400/50"
        >
          <div className="flex flex-col md:flex-row gap-4 mt-4 h-full">
            <div className="flex-1 font-mono text-[10px] bg-black/40 rounded-xl p-4 border border-white/5 relative overflow-hidden group/code">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                <div className="w-2 h-2 rounded-full bg-green-500/20" />
              </div>
              <div className="space-y-1 text-white/80">
                <p className="text-blue-400">def <span className="text-white">clean_llm_feedback</span>(raw_data):</p>
                <p className="text-white/40 pl-4"># Normalize noisy tokens & filter badcases</p>
                <p className="pl-4">clean = [doc.strip() <span className="text-purple-400">for</span> doc <span className="text-purple-400">in</span> raw_data]</p>
                <p className="pl-4">results = evaluator.batch_run(clean)</p>
                <p className="text-blue-400 pl-4"><span className="text-purple-400">return</span> <span className="text-white">analyze_consistency(results)</span></p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover/code:opacity-100 transition-opacity" />
            </div>
            <div className="w-full md:w-40 flex flex-col justify-center">
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] text-white/20 font-mono uppercase tracking-widest">Pipeline Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-500/80 uppercase">Active</span>
                  </div>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 font-mono text-[9px]">
                  <div className="text-white/30">{`> Parsing JSON...`}</div>
                  <div className="text-blue-400/60">{`> 1,204 cases processed`}</div>
                  <div className="text-white/60">{`> Score: 0.942`}</div>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 3. AIGC 实验室 (宽版布局) [cite: 17, 18, 19, 21, 23] */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1" 
          title="AIGC Lab" 
          subtitle="Visual Synthesis & Prompt Eng."
          icon={Palette}
          borderHoverColor="hover:border-purple-500/50"
        >
          <div className="flex flex-col md:flex-row gap-6 h-full mt-4">
            <div className="relative w-full md:w-1/2 h-52 md:h-full rounded-2xl overflow-hidden border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500 bg-[#050a14]">
              <img 
                src={jimengImage} 
                alt="Jimeng AIGC Work" 
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none z-20" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center z-30">
                 <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-md text-[8px] font-mono text-purple-200">
                   <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                   Jimeng_Gen_Ref
                 </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div className="space-y-2 font-mono text-[10px] tracking-tight">
                <p className="text-white/30 uppercase text-[9px] mb-2 tracking-[0.2em]">Prompt Structure //</p>
                <div>
                  <span className="text-purple-400 uppercase opacity-70 mr-2">[Subject]</span>
                  <span className="text-white/70">Neural data interface, holographic UI.</span>
                </div>
                <div>
                  <span className="text-blue-400 uppercase opacity-70 mr-2">[Style]</span>
                  <span className="text-white/70">Cyberpunk noir, volumetric fog. [cite: 22]</span>
                </div>
              </div>
              <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-white/30 uppercase">
                <div className="flex gap-3">
                  <span>Model: MJ v6.0</span>
                  <span>CFG: 7.0</span>
                </div>
                <span>--ar 16:9</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 4. 本地生活搜索优化 [cite: 25, 27, 28, 30] */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1" 
          title="Local Life Search Optimization" 
          subtitle="Evaluation SOP & Feedback Analysis"
          icon={BarChart3}
          borderHoverColor="hover:border-cyan-500/50"
        >
          <div className="flex flex-col md:flex-row gap-6 mt-4 h-full">
            <div className="flex-1">
              <p className="text-white/60 text-sm leading-relaxed">
                针对本地生活搜索场景，构建了从 <span className="text-cyan-400">用户负反馈</span> 到 <span className="text-white">Badcase 归因</span> 的全链路评测体系。
              </p>
              <ul className="mt-3 space-y-1.5">
                {["建立 20+ 维度的搜索相关性标注准则", "通过标注一致性校验，提升测试集置信度", "Case-driven 模型迭代优化建议"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[11px] text-white/30 font-mono">
                    <div className="w-1 h-1 bg-cyan-500/50 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-48 flex flex-col justify-center">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] text-white/20 font-mono uppercase">Accuracy</span>
                  <span className="text-cyan-400 font-mono text-lg leading-none">+12.4%</span>
                </div>
                <div className="space-y-2">
                  {[{ label: "Intention", val: 92 }, { label: "Ranking", val: 78 }, { label: "Geo-Match", val: 85 }].map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[9px] text-white/20 font-mono">
                        <span>{stat.label}</span>
                        <span>{stat.val}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.val}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-600/50 to-cyan-400/50" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 5. 待更新：Future [cite: 31, 32, 33, 34, 36] */}
        <BentoCard 
          className="md:col-span-2 md:row-span-1 group/soon" 
          title="Advanced LLM Training" 
          subtitle="Course Development // Q3 2026"
          icon={Code2}
          borderHoverColor="hover:border-indigo-500/50"
        >
          <div className="flex flex-col justify-between h-full mt-4">
            <p className="text-xs text-white/40 italic leading-relaxed max-w-[280px]">
              正在构建《多模态大模型应用实战》系列课程，涵盖从 <span className="text-indigo-400">数据治理</span> 到 <span className="text-indigo-400">RAG 工作流</span> 的工业级集成方案...
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-end text-font-mono uppercase tracking-widest">
                <div className="flex flex-col">
                  <span className="text-[10px] text-indigo-400/80 animate-pulse">System Initializing...</span>
                  <span className="text-[9px] text-white/20">Module: Multimodal_Eval_v1.0</span>
                </div>
                <div className="text-xl text-white/80 tabular-nums">72<span className="text-xs text-white/20">%</span></div>
              </div>
              <div className="h-2 w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5 relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "72%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-400 relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_#fff]" />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.05)_95%)] bg-[length:20px_100%]" />
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-indigo-500 animate-ping" />
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-tighter">Live Stream Syncing</span>
              </div>
            </div>
          </div>
        </BentoCard>

      </div>
    </section>
  );
};

export default BentoGrid;