import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Instagram, Star, Menu, X, CheckCircle, Car, PlusCircle, ShieldCheck, RefreshCw, ArrowRight, ChevronDown, Users, Award, TrendingUp, BookOpen, Calendar, Quote } from 'lucide-react';

// Cores da marca
const colors = {
  primary: '#f7c127',
  primaryDark: '#d9a920',
  dark: '#1a1a1a',
  darkLight: '#2d2d2d',
  white: '#ffffff',
  gray: '#666666',
  grayLight: '#f5f5f5',
};

// Configuração do site
const siteConfig = {
  name: "CFC Iguaba",
  phone: "(22) 99849-5952",
  phoneClean: "+5522998495952",
  whatsapp: "https://wa.me/5522998495952",
  whatsappMessage: "Olá! Quero informações e valores para tirar minha CNH na Autoescola Iguaba.",
  instagram: "https://www.instagram.com/cfc.iguaba/",
  googleBusiness: "https://share.google/H8E8crNUlq9j8Gumc",
  address: {
    full: "Rua Nossa Senhora de Nazareth, 114, Iguaba Grande – RJ"
  },
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Rua%20Nossa%20Senhora%20de%20Nazareth%2C%20114%2C%20Iguaba%20Grande%20-%20RJ"
};

// Dados dos Planos (PREÇOS CORRETOS)
const pricingData = {
  inclusaoA: {
    title: "Inclusão Categoria A (Moto)",
    plans: [
      { name: "Básico", vista: 499, parc: { qtd: 10, valor: 70 }, carne: { qtd: 3, valor: 220 }, aulas: 2 },
      { name: "Intermediário", vista: 700, parc: { qtd: 10, valor: 80 }, carne: { qtd: 3, valor: 300 }, aulas: 5, popular: true },
      { name: "Complementar", vista: 850, parc: { qtd: 10, valor: 100 }, carne: { qtd: 3, valor: 350 }, aulas: 10 },
      { name: "Avançado", vista: 899, parc: { qtd: 10, valor: 110 }, carne: { qtd: 3, valor: 370 }, aulas: 15 }
    ],
    taxas: [{ name: "Duda", valor: 209.78 }, { name: "Clínica", valor: 119 }, { name: "Prova", valor: 288 }]
  },
  inclusaoB: {
    title: "Inclusão Categoria B (Carro)",
    plans: [
      { name: "Básico", vista: 599, parc: { qtd: 10, valor: 70 }, carne: { qtd: 3, valor: 250 }, aulas: 2 },
      { name: "Intermediário", vista: 999, parc: { qtd: 10, valor: 120 }, carne: { qtd: 3, valor: 370 }, aulas: 5, popular: true },
      { name: "Complementar", vista: 1199, parc: { qtd: 10, valor: 140 }, carne: { qtd: 3, valor: 450 }, aulas: 10 },
      { name: "Avançado", vista: 1399, parc: { qtd: 10, valor: 170 }, carne: { qtd: 4, valor: 400 }, aulas: 15 }
    ],
    taxas: [{ name: "Duda", valor: 209.78 }, { name: "Clínica", valor: 119 }, { name: "Prova", valor: 288 }]
  },
  primeiraA: {
    title: "Primeira Habilitação - Categoria A",
    plans: [
      { name: "Básico", vista: 499, parc: { qtd: 10, valor: 70 }, carne: { qtd: 3, valor: 220 }, aulas: 2 },
      { name: "Intermediário", vista: 750, parc: { qtd: 10, valor: 90 }, carne: { qtd: 3, valor: 350 }, aulas: 5, popular: true },
      { name: "Complementar", vista: 850, parc: { qtd: 10, valor: 100 }, carne: { qtd: 3, valor: 350 }, aulas: 10 },
      { name: "Avançado", vista: 950, parc: { qtd: 10, valor: 120 }, carne: { qtd: 3, valor: 370 }, aulas: 20 }
    ],
    taxas: [{ name: "Duda", valor: 419.55 }, { name: "Clínica", valor: 288 }]
  },
  primeiraB: {
    title: "Primeira Habilitação - Categoria B",
    plans: [
      { name: "Básico", vista: 599, parc: { qtd: 10, valor: 80 }, carne: { qtd: 3, valor: 250 }, aulas: 2 },
      { name: "Intermediário", vista: 999, parc: { qtd: 10, valor: 120 }, carne: { qtd: 3, valor: 370 }, aulas: 5, popular: true },
      { name: "Complementar", vista: 1199, parc: { qtd: 10, valor: 140 }, carne: { qtd: 3, valor: 450 }, aulas: 10 },
      { name: "Avançado", vista: 1299, parc: { qtd: 10, valor: 150 }, carne: { qtd: 4, valor: 380 }, aulas: 15 }
    ],
    taxas: [{ name: "Duda", valor: 419.55 }, { name: "Clínica", valor: 288 }]
  },
  primeiraAB: {
    title: "Primeira Habilitação - Categoria AB",
    plans: [
      { name: "Básico", vista: 899, parc: { qtd: 10, valor: 100 }, carne: { qtd: 3, valor: 330 }, aulas: "2 de cada" },
      { name: "Intermediário", vista: 1199, parc: { qtd: 10, valor: 120 }, carne: { qtd: 3, valor: 420 }, aulas: "5 de cada", popular: true },
      { name: "Complementar", vista: 1399, parc: { qtd: 10, valor: 140 }, carne: { qtd: 4, valor: 360 }, aulas: "10 de cada" },
      { name: "Avançado", vista: 1599, parc: { qtd: 10, valor: 180 }, carne: { qtd: 5, valor: 360 }, aulas: "15 de cada" }
    ],
    taxas: [{ name: "Duda", valor: 419.55 }, { name: "Clínica", valor: 288 }]
  }
};

// Blog Posts (SEO)
const blogPosts = [
  {
    id: 1,
    title: "Quanto Custa Tirar CNH em Iguaba Grande 2025?",
    excerpt: "Descubra todos os custos para tirar sua CNH em Iguaba Grande. Valores atualizados, taxas do Detran e formas de pagamento.",
    date: "28 Jan 2025",
    readTime: "8 min",
    category: "Preços"
  },
  {
    id: 2,
    title: "Documentos Necessários para Tirar CNH: Lista Completa",
    excerpt: "Checklist completo com todos os documentos que você precisa para dar entrada no processo de habilitação.",
    date: "25 Jan 2025",
    readTime: "6 min",
    category: "Documentação"
  },
  {
    id: 3,
    title: "10 Dicas Para Passar na Prova Prática de Primeira",
    excerpt: "Segredos e técnicas profissionais para você mandar bem na prova prática do Detran na primeira tentativa.",
    date: "20 Jan 2025",
    readTime: "10 min",
    category: "Dicas"
  },
  {
    id: 4,
    title: "Diferença Entre CNH Categoria A, B e AB",
    excerpt: "Entenda as diferenças entre as categorias e descubra qual é a melhor opção para você começar.",
    date: "15 Jan 2025",
    readTime: "8 min",
    category: "Categorias"
  }
];

// Formato de moeda
const formatPrice = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Loading Screen
const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
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

// Header
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'pricing', label: 'Preços' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contato' }
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
        padding: '0 clamp(1rem, 3vw, 3rem)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
          gap: '2rem'
        }}>
          <div onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            flexShrink: 0
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: colors.primary,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.dark
            }}>
              <Car size={28} strokeWidth={2.5} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontSize: '1.25rem', color: colors.white, fontWeight: 800, letterSpacing: '-0.02em' }}>
                CFC IGUABA
              </span>
              <span style={{ fontSize: '0.75rem', color: colors.primary, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Autoescola
              </span>
            </div>
          </div>

          <nav style={{
            display: window.innerWidth >= 1024 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => { setCurrentPage(link.id); window.scrollTo(0, 0); }} style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: currentPage === link.id ? colors.primary : colors.white,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
              onMouseLeave={(e) => e.currentTarget.style.color = currentPage === link.id ? colors.primary : colors.white}
              >
                {link.label}
              </button>
            ))}
            <a href={`tel:${siteConfig.phoneClean}`} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: colors.primary,
              color: colors.dark,
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
            display: window.innerWidth >= 1024 ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            background: 'transparent',
            color: colors.primary,
            borderRadius: '8px',
            border: `2px solid ${colors.primary}`,
            cursor: 'pointer'
          }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {window.innerWidth < 1024 && (
        <>
          <nav style={{
            position: 'fixed',
            top: '80px',
            right: 0,
            width: '280px',
            maxWidth: '85vw',
            height: 'calc(100vh - 80px)',
            background: colors.dark,
            padding: '2rem',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            borderLeft: `3px solid ${colors.primary}`,
            overflowY: 'auto',
            boxSizing: 'border-box'
          }}>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => { setCurrentPage(link.id); setIsMenuOpen(false); window.scrollTo(0, 0); }} style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: currentPage === link.id ? colors.primary : colors.white,
                padding: '1rem 0',
                borderBottom: `1px solid ${colors.darkLight}`,
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${colors.darkLight}`,
                cursor: 'pointer'
              }}>
                {link.label}
              </button>
            ))}
            <a href={`tel:${siteConfig.phoneClean}`} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '1rem',
              background: colors.primary,
              color: colors.dark,
              borderRadius: '8px',
              fontWeight: 700,
              marginTop: '1.5rem',
              textDecoration: 'none'
            }}>
              <Phone size={20} />
              Ligar Agora
            </a>
          </nav>
          {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 998
          }} />}
        </>
      )}
    </header>
  );
};

// Blog Card Component
const BlogCard = ({ post }) => {
  return (
    <article style={{
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
        height: '180px',
        background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.primary}10 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <BookOpen size={64} color={colors.primary} strokeWidth={1.5} />
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
        padding: 'clamp(1.25rem, 2vw, 1.5rem)',
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
            {post.date}
          </span>
        </div>
        <h3 style={{
          fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
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

// Plan Card Component  
const PlanCard = ({ plan, category }) => {
  return (
    <div style={{
      background: colors.white,
      borderRadius: '16px',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      border: plan.popular ? `3px solid ${colors.primary}` : `2px solid ${colors.grayLight}`,
      position: 'relative',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = `0 12px 24px rgba(247, 193, 39, 0.3)`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      {plan.popular && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: colors.primary,
          color: colors.dark,
          padding: '0.5rem 1.5rem',
          borderRadius: '20px',
          fontWeight: 800,
          fontSize: '0.875rem',
          boxShadow: '0 4px 12px rgba(247, 193, 39, 0.4)',
          whiteSpace: 'nowrap'
        }}>
          ⭐ MAIS ESCOLHIDO
        </div>
      )}

      <h3 style={{
        fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
        fontWeight: 800,
        color: colors.dark,
        marginBottom: '1.5rem',
        marginTop: plan.popular ? '1rem' : '0'
      }}>
        Plano {plan.name}
      </h3>

      <div style={{
        background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primary}05 100%)`,
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '0.875rem', color: colors.gray, marginBottom: '0.5rem', fontWeight: 600 }}>
          À Vista
        </div>
        <div style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 900,
          color: colors.primary,
          lineHeight: 1
        }}>
          {formatPrice(plan.vista)}
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: `1px solid ${colors.grayLight}`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem' }}>
          <span style={{ color: colors.gray }}>Parcelado:</span>
          <span style={{ fontWeight: 700, color: colors.dark }}>
            {plan.parc.qtd}x de {formatPrice(plan.parc.valor)}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem' }}>
          <span style={{ color: colors.gray }}>Carnê:</span>
          <span style={{ fontWeight: 700, color: colors.dark }}>
            {plan.carne.qtd}x de {formatPrice(plan.carne.valor)}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: colors.dark, marginBottom: '1rem' }}>
          Inclui:
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <CheckCircle size={18} style={{ color: colors.primary, flexShrink: 0 }} />
          <span style={{ fontSize: '0.9375rem', color: colors.gray }}>
            {typeof plan.aulas === 'string' ? plan.aulas : plan.aulas} aulas práticas
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <CheckCircle size={18} style={{ color: colors.primary, flexShrink: 0 }} />
          <span style={{ fontSize: '0.9375rem', color: colors.gray }}>Matrícula completa</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={18} style={{ color: colors.primary, flexShrink: 0 }} />
          <span style={{ fontSize: '0.9375rem', color: colors.gray }}>Aluguel do veículo</span>
        </div>
      </div>

      <button onClick={() => {
        const message = `Olá! Tenho interesse no Plano ${plan.name} de ${category}. Gostaria de mais informações!`;
        window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
      }} style={{
        width: '100%',
        padding: '1rem 1.5rem',
        background: plan.popular ? colors.primary : colors.dark,
        color: plan.popular ? colors.dark : colors.white,
        border: 'none',
        borderRadius: '8px',
        fontWeight: 700,
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(247, 193, 39, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      >
        <MessageCircle size={20} />
        Contratar Plano
      </button>
    </div>
  );
};

// Home Page
const HomePage = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      paddingTop: '80px',
      boxSizing: 'border-box'
    }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        background: colors.dark,
        width: '100%',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.darkLight} 100%)`
        }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: 'min(600px, 50vw)',
            height: 'min(600px, 50vw)',
            background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'pulse 8s ease-in-out infinite'
          }} />
        </div>
        
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 3rem)',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '900px',
            textAlign: 'center',
            margin: '0 auto'
          }}>
            <h1 style={{
              color: colors.white,
              marginBottom: '1.5rem',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              Tire sua CNH com <span style={{ color: colors.primary }}>segurança</span> em Iguaba Grande
            </h1>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '3rem',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              A autoescola mais completa de <strong style={{ color: colors.primary }}>Iguaba Grande - RJ</strong>. Primeira habilitação, inclusão de categoria, CRCI e atualização.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}>
              <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: 'clamp(1rem, 2vw, 1.125rem) clamp(1.75rem, 3vw, 2.25rem)',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: colors.white,
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <MessageCircle size={20} />
                Agendar Aula Gratuita
              </a>
              
              <button onClick={() => window.scrollTo({ top: document.getElementById('services')?.offsetTop - 80, behavior: 'smooth' })} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: 'clamp(1rem, 2vw, 1.125rem) clamp(1.75rem, 3vw, 2.25rem)',
                background: 'transparent',
                color: colors.primary,
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)',
                border: `2px solid ${colors.primary}`,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.primary;
                e.currentTarget.style.color = colors.dark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = colors.primary;
              }}
              >
                <ArrowRight size={20} />
                Ver Cursos
              </button>
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(1rem, 3vw, 2rem)',
              justifyContent: 'center'
            }}>
              {['10+ Anos de Experiência', '5000+ Alunos Aprovados', '95% Taxa de Aprovação'].map((item) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: colors.white,
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  fontWeight: 600
                }}>
                  <CheckCircle size={20} style={{ color: colors.primary, flexShrink: 0 }} strokeWidth={2.5} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        padding: 'clamp(3rem, 5vw, 4rem) 0',
        background: colors.dark,
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 3rem)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)'
          }}>
            {[
              { icon: Award, number: '10+', label: 'Anos de Experiência' },
              { icon: Users, number: '5000+', label: 'Alunos Aprovados' },
              { icon: TrendingUp, number: '95%', label: 'Taxa de Aprovação' },
              { icon: Star, number: '4.9', label: 'Avaliação Google' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: `2px solid ${colors.primary}30`,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = `${colors.primary}30`;
                }}
                >
                  <Icon size={40} color={colors.primary} strokeWidth={2} style={{ margin: '0 auto 1rem' }} />
                  <div style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 900,
                    color: colors.white,
                    marginBottom: '0.5rem',
                    lineHeight: 1
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
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

      {/* Blog Preview */}
      <section id="blog" style={{
        padding: 'clamp(4rem, 6vw, 5rem) 0',
        background: colors.grayLight,
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 3rem)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 5vw, 4rem)'
          }}>
            <h2 style={{
              marginBottom: '1rem',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: colors.dark,
              letterSpacing: '-0.02em'
            }}>
              Blog: Dicas e Novidades sobre CNH
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: colors.gray,
              lineHeight: 1.7
            }}>
              Artigos completos para te ajudar em todo o processo
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{
        padding: 'clamp(4rem, 6vw, 5rem) 0',
        background: colors.dark,
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 3rem)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <h2 style={{
              color: colors.white,
              marginBottom: '1.5rem',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 900
            }}>
              Pronto para <span style={{ color: colors.primary }}>começar</span>?
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '3rem',
              lineHeight: 1.7
            }}>
              Entre em contato agora e dê o primeiro passo para conquistar sua CNH
            </p>
            <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: 'clamp(1rem, 2vw, 1.125rem) clamp(1.75rem, 3vw, 2.25rem)',
              background: colors.primary,
              color: colors.dark,
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <MessageCircle size={20} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Pricing Page
const PricingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('primeiraB');

  const categories = [
    { key: 'primeiraB', label: 'Primeira CNH B', data: pricingData.primeiraB },
    { key: 'primeiraA', label: 'Primeira CNH A', data: pricingData.primeiraA },
    { key: 'primeiraAB', label: 'Primeira CNH AB', data: pricingData.primeiraAB },
    { key: 'inclusaoB', label: 'Inclusão B', data: pricingData.inclusaoB },
    { key: 'inclusaoA', label: 'Inclusão A', data: pricingData.inclusaoA }
  ];

  const currentCategory = categories.find(c => c.key === selectedCategory);

  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      paddingTop: '80px',
      boxSizing: 'border-box',
      background: colors.grayLight,
      minHeight: '100vh'
    }}>
      <section style={{
        padding: 'clamp(4rem, 6vw, 5rem) 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 3rem)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: colors.dark,
              marginBottom: '1rem'
            }}>
              {currentCategory.data.title}
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: colors.gray
            }}>
              Escolha o plano ideal para você
            </p>
          </div>

          {/* Seletor de Categoria */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            {categories.map((cat) => (
              <button key={cat.key} onClick={() => setSelectedCategory(cat.key)} style={{
                padding: '0.75rem 1.5rem',
                background: selectedCategory === cat.key ? colors.primary : colors.white,
                color: selectedCategory === cat.key ? colors.dark : colors.gray,
                border: `2px solid ${selectedCategory === cat.key ? colors.primary : colors.grayLight}`,
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat.key) {
                  e.currentTarget.style.borderColor = colors.primary;
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat.key) {
                  e.currentTarget.style.borderColor = colors.grayLight;
                }
              }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Planos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '3rem'
          }}>
            {currentCategory.data.plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} category={currentCategory.data.title} />
            ))}
          </div>

          {/* Taxas */}
          <div style={{
            background: colors.white,
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            borderRadius: '12px',
            border: `2px solid ${colors.grayLight}`
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: colors.dark,
              marginBottom: '1rem'
            }}>
              ⚠️ Taxas Adicionais do Detran
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: colors.gray,
              marginBottom: '1rem',
              lineHeight: 1.7
            }}>
              Além do valor do plano, você precisará pagar as seguintes taxas obrigatórias:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
              gap: '1rem'
            }}>
              {currentCategory.data.taxas.map((taxa, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: colors.grayLight,
                  borderRadius: '8px'
                }}>
                  <span style={{ fontWeight: 600, color: colors.dark }}>{taxa.name}:</span>
                  <span style={{ fontWeight: 800, color: colors.primary, fontSize: '1.125rem' }}>
                    {formatPrice(taxa.valor)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Blog Page
const BlogPage = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
      paddingTop: '80px',
      boxSizing: 'border-box',
      background: colors.grayLight,
      minHeight: '100vh'
    }}>
      <section style={{
        padding: 'clamp(4rem, 6vw, 5rem) 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 3rem)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: colors.dark,
              marginBottom: '1rem'
            }}>
              Blog CFC Iguaba
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: colors.gray
            }}>
              Dicas, guias e novidades sobre CNH em Iguaba Grande
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'clamp(2rem, 3vw, 2.5rem)'
          }}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      background: colors.dark,
      color: '#999',
      padding: 'clamp(3rem, 5vw, 4rem) 0 clamp(1.5rem, 2vw, 2rem)',
      borderTop: `3px solid ${colors.primary}`,
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 3vw, 3rem)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
          gap: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: 'clamp(2rem, 3vw, 3rem)'
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
                color: colors.dark
              }}>
                <Car size={30} strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontSize: '1.375rem', color: colors.white, fontWeight: 800 }}>CFC Iguaba</div>
                <div style={{ fontSize: '0.875rem', color: colors.primary, fontWeight: 600 }}>Autoescola</div>
              </div>
            </div>
            <p style={{ fontSize: '1rem', color: '#999', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              A melhor autoescola de Iguaba Grande - RJ. Mais de 10 anos formando condutores seguros.
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
              Contato
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                <MapPin size={20} style={{ color: colors.primary, flexShrink: 0, marginTop: '0.125rem' }} />
                <span>{siteConfig.address.full}</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
          alignItems: 'center',
          gap: '1.5rem',
          paddingTop: '2rem',
          borderTop: `1px solid ${colors.darkLight}`,
          justifyContent: 'center'
        }}>
          <p style={{ fontSize: '0.9375rem', color: '#666', textAlign: 'center', margin: 0 }}>
            © {currentYear} Autoescola Iguaba - Iguaba Grande RJ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Floating WhatsApp
const FloatingWhatsApp = () => {
  return (
    <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" style={{
      position: 'fixed',
      bottom: window.innerWidth >= 768 ? '30px' : '90px',
      right: 'clamp(20px, 3vw, 30px)',
      width: 'clamp(60px, 8vw, 68px)',
      height: 'clamp(60px, 8vw, 68px)',
      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
      zIndex: 999,
      animation: 'float 3s ease-in-out infinite',
      textDecoration: 'none'
    }}>
      <MessageCircle size={32} strokeWidth={2.5} />
    </a>
  );
};

// Mobile CTA
const MobileCTA = () => {
  if (window.innerWidth >= 768) return null;
  
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
      <a href={`tel:${siteConfig.phoneClean}`} style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '1.125rem',
        fontWeight: 700,
        color: colors.dark,
        background: colors.primary,
        textDecoration: 'none'
      }}>
        <Phone size={22} />
        <span>Ligar</span>
      </a>
      <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '1.125rem',
        fontWeight: 700,
        color: colors.white,
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        textDecoration: 'none'
      }}>
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

// Main App
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        
        body {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: ${colors.dark};
        }
        
        #root {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
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
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
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
          overflow: 'hidden'
        }}>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <main style={{ flex: 1, width: '100%' }}>
            {renderPage()}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <MobileCTA />
        </div>
      )}
    </>
  );
}
