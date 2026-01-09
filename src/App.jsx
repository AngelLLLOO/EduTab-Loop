import React, { useState } from 'react';
import { 
  RefreshCw, Cpu, Tablet, Recycle, Mountain, Factory, Hourglass, Trash2, 
  Leaf, BatteryFull, RotateCcw, Cable, Shield, HandCoins, Coins, Wrench, 
  ArrowRight, ArrowDown, Users, Gem, Lock, Terminal, Menu, X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900 min-h-screen">
      {/* Fuentes globales */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-panel shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleScroll(e, 'hero')}>
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
              <RefreshCw size={18} className="animate-spin-slow" style={{ animationDuration: '3s' }} />
            </div>
            <span className="text-xl font-bold tracking-tight">EduTab <span className="text-emerald-500">Loop</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            {['problema', 'solucion', 'daas', 'impacto'].map((item) => (
              <a key={item} href={`#${item}`} onClick={(e) => handleScroll(e, item)} className="hover:text-emerald-500 transition-colors capitalize">
                {item === 'daas' ? 'Modelo DaaS' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <button onClick={(e) => handleScroll(e, 'contacto')} className="hidden md:block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-700 transition-colors shadow-lg">
            Solicitar Demo
          </button>

          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full px-6 py-4 flex flex-col gap-4 shadow-xl">
            {['problema', 'solucion', 'daas', 'impacto'].map((item) => (
              <a key={item} href={`#${item}`} onClick={(e) => handleScroll(e, item)} className="text-slate-600 font-semibold capitalize py-2">
                {item === 'daas' ? 'Modelo DaaS' : item}
              </a>
            ))}
            <button onClick={(e) => handleScroll(e, 'contacto')} className="bg-emerald-500 text-white w-full py-3 rounded-lg font-bold">Solicitar Demo</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            Tecnología Circular v1.0
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-slate-900">
            La Tablet que las Escuelas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Alquilan, No Tiran.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto font-light">
            Transformamos el aula con el modelo <strong className="text-slate-800">Device as a Service</strong>. 
            Sin obsolescencia programada. Sin residuos tóxicos. 100% Economía Circular.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button onClick={(e) => handleScroll(e, 'contacto')} className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-200 transition-all transform hover:-translate-y-1 w-full md:w-auto">
              Solicitar Piloto para mi Escuela
            </button>
            <button onClick={(e) => handleScroll(e, 'solucion')} className="px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 rounded-full font-bold text-lg shadow-sm transition-all w-full md:w-auto flex items-center justify-center gap-2">
              <Cpu size={20} /> Ver Especificaciones
            </button>
          </div>
          
          <div className="mt-16 relative mx-auto max-w-4xl">
            <div className="aspect-video bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center text-white relative overflow-hidden border-4 border-slate-800 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
              <div className="z-10 text-center p-10 flex flex-col items-center">
                <Tablet size={120} className="text-emerald-500 opacity-20 mb-4" />
                <h3 className="text-2xl font-bold text-white">EduTab Loop</h3>
                <p className="text-slate-400">Diseñada para ser desmontada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FASE 1: El Problema */}
      <section id="problema" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">El Coste Oculto de la Tecnología Educativa</h2>
            <p className="text-slate-500 text-lg">El modelo lineal actual es insostenible y costoso.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <ProblemCard icon={<Mountain size={28} />} color="red" title="Extracción" desc="Dependencia de minerales conflictivos." />
            <ProblemCard icon={<Factory size={28} />} color="orange" title="Diseño Permanente" desc="Pegamento industrial impide reparación." />
            <ProblemCard icon={<Hourglass size={28} />} color="yellow" title="Obsolescencia" desc="Lento a los 2 años por software." />
            <ProblemCard icon={<Trash2 size={28} />} color="slate" title="Residuo Tóxico" desc="Solo el 20% se recicla correctamente." />
          </div>
        </div>
      </section>

      {/* FASE 2: La Solución */}
      <section id="solucion" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ingeniería para la <br /><span className="text-emerald-500">Reparabilidad</span></h2>
              <p className="text-slate-400 text-lg">Sin pegamentos. Componentes reemplazables en segundos.</p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
               <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-4">
                  <Terminal size={32} className="text-emerald-500" />
                  <div className="text-sm">
                    <p className="font-bold text-white">Software Open Source</p>
                    <p className="text-slate-400">8 Años de Soporte</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-slate-800 rounded-3xl p-8 border border-slate-700 relative overflow-hidden">
                <div className="relative z-10">
                    <Leaf className="text-emerald-500 w-12 h-12 mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Carcasa 100% PCR</h3>
                    <p className="text-slate-400">Policarbonato Reciclado Post-Consumo. Diseño monomaterial.</p>
                </div>
            </div>
            <div className="md:col-span-4 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 text-white">
                <BatteryFull className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-3">Batería Cartucho</h3>
                <p className="text-emerald-50">Cambio en 10 segundos sin herramientas.</p>
            </div>
            <div className="md:col-span-4 bg-slate-800 rounded-3xl p-8 border border-slate-700">
                <Cable className="text-emerald-500 w-12 h-12 mb-6" />
                <h3 className="text-xl font-bold mb-2">USB-C Modular</h3>
                <p className="text-slate-400">Placa separada reemplazable por céntimos.</p>
            </div>
            <div className="md:col-span-4 bg-slate-800 rounded-3xl p-8 border border-slate-700">
                <Shield className="text-emerald-500 w-12 h-12 mb-6" />
                <h3 className="text-xl font-bold mb-2">Diseño Rugged</h3>
                <p className="text-slate-400">Esquinas de caucho y resistencia IP65.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FASE 3: DaaS */}
      <section id="daas" className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Device as a Service (DaaS)</h2>
            <p className="text-xl text-slate-500">Nosotros mantenemos la propiedad. Usted disfruta del servicio.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-3 bg-slate-50 p-6 border-b border-slate-200 font-bold text-slate-600">
              <div>Comparativa</div><div className="text-center">Compra</div><div className="text-center text-emerald-500">EduTab Loop</div>
            </div>
            <ComparisonRow icon={<HandCoins size={18}/>} label="Relación" val1="Venta única" val2="Suscripción" />
            <ComparisonRow icon={<Recycle size={18}/>} label="Fin de Vida" val1="Basura" val2="Materia Prima" />
            <ComparisonRow icon={<Wrench size={18}/>} label="Mantenimiento" val1="Costoso" val2="Incluido" last={true} />
          </div>
        </div>
      </section>

      {/* Footer / Contacto */}
      <section id="contacto" className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Únete a la Revolución</h2>
              <p className="mb-6">EduTab Loop fortalece comunidades y asegura una cadena ética.</p>
              <div className="flex gap-4 mb-4"><Users className="text-emerald-500"/><p>Empleos Verdes Locales</p></div>
              <div className="flex gap-4"><Gem className="text-emerald-500"/><p>Minería Ética</p></div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Solicitar Piloto</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado'); }} className="space-y-4">
                <input type="email" placeholder="Email institucional" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 outline-none" />
                <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl">Enviar</button>
              </form>
            </div>
        </div>
      </section>
    </div>
  );
};

const ProblemCard = ({ icon, color, title, desc }) => {
  const colors = {
    red: "text-red-500 bg-red-50 group-hover:bg-red-500",
    orange: "text-orange-500 bg-orange-50 group-hover:bg-orange-500",
    yellow: "text-yellow-500 bg-yellow-50 group-hover:bg-yellow-500",
    slate: "text-slate-500 bg-slate-100 group-hover:bg-slate-800"
  };
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-emerald-200 transition-colors group">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${colors[color]} group-hover:text-white`}>
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
};

const ComparisonRow = ({ icon, label, val1, val2, last }) => (
  <div className={`grid grid-cols-3 p-6 hover:bg-slate-50 transition-colors ${!last ? 'border-b border-slate-100' : ''}`}>
    <div className="col-span-1 font-semibold text-slate-700 flex items-center gap-2">{icon} {label}</div>
    <div className="col-span-1 text-center text-slate-500">{val1}</div>
    <div className="col-span-1 text-center font-bold text-slate-800">{val2}</div>
  </div>
);

export default App;