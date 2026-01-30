// pricing.js - Configuração completa de preços e planos
// Fonte oficial de dados da Autoescola Iguaba

export const pricingData = {
  // CATEGORIA A - INCLUSÃO
  inclusaoCategoriaA: {
    title: "Inclusão de Categoria A (Moto)",
    description: "Adicione a categoria A (moto) à sua CNH existente",
    category: "inclusao-a",
    plans: [
      {
        id: "inclusao-a-basico",
        name: "Plano Básico",
        popular: false,
        priceVista: 499.00,
        priceParcelado: { parcelas: 10, valor: 70.00 },
        priceCarne: { parcelas: 3, valor: 220.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "2 aulas práticas"
        ]
      },
      {
        id: "inclusao-a-intermediario",
        name: "Plano Intermediário",
        popular: true,
        priceVista: 700.00,
        priceParcelado: { parcelas: 10, valor: 80.00 },
        priceCarne: { parcelas: 3, valor: 300.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "5 aulas práticas"
        ]
      },
      {
        id: "inclusao-a-complementar",
        name: "Plano Complementar",
        popular: false,
        priceVista: 850.00,
        priceParcelado: { parcelas: 10, valor: 100.00 },
        priceCarne: { parcelas: 3, valor: 350.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "10 aulas práticas"
        ]
      },
      {
        id: "inclusao-a-avancado",
        name: "Plano Avançado",
        popular: false,
        priceVista: 899.00,
        priceParcelado: { parcelas: 10, valor: 110.00 },
        priceCarne: { parcelas: 3, valor: 370.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "15 aulas práticas"
        ]
      }
    ],
    taxes: [
      { name: "Duda", value: 209.78 },
      { name: "Clínica", value: 119.00 },
      { name: "Prova remunerada", value: 288.00 }
    ]
  },

  // CATEGORIA B - INCLUSÃO
  inclusaoCategoriaB: {
    title: "Inclusão de Categoria B (Carro)",
    description: "Adicione a categoria B (carro) à sua CNH existente",
    category: "inclusao-b",
    plans: [
      {
        id: "inclusao-b-basico",
        name: "Plano Básico",
        popular: false,
        priceVista: 599.00,
        priceParcelado: { parcelas: 10, valor: 70.00 },
        priceCarne: { parcelas: 3, valor: 250.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "2 aulas práticas"
        ]
      },
      {
        id: "inclusao-b-intermediario",
        name: "Plano Intermediário",
        popular: true,
        priceVista: 999.00,
        priceParcelado: { parcelas: 10, valor: 120.00 },
        priceCarne: { parcelas: 3, valor: 370.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "5 aulas práticas"
        ]
      },
      {
        id: "inclusao-b-complementar",
        name: "Plano Complementar",
        popular: false,
        priceVista: 1199.00,
        priceParcelado: { parcelas: 10, valor: 140.00 },
        priceCarne: { parcelas: 3, valor: 450.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "10 aulas práticas"
        ]
      },
      {
        id: "inclusao-b-avancado",
        name: "Plano Avançado",
        popular: false,
        priceVista: 1399.00,
        priceParcelado: { parcelas: 10, valor: 170.00 },
        priceCarne: { parcelas: 4, valor: 400.00 },
        includes: [
          "Matrícula",
          "Aluguel do veículo",
          "15 aulas práticas"
        ]
      }
    ],
    taxes: [
      { name: "Duda", value: 209.78 },
      { name: "Clínica", value: 119.00 },
      { name: "Prova remunerada", value: 288.00 }
    ]
  },

  // PRIMEIRA HABILITAÇÃO - CATEGORIA A
  primeiraHabilitacaoA: {
    title: "Primeira Habilitação - Categoria A (Moto)",
    description: "Tire sua primeira CNH categoria A (moto) completa",
    category: "primeira-a",
    plans: [
      {
        id: "primeira-a-basico",
        name: "Plano Básico",
        popular: false,
        priceVista: 499.00,
        priceParcelado: { parcelas: 10, valor: 70.00 },
        priceCarne: { parcelas: 3, valor: 220.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "2 aulas práticas"
        ]
      },
      {
        id: "primeira-a-intermediario",
        name: "Plano Intermediário",
        popular: true,
        priceVista: 750.00,
        priceParcelado: { parcelas: 10, valor: 90.00 },
        priceCarne: { parcelas: 3, valor: 350.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "5 aulas práticas"
        ]
      },
      {
        id: "primeira-a-complementar",
        name: "Plano Complementar",
        popular: false,
        priceVista: 850.00,
        priceParcelado: { parcelas: 10, valor: 100.00 },
        priceCarne: { parcelas: 3, valor: 350.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "10 aulas práticas"
        ]
      },
      {
        id: "primeira-a-avancado",
        name: "Plano Avançado",
        popular: false,
        priceVista: 950.00,
        priceParcelado: { parcelas: 10, valor: 120.00 },
        priceCarne: { parcelas: 3, valor: 370.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "20 aulas práticas"
        ]
      }
    ],
    taxes: [
      { name: "Duda", value: 419.55 },
      { name: "Clínica", value: 288.00 }
    ]
  },

  // PRIMEIRA HABILITAÇÃO - CATEGORIA B
  primeiraHabilitacaoB: {
    title: "Primeira Habilitação - Categoria B (Carro)",
    description: "Tire sua primeira CNH categoria B (carro) completa",
    category: "primeira-b",
    plans: [
      {
        id: "primeira-b-basico",
        name: "Plano Básico",
        popular: false,
        priceVista: 599.00,
        priceParcelado: { parcelas: 10, valor: 80.00 },
        priceCarne: { parcelas: 3, valor: 250.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "2 aulas práticas"
        ]
      },
      {
        id: "primeira-b-intermediario",
        name: "Plano Intermediário",
        popular: true,
        priceVista: 999.00,
        priceParcelado: { parcelas: 10, valor: 120.00 },
        priceCarne: { parcelas: 3, valor: 370.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "5 aulas práticas"
        ]
      },
      {
        id: "primeira-b-complementar",
        name: "Plano Complementar",
        popular: false,
        priceVista: 1199.00,
        priceParcelado: { parcelas: 10, valor: 140.00 },
        priceCarne: { parcelas: 3, valor: 450.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "10 aulas práticas"
        ]
      },
      {
        id: "primeira-b-avancado",
        name: "Plano Avançado",
        popular: false,
        priceVista: 1299.00,
        priceParcelado: { parcelas: 10, valor: 150.00 },
        priceCarne: { parcelas: 4, valor: 380.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel do veículo",
          "15 aulas práticas"
        ]
      }
    ],
    taxes: [
      { name: "Duda", value: 419.55 },
      { name: "Clínica", value: 288.00 }
    ]
  },

  // PRIMEIRA HABILITAÇÃO - CATEGORIA AB
  primeiraHabilitacaoAB: {
    title: "Primeira Habilitação - Categoria AB (Moto + Carro)",
    description: "Tire sua primeira CNH com as duas categorias (A e B)",
    category: "primeira-ab",
    plans: [
      {
        id: "primeira-ab-basico",
        name: "Plano Básico",
        popular: false,
        priceVista: 899.00,
        priceParcelado: { parcelas: 10, valor: 100.00 },
        priceCarne: { parcelas: 3, valor: 330.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel dos veículos",
          "2 aulas práticas de cada categoria"
        ]
      },
      {
        id: "primeira-ab-intermediario",
        name: "Plano Intermediário",
        popular: true,
        priceVista: 1199.00,
        priceParcelado: { parcelas: 10, valor: 120.00 },
        priceCarne: { parcelas: 3, valor: 420.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel dos veículos",
          "5 aulas práticas de cada categoria"
        ]
      },
      {
        id: "primeira-ab-complementar",
        name: "Plano Complementar",
        popular: false,
        priceVista: 1399.00,
        priceParcelado: { parcelas: 10, valor: 140.00 },
        priceCarne: { parcelas: 4, valor: 360.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel dos veículos",
          "10 aulas práticas de cada categoria"
        ]
      },
      {
        id: "primeira-ab-avancado",
        name: "Plano Avançado",
        popular: false,
        priceVista: 1599.00,
        priceParcelado: { parcelas: 10, valor: 180.00 },
        priceCarne: { parcelas: 5, valor: 360.00 },
        includes: [
          "Matrícula",
          "Livro didático",
          "Reforço teórico",
          "Aluguel dos veículos",
          "15 aulas práticas de cada categoria"
        ]
      }
    ],
    taxes: [
      { name: "Duda", value: 419.55 },
      { name: "Clínica", value: 288.00 }
    ]
  }
};

// Helper function para formatar preço
export const formatPrice = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Helper function para calcular total com taxas
export const calculateTotalWithTaxes = (planPrice, taxes) => {
  const taxesTotal = taxes.reduce((sum, tax) => sum + tax.value, 0);
  return planPrice + taxesTotal;
};

// Exportar todas as categorias como array para facilitar iteração
export const allCategories = [
  pricingData.inclusaoCategoriaA,
  pricingData.inclusaoCategoriaB,
  pricingData.primeiraHabilitacaoA,
  pricingData.primeiraHabilitacaoB,
  pricingData.primeiraHabilitacaoAB
];
