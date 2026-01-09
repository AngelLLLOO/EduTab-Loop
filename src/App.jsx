import React, { useState, useEffect } from 'react';
import { 
  RefreshCw, 
  Cpu, 
  Tablet, 
  Recycle, 
  Mountain, 
  Factory, 
  Hourglass, 
  Trash2, 
  Leaf, 
  BatteryFull, 
  RotateCcw, 
  Cable, 
  Shield, 
  HandCoins, 
  Coins, 
  Wrench, 
  ArrowRight, 
  ArrowDown, 
  Users, 
  Gem, 
  Lock,
  Terminal,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for anchor links
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Global Styles injected for specific animations not in default Tailwind */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            {['problema', 'solucion', 'daas', 'impacto'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => handleScroll(e, item)}
                className="hover:text-emerald-500 transition-colors capitalize"
              >
                {item === 'daas' ? 'Modelo DaaS' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <button 
            onClick={(e) => handleScroll(e, 'contacto')}
            className="hidden md:block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-700 transition-colors shadow-lg"
          >
            Solicitar Demo
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full px-6 py-4 flex flex-col gap-4 shadow-xl">
            {['problema', 'solucion', 'daas', 'impacto'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className="text-slate-600 font-semibold capitalize py-2"
              >
                {item === 'daas' ? 'Modelo DaaS' : item}
              </a>
            ))}
            <button 
              onClick={(e) => handleScroll(e, 'contacto')}
              className="bg-emerald-500 text-white w-full py-3 rounded-lg font-bold"
            >
              Solicitar Demo
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Decoration */}
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
            <button 
              onClick={(e) => handleScroll(e, 'contacto')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-200 transition-all transform hover:-translate-y-1 w-full md:w-auto"
            >
              Solicitar Piloto para mi Escuela
            </button>
            <button 
              onClick={(e) => handleScroll(e, 'solucion')}
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 rounded-full font-bold text-lg shadow-sm transition-all w-full md:w-auto flex items-center justify-center gap-2"
            >
              <Cpu size={20} /> Ver Especificaciones
            </button>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="mt-16 relative mx-auto max-w-4xl">
            <div className="aspect-video bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center text-white relative overflow-hidden border-4 border-slate-800 animate-float">
              {/* Representación visual abstracta de la tablet */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
              <div className="z-10 text-center p-10 flex flex-col items-center">
                <Tablet size={120} className="text-emerald-500 opacity-20 mb-4" />
                <h3 className="text-2xl font-bold text-white">EduTab Loop</h3>
                <p className="text-slate-400">Diseñada para ser desmontada</p>
              </div>
              {/* UI Elements Mockup */}
              <div className="absolute bottom-4 left-4 right-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-3/4"></div>
              </div>
            </div>
            {/* Badge */}
            <div className="hidden md:flex absolute -right-4 top-10 bg-white p-4 rounded-xl shadow-xl items-center gap-3 animate-pulse">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Recycle size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Material</p>
                <p className="font-bold text-slate-800">100% PCR</p>
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
            <p className="text-slate-500 text-lg">El modelo lineal actual (extraer, usar, tirar) es insostenible para el planeta y costoso para las escuelas.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProblemCard 
              icon={<Mountain size={28} />}
              color="red"
              title="Extracción Devastadora"
              desc="Dependencia crítica de minerales conflictivos y tierras raras que destruyen ecosistemas."
            />
            <ProblemCard 
              icon={<Factory size={28} />}
              color="orange"
              title="Diseño Permanente"
              desc="Ensamblajes con pegamento industrial que hacen imposible la reparación económica."
            />
            <ProblemCard 
              icon={<Hourglass size={28} />}
              color="yellow"
              title="Obsolescencia"
              desc="Dispositivos 'viejos' a los 2 años por software lento, aunque el hardware funcione."
            />
            <ProblemCard 
              icon={<Trash2 size={28} />}
              color="slate"
              title="Residuo Tóxico"
              desc="Solo el 20% se recicla. El resto filtra tóxicos en vertederos globales."
            />
          </div>
        </div>
      </section>

      {/* FASE 2: La Solución (Product Showcase) */}
      <section id="solucion" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ingeniería para la <br /><span className="text-emerald-500">Reparabilidad</span></h2>
              <p className="text-slate-400 text-lg">EduTab Loop rechaza los pegamentos. Cada componente ha sido pensado para ser reemplazado en segundos, directamente en el aula.</p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-4 mb-2">
                  <Terminal size={32} className="text-emerald-500" />
                  <div className="text-sm">
                    <p className="font-bold text-white">Software Open Source</p>
                    <p className="text-slate-400">8 Años de Soporte Garantizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Características Técnicas */}
          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Feature 1: Material (Large) */}
            <div className="md:col-span-8 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-emerald-500 transition-all group overflow-hidden relative">
              <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Carcasa 100% PCR</h3>
                <p className="text-slate-400 max-w-lg">Fabricada con Policarbonato Reciclado Post-Consumo. Eliminamos la extracción de petróleo virgen y usamos un diseño monomaterial para facilitar el reciclaje futuro.</p>
              </div>
            </div>

            {/* Feature 2: Battery (Tall) */}
            <div className="md:col-span-4 row-span-2 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg shadow-emerald-900/50">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                  <BatteryFull className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Batería de Cartucho</h3>
                <p className="text-emerald-50 mb-6">Cambio en 10 segundos. Sin herramientas. Sin servicio técnico.</p>
                <ul className="text-sm space-y-3">
                  <li className="flex items-center gap-2"><Recycle size={16} /> Clic y listo</li>
                  <li className="flex items-center gap-2"><Coins size={16} /> Accesible con una moneda</li>
                  <li className="flex items-center gap-2"><RefreshCw size={16} /> Código QR de reciclaje</li>
                </ul>
              </div>
              <div className="mt-8 text-center opacity-20 flex justify-center">
                <RotateCcw size={100} />
              </div>
            </div>

            {/* Feature 3: Modular USB */}
            <div className="md:col-span-4 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6">
                <Cable className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">USB-C Modular</h3>
              <p className="text-slate-400 text-sm">Placa hija separada. Si un alumno rompe el puerto, se cambia por céntimos sin soldadura.</p>
            </div>

            {/* Feature 4: Rugged */}
            <div className="md:col-span-4 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-emerald-500 transition-all">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Diseño Rugged IP65</h3>
              <p className="text-slate-400 text-sm">Esquinas de caucho reciclado y resistencia a polvo/agua. Hecha para sobrevivir al patio.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FASE 3: Modelo de Negocio (DaaS) */}
      <section id="daas" className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold tracking-wider text-sm uppercase">Modelo Económico</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-slate-900">Device as a Service (DaaS)</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Olvídese de activos que se deprecian. Pase a un modelo operativo predecible y sostenible. 
              <br /><strong>Nosotros mantenemos la propiedad. Usted disfruta del servicio.</strong>
            </p>
          </div>

          {/* Tabla Comparativa */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-3 bg-slate-50 p-6 border-b border-slate-200">
              <div className="col-span-1 font-bold text-slate-400 uppercase text-xs tracking-wider pt-2">Comparativa</div>
              <div className="col-span-1 text-center font-bold text-slate-600">Compra Tradicional</div>
              <div className="col-span-1 text-center font-bold text-emerald-500 text-lg">EduTab Loop</div>
            </div>

            <ComparisonRow 
              icon={<HandCoins size={18} className="text-slate-400" />}
              label="Relación"
              val1="Transaccional (Venta única)"
              val2="Suscripción a Largo Plazo"
            />
            <ComparisonRow 
              icon={<Coins size={18} className="text-slate-400" />}
              label="Incentivo"
              val1="Vender más unidades"
              val2="Durabilidad (Eficiencia)"
            />
            <ComparisonRow 
              icon={<Recycle size={18} className="text-slate-400" />}
              label="Fin de Vida"
              val1="Problema del Cliente (Basura)"
              val2="Recurso de la Empresa"
            />
            <ComparisonRow 
              icon={<Wrench size={18} className="text-slate-400" />}
              label="Mantenimiento"
              val1="Servicio Externo Costoso"
              val2="Incluido / Hubs Locales"
              last={true}
            />
          </div>

          {/* Life Cycle Visualization */}
          <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 max-w-xs w-full">
              <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Plan A</span>
              <h4 className="font-bold text-lg mb-2">Reacondicionamiento</h4>
              <p className="text-sm text-slate-600">Al acabar el contrato, limpiamos y actualizamos para escuelas con menos presupuesto.</p>
            </div>
            <div className="text-slate-300">
              <ArrowRight className="hidden md:block" size={32} />
              <ArrowDown className="md:hidden" size={32} />
            </div>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 max-w-xs w-full">
              <span className="bg-slate-300 text-slate-800 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Plan B</span>
              <h4 className="font-bold text-lg mb-2">Reciclaje Total</h4>
              <p className="text-sm text-slate-600">Recuperamos el policarbonato y metales para fabricar nuevas EduTabs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Social (Footer Area) */}
      <section id="impacto" className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Impacto Más Allá del Aula</h2>
              <p className="mb-6 leading-relaxed">
                La economía circular debe ser justa. EduTab Loop no solo protege el medio ambiente, sino que fortalece las comunidades locales y asegura una cadena de suministro ética.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-emerald-500">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Hubs de Mantenimiento Locales</h4>
                    <p className="text-sm text-slate-400">Creamos empleo técnico cualificado en tu comunidad ("Empleos Verdes"), reduciendo la huella de transporte.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-emerald-500">
                    <Gem size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Minería Libre de Conflictos</h4>
                    <p className="text-sm text-slate-400">Garantizamos que los materiales vírgenes provienen de minas certificadas con responsabilidad social.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form CTA */}
            <div id="contacto" className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-2">Únete a la Revolución Circular</h3>
              <p className="text-sm text-slate-400 mb-6">Solicita información para implementar el piloto en tu centro educativo.</p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por tu interés! Un representante te contactará pronto.'); }}>
                <input 
                  type="email" 
                  placeholder="Correo electrónico institucional" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:outline-none transition-colors placeholder:text-slate-500"
                />
                <button type="submit" className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-900/20">
                  Solicitar Contacto
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-4 text-center flex items-center justify-center gap-2">
                <Lock size={12} /> Tus datos están seguros. Sin compromiso.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2026 EduTab Loop. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-500">Privacidad</a>
              <a href="#" className="hover:text-emerald-500">Términos</a>
              <a href="#" className="hover:text-emerald-500">Soporte</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components to keep JSX clean
const ProblemCard = ({ icon, color, title, desc }) => {
  const colors = {
    red: "text-red-500 bg-red-50 hover:bg-red-500 hover:text-white border-red-200",
    orange: "text-orange-500 bg-orange-50 hover:bg-orange-500 hover:text-white border-orange-200",
    yellow: "text-yellow-500 bg-yellow-50 hover:bg-yellow-500 hover:text-white border-yellow-200",
    slate: "text-slate-500 bg-slate-100 hover:bg-slate-800 hover:text-white border-slate-300"
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-emerald-200 transition-colors group">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${colors[color].split(' hover')[0]} group-hover:bg-${color}-500 group-hover:text-white`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
};

const ComparisonRow = ({ icon, label, val1, val2, last }) => (
  <div className={`grid grid-cols-3 p-6 hover:bg-slate-50 transition-colors ${!last ? 'border-b border-slate-100' : ''}`}>
    <div className="col-span-1 font-semibold text-slate-700 flex items-center gap-2">
      {icon} {label}
    </div>
    <div className="col-span-1 text-center text-slate-500 text-sm md:text-base">{val1}</div>
    <div className="col-span-1 text-center font-bold text-slate-800 text-sm md:text-base">{val2}</div>
  </div>
);

export default App;