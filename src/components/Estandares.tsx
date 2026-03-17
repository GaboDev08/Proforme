import { Award, Clock, Users, FileText } from "lucide-react";

export default function Estandares() {
  const estandares = [
    {
      codigo: "EC0217",
      nombre:
        "Impartición de cursos de formación del capital humano de manera presencial grupal",
      descripcion:
        "Certifica las competencias para diseñar, impartir y evaluar cursos de capacitación de forma presencial, facilitando el desarrollo del talento humano.",
      modalidad: "Presencial",
      duracion: "40 horas",
      participantes: "Mín. 5 - Máx. 20",
    },
    {
      codigo: "EC0301",
      nombre:
        "Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso",
      descripcion:
        "Valida la capacidad para desarrollar programas de capacitación completos, incluyendo diseño instruccional, evaluación y materiales didácticos.",
      modalidad: "Presencial",
      duracion: "50 horas",
      participantes: "Mín. 5 - Máx. 15",
    },
    {
      codigo: "EC0076",
      nombre:
        "Evaluación de la competencia de candidatos con base en Estándares de Competencia",
      descripcion:
        "Acredita las habilidades para evaluar candidatos bajo el modelo de certificación de competencias laborales establecido por CONOCER.",
      modalidad: "Presencial / Mixta",
      duracion: "60 horas",
      participantes: "Mín. 4 - Máx. 12",
    },
    {
      codigo: "EC0366",
      nombre: "Desarrollo de cursos de formación en línea",
      descripcion:
        "Certifica competencias para diseñar, desarrollar e implementar experiencias de aprendizaje digital efectivas y de calidad.",
      modalidad: "En línea",
      duracion: "45 horas",
      participantes: "Mín. 5 - Máx. 25",
    },
    {
      codigo: "EC0308",
      nombre:
        "Coordinación de Centros de Evaluación de Competencias",
      descripcion:
        "Valida las capacidades gerenciales y técnicas para administrar y coordinar las operaciones de un Centro Evaluador acreditado.",
      modalidad: "Presencial",
      duracion: "55 horas",
      participantes: "Mín. 3 - Máx. 10",
    },
  ];

  return (
    <section
      id="estandares"
      className="py-24 bg-background transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Estándares de Competencia
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Certificaciones oficiales con validez nacional,
            reconocidas por la Secretaría de Educación Pública y
            avaladas por CONOCER. Cada certificado acredita
            formalmente tus competencias profesionales.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {estandares.map((estandar, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border-2 border-border hover:border-secondary transition-all hover:shadow-xl p-8 group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Award className="text-secondary" size={28} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary mb-1">
                    {estandar.codigo}
                  </div>
                  <h3 className="text-xl font-bold text-primary leading-tight dark:text-foreground">
                    {estandar.nombre}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {estandar.descripcion}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                  <span className="text-foreground/60">
                    Modalidad:
                  </span>
                  <span className="text-foreground font-semibold">
                    {estandar.modalidad}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock
                    size={16}
                    className="text-primary dark:text-secondary"
                  />
                  <span className="text-foreground/60">
                    Duración:
                  </span>
                  <span className="text-foreground font-semibold">
                    {estandar.duracion}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users
                    size={16}
                    className="text-primary dark:text-secondary"
                  />
                  <span className="text-foreground/60">
                    Participantes:
                  </span>
                  <span className="text-foreground font-semibold">
                    {estandar.participantes}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-2 bg-secondary text-primary py-3 rounded-lg hover:opacity-90 transition-all font-bold">
                  <FileText size={18} />
                  Ficha Técnica (PDF)
                </button>
                <button
                  onClick={() => {
                    const element =
                      document.getElementById("contacto");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-all font-semibold"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}