import { Target, Eye, CheckCircle, FileCheck } from 'lucide-react';
import { ImageWithFallback } from './UI/Imagewithfallback';

export default function QuienesSomos() {
    const valores = [
        {
            title: 'Profesionalismo',
            description: 'Mantenemos los más altos estándares de calidad y excelencia en cada proceso de evaluación.',
        },
        {
            title: 'Ética',
            description: 'Conducimos nuestras operaciones con integridad, transparencia y apego a las normas establecidas.',
        },
        {
            title: 'Compromiso',
            description: 'Nos dedicamos completamente al desarrollo profesional de nuestros candidatos.',
        },
        {
            title: 'Calidad',
            description: 'Garantizamos procesos rigurosos y certificaciones con validez oficial nacional.',
        },
    ];

    return (
        <section id="quienes-somos" className="py-24 bg-(--background) transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                    <h2 className="text-4xl md:text-5xl font-bold text-(--primary) mb-6">
                        Quiénes Somos
                    </h2>
                </div>

                {/* Institutional Description */}
                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-lg text-foreground/80 leading-relaxed text-center">
                        PROFORME es un Centro Evaluador acreditado ante el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER). Nos especializamos en la evaluación y certificación de competencias profesionales bajo estándares oficiales reconocidos a nivel nacional, contribuyendo al desarrollo del capital humano de México.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Mission */}
                    <div className="bg-muted p-8 rounded-2xl border border-border transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                <Target className="text-secondary" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary dark:text-foreground">Misión</h3>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">
                            Contribuir al fortalecimiento del desarrollo profesional mediante la evaluación y certificación de competencias laborales con validez oficial, garantizando procesos transparentes, éticos y de la más alta calidad que impulsen el crecimiento de individuos y organizaciones.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-muted p-8 rounded-2xl border border-border transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                <Eye className="text-secondary" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary dark:text-foreground">Visión</h3>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">
                            Ser reconocidos como el Centro Evaluador líder en México, distinguido por su excelencia operativa, credibilidad institucional y compromiso con el desarrollo del talento humano bajo los más altos estándares de competencia laboral.
                        </p>
                    </div>
                </div>

                {/* Valores */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-primary text-center mb-12 dark:text-foreground">Valores</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valores.map((valor, index) => (
                            <div key={index} className="bg-card p-6 rounded-xl border-2 border-border hover:border-secondary transition-colors group">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                                    <h4 className="text-xl font-bold text-primary dark:text-foreground">{valor.title}</h4>
                                </div>
                                <p className="text-foreground/70">{valor.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accreditation Block */}
                <div className="bg-linear-to-br from-primary to-primary/80 p-10 rounded-2xl shadow-xl">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileCheck className="text-secondary" size={32} />
                                    <h3 className="text-3xl font-bold text-secondary">Centro Evaluador Acreditado con la cédula CE0075-OC103-21 </h3>
                                </div>
                                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                                    Reconocido oficialmente ante el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER)
                                </p>

                            </div>
                            <div className="shrink-0">
                                <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-xl border-2 border-secondary/30 flex items-center justify-center overflow-hidden">
                                    <ImageWithFallback
                                        src= "../assets/img/banner-hero.jpg"
                                        alt="Certificate"
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
