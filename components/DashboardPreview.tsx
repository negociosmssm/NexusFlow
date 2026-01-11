
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Seg', uv: 4000, pv: 2400 },
  { name: 'Ter', uv: 3000, pv: 1398 },
  { name: 'Qua', uv: 2000, pv: 9800 },
  { name: 'Qui', uv: 2780, pv: 3908 },
  { name: 'Sex', uv: 1890, pv: 4800 },
  { name: 'Sáb', uv: 2390, pv: 3800 },
  { name: 'Dom', uv: 3490, pv: 4300 },
];

export const DashboardPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0E14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-1 md:p-4 rounded-[2rem] border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-1000">
          <div className="bg-[#0B0E14] rounded-[1.5rem] overflow-hidden">
            {/* Header Mockup */}
            <div className="border-b border-white/5 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <div className="h-6 w-32 bg-white/5 rounded"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-white/5 rounded-full"></div>
                <div className="h-8 w-24 bg-[#00F5FF]/10 border border-[#00F5FF]/20 rounded-full"></div>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Performance da Operação</h4>
                  <div className="text-[#00F5FF] text-sm font-bold">+24.8% este mês</div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00F5FF" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px' }}
                        itemStyle={{ color: '#00F5FF' }}
                      />
                      <Area type="monotone" dataKey="pv" stroke="#00F5FF" strokeWidth={3} fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-sm text-[#94A3B8] mb-1">Total Escalado</p>
                  <p className="text-3xl font-black">1.2M+</p>
                  <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-[#00F5FF] rounded-full shadow-[0_0_10px_#00F5FF]"></div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-sm text-[#94A3B8] mb-1">Segurança</p>
                  <p className="text-3xl font-black">99.9%</p>
                  <div className="mt-4 flex gap-2">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="h-4 w-2 bg-[#00F5FF] rounded-sm"></div>)}
                    <div className="h-4 w-2 bg-white/10 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
