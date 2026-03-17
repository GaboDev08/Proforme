import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(
      "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
    );
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/525512345678", "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-background transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Estamos listos para brindarte información
            personalizada sobre nuestros procesos de
            certificación y capacitación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h3 className="text-2xl font-bold text-primary mb-8 dark:text-foreground">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-secondary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary mb-1 dark:text-foreground">
                    Correo Electrónico
                  </div>
                  <a
                    href="mailto:contacto@proforme.mx"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    contacto@proforme.mx
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-secondary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary mb-1 dark:text-foreground">
                    Teléfono
                  </div>
                  <a
                    href="tel:+525512345678"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +52 (55) 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin
                    className="text-secondary"
                    size={20}
                  />
                </div>
                <div>
                  <div className="font-semibold text-primary mb-1 dark:text-foreground">
                    Ubicación
                  </div>
                  <p className="text-foreground/70">
                    Ciudad de México, México
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-white mb-3">
                Horario de Atención
              </h4>
              <div className="space-y-2 text-white/90">
                <p>Lunes a Viernes: 9:00 - 18:00 hrs</p>
                <p>Sábados: 9:00 - 14:00 hrs</p>
                <p className="text-secondary mt-4 font-semibold">
                  Tiempo de respuesta: 24-48 horas
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-primary mb-2 dark:text-foreground"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        nombre: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="Ej: Juan Pérez García"
                  />
                </div>

                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-semibold text-primary mb-2 dark:text-foreground"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    required
                    value={formData.correo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        correo: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-semibold text-primary mb-2 dark:text-foreground"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    required
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        telefono: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="55 1234 5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-semibold text-primary mb-2 dark:text-foreground"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mensaje: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-foreground"
                    placeholder="Escribe tu consulta o solicitud de información..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg hover:opacity-90 transition-all font-bold flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Enviar Mensaje
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] text-white px-6 py-3.5 rounded-lg hover:opacity-90 transition-all font-bold flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}