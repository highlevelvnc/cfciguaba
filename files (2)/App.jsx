import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Instagram, Star, Menu, X, CheckCircle, Car, PlusCircle, ShieldCheck, RefreshCw, ArrowRight, ChevronDown, Users, Award, Heart, Quote, Calendar, BookOpen, TrendingUp, FileText } from 'lucide-react';

// Site Configuration
const siteConfig = {
  name: "Autoescola Iguaba",
  alternateName: "CFC Iguaba",
  phone: "(22) 99849-5952",
  phoneClean: "+5522998495952",
  whatsapp: "https://wa.me/5522998495952",
  whatsappMessage: "Olá! Quero informações e valores para tirar minha CNH na Autoescola Iguaba.",
  instagram: "https://www.instagram.com/cfc.iguaba/",
  googleBusiness: "https://share.google/H8E8crNUlq9j8Gumc",
  address: {
    street: "Rua Nossa Senhora de Nazareth, 114",
    city: "Iguaba Grande",
    state: "RJ",
    country: "Brasil",
    full: "Rua Nossa Senhora de Nazareth, 114, Iguaba Grande – RJ, Brasil"
  },
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Rua%20Nossa%20Senhora%20de%20Nazareth%2C%20114%2C%20Iguaba%20Grande%20-%20RJ",
  hours: {
    weekdays: "Segunda a Sexta: 08:00 - 18:00",
    saturday: "Sábado: 08:00 - 12:00",
    sunday: "Domingo: Fechado"
  },
  seo: {
    keywords: [
      "autoescola iguaba grande",
      "cfc iguaba grande",
      "primeira habilitação iguaba grande",
      "tirar cnh iguaba grande",
      "carteira de motorista iguaba grande",
      "inclusão categoria iguaba grande",
      "curso crci iguaba grande",
      "autoescola rj",
      "cfc região dos lagos"
    ],
    description: "Autoescola Iguaba Grande - Tire sua CNH com segurança. Primeira habilitação, inclusão de categoria, CRCI e atualização. Agende sua aula experimental!"
  },
  services: [
    {
      id: "primeira-habilitacao",
      title: "Primeira Habilitação",
      shortTitle: "Primeira CNH",
      icon: "car",
      description: "Tire sua CNH categoria A (moto) ou B (carro) com acompanhamento completo desde a matrícula até a aprovação.",
      longDescription: "Processo completo para quem nunca tirou CNH. Inclui aulas teóricas, práticas, simulados e todo suporte necessário até sua aprovação no Detran.",
      benefits: [
        "45 horas de aulas teóricas",
        "25 horas de aulas práticas (20h para moto)",
        "Instrutores credenciados pelo Detran",
        "Simulados ilimitados online",
        "Acompanhamento até aprovação",
        "Veículos modernos e seguros"
      ],
      price: "A partir de R$ 1.800",
      duration: "3 a 6 meses"
    },
    {
      id: "inclusao-categoria",
      title: "Inclusão de Categoria",
      shortTitle: "Adicionar Categoria",
      icon: "plus-circle",
      description: "Já tem CNH e quer adicionar categoria A (moto) ou B (carro)? Facilitamos todo o processo.",
      longDescription: "Adicione uma nova categoria à sua CNH existente de forma rápida e simplificada.",
      benefits: [
        "Apenas aulas práticas",
        "15 horas de prática obrigatória",
        "Agendamento flexível",
        "Processo rápido (1-2 meses)",
        "Documentação facilitada",
        "Suporte completo"
      ],
      price: "A partir de R$ 1.200",
      duration: "1 a 2 meses"
    },
    {
      id: "curso-crci",
      title: "Curso CRCI",
      shortTitle: "CRCI",
      icon: "shield-check",
      description: "Curso de Reciclagem para Condutores Infratores - obrigatório para quem atingiu 20 pontos na CNH.",
      longDescription: "Evite a suspensão da sua CNH com o curso de reciclagem obrigatório para condutores infratores.",
      benefits: [
        "30 horas de curso teórico",
        "Certificado reconhecido pelo Detran",
        "Horários flexíveis (manhã/tarde/noite)",
        "Material didático incluso",
        "Evita suspensão da CNH",
        "Instrutores especializados"
      ],
      price: "R$ 450",
      duration: "1 semana"
    },
    {
      id: "curso-atualizacao",
      title: "Curso de Atualização",
      shortTitle: "Atualização CNH",
      icon: "refresh-cw",
      description: "Curso obrigatório para renovação de CNH com exercício de atividade remunerada.",
      longDescription: "Atualização obrigatória para motoristas profissionais que precisam renovar a CNH.",
      benefits: [
        "15 horas de aulas teóricas",
        "Conteúdo atualizado (Código de Trânsito)",
        "Certificado oficial Detran",
        "Turmas semanais",
        "Necessário para renovação profissional",
        "Aulas práticas e objetivas"
      ],
      price: "R$ 280",
      duration: "3 dias"
    }
  ],
  blogPosts: [
    {
      id: "quanto-custa-tirar-cnh-iguaba-grande-2025",
      title: "Quanto Custa Tirar CNH em Iguaba Grande em 2025?",
      slug: "quanto-custa-tirar-cnh-iguaba-grande-2025",
      excerpt: "Guia completo com todos os custos para tirar sua primeira habilitação em Iguaba Grande. Valores atualizados, formas de pagamento e dicas para economizar.",
      content: "Descubra todos os custos envolvidos no processo de primeira habilitação em Iguaba Grande. Incluímos valores de taxas do Detran, exames médicos, aulas práticas e teóricas. Preços atualizados para 2025.",
      date: "2025-01-28",
      author: "Equipe CFC Iguaba",
      category: "Primeira Habilitação",
      image: "blog-cnh-custos.jpg",
      readTime: "5 min"
    },
    {
      id: "documentos-necessarios-tirar-cnh",
      title: "Documentos Necessários para Tirar CNH: Lista Completa 2025",
      slug: "documentos-necessarios-tirar-cnh",
      excerpt: "Checklist completo com todos os documentos que você precisa separar para dar entrada no processo de habilitação. Evite atrasos!",
      content: "Lista detalhada de documentos necessários para iniciar seu processo de CNH. Incluímos RG, CPF, comprovante de residência e outros documentos importantes. Dicas para não ter problemas no Detran.",
      date: "2025-01-25",
      author: "Equipe CFC Iguaba",
      category: "Documentação",
      image: "blog-documentos.jpg",
      readTime: "4 min"
    },
    {
      id: "dicas-passar-prova-pratica-primeira-tentativa",
      title: "7 Dicas Para Passar na Prova Prática de Primeira",
      slug: "dicas-passar-prova-pratica-primeira-tentativa",
      excerpt: "Segredos e técnicas para você mandar bem na prova prática do Detran e conquistar sua CNH de primeira. Dicas de instrutores experientes.",
      content: "Nossos instrutores reuniram as melhores dicas para você se preparar e passar na prova prática. Técnicas de direção defensiva, controle de nervosismo e erros que você deve evitar.",
      date: "2025-01-20",
      author: "Instrutor Carlos Silva",
      category: "Dicas de Prova",
      image: "blog-prova-pratica.jpg",
      readTime: "6 min"
    },
    {
      id: "diferenca-categoria-a-b-cnh",
      title: "Diferença Entre CNH Categoria A e B: Qual Escolher?",
      slug: "diferenca-categoria-a-b-cnh",
      excerpt: "Entenda as diferenças entre as categorias A (moto) e B (carro) da CNH e descubra qual é a melhor opção para você começar.",
      content: "Guia completo comparando as categorias A e B. Vantagens de cada uma, custos, tempo de formação e possibilidades de uso. Ajudamos você a tomar a melhor decisão.",
      date: "2025-01-15",
      author: "Equipe CFC Iguaba",
      category: "Categorias CNH",
      image: "blog-categorias.jpg",
      readTime: "5 min"
    }
  ],
  testimonials: [
    {
      name: "Maria Silva",
      text: "Excelente autoescola! Fui muito bem atendida desde o primeiro dia. Os instrutores são pacientes e o ambiente é super acolhedor. Passei de primeira!",
      rating: 5,
      service: "Primeira Habilitação"
    },
    {
      name: "João Santos",
      text: "Recomendo muito! Consegui tirar minha CNH rapidamente e com todo suporte necessário. Equipe profissional e atenciosa.",
      rating: 5,
      service: "Primeira Habilitação"
    },
    {
      name: "Ana Costa",
      text: "Melhor autoescola da região! Fiz a inclusão da categoria A e foi tudo muito tranquilo. Obrigada pela paciência e dedicação!",
      rating: 5,
      service: "Inclusão de Categoria"
    }
  ],
  faqs: [
    {
      question: "Quanto custa tirar CNH em Iguaba Grande?",
      answer: "O valor varia de acordo com a categoria escolhida. Para categoria B (carro), o investimento médio é de R$ 1.800 a R$ 2.500, incluindo todas as taxas, aulas e exames. Para categoria A (moto), fica entre R$ 1.600 e R$ 2.200. Entre em contato pelo WhatsApp para receber um orçamento personalizado com condições especiais."
    },
    {
      question: "Quais documentos preciso para fazer a matrícula na autoescola?",
      answer: "Você precisará de: RG (original e cópia), CPF (original e cópia), comprovante de residência atualizado (até 3 meses), e 1 foto 3x4 recente. Nossa equipe orienta sobre todo o processo de documentação e pode ajudar caso você tenha alguma dúvida específica."
    },
    {
      question: "Como funciona a inclusão de categoria A/B?",
      answer: "Se você já possui CNH em uma categoria e quer adicionar outra (por exemplo, tem B e quer A), o processo é mais rápido e econômico. Você fará apenas 15 horas de aulas práticas da nova categoria e a prova prática no Detran. Não precisa refazer as aulas teóricas nem a prova teórica."
    },
    {
      question: "O que é o curso CRCI e quem precisa fazer?",
      answer: "O CRCI é o Curso de Reciclagem para Condutores Infratores. É obrigatório para quem atingiu 20 pontos na CNH em 12 meses ou cometeu infrações gravíssimas específicas. São 30 horas de aulas teóricas que evitam a suspensão da habilitação. Oferecemos horários flexíveis para facilitar sua participação."
    },
    {
      question: "Como funciona o curso de atualização para motoristas profissionais?",
      answer: "É um curso obrigatório de 15 horas para condutores que exercem atividade remunerada (taxistas, motoristas de app, caminhoneiros, etc.) e precisam renovar a CNH. O certificado é necessário para completar o processo de renovação. Temos turmas semanais com conteúdo atualizado do Código de Trânsito."
    },
    {
      question: "Quanto tempo demora para tirar a CNH completa?",
      answer: "O prazo médio varia de 3 a 6 meses para a primeira habilitação, dependendo da sua disponibilidade para fazer as aulas e da agilidade nos agendamentos de exames. O processo inclui: cadastro, exames médico e psicotécnico, 45h de aulas teóricas, prova teórica, 25h de aulas práticas (20h para moto), prova prática e emissão da CNH."
    },
    {
      question: "A autoescola oferece aula experimental gratuita?",
      answer: "Sim! Oferecemos uma aula prática experimental gratuita para você conhecer nossos instrutores, veículos e metodologia de ensino antes de fazer a matrícula. Agende pelo WhatsApp e venha nos conhecer sem compromisso."
    },
    {
      question: "Posso parcelar o valor da autoescola?",
      answer: "Sim! Trabalhamos com diversas opções de parcelamento para facilitar seu investimento na CNH. Aceitamos cartão de crédito, PIX e oferecemos condições especiais para pagamento à vista. Entre em contato para conhecer nossas condições atuais."
    }
  ]
};

const colors = {
  primary: '#f7c127',
  primaryDark: '#d9a920',
  dark: '#1a1a1a',
  darkLight: '#2d2d2d',
  white: '#ffffff',
  gray: '#666666',
  grayLight: '#f5f5f5',
};

// Loading Screen
const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: colors.dark,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'fadeOut 0.5s ease-out 2.5s forwards'
    }}>
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <div style={{ animation: 'driveCar 2s ease-in-out infinite' }}>
          <Car size={64} color={colors.primary} strokeWidth={2} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '4px',
          background: `repeating-linear-gradient(90deg, ${colors.primary} 0px, ${colors.primary} 20px, transparent 20px, transparent 40px)`,
          animation: 'roadMove 1s linear infinite'
        }} />
      </div>
      <h2 style={{ color: colors.white, fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
        CFC IGUABA
      </h2>
      <p style={{ color: colors.primary, fontSize: 'clamp(0.875rem, 2vw, 1rem)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Carregando...
      </p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '2rem' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: colors.primary,
            animation: `loadingDot 1.4s ease-in-out ${i * 0.2}s infinite`
          }} />
        ))}
      </div>
    </div>
  );
};

// Responsive Hook
const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowWidth < 768,
    isTablet: windowWidth >= 768 && windowWidth < 1024,
    isDesktop: windowWidth >= 1024,
    width: windowWidth
  };
};

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const responsive = useResponsive();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { page: 'home', label: 'Início' },
    { page: 'services', label: 'Serviços' },
    { page: 'blog', label: 'Blog' },
    { page: 'about', label: 'Sobre' },
    { page: 'contact', label: 'Contato' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
      background: isScrolled ? 'rgba(26, 26, 26, 0.98)' : 'rgba(26, 26, 26, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${isScrolled ? 'rgba(247, 193, 39, 0.3)' : 'transparent'}`,
      boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: responsive.isMobile ? '0 1rem' : responsive.isTablet ? '0 1.5rem' : '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: responsive.isMobile ? '0.875rem 0' : '1rem 0'
        }}>
          <div
            onClick={() => {
              setCurrentPage('home');
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: responsive.isMobile ? '44px' : '48px',
              height: responsive.isMobile ? '44px' : '48px',
              background: colors.primary,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.dark,
              boxShadow: `0 4px 12px rgba(247, 193, 39, 0.4)`
            }}>
              <Car size={responsive.isMobile ? 24 : 28} strokeWidth={2.5} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{
                fontSize: responsive.isMobile ? '1.125rem' : '1.25rem',
                color: colors.white,
                fontWeight: 800,
                letterSpacing: '-0.02em'
              }}>
                CFC IGUABA
              </span>
              <span style={{
                fontSize: responsive.isMobile ? '0.6875rem' : '0.75rem',
                color: colors.primary,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Autoescola
              </span>
            </div>
          </div>

          {responsive.isDesktop && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    setCurrentPage(link.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: currentPage === link.page ? colors.primary : colors.white,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.02em',
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.color = currentPage === link.page ? colors.primary : colors.white}
                >
                  {link.label}
                  {currentPage === link.page && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: colors.primary,
                      borderRadius: '2px'
                    }} />
                  )}
                </button>
              ))}
              <a
                href={`tel:${siteConfig.phoneClean}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: colors.primary,
                  color: colors.dark,
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  boxShadow: `0 4px 12px rgba(247, 193, 39, 0.3)`,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 6px 16px rgba(247, 193, 39, 0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(247, 193, 39, 0.3)`;
                }}
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
            </nav>
          )}

          {!responsive.isDesktop && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                background: 'transparent',
                color: colors.primary,
                borderRadius: '8px',
                border: `2px solid ${colors.primary}`,
                cursor: 'pointer'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {!responsive.isDesktop && (
        <>
          <nav style={{
            position: 'fixed',
            top: responsive.isMobile ? '72px' : '80px',
            right: 0,
            width: responsive.isMobile ? '280px' : '320px',
            maxWidth: '85vw',
            height: `calc(100vh - ${responsive.isMobile ? '72px' : '80px'})`,
            background: colors.dark,
            flexDirection: 'column',
            padding: '2rem',
            boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.5)',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            borderLeft: `3px solid ${colors.primary}`,
            overflowY: 'auto'
          }}>
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  setCurrentPage(link.page);
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: currentPage === link.page ? colors.primary : colors.white,
                  padding: '1rem 0',
                  borderBottom: `1px solid ${colors.darkLight}`,
                  width: '100%',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${colors.darkLight}`,
                  cursor: 'pointer',
                  letterSpacing: '0.02em'
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${siteConfig.phoneClean}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1rem 1.5rem',
                background: colors.primary,
                color: colors.dark,
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                marginTop: '1.5rem',
                textDecoration: 'none'
              }}
            >
              <Phone size={20} />
              Ligar Agora
            </a>
          </nav>
          {isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.7)',
                zIndex: -1
              }}
            />
          )}
        </>
      )}
    </header>
  );
};

// CTA Button Component
const CTAButton = ({ variant = 'whatsapp', size = 'md', fullWidth = false, children, onClick }) => {
  const responsive = useResponsive();
  
  const variants = {
    whatsapp: { bg: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', shadow: '0 4px 12px rgba(37, 211, 102, 0.3)', color: colors.white },
    phone: { bg: colors.primary, color: colors.dark, shadow: `0 4px 12px rgba(247, 193, 39, 0.3)` },
    primary: { bg: colors.primary, color: colors.dark, shadow: `0 4px 12px rgba(247, 193, 39, 0.3)` },
    secondary: { bg: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}`, shadow: 'none' }
  };

  const sizes = {
    sm: { padding: responsive.isMobile ? '0.625rem 1rem' : '0.625rem 1.25rem', fontSize: '0.875rem' },
    md: { padding: responsive.isMobile ? '0.875rem 1.5rem' : '0.875rem 1.75rem', fontSize: '1rem' },
    lg: { padding: responsive.isMobile ? '1rem 1.75rem' : '1.125rem 2.25rem', fontSize: responsive.isMobile ? '1rem' : '1.125rem' }
  };

  const style = variants[variant] || variants.whatsapp;
  const sizeStyle = sizes[size] || sizes.md;

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (variant === 'whatsapp') {
      window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`, '_blank');
    }
  };

  const content = children || (variant === 'whatsapp' ? 'Chamar no WhatsApp' : variant === 'phone' ? 'Ligar Agora' : 'Saiba Mais');
  const Icon = variant === 'whatsapp' ? MessageCircle : variant === 'phone' ? Phone : ArrowRight;

  if (variant === 'phone' && !onClick) {
    return (
      <a
        href={`tel:${siteConfig.phoneClean}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.625rem',
          fontWeight: 700,
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          border: style.border || 'none',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          background: style.bg,
          color: style.color,
          boxShadow: style.shadow,
          width: fullWidth ? '100%' : 'auto',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          ...sizeStyle
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = variant === 'phone' ? `0 6px 16px rgba(247, 193, 39, 0.4)` : '0 6px 20px rgba(37, 211, 102, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = style.shadow;
        }}
      >
        <Icon size={size === 'sm' ? 18 : 20} />
        <span>{content}</span>
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.625rem',
        fontWeight: 700,
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        border: style.border || 'none',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        background: style.bg,
        color: style.color,
        boxShadow: style.shadow,
        width: fullWidth ? '100%' : 'auto',
        letterSpacing: '0.02em',
        ...sizeStyle
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        if (variant === 'secondary') {
          e.currentTarget.style.background = colors.primary;
          e.currentTarget.style.color = colors.dark;
        } else {
          e.currentTarget.style.boxShadow = variant === 'whatsapp' ? '0 6px 20px rgba(37, 211, 102, 0.4)' : `0 6px 16px rgba(247, 193, 39, 0.4)`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'secondary') {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = colors.primary;
        }
        e.currentTarget.style.boxShadow = style.shadow;
      }}
    >
      <Icon size={size === 'sm' ? 18 : 20} />
      <span>{content}</span>
    </button>
  );
};

// Blog Card Component
const BlogCard = ({ post, setCurrentPage, setSelectedPost }) => {
  const responsive = useResponsive();

  return (
    <article
      onClick={() => {
        setSelectedPost(post);
        setCurrentPage('blog-post');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      style={{
        background: colors.white,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        border: `2px solid ${colors.grayLight}`,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = `0 12px 24px rgba(247, 193, 39, 0.2)`;
        e.currentTarget.style.borderColor = colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = colors.grayLight;
      }}
    >
      <div style={{
        width: '100%',
        height: responsive.isMobile ? '180px' : '200px',
        background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.primary}10 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <BookOpen size={responsive.isMobile ? 48 : 64} color={colors.primary} strokeWidth={1.5} />
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: colors.primary,
          color: colors.dark,
          padding: '0.375rem 0.75rem',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: 700
        }}>
          {post.readTime}
        </div>
      </div>
      <div style={{
        padding: responsive.isMobile ? '1.25rem' : '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        flexGrow: 1
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.8125rem',
          color: colors.gray
        }}>
          <span style={{
            background: `${colors.primary}15`,
            color: colors.primaryDark,
            padding: '0.25rem 0.625rem',
            borderRadius: '4px',
            fontWeight: 600
          }}>
            {post.category}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </span>
        </div>
        <h3 style={{
          fontSize: responsive.isMobile ? '1.125rem' : '1.25rem',
          fontWeight: 800,
          color: colors.dark,
          letterSpacing: '-0.01em',
          lineHeight: 1.3
        }}>
          {post.title}
        </h3>
        <p style={{
          fontSize: '0.9375rem',
          color: colors.gray,
          lineHeight: 1.6,
          flexGrow: 1
        }}>
          {post.excerpt}
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: colors.primary,
          fontWeight: 700,
          fontSize: '0.9375rem',
          marginTop: '0.5rem'
        }}>
          <span>Ler mais</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </div>
      </div>
    </article>
  );
};

// Service Card Component (mantendo o mesmo mas com responsividade)
const ServiceCard = ({ service }) => {
  const responsive = useResponsive();
  const icons = { car: Car, 'plus-circle': PlusCircle, 'shield-check': ShieldCheck, 'refresh-cw': RefreshCw };
  const Icon = icons[service.icon] || Car;

  return (
    <div
      style={{
        background: colors.white,
        borderRadius: '12px',
        padding: responsive.isMobile ? '1.5rem' : '2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        border: `2px solid ${colors.grayLight}`,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = `0 12px 24px rgba(247, 193, 39, 0.2)`;
        e.currentTarget.style.borderColor = colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = colors.grayLight;
      }}
    >
      <div style={{
        width: responsive.isMobile ? '56px' : '64px',
        height: responsive.isMobile ? '56px' : '64px',
        background: colors.primary,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.dark,
        boxShadow: `0 4px 12px rgba(247, 193, 39, 0.3)`
      }}>
        <Icon size={responsive.isMobile ? 28 : 34} strokeWidth={2.5} />
      </div>
      <h3 style={{
        fontSize: responsive.isMobile ? '1.25rem' : '1.375rem',
        fontWeight: 800,
        color: colors.dark,
        letterSpacing: '-0.02em'
      }}>
        {service.title}
      </h3>
      <p style={{
        fontSize: '0.9375rem',
        color: colors.gray,
        lineHeight: 1.7,
        flexGrow: 1
      }}>
        {service.description}
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        paddingTop: '0.5rem',
        borderTop: `1px solid ${colors.grayLight}`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.875rem', color: colors.gray }}>A partir de:</span>
          <span style={{ fontSize: '1.125rem', fontWeight: 800, color: colors.primary }}>{service.price}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.875rem', color: colors.gray }}>Duração:</span>
          <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: colors.dark }}>{service.duration}</span>
        </div>
      </div>
      <CTAButton variant="primary" size="sm" fullWidth>
        Solicitar Orçamento
      </CTAButton>
    </div>
  );
};

// Stats Component
const StatsSection = () => {
  const responsive = useResponsive();
  const stats = [
    { number: '10+', label: 'Anos de Experiência', icon: Award },
    { number: '5000+', label: 'Alunos Aprovados', icon: Users },
    { number: '95%', label: 'Taxa de Aprovação', icon: TrendingUp },
    { number: '4.9', label: 'Avaliação Google', icon: Star }
  ];

  return (
    <section style={{
      padding: responsive.isMobile ? '3rem 0' : '4rem 0',
      background: colors.dark,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: `radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(80px)'
      }} />
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: responsive.isMobile ? '0 1rem' : responsive.isTablet ? '0 1.5rem' : '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: responsive.isMobile ? '1fr' : responsive.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: responsive.isMobile ? '2rem' : '3rem'
        }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} style={{
                textAlign: 'center',
                padding: responsive.isMobile ? '1.5rem' : '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: `2px solid ${colors.primary}30`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = `${colors.primary}30`;
              }}
              >
                <Icon size={responsive.isMobile ? 36 : 40} color={colors.primary} strokeWidth={2} style={{ margin: '0 auto 1rem' }} />
                <div style={{
                  fontSize: responsive.isMobile ? '2.5rem' : '3rem',
                  fontWeight: 900,
                  color: colors.white,
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: responsive.isMobile ? '0.9375rem' : '1rem',
                  color: colors.primary,
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Floating WhatsApp
const FloatingWhatsApp = () => {
  const responsive = useResponsive();

  return (
    <button
      onClick={() => window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`, '_blank')}
      style={{
        position: 'fixed',
        bottom: responsive.isMobile ? '90px' : '30px',
        right: responsive.isMobile ? '20px' : '30px',
        width: responsive.isMobile ? '60px' : '68px',
        height: responsive.isMobile ? '60px' : '68px',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
        cursor: 'pointer',
        zIndex: 999,
        border: 'none',
        animation: 'slideInRight 0.5s ease-out, float 3s ease-in-out infinite',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 8px 28px rgba(37, 211, 102, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
      }}
    >
      <MessageCircle size={responsive.isMobile ? 28 : 32} strokeWidth={2.5} />
    </button>
  );
};

// Mobile CTA
const MobileCTA = () => {
  const responsive = useResponsive();
  if (!responsive.isMobile) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      display: 'flex',
      background: colors.dark,
      boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.3)',
      zIndex: 998,
      borderTop: `2px solid ${colors.primary}`
    }}>
      <a
        href={`tel:${siteConfig.phoneClean}`}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '1.125rem',
          fontWeight: 700,
          fontSize: '1rem',
          color: colors.dark,
          background: colors.primary,
          textDecoration: 'none'
        }}
      >
        <Phone size={22} strokeWidth={2.5} />
        <span style={{ fontSize: '0.9375rem' }}>Ligar</span>
      </a>
      <button
        onClick={() => window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`, '_blank')}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '1.125rem',
          fontWeight: 700,
          fontSize: '1rem',
          color: colors.white,
          border: 'none',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          cursor: 'pointer'
        }}
      >
        <MessageCircle size={22} strokeWidth={2.5} />
        <span style={{ fontSize: '0.9375rem' }}>WhatsApp</span>
      </button>
    </div>
  );
};

// Home Page
const HomePage = () => {
  const responsive = useResponsive();

  return (
    <div style={{ paddingTop: responsive.isMobile ? '72px' : '80px', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: responsive.isMobile ? '85vh' : 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        padding: responsive.isMobile ? '3rem 0' : '5rem 0',
        background: colors.dark,
        width: '100%',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.darkLight} 100%)`,
          zIndex: 0
        }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: responsive.isMobile ? '400px' : '600px',
            height: responsive.isMobile ? '400px' : '600px',
            background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
        </div>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: responsive.isMobile ? '0 1rem' : responsive.isTablet ? '0 1.5rem' : '0 2rem',
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            maxWidth: responsive.isDesktop ? '900px' : '100%',
            textAlign: 'center',
            margin: '0 auto'
          }}>
            <h1 style={{
              color: colors.white,
              marginBottom: '1.5rem',
              textShadow: `0 4px 20px rgba(247, 193, 39, 0.3)`,
              fontSize: responsive.isMobile ? '2.25rem' : responsive.isTablet ? '3rem' : '4rem',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              Tire sua CNH com <span style={{ color: colors.primary }}>segurança</span> em Iguaba Grande
            </h1>
            <p style={{
              fontSize: responsive.isMobile ? '1.0625rem' : '1.25rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '3rem',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              A autoescola mais completa de <strong style={{ color: colors.primary }}>Iguaba Grande - RJ</strong>. Primeira habilitação, inclusão de categoria, CRCI e atualização com os melhores instrutores da região.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              marginBottom: '3.5rem'
            }}>
              <CTAButton variant="whatsapp" size="lg">Agendar Aula Gratuita</CTAButton>
              <CTAButton variant="secondary" size="lg">Ver Cursos</CTAButton>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: responsive.isMobile ? '1.25rem' : '2rem',
              justifyContent: 'center'
            }}>
              {['10+ Anos de Experiência', '5000+ Alunos Aprovados', '95% Taxa de Aprovação'].map((item) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: colors.white,
                  fontSize: responsive.isMobile ? '0.9375rem' : '1rem',
                  fontWeight: 600
                }}>
                  <CheckCircle size={20} style={{ color: colors.primary }} strokeWidth={2.5} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Services */}
      <section style={{
        padding: responsive.isMobile ? '4rem 0' : '5rem 0',
        background: colors.grayLight,
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: responsive.isMobile ? '0 1rem' : responsive.isTablet ? '0 1.5rem' : '0 2rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: responsive.isMobile ? '3rem' : '4rem',
            maxWidth: '700px',
            margin: `0 auto ${responsive.isMobile ? '3rem' : '4rem'}`
          }}>
            <h2 style={{
              marginBottom: '1rem',
              fontSize: responsive.isMobile ? '2rem' : '2.75rem',
              fontWeight: 900,
              color: colors.dark,
              letterSpacing: '-0.02em'
            }}>
              Nossos Serviços
            </h2>
            <p style={{
              fontSize: responsive.isMobile ? '1rem' : '1.125rem',
              color: colors.gray,
              lineHeight: 1.7
            }}>
              Soluções completas para você conquistar ou renovar sua CNH em Iguaba Grande
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: responsive.isMobile ? '1fr' : responsive.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: responsive.isMobile ? '1.5rem' : '2rem'
          }}>
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section style={{
        padding: responsive.isMobile ? '4rem 0' : '5rem 0',
        background: colors.white,
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: responsive.isMobile ? '0 1rem' : responsive.isTablet ? '0 1.5rem' : '0 2rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: responsive.isMobile ? '3rem' : '4rem'
          }}>
            <h2 style={{
              marginBottom: '1rem',
              fontSize: responsive.isMobile ? '2rem' : '2.75rem',
              fontWeight: 900,
              color: colors.dark,
              letterSpacing: '-0.02em'
            }}>
              Blog: Dicas e Novidades sobre CNH
            </h2>
            <p style={{
              fontSize: responsive.isMobile ? '1rem' : '1.125rem',
              color: colors.gray,
              lineHeight: 1.7
            }}>
              Artigos atualizados para te ajudar em todo o processo
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: responsive.isMobile ? '1fr' : responsive.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: responsive.isMobile ? '1.5rem' : '2rem',
            marginBottom: '3rem'
          }}>
            {siteConfig.blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} setCurrentPage={() => {}} setSelectedPost={() => {}} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <CTAButton variant="secondary" size="lg">Ver Todos os Artigos</CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{
        padding: responsive.isMobile ? '4rem 0' : '5rem 0',
        background: colors.dark,
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: responsive.isMobile ? '600px' : '800px',
          height: responsive.isMobile ? '600px' : '800px',
          background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(120px)'
        }} />
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: responsive.isMobile ? '0 1rem' : responsive.isTablet ? '0 1.5rem' : '0 2rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <h2 style={{
              color: colors.white,
              marginBottom: '1.5rem',
              fontSize: responsive.isMobile ? '2rem' : '3rem',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}>
              Pronto para <span style={{ color: colors.primary }}>começar</span>?
            </h2>
            <p style={{
              fontSize: responsive.isMobile ? '1.0625rem' : '1.25rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '3rem',
              lineHeight: 1.7
            }}>
              Agende sua aula experimental gratuita e conheça a melhor autoescola de Iguaba Grande
            </p>
            <CTAButton variant="primary" size="lg">Agendar Aula Gratuita</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer
const Footer = () => {
  const responsive = useResponsive();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: colors.dark,
      color: '#999',
      padding: responsive.isMobile ? '3rem 0 1.5rem' : '4rem 0 2rem',
      borderTop: `3px solid ${colors.primary}`,
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: responsive.isMobile ? '0 1rem' : responsive.isTablet ? '0 1.5rem' : '0 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: responsive.isMobile ? '1fr' : responsive.isTablet ? 'repeat(2, 1fr)' : '2fr 1fr 1fr 1.5fr',
          gap: responsive.isMobile ? '2.5rem' : '3rem',
          marginBottom: responsive.isMobile ? '2.5rem' : '3rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '52px',
                height: '52px',
                background: colors.primary,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.dark,
                boxShadow: `0 6px 16px rgba(247, 193, 39, 0.3)`
              }}>
                <Car size={30} strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontSize: '1.375rem', color: colors.white, fontWeight: 800 }}>CFC Iguaba</div>
                <div style={{ fontSize: '0.875rem', color: colors.primary, fontWeight: 600 }}>Autoescola</div>
              </div>
            </div>
            <p style={{ fontSize: '1rem', color: '#999', lineHeight: 1.7, marginBottom: '1rem' }}>
              A melhor autoescola de Iguaba Grande - RJ. Mais de 10 anos formando condutores conscientes e seguros.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: colors.darkLight,
                borderRadius: '10px',
                color: '#999',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.primary;
                e.currentTarget.style.color = colors.dark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.darkLight;
                e.currentTarget.style.color = '#999';
              }}
              >
                <Instagram size={22} />
              </a>
              <a href={siteConfig.googleBusiness} target="_blank" rel="noopener noreferrer" style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: colors.darkLight,
                borderRadius: '10px',
                color: '#999',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.primary;
                e.currentTarget.style.color = colors.dark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.darkLight;
                e.currentTarget.style.color = '#999';
              }}
              >
                <Star size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: colors.white, marginBottom: '1.5rem' }}>
              Navegação
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Início', 'Serviços', 'Blog', 'Sobre', 'Contato'].map((link) => (
                <a key={link} href="#" style={{
                  fontSize: '1rem',
                  color: '#999',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: colors.white, marginBottom: '1.5rem' }}>
              Serviços
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {siteConfig.services.map((service) => (
                <a key={service.id} href="#" style={{
                  fontSize: '1rem',
                  color: '#999',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                >
                  {service.shortTitle}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: colors.white, marginBottom: '1.5rem' }}>
              Contato
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                fontSize: '1rem',
                color: '#999',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
              onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
              >
                <MapPin size={20} style={{ flexShrink: 0, marginTop: '0.125rem', color: colors.primary }} />
                <span>{siteConfig.address.full}</span>
              </a>
              <a href={`tel:${siteConfig.phoneClean}`} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '1rem',
                color: '#999',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
              onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
              >
                <Phone size={20} style={{ color: colors.primary }} />
                <span>{siteConfig.phone}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#999' }}>
                <Clock size={20} style={{ flexShrink: 0, marginTop: '0.125rem', color: colors.primary }} />
                <div>
                  <p style={{ margin: '0 0 0.25rem 0' }}>{siteConfig.hours.weekdays}</p>
                  <p style={{ margin: '0 0 0.25rem 0' }}>{siteConfig.hours.saturday}</p>
                  <p style={{ margin: 0, color: '#666' }}>{siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: responsive.isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: '1.5rem',
          paddingTop: '2rem',
          borderTop: `1px solid ${colors.darkLight}`,
          justifyContent: responsive.isMobile ? 'center' : 'space-between'
        }}>
          <p style={{ fontSize: '0.9375rem', color: '#666', textAlign: 'center', margin: 0 }}>
            © {currentYear} Autoescola Iguaba - CFC Iguaba Grande RJ. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#666', textAlign: 'center', margin: 0 }}>
            Autoescola em Iguaba Grande | Tire sua CNH com segurança
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
        
        @keyframes driveCar {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(10px) rotate(2deg); }
          75% { transform: translateX(-10px) rotate(-2deg); }
        }
        
        @keyframes roadMove {
          0% { background-position: 0 0; }
          100% { background-position: 200px 0; }
        }
        
        @keyframes loadingDot {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${colors.grayLight};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${colors.primary};
          border-radius: 6px;
        }
      `}</style>

      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <div style={{
          width: '100%',
          maxWidth: '100vw',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: colors.white,
          overflow: 'hidden'
        }}>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main style={{ flex: 1, width: '100%' }}>
            <HomePage />
          </main>
          <Footer />
          <FloatingWhatsApp />
          <MobileCTA />
        </div>
      )}
    </>
  );
}
