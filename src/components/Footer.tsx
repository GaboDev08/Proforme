import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-(--primary) text-white border-t border-secondary/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="../../public/logo2.png"
                alt="PROFORME Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Centro Evaluador acreditado ante la Red CONOCER.
              Impulsando la excelencia profesional mediante
              certificaciones oficiales con validez nacional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-6 text-secondary uppercase tracking-wider text-xs">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    scrollToSection("quienes-somos")
                  }
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("estandares")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Estándares
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("cursos")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Cursos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-secondary uppercase tracking-wider text-xs">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <a
                  href="mailto:contacto@proforme.mx"
                  className="hover:text-white transition-colors"
                >
                  contacto@proforme.mx
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 flex items-center justify-center text-secondary font-bold">
                  T
                </span>
                <a
                  href="tel:+525512345678"
                  className="hover:text-white transition-colors"
                >
                  +52 (55) 1234 5678
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                Ciudad de México, México
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-6 text-secondary uppercase tracking-wider text-xs">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              © 2026 PROFORME. Todos los derechos reservados.
            </p>
            <div className="flex gap-8">
              <button className="hover:text-white transition-colors">
                Aviso de Privacidad
              </button>
              <button className="hover:text-white transition-colors">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}