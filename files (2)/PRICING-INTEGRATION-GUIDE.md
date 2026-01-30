# 💰 Sistema de Preços - Autoescola Iguaba

## 📋 Estrutura de Dados

Os preços estão organizados no arquivo `autoescola-pricing.js` com 5 categorias principais:

### Categorias Disponíveis:

1. **Inclusão Categoria A** (Moto)
2. **Inclusão Categoria B** (Carro)
3. **Primeira Habilitação A** (Moto)
4. **Primeira Habilitação B** (Carro)
5. **Primeira Habilitação AB** (Moto + Carro)

Cada categoria contém:
- ✅ 4 planos (Básico, Intermediário, Complementar, Avançado)
- ✅ Preços à vista, parcelado e carnê
- ✅ Lista de itens inclusos
- ✅ Taxas adicionais (Duda, Clínica, Prova)
- ✅ Flag de "plano popular"

---

## 🎨 Como Usar no Componente React

### 1. Importar os dados:

```jsx
import { pricingData, formatPrice, calculateTotalWithTaxes } from './autoescola-pricing.js';
```

### 2. Criar o componente PlanCard:

```jsx
const PlanCard = ({ plan, taxes, category }) => {
  const responsive = useResponsive();
  
  return (
    <div style={{
      background: colors.white,
      borderRadius: '16px',
      padding: responsive.isMobile ? '1.5rem' : '2rem',
      border: plan.popular ? `3px solid ${colors.primary}` : `2px solid ${colors.grayLight}`,
      position: 'relative',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Badge "Mais Escolhido" */}
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

      {/* Nome do Plano */}
      <h3 style={{
        fontSize: responsive.isMobile ? '1.375rem' : '1.5rem',
        fontWeight: 800,
        color: colors.dark,
        marginBottom: '1.5rem',
        marginTop: plan.popular ? '1rem' : '0'
      }}>
        {plan.name}
      </h3>

      {/* Preço Destaque (À Vista) */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primary}05 100%)`,
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '0.875rem',
          color: colors.gray,
          marginBottom: '0.5rem',
          fontWeight: 600
        }}>
          À Vista
        </div>
        <div style={{
          fontSize: responsive.isMobile ? '2.25rem' : '2.5rem',
          fontWeight: 900,
          color: colors.primary,
          lineHeight: 1
        }}>
          {formatPrice(plan.priceVista)}
        </div>
      </div>

      {/* Opções de Pagamento */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: `1px solid ${colors.grayLight}`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.9375rem'
        }}>
          <span style={{ color: colors.gray }}>Parcelado:</span>
          <span style={{ fontWeight: 700, color: colors.dark }}>
            {plan.priceParcelado.parcelas}x de {formatPrice(plan.priceParcelado.valor)}
          </span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.9375rem'
        }}>
          <span style={{ color: colors.gray }}>Carnê:</span>
          <span style={{ fontWeight: 700, color: colors.dark }}>
            {plan.priceCarne.parcelas}x de {formatPrice(plan.priceCarne.valor)}
          </span>
        </div>
      </div>

      {/* O que está Incluso */}
      <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: colors.dark,
          marginBottom: '1rem'
        }}>
          O que está incluso:
        </h4>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.625rem'
        }}>
          {plan.includes.map((item, index) => (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              fontSize: '0.9375rem',
              color: colors.gray
            }}>
              <CheckCircle size={18} style={{ color: colors.primary, flexShrink: 0, marginTop: '0.125rem' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => {
          const message = `Olá! Tenho interesse no ${plan.name} de ${category}. Gostaria de mais informações sobre valores e condições.`;
          window.open(`https://wa.me/5522998495952?text=${encodeURIComponent(message)}`, '_blank');
        }}
        style={{
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
```

### 3. Renderizar na Página de Preços:

```jsx
const PricingPage = () => {
  const responsive = useResponsive();
  const [selectedCategory, setSelectedCategory] = useState('primeiraHabilitacaoB');

  const categoryData = pricingData[selectedCategory];

  return (
    <section style={{
      padding: responsive.isMobile ? '4rem 0' : '5rem 0',
      background: colors.grayLight
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: responsive.isMobile ? '0 1rem' : '0 2rem'
      }}>
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: responsive.isMobile ? '2rem' : '2.75rem',
            fontWeight: 900,
            color: colors.dark,
            marginBottom: '1rem'
          }}>
            {categoryData.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: colors.gray
          }}>
            {categoryData.description}
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
          {Object.keys(pricingData).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              style={{
                padding: '0.75rem 1.5rem',
                background: selectedCategory === key ? colors.primary : colors.white,
                color: selectedCategory === key ? colors.dark : colors.gray,
                border: `2px solid ${selectedCategory === key ? colors.primary : colors.grayLight}`,
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {pricingData[key].title.split(' - ')[1] || pricingData[key].title}
            </button>
          ))}
        </div>

        {/* Grid de Planos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: responsive.isMobile ? '1fr' : 
                              responsive.isTablet ? 'repeat(2, 1fr)' : 
                              'repeat(4, 1fr)',
          gap: responsive.isMobile ? '2rem' : '1.5rem',
          marginBottom: '3rem'
        }}>
          {categoryData.plans.map((plan) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              taxes={categoryData.taxes}
              category={categoryData.title}
            />
          ))}
        </div>

        {/* Taxas Adicionais */}
        <div style={{
          background: colors.white,
          padding: responsive.isMobile ? '1.5rem' : '2rem',
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
            Além do valor do plano escolhido, você precisará pagar as seguintes taxas obrigatórias do Detran:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: responsive.isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1rem'
          }}>
            {categoryData.taxes.map((tax, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: colors.grayLight,
                borderRadius: '8px'
              }}>
                <span style={{ fontWeight: 600, color: colors.dark }}>{tax.name}:</span>
                <span style={{ fontWeight: 800, color: colors.primary, fontSize: '1.125rem' }}>
                  {formatPrice(tax.value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

## 📱 Layout Responsivo

O sistema é **mobile-first** e se adapta automaticamente:

- **Mobile** (< 768px): 1 coluna
- **Tablet** (768px - 1023px): 2 colunas
- **Desktop** (≥ 1024px): 4 colunas

---

## ✨ Recursos Especiais

### 1. Badge "Mais Escolhido"
- Planos com `popular: true` recebem destaque visual
- Badge amarelo no topo do card
- Borda mais grossa

### 2. Mensagem WhatsApp Personalizada
- Cada botão gera mensagem específica com nome do plano
- Facilita atendimento e conversão

### 3. Cálculo de Total
- Use `calculateTotalWithTaxes(plan.priceVista, categoryData.taxes)` para mostrar valor final

### 4. Formatação de Moeda
- Use `formatPrice(valor)` para formatar corretamente em R$

---

## 🎯 Integração Rápida

Para adicionar a seção de preços ao seu site:

1. Copie o arquivo `autoescola-pricing.js` para `/src/data/`
2. Copie o componente `PlanCard` acima
3. Crie uma página `Pricing.jsx` ou adicione à página existente
4. Importe e renderize: `<PricingPage />`

---

## 🔧 Personalização Fácil

Para alterar preços, basta editar o arquivo `autoescola-pricing.js`:

```javascript
{
  name: "Plano Básico",
  popular: false,          // ← Mudar para true se for o mais popular
  priceVista: 599.00,      // ← Alterar valor à vista
  priceParcelado: { 
    parcelas: 10,          // ← Número de parcelas
    valor: 80.00           // ← Valor de cada parcela
  },
  // ...
}
```

---

## 💡 Dicas de SEO

Adicione à página de preços:

```html
<title>Preços e Planos - Autoescola Iguaba | CNH em Iguaba Grande</title>
<meta name="description" content="Confira os preços e planos da Autoescola Iguaba. Primeira habilitação, inclusão de categoria. Valores atualizados 2025. Parcele em até 10x." />
```

---

## 📞 Suporte

Dúvidas sobre implementação? Entre em contato pelo WhatsApp da autoescola!
