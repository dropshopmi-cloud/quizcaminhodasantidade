export interface QuizQuestion {
  id: number;
  theme: string;
  question: string;
  options: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    theme: "Orações",
    question: "Qual é a sua relação atual com a oração diária?",
    options: [
      "Oro todos os dias com devoção",
      "Oro algumas vezes por semana",
      "Tenho dificuldade em manter uma rotina de oração",
      "Gostaria de aprofundar minha vida de oração"
    ]
  },
  {
    id: 2,
    theme: "Novenas",
    question: "Você costuma fazer novenas aos Santos e Arcanjos?",
    options: [
      "Sim, faço novenas regularmente",
      "Já fiz algumas novenas, mas não com frequência",
      "Nunca fiz uma novena completa",
      "Quero aprender a fazer novenas poderosas"
    ]
  },
  {
    id: 3,
    theme: "Rosário",
    question: "Como é sua prática do Santo Rosário?",
    options: [
      "Rezo o Rosário diariamente",
      "Rezo ocasionalmente",
      "Tenho vontade de começar a rezar",
      "Quero aprofundar essa devoção"
    ]
  },
  {
    id: 4,
    theme: "Meditação",
    question: "Você pratica meditação cristã ou Lectio Divina?",
    options: [
      "Sim, medito na Palavra de Deus regularmente",
      "Às vezes faço momentos de silêncio com Deus",
      "Não conheço bem essas práticas",
      "Desejo aprender a meditar espiritualmente"
    ]
  },
  {
    id: 5,
    theme: "Leituras",
    question: "Como está sua prática de leitura espiritual?",
    options: [
      "Leio a Bíblia e livros espirituais frequentemente",
      "Leio de vez em quando",
      "Tenho dificuldade em manter o hábito",
      "Quero desenvolver esse hábito"
    ]
  },
  {
    id: 6,
    theme: "Devocional",
    question: "Como você gostaria de fortalecer seu caminho espiritual?",
    options: [
      "Tendo uma rotina devocional estruturada",
      "Com orações e novenas poderosas",
      "Através da intercessão dos Arcanjos",
      "Todas as anteriores"
    ]
  }
];

export const productFeatures = [
  { title: "+110 Orações", icon: "🙏" },
  { title: "Novenas", icon: "📿" },
  { title: "Rosário", icon: "✝️" },
  { title: "Meditação", icon: "🕯️" },
  { title: "Leituras", icon: "📖" },
  { title: "Devocional", icon: "⛪" },
  { title: "Central Mariana", icon: "🌹" },
  { title: "E mais…", icon: "✨" }
];

export const faqItems = [
  {
    question: "O que é o Caminho da Santidade?",
    answer: "O Caminho da Santidade é um guia devocional completo com mais de 110 orações, leituras, novenas, meditações, devocional, rosário, Central Mariana e muito mais. Um material único para fortalecer seu vínculo com Deus, sua fé e proteção espiritual."
  },
  {
    question: "Como vou receber o material?",
    answer: "Após a confirmação do pagamento, você receberá acesso imediato por e-mail ao material completo em formato digital, podendo acessar de qualquer dispositivo."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício! Uma vez adquirido, o material é seu para sempre, podendo consultar quantas vezes quiser."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! O material é 100% compatível com celulares, tablets e computadores. Acesse suas orações onde estiver."
  },
  {
    question: "É seguro comprar?",
    answer: "Totalmente seguro! A compra é processada pela Hotmart, maior plataforma de produtos digitais da América Latina, com garantia de 7 dias."
  }
];
