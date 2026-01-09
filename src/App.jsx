<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduTab Loop | Tecnología Circular para Educación</title>
    
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Configuración personalizada de Tailwind -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#0f172a', /* Slate 900 */
                            gray: '#334155', /* Slate 700 */
                            accent: '#10b981', /* Emerald 500 */
                            accentHover: '#059669', /* Emerald 600 */
                            light: '#f8fafc', /* Slate 50 */
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        /* Estilos base para scrollbar y detalles finos */
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .text-gradient {
            background: linear-gradient(to right, #0f172a, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="bg-brand-light text-brand-dark font-sans leading-relaxed">

    <!-- Navbar -->
    <nav class="fixed w-full z-50 transition-all duration-300 glass-panel shadow-sm">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white">
                    <i class="fa-solid fa-arrows-spin"></i>
                </div>
                <span class="text-xl font-bold tracking-tight">EduTab <span class="text-brand-accent">Loop</span></span>
            </div>
            <div class="hidden md:flex gap-8 text-sm font-semibold text-brand-gray">
                <a href="#problema" class="hover:text-brand-accent transition-colors">El Problema</a>
                <a href="#solucion" class="hover:text-brand-accent transition-colors">La Solución</a>
                <a href="#daas" class="hover:text-brand-accent transition-colors">Modelo DaaS</a>
                <a href="#impacto" class="hover:text-brand-accent transition-colors">Impacto Social</a>
            </div>
            <a href="#contacto" class="bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-gray transition-colors shadow-lg">
                Solicitar Demo
            </a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <!-- Abstract Decoration -->
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 z-0"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

        <div class="container mx-auto px-6 relative z-10 text-center max-w-5xl">
            <div class="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                Tecnología Circular v1.0
            </div>
            <h1 class="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                La Tablet que las Escuelas <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Alquilan, No Tiran.</span>
            </h1>
            <p class="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto font-light">
                Transformamos el aula con el modelo <strong class="text-slate-800">Device as a Service</strong>. 
                Sin obsolescencia programada. Sin residuos tóxicos. 100% Economía Circular.
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href="#contacto" class="px-8 py-4 bg-brand-accent hover:bg-brand-accentHover text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-200 transition-all transform hover:-translate-y-1 w-full md:w-auto">
                    Solicitar Piloto para mi Escuela
                </a>
                <a href="#solucion" class="px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 rounded-full font-bold text-lg shadow-sm transition-all w-full md:w-auto flex items-center justify-center gap-2">
                    <i class="fa-solid fa-microchip"></i> Ver Especificaciones
                </a>
            </div>
            
            <!-- Hero Image Placeholder -->
            <div class="mt-16 relative mx-auto max-w-4xl">
                <div class="aspect-video bg-slate-900 rounded-2xl shadow-2xl flex items-center justify-center text-white relative overflow-hidden border-4 border-slate-800 animate-float">
                    <!-- Representación visual abstracta de la tablet -->
                    <div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                    <div class="z-10 text-center p-10">
                        <i class="fa-solid fa-tablet-screen-button text-9xl text-emerald-500 opacity-20 mb-4"></i>
                        <h3 class="text-2xl font-bold">EduTab Loop</h3>
                        <p class="text-slate-400">Diseñada para ser desmontada</p>
                    </div>
                    <!-- UI Elements Mockup -->
                    <div class="absolute bottom-4 left-4 right-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div class="h-full bg-emerald-500 w-3/4"></div>
                    </div>
                </div>
                <!-- Badge -->
                <div class="absolute -right-4 top-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse">
                    <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                        <i class="fa-solid fa-recycle"></i>
                    </div>
                    <div>
                        <p class="text-xs text-slate-500 font-bold uppercase">Material</p>
                        <p class="font-bold text-slate-800">100% PCR</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FASE 1: El Problema -->
    <section id="problema" class="py-20 bg-slate-50">
        <div class="container mx-auto px-6">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">El Coste Oculto de la Tecnología Educativa</h2>
                <p class="text-slate-500 text-lg">El modelo lineal actual (extraer, usar, tirar) es insostenible para el planeta y costoso para las escuelas.</p>
            </div>

            <div class="grid md:grid-cols-4 gap-8">
                <!-- Card 1 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-red-200 transition-colors group">
                    <div class="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <i class="fa-solid fa-mountain text-2xl"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Extracción Devastadora</h3>
                    <p class="text-slate-500 text-sm">Dependencia crítica de minerales conflictivos y tierras raras que destruyen ecosistemas.</p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-orange-200 transition-colors group">
                    <div class="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <i class="fa-solid fa-industry text-2xl"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Diseño Permanente</h3>
                    <p class="text-slate-500 text-sm">Ensamblajes con pegamento industrial que hacen imposible la reparación económica.</p>
                </div>

                <!-- Card 3 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-yellow-200 transition-colors group">
                    <div class="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                        <i class="fa-solid fa-hourglass-end text-2xl"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Obsolescencia</h3>
                    <p class="text-slate-500 text-sm">Dispositivos "viejos" a los 2 años por software lento, aunque el hardware funcione.</p>
                </div>

                <!-- Card 4 -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-slate-300 transition-colors group">
                    <div class="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                        <i class="fa-solid fa-dumpster text-2xl"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Residuo Tóxico</h3>
                    <p class="text-slate-500 text-sm">Solo el 20% se recicla. El resto filtra tóxicos en vertederos globales.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FASE 2: La Solución (Product Showcase) -->
    <section id="solucion" class="py-24 bg-slate-900 text-white overflow-hidden relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#10b981 1px, transparent 1px); background-size: 30px 30px;"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col md:flex-row items-center justify-between mb-16">
                <div class="md:w-1/2">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6">Ingeniería para la <br><span class="text-brand-accent">Reparabilidad</span></h2>
                    <p class="text-slate-400 text-lg">EduTab Loop rechaza los pegamentos. Cada componente ha sido pensado para ser reemplazado en segundos, directamente en el aula.</p>
                </div>
                <div class="md:w-1/3 mt-8 md:mt-0">
                    <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div class="flex items-center gap-4 mb-2">
                            <i class="fa-brands fa-linux text-3xl text-brand-accent"></i>
                            <div class="text-sm">
                                <p class="font-bold text-white">Software Open Source</p>
                                <p class="text-slate-400">8 Años de Soporte Garantizado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grid de Características Técnicas -->
            <div class="grid md:grid-cols-12 gap-6">
                
                <!-- Feature 1: Material (Large) -->
                <div class="md:col-span-8 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-brand-accent transition-all group overflow-hidden relative">
                    <div class="absolute right-0 top-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div class="relative z-10">
                        <div class="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6">
                            <i class="fa-solid fa-leaf text-brand-accent"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Carcasa 100% PCR</h3>
                        <p class="text-slate-400 max-w-lg">Fabricada con Policarbonato Reciclado Post-Consumo. Eliminamos la extracción de petróleo virgen y usamos un diseño monomaterial para facilitar el reciclaje futuro.</p>
                    </div>
                </div>

                <!-- Feature 2: Battery (Tall) -->
                <div class="md:col-span-4 row-span-2 bg-gradient-to-br from-brand-accent to-emerald-700 rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg shadow-emerald-900/50">
                    <div>
                        <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                            <i class="fa-solid fa-battery-full text-white"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">Batería de Cartucho</h3>
                        <p class="text-emerald-50 mb-6">Cambio en 10 segundos. Sin herramientas. Sin servicio técnico.</p>
                        <ul class="text-sm space-y-3">
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check"></i> Clic y listo</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check"></i> Accesible con una moneda</li>
                            <li class="flex items-center gap-2"><i class="fa-solid fa-check"></i> Código QR de reciclaje</li>
                        </ul>
                    </div>
                    <div class="mt-8 text-center text-8xl opacity-20">
                        <i class="fa-solid fa-rotate"></i>
                    </div>
                </div>

                <!-- Feature 3: Modular USB -->
                <div class="md:col-span-4 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-brand-accent transition-all">
                    <div class="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6">
                        <i class="fa-brands fa-usb text-brand-accent"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">USB-C Modular</h3>
                    <p class="text-slate-400 text-sm">Placa hija separada. Si un alumno rompe el puerto, se cambia por céntimos sin soldadura.</p>
                </div>

                <!-- Feature 4: Rugged -->
                <div class="md:col-span-4 bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-brand-accent transition-all">
                    <div class="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6">
                        <i class="fa-solid fa-shield-halved text-brand-accent"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Diseño Rugged IP65</h3>
                    <p class="text-slate-400 text-sm">Esquinas de caucho reciclado y resistencia a polvo/agua. Hecha para sobrevivir al patio.</p>
                </div>

            </div>
        </div>
    </section>

    <!-- FASE 3: Modelo de Negocio (DaaS) -->
    <section id="daas" class="py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <span class="text-brand-accent font-bold tracking-wider text-sm uppercase">Modelo Económico</span>
                <h2 class="text-4xl font-bold mt-2 mb-6 text-brand-dark">Device as a Service (DaaS)</h2>
                <p class="text-xl text-slate-500 max-w-2xl mx-auto">
                    Olvídese de activos que se deprecian. Pase a un modelo operativo predecible y sostenible. 
                    <br><strong>Nosotros mantenemos la propiedad. Usted disfruta del servicio.</strong>
                </p>
            </div>

            <!-- Tabla Comparativa -->
            <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                <div class="grid grid-cols-3 bg-slate-50 p-6 border-b border-slate-200">
                    <div class="col-span-1 font-bold text-slate-400 uppercase text-xs tracking-wider pt-2">Comparativa</div>
                    <div class="col-span-1 text-center font-bold text-slate-600">Compra Tradicional</div>
                    <div class="col-span-1 text-center font-bold text-brand-accent text-lg">EduTab Loop</div>
                </div>

                <!-- Row 1 -->
                <div class="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <div class="col-span-1 font-semibold text-slate-700 flex items-center gap-2">
                        <i class="fa-solid fa-hand-holding-dollar text-slate-400"></i> Relación
                    </div>
                    <div class="col-span-1 text-center text-slate-500">Transaccional (Venta única)</div>
                    <div class="col-span-1 text-center font-bold text-slate-800">Suscripción a Largo Plazo</div>
                </div>

                <!-- Row 2 -->
                <div class="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <div class="col-span-1 font-semibold text-slate-700 flex items-center gap-2">
                        <i class="fa-solid fa-coins text-slate-400"></i> Incentivo
                    </div>
                    <div class="col-span-1 text-center text-slate-500">Vender más unidades (Obsolescencia)</div>
                    <div class="col-span-1 text-center font-bold text-slate-800">Durabilidad (Eficiencia)</div>
                </div>

                <!-- Row 3 -->
                <div class="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <div class="col-span-1 font-semibold text-slate-700 flex items-center gap-2">
                        <i class="fa-solid fa-recycle text-slate-400"></i> Fin de Vida
                    </div>
                    <div class="col-span-1 text-center text-slate-500">Problema del Cliente (Basura)</div>
                    <div class="col-span-1 text-center font-bold text-slate-800">Recurso de la Empresa (Materia Prima)</div>
                </div>

                <!-- Row 4 -->
                <div class="grid grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
                    <div class="col-span-1 font-semibold text-slate-700 flex items-center gap-2">
                        <i class="fa-solid fa-wrench text-slate-400"></i> Mantenimiento
                    </div>
                    <div class="col-span-1 text-center text-slate-500">Servicio Técnico Externo Costoso</div>
                    <div class="col-span-1 text-center font-bold text-slate-800">Incluido / Hubs Locales</div>
                </div>
            </div>

            <!-- Life Cycle Visualization -->
            <div class="mt-20 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 max-w-xs w-full">
                    <span class="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Plan A</span>
                    <h4 class="font-bold text-lg mb-2">Reacondicionamiento</h4>
                    <p class="text-sm text-slate-600">Al acabar el contrato, limpiamos y actualizamos para escuelas con menos presupuesto.</p>
                </div>
                <div class="text-slate-300 text-2xl"><i class="fa-solid fa-arrow-right-long hidden md:block"></i><i class="fa-solid fa-arrow-down-long md:hidden"></i></div>
                <div class="bg-slate-100 p-6 rounded-2xl border border-slate-200 max-w-xs w-full">
                    <span class="bg-slate-300 text-slate-800 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Plan B</span>
                    <h4 class="font-bold text-lg mb-2">Reciclaje Total</h4>
                    <p class="text-sm text-slate-600">Recuperamos el policarbonato y metales para fabricar nuevas EduTabs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Impacto Social (Footer Area) -->
    <section id="impacto" class="bg-brand-dark text-slate-300 py-20 border-t border-slate-800">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 class="text-3xl font-bold text-white mb-6">Impacto Más Allá del Aula</h2>
                    <p class="mb-6 leading-relaxed">
                        La economía circular debe ser justa. EduTab Loop no solo protege el medio ambiente, sino que fortalece las comunidades locales y asegura una cadena de suministro ética.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-brand-accent">
                                <i class="fa-solid fa-people-carry-box"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-bold">Hubs de Mantenimiento Locales</h4>
                                <p class="text-sm text-slate-400">Creamos empleo técnico cualificado en tu comunidad ("Empleos Verdes"), reduciendo la huella de transporte.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-brand-accent">
                                <i class="fa-regular fa-gem"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-bold">Minería Libre de Conflictos</h4>
                                <p class="text-sm text-slate-400">Garantizamos que los materiales vírgenes provienen de minas certificadas con responsabilidad social.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contact Form CTA -->
                <div id="contacto" class="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                    <h3 class="text-2xl font-bold text-white mb-2">Únete a la Revolución Circular</h3>
                    <p class="text-sm text-slate-400 mb-6">Solicita información para implementar el piloto en tu centro educativo.</p>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('¡Gracias por tu interés! Un representante te contactará pronto.');">
                        <input type="email" placeholder="Correo electrónico institucional" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-brand-accent focus:outline-none transition-colors">
                        <button type="submit" class="w-full py-3 bg-brand-accent hover:bg-brand-accentHover text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-900/20">
                            Solicitar Contacto
                        </button>
                    </form>
                    <p class="text-xs text-slate-500 mt-4 text-center">
                        <i class="fa-solid fa-lock"></i> Tus datos están seguros. Sin compromiso.
                    </p>
                </div>
            </div>

            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>&copy; 2026 EduTab Loop. Todos los derechos reservados.</p>
                <div class="flex gap-4 mt-4 md:mt-0">
                    <a href="#" class="hover:text-brand-accent">Privacidad</a>
                    <a href="#" class="hover:text-brand-accent">Términos</a>
                    <a href="#" class="hover:text-brand-accent">Soporte</a>
                </div>
            </div>
        </div>
    </section>

</body>
</html>