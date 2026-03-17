import { ClipboardCheck, FileText, MessageSquare, Award } from 'lucide-react';

export default function Servicios() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico inicial',
      icon: ClipboardCheck,
      details: [
        'Aplicación de evaluación diagnóstica',
        'Explicación detallada del plan de evaluación',
        'Proceso conducido de manera presencial',
      ],
    },
    {
      number: '02',
      title: 'Evaluación en tres momentos',
      icon: FileText,
      details: [
        'Primer momento: aplicación de evaluación escrita',
        'Segundo momento: simulación de un caso práctico donde se demuestran habilidades y competencias',
        'Tercer momento: aplicación de evaluación oral',
      ],
    },
    {
      number: '03',
      title: 'Emisión de resultados',
      icon: MessageSquare,
      details: [
        'Análisis exhaustivo de evidencias',
        'Se emite resultado de "Competente" o "No competente"',
        'Retroalimentación profesional personalizada',
      ],
    },
    {
      number: '04',
      title: 'Entrega de certificado',
      icon: Award,
      details: [
        'En caso de resultado "Competente", se entrega certificado oficial',
        'Certificado totalmente legalizado y avalado por CONOCER',
        'Validez nacional con reconocimiento oficial',
      ],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-muted transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ¿En qué consiste nuestro servicio?
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            PROFORME sigue rigurosamente el proceso oficial de evaluación para la certificación en estándares de competencia, garantizando transparencia, profesionalismo y apego a las normativas establecidas por CONOCER.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-secondary transition-all hover:shadow-lg group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold text-secondary/20">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <step.icon className="text-secondary" size={32} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4 dark:text-foreground">
                    {step.title}
                  </h3>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-foreground/70 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 p-10 rounded-2xl text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para certificarte?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Inicia tu proceso de certificación con nosotros y obtén un reconocimiento oficial de tus competencias profesionales con validez nacional.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-secondary text-primary px-8 py-4 rounded-lg hover:opacity-90 transition-all font-bold"
          >
            Solicitar Información
          </button>
        </div>
      </div>
    </section>
  );
}
