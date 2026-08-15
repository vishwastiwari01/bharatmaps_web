'use client'
import Image from 'next/image'

export default function IndiaFirst() {
  return (
    <section id="india-first" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden bg-slate-50 border border-slate-200">
            {/* Very faint background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-10">
              <Image 
                src="/india.png" 
                alt="India Map silhouette" 
                width={500} 
                height={500} 
                className="w-full h-full object-contain opacity-20 grayscale"
              />
            </div>
            
            {/* Use case tags floating around */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 font-mono text-[10px] font-bold text-[#FF9933] animate-float">
              HIMALAYAN TREKS
            </div>
            <div className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 font-mono text-[10px] font-bold text-[#138808] animate-float" style={{ animationDelay: '1s' }}>
              RURAL CONNECTIVITY
            </div>
            <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 font-mono text-[10px] font-bold text-[#000066] animate-float" style={{ animationDelay: '2s' }}>
              FESTIVAL CROWDS
            </div>
            <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 font-mono text-[10px] font-bold text-red-500 animate-float" style={{ animationDelay: '1.5s' }}>
              DISASTER RELIEF
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="section-label mb-4 block w-fit">Vision</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
              Built for India.<br />
              Designed for everywhere.
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              India presents unique connectivity challenges — from remote Himalayan treks to hyper-dense festival crowds and unpredictable infrastructure. 
            </p>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Bharat Maps is engineered to thrive in these extremes, creating a resilient communication layer that empowers communities to stay connected when it matters most.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Rural Connectivity', 'High-Density Cities', 'Trekking', 'Highways', 'Disaster Response', 'Travel', 'Community'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}
