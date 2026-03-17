import { BookOpen, GraduationCap, Users, FileText } from "lucide-react";

export default function Cursos() {
  const cursos = [
    {
      nombre: "Técnicas de Capacitación Efectiva",
      modalidad: "Presencial",
      duracion: "24 horas",
      publico:
        "Profesionales de recursos humanos, capacitadores y formadores",
      descripcion:
        "Desarrollo de habilidades pedagógicas para facilitar procesos de aprendizaje en entornos corporativos.",
    },
    {
      nombre: "Diseño Instruccional Avanzado",
      modalidad: "Mixta (presencial y en línea)",
      duracion: "30 horas",
      publico:
        "Diseñadores de capacitación, coordinadores académicos y consultores",
      descripcion:
        "Metodologías y herramientas para el diseño de experiencias de aprendizaje efectivas y medibles.",
    },
    {
      nombre: "Evaluación de Competencias Laborales",
      modalidad: "Presencial",
      duracion: "20 horas",
      publico:
        "Evaluadores, responsables de certificación y consultores en desarrollo organizacional",
      descripcion:
        "Fundamentos y técnicas para realizar evaluaciones objetivas basadas en estándares de competencia.",
    },
    {
      nombre: "Consultoría Organizacional",
      modalidad: "Presencial",
      duracion: "32 horas",
      publico:
        "Consultores, directores y gerentes de desarrollo organizacional",
      descripcion:
        "Metodología completa para diagnosticar necesidades y proponer soluciones estratégicas a organizaciones.",
    },
    {
      nombre: "Formación en Línea: Herramientas Digitales",
      modalidad: "En línea",
      duracion: "18 horas",
      publico:
        "Instructores, capacitadores y profesionales de e-learning",
      descripcion:
        "Dominio de plataformas digitales y recursos tecnológicos para la capacitación virtual efectiva.",
    },
    {
      nombre: "Liderazgo y Gestión del Talento Humano",
      modalidad: "Presencial",
      duracion: "28 horas",
      publico:
        "Líderes de equipo, gerentes y directores de recursos humanos",
      descripcion:
        "Estrategias de liderazgo moderno y gestión integral del capital humano en organizaciones.",
    },
    {
      nombre: "Diplomado en Gestión de Centros de Evaluación",
      modalidad: "Mixta",
      duracion: "120 horas",
      publico:
        "Directivos y coordinadores de instituciones educativas y centros evaluadores",
      descripcion:
        "Formación integral para la administración eficiente y normativa de centros acreditados ante CONOCER.",
    },
    {
      nombre: "Inteligencia Artificial para Formadores",
      modalidad: "En línea",
      duracion: "20 horas",
      publico:
        "Docentes, capacitadores y diseñadores instruccionales",
      descripcion:
        "Uso de herramientas de IA generativa para optimizar la creación de contenidos y la evaluación del aprendizaje.",
    },
    {
      nombre: "Diplomado en Diseño Instruccional 4.0",
      modalidad: "En línea",
      duracion: "90 horas",
      publico:
        "Profesionales de la educación y capacitación corporativa",
      descripcion:
        "Metodologías ágiles y tecnológicas para el diseño de programas de formación de alto impacto.",
    },
  ];

  return (
    <section
      id="cursos"
      className="py-24 bg-muted transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cursos y Diplomados
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Programas diseñados para fortalecer habilidades
            específicas y complementar tu certificación.
            Desarrolla competencias clave con formación
            profesional de alta calidad.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border hover:border-secondary transition-all hover:shadow-lg p-6 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen
                  className="text-primary dark:text-secondary"
                  size={24}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3 leading-tight dark:text-foreground">
                {curso.nombre}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                {curso.descripcion}
              </p>

              {/* Details */}
              <div className="space-y-2 mb-6 pb-4 border-b border-border">
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-foreground/60">
                      Modalidad:{" "}
                    </span>
                    <span className="text-foreground font-semibold">
                      {curso.modalidad}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-foreground/60">
                      Duración:{" "}
                    </span>
                    <span className="text-foreground font-semibold">
                      {curso.duracion}
                    </span>
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <div className="flex items-start gap-2 mb-2">
                  <Users
                    size={16}
                    className="text-secondary mt-1 flex-shrink-0"
                  />
                  <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wide">
                    Público objetivo
                  </span>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {curso.publico}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 mt-auto">
                <button
                  className="w-full flex items-center justify-center gap-2 bg-secondary/20 text-primary dark:text-secondary border border-secondary/30 py-2.5 rounded-lg hover:bg-secondary/30 transition-all font-bold text-sm"
                >
                  <FileText size={16} />
                  Ver Temario (PDF)
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
                  className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg hover:opacity-90 transition-all font-semibold text-sm"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center transition-colors">
          <GraduationCap className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-3 dark:text-foreground">
            Formación Continua de Excelencia
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Nuestros programas están diseñados por expertos y
            alineados a las mejores prácticas del sector. Todos
            los cursos incluyen constancia de participación y
            pueden articularse con procesos de certificación.
          </p>
        </div>
      </div>
    </section>
  );
}