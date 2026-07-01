// D&D 5e - Dados Parametrizados de Raças e Classes

const RACES_DATA = {
  humano: {
    name: 'Humano',
    bonusAtributos: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
    tamanho: 'Médio',
    velocidade: '30 pés',
    idiomas: 'Comum',
    descricao: 'Versáteis e ambiciosos, os humanos são os filhotes e sucessores do mundo.'
  },
  elfo: {
    name: 'Elfo',
    bonusAtributos: { dexterity: 2 },
    tamanho: 'Médio',
    velocidade: '30 pés',
    idiomas: 'Comum, Élfico',
    descricao: 'Elfos são um povo mágico de graça e beleza.'
  },
  'elfo-da-floresta': {
    name: 'Elfo da Floresta',
    bonusAtributos: { dexterity: 2, wisdom: 1 },
    tamanho: 'Médio',
    velocidade: '35 pés',
    idiomas: 'Comum, Élfico',
    descricao: 'Elfos da floresta são guerreiros e mágicos naturais de um povo raro.'
  },
  'elfo-de-alada': {
    name: 'Elfo de Alada',
    bonusAtributos: { dexterity: 2, intelligence: 1 },
    tamanho: 'Médio',
    velocidade: '30 pés',
    idiomas: 'Comum, Élfico',
    descricao: 'Elfos de Alada são frequentemente altos, com tons de pele metalizados.'
  },
  'elfo-negro': {
    name: 'Elfo Negro (Drow)',
    bonusAtributos: { dexterity: 2, charisma: 1 },
    tamanho: 'Médio',
    velocidade: '30 pés',
    idiomas: 'Comum, Élfico',
    descricao: 'Os Drow são elfos que vivem nas profundezas escuras do Underdark.'
  },
  anao: {
    name: 'Anão',
    bonusAtributos: { constitution: 2 },
    tamanho: 'Médio',
    velocidade: '25 pés',
    idiomas: 'Comum, Anão',
    descricao: 'Anões são robustos e resistentes, conhecidos por sua maestria com pedra e metal.'
  },
  'anao-montanha': {
    name: 'Anão da Montanha',
    bonusAtributos: { strength: 2, constitution: 2 },
    tamanho: 'Médio',
    velocidade: '25 pés',
    idiomas: 'Comum, Anão',
    descricao: 'Anões da montanha são os guerreiros mais famosos de sua raça.'
  },
  'anao-colina': {
    name: 'Anão da Colina',
    bonusAtributos: { wisdom: 1, constitution: 2 },
    tamanho: 'Médio',
    velocidade: '25 pés',
    idiomas: 'Comum, Anão',
    descricao: 'Anões da colina são mestres de minas e das profundezas da terra.'
  },
  halfling: {
    name: 'Halfling',
    bonusAtributos: { dexterity: 2 },
    tamanho: 'Pequeno',
    velocidade: '25 pés',
    idiomas: 'Comum, Halfling',
    descricao: 'Os halflings são povos diminutos conhecidos por sua sorte e resistência.'
  },
  'halfling-leve': {
    name: 'Halfling Leve',
    bonusAtributos: { dexterity: 2, charisma: 1 },
    tamanho: 'Pequeno',
    velocidade: '25 pés',
    idiomas: 'Comum, Halfling',
    descricao: 'Halflings leves são conhecidos por sua agilidade e natureza descontraída.'
  },
  'halfling-rousto': {
    name: 'Halfling Robusto',
    bonusAtributos: { dexterity: 2, constitution: 1 },
    tamanho: 'Pequeno',
    velocidade: '25 pés',
    idiomas: 'Comum, Halfling',
    descricao: 'Halflings robustos são resistentes e firmes em propósito.'
  },
  dragonete: {
    name: 'Dragonete',
    bonusAtributos: { strength: 2, charisma: 1 },
    tamanho: 'Médio',
    velocidade: '30 pés',
    idiomas: 'Comum, Draconato',
    descricao: 'Dragonetes são humanoides dracônicos com traços reptilianos distintos.'
  },
  gnomo: {
    name: 'Gnomo',
    bonusAtributos: { intelligence: 2 },
    tamanho: 'Pequeno',
    velocidade: '25 pés',
    idiomas: 'Comum, Gnômico',
    descricao: 'Gnomos são inventores brilhantes e mágicos de natureza criativa.'
  },
  'gnomo-floresta': {
    name: 'Gnomo da Floresta',
    bonusAtributos: { intelligence: 2, dexterity: 1 },
    tamanho: 'Pequeno',
    velocidade: '25 pés',
    idiomas: 'Comum, Gnômico',
    descricao: 'Gnomos da floresta são iluministas naturais da selva e da mata.'
  },
  'gnomo-rocha': {
    name: 'Gnomo da Rocha',
    bonusAtributos: { intelligence: 2, constitution: 1 },
    tamanho: 'Pequeno',
    velocidade: '25 pés',
    idiomas: 'Comum, Gnômico',
    descricao: 'Gnomos da rocha são engenheiros das profundezas.'
  },
  'meio-orc': {
    name: 'Meio-orc',
    bonusAtributos: { strength: 2, constitution: 1, charisma: -1 },
    tamanho: 'Médio',
    velocidade: '30 pés',
    idiomas: 'Comum, Orc',
    descricao: 'Meio-orcs combinam a força orc com a inteligência humana.'
  },
  tiefling: {
    name: 'Tiefling',
    bonusAtributos: { charisma: 2, intelligence: 1 },
    tamanho: 'Médio',
    velocidade: '30 pés',
    idiomas: 'Comum, Infernal',
    descricao: 'Tieflings carregam a marca de sua herança ancestral infernal.'
  }
};

const CLASSES_DATA = {
  barbaro: {
    name: 'Bárbaro',
    hpInicial: 12,
    atributoChave: 'strength',
    pericias: ['Atletismo', 'Percepção'],
    armas: ['Armas simples e de guerra'],
    descricao: 'Um guerreiro impulsionado pela raiva e paixão primitiva.',
    toque: 'Fúria, Defesa insana, Crítico melhorado',
    habilidades: [
      { name: 'Fúria (Rage)', descricao: 'Você pode entrar em fúria, ganhando bônus de dano e resistência a dano.' },
      { name: 'Defesa sem Armadura (Unarmored Defense)', descricao: 'Sua Classe de Armadura é 10 + Modificador de Destreza + Modificador de Constituição.' }
    ],
    truques: []
  },
  bardo: {
    name: 'Bardo',
    hpInicial: 8,
    atributoChave: 'charisma',
    pericias: ['Acrobacias', 'Enganação', 'Performance', 'Persuasão'],
    armas: ['Armas simples, espadas simples de uma mão'],
    descricao: 'Um mago da música e da magia que encanta e inspira.',
    toque: 'Inspiração de Bardo, Magia, Truques',
    habilidades: [
      { name: 'Conjuração (Spellcasting)', descricao: 'Você pode aprender e lançar magias de bardo.' },
      { name: 'Inspiração de Bardo (Bardic Inspiration)', descricao: 'Você pode inspirar aliados com um bônus de competência em testes.' }
    ],
    truques: [
      'Mensagem (Message)',
      'Prestidigitação (Prestidigitation)',
      'Ilusão Menor (Minor Illusion)',
      'Amizade (Friends)',
      'Luz (Light)',
      'Mãos Mágicas (Mage Hand)'
    ],
    magiasPorCirculo: {
      '1º Círculo': ['Sono (Sleep)', 'Cativar (Charm Person)', 'Acalmar Emoções (Calm Emotions)'],
      '2º Círculo': ['Sugestão (Suggestion)', 'Silêncio (Silence)', 'Invisibilidade (Invisibility)'],
      '3º Círculo': ['Leque Cromático (Color Spray)', 'Talas de Vento (Wind Wall)', 'Círculo Mágico (Magic Circle)']
    }
  },
  clerigo: {
    name: 'Clérigo',
    hpInicial: 8,
    atributoChave: 'wisdom',
    pericias: ['Insight', 'Medicina', 'Persuasão'],
    armas: ['Armas simples'],
    descricao: 'Um guerreiro sagrado que canaliza o poder divino.',
    toque: 'Magia Divina, Canalizar Divindade, Cura',
    habilidades: [
      { name: 'Conjuração (Spellcasting)', descricao: 'Você pode aprender e lançar magias divinas.' },
      { name: 'Domínio Divino (Divine Domain)', descricao: 'Você escolhe um domínio que concede habilidades adicionais.' },
      { name: 'Canalizar Divindade (Channel Divinity)', descricao: 'Você pode usar energia divina para efeitos mágicos e curativos.' }
    ],
    truques: [
      'Orientação (Guidance)',
      'Luz (Light)',
      'Chama Sagrada (Sacred Flame)',
      'Thaumaturgia (Thaumaturgy)',
      'Voz Divina (Word of Radiance)'
    ],
    magiasPorCirculo: {
      '1º Círculo': ['Cura Wounds (Cure Wounds)', 'Bênção (Bless)', 'Comando (Command)', 'Escudo da Fé (Shield of Faith)', 'Sanar Feridas (Healing Word)'],
      '2º Círculo': ['Augúrio (Augury)', 'Consagração (Consecration)', 'Luz do Dia (Aid)', 'Imobilizar Pessoa (Hold Person)']
    }
  },
  druida: {
    name: 'Druida',
    hpInicial: 8,
    atributoChave: 'wisdom',
    pericias: ['Arcanos', 'Insight', 'Medicina', 'Natureza', 'Percepção'],
    armas: ['Armas simples de corpo a corpo'],
    descricao: 'Um mago da natureza que protege o equilíbrio do mundo.',
    toque: 'Circulo Druida, Mudança de Forma, Magia Natural',
    habilidades: [
      { name: 'Conjuração (Spellcasting)', descricao: 'Você pode aprender e lançar magias druidas.' },
      { name: 'Forma Selvagem (Wild Shape)', descricao: 'Você pode assumir a forma de uma fera que já viu.' },
      { name: 'Druidismo (Druidic)', descricao: 'Você aprende e usa os segredos da magia da natureza.' }
    ],
    truques: [
      'Orientação (Guidance)',
      'Druidcraft (Druidcraft)',
      'Produzir Chamas (Produce Flame)',
      'Chicote de Espinhos (Thorn Whip)'
    ],
    magiasPorCirculo: {
      '1º Círculo': ['Curar Feridas (Cure Wounds)', 'Crescimento de Plantas (Entangle)', 'Luz do Dia (Goodberry)', 'Bênção da Natureza (Healing Word)'],
      '2º Círculo': ['Pele de Árvore (Barkskin)', 'Muralha de Vento (Gust of Wind)', 'Passo da Árvore (Pass without Trace)']
    }
  },
  guerreiro: {
    name: 'Guerreiro',
    hpInicial: 10,
    atributoChave: 'strength',
    pericias: ['Atletismo', 'Insight', 'Intuição'],
    armas: ['Todas as armas'],
    descricao: 'Um mestre da batalha, treinado em armas e armaduras.',
    toque: 'Ataques extras, Segundo vento, Habilidades marciais',
    habilidades: [
      { name: 'Estilo de Luta (Fighting Style)', descricao: 'Você adota um estilo de luta particular como sua especialidade.' },
      { name: 'Segundo Vento (Second Wind)', descricao: 'Uma vez por descanso curto ou longo, você pode usar uma ação bônus para recuperar pontos de vida.' }
    ],
    truques: []
  },
  mago: {
    name: 'Mago',
    hpInicial: 6,
    atributoChave: 'intelligence',
    pericias: ['Arcanos', 'História', 'Investigação'],
    armas: ['Adagas, dardos, fundas, cajados, balestim leve'],
    descricao: 'Um estudioso de magia arcana que lança feitiços devastadores.',
    toque: 'Grimório, Magia Arcana, Truques poderosos',
    habilidades: [
      { name: 'Conjuração (Spellcasting)', descricao: 'Você pode aprender e lançar magias arcanas.' },
      { name: 'Grimório (Spellbook)', descricao: 'Você possui um livro com as magias que conhece.' },
      { name: 'Recuperação Arcana (Arcane Recovery)', descricao: 'Você pode recuperar espaços de magia durante um descanso curto.' }
    ],
    truques: [
      'Mãos Mágicas (Mage Hand)',
      'Prestidigitação (Prestidigitation)',
      'Ilusão Menor (Minor Illusion)',
      'Toque Chocante (Shocking Grasp)',
      'Raio de Gelo (Ray of Frost)',
      'Luz (Light)',
      'Mensagem (Message)',
      'Bola de Fogo (Fire Bolt)',
      'Rajada de Veneno (Poison Spray)'
    ],
    magiasPorCirculo: {
      '1º Círculo': ['Mísseis Mágicos (Magic Missile)', 'Escudo Arcano (Shield)', 'Armadura Arcana (Mage Armor)', 'Identificar (Identify)', 'Proteção contra o Mal e o Bem (Protection from Evil and Good)'],
      '2º Círculo': ['Invisibilidade (Invisibility)', 'Passo Sombrio (Misty Step)', 'Sugestão (Suggestion)', 'Nuvem de Nevoa (Fog Cloud)'],
      '3º Círculo': ['Bola de Fogo (Fireball)', 'Contramágica (Counterspell)', 'Gelo Negro (Ice Storm)', 'Dissipar Magia (Dispel Magic)']
    }
  },
  monge: {
    name: 'Mônge',
    hpInicial: 8,
    atributoChave: 'dexterity',
    pericias: ['Acrobacias', 'Atletismo', 'Furtividade', 'Insight'],
    armas: ['Armas simples, espadas simples de uma mão'],
    descricao: 'Um mestre marcial que canaliza a energia interna (Ki).',
    toque: 'Pontos de Ki, Movimento sem Armadura, Artes Marciais',
    habilidades: [
      { name: 'Artes Marciais (Martial Arts)', descricao: 'Você usa Ki para realizar golpes especiais com armas e sem elas.' },
      { name: 'Ki (Ki)', descricao: 'Você pode canalizar energia interna para realizar técnicas místicas.' },
      { name: 'Movimento sem Armadura (Unarmored Movement)', descricao: 'Você se move com agilidade sem depender de armadura ou armas.' }
    ],
    truques: []
  },
  paladino: {
    name: 'Paladino',
    hpInicial: 10,
    atributoChave: 'strength',
    pericias: ['Atletismo', 'Insight', 'Intimidação', 'Religião'],
    armas: ['Todas as armas'],
    descricao: 'Um guerreiro sagrado que faz juramento para uma causa nobre.',
    toque: 'Juramento Sagrado, Magia Divina, Aura Sagrada',
    habilidades: [
      { name: 'Sentido Divino (Divine Sense)', descricao: 'Você percebe a presença de entidades divinas e extraplanares.' },
      { name: 'Mãos Curativas (Lay on Hands)', descricao: 'Você pode curar feridas tocando outra criatura.' },
      { name: 'Conjuração (Spellcasting)', descricao: 'Você pode aprender e lançar magias de paladino.' }
    ],
    truques: []
  },
  ranger: {
    name: 'Ranger',
    hpInicial: 10,
    atributoChave: 'dexterity',
    pericias: ['Atletismo', 'Furtividade', 'Natureza', 'Percepção', 'Sobrevivência'],
    armas: ['Todas as armas simples e de guerra'],
    descricao: 'Um guerreiro das terras selvagens que caça e rastreia inimigos.',
    toque: 'Campesinato Favorito, Magia Natural, Companheiro Animal',
    habilidades: [
      { name: 'Campesinato Favorito (Favored Enemy)', descricao: 'Você se adapta a um ambiente e se torna mais eficiente nele.' },
      { name: 'Explorador Natural (Natural Explorer)', descricao: 'Você é especialista em rastrear e sobreviver em ambientes específicos.' },
      { name: 'Conjuração (Spellcasting)', descricao: 'Você pode aprender e lançar magias de ranger.' }
    ],
    truques: []
  },
  ladino: {
    name: 'Ladino',
    hpInicial: 8,
    atributoChave: 'dexterity',
    pericias: ['Acrobacias', 'Atletismo', 'Enganação', 'Furtividade', 'Investigação', 'Percepção'],
    armas: ['Armas simples, espadas simples de uma mão'],
    descricao: 'Um especialista em furtividade, roubo e precisão.',
    toque: 'Ataque Sorrateiro, Perícia, Senso Especial',
    habilidades: [
      { name: 'Ataque Sorrateiro (Sneak Attack)', descricao: 'Você pode causar dano extra quando ataca um alvo desprevenido ou aliado próximo.' },
      { name: 'Perícia (Expertise)', descricao: 'Você pode escolher perícias para se tornar particularmente hábil nelas.' }
    ],
    truques: []
  },
  feiticeiro: {
    name: 'Feiticeiro',
    hpInicial: 6,
    atributoChave: 'charisma',
    pericias: ['Arcanos', 'Enganação', 'Intimidação', 'Persuasão'],
    armas: ['Adagas, dardos, fundas, cajados, balestim leve'],
    descricao: 'Um mago inato que canaliza magia através de seu poder interior.',
    toque: 'Magia Inata, Pontos de Feitiçaria, Metamagia',
    habilidades: [
      { name: 'Magia Inata (Innate Spellcasting)', descricao: 'Sua magia surge de um poder interior, sem necessidade de estudo.' },
      { name: 'Metamagia (Metamagic)', descricao: 'Você pode modificar os efeitos de suas magias.' },
      { name: 'Fonte de Feitiçaria (Sorcery Points)', descricao: 'Seu poder mágico vem de uma origem especial.' }
    ],
    truques: [
      'Prestidigitação',
      'Mãos Mágicas',
      'Luz',
      'Ilusão Menor',
      'Toque Chocante',
      'Raio de Gelo'
    ]
  },
  bruxo: {
    name: 'Bruxo',
    hpInicial: 6,
    atributoChave: 'charisma',
    pericias: ['Arcanos', 'Enganação', 'História', 'Intimidação'],
    armas: ['Armas simples'],
    descricao: 'Um mago que fez um pacto com uma entidade poderosa.',
    toque: 'Pacto Eldritch, Invocações, Magia Invertida',
    habilidades: [
      { name: 'Pacto (Pact Boon)', descricao: 'Você faz um pacto com uma entidade especial.' },
      { name: 'Patrono (Otherworldly Patron)', descricao: 'Sua entidade patrona concede poderes e benefícios únicos.' },
      { name: 'Invocações (Eldritch Invocations)', descricao: 'Você pode aprender invocações especiais inspiradas em seu pacto.' }
    ],
    truques: [
      'Prestidigitação (Prestidigitation)',
      'Mãos Mágicas (Mage Hand)',
      'Ilusão Menor (Minor Illusion)',
      'Toque Chocante (Eldritch Blast)',
      'Raio de Eldritch (Eldritch Blast)',
      'Mordida do Inferno (Eldritch Blast)'
    ]
  }
};

// D&D 5e - Subclasses (Arquetipos) por classe
// Apenas classes do PHB (Livro do Jogador) com arquétipos básicos.
// Subclasses são desbloqueadas a partir do nível 3 (exceto o Bruxo, que também é nível 1 para o Pacto).
const SUBCLASSES_DATA = {
  barbaro: [
    { name: 'Caminho do Berserker', nivel: 3, descricao: 'Fúria implacável e golpes devastadores em combate corpo a corpo.', habilidades: [{ name: 'Frenesi (Frenzy)', descricao: 'Você pode entrar em frenesi para atacar ainda mais enquanto estiver em fúria.' }], truques: [] },
    { name: 'Caminho do Guerreiro Totêmico', nivel: 3, descricao: 'Canaliza o espírito dos animais para ganhar poder totêmico.', habilidades: [{ name: 'Espírito Totêmico (Totem Spirit)', descricao: 'Você recebe benefícios especiais baseados no totem animal escolhido.' }], truques: [] },
    { name: 'Caminho do Predador', nivel: 3, descricao: 'Caçador feroz que rastreia e marca suas presas.', habilidades: [{ name: 'Marca do Predador', descricao: 'Você marca uma presa para ganhar vantagem contra ela e rastreá-la melhor.' }], truques: [] },
    { name: 'Caminho do Storm Herald', nivel: 3, descricao: 'Canaliza a fúria das tempestades, desertos, mares ou gelo.', habilidades: [{ name: 'Aura do Storm Herald', descricao: 'Você cria uma aura elemental que causa efeitos adicionais em inimigos próximos.' }], truques: [] },
    { name: 'Caminho do Zealot', nivel: 3, descricao: 'Bárbaro fanático, com destruição divina garantida.', habilidades: [{ name: 'Fúria Divina (Divine Fury)', descricao: 'Você pode causar dano extra de energia sagrada quando ataca em fúria.' }], truques: [] },
    { name: 'Caminho do Gigante das Nuvens', nivel: 3, descricao: 'Canaliza a força elemental de gigantes.', habilidades: [{ name: 'Vigor Elemental', descricao: 'Você obtém força e resistência adicionais com a bênção dos gigantes.' }], truques: [] },
    { name: 'Caminho do Beast', nivel: 3, descricao: 'Forma um vínculo animal e usa uma Besta Espiritual.', habilidades: [{ name: 'Companheiro Bestial', descricao: 'Você convoca um companheiro animal espiritual que o auxilia em combate.' }], truques: [] },
    { name: 'Caminho do Wild Magic', nivel: 3, descricao: 'Fúria imprevisível com explosões de magia selvagem.', habilidades: [{ name: 'Magia Selvagem', descricao: 'Sua fúria pode desencadear efeitos mágicos imprevisíveis ao atacar.' }], truques: [] }
  ],
  bardo: [
    { name: 'Colégio do Conhecimento', nivel: 3, descricao: 'Especialista em lore, investigação e magias arcanas.', habilidades: [{ name: 'Conhecimento Aprimorado', descricao: 'O bardo ganha maior capacidade de pesquisa, lore e respostas.' }], truques: [] },
    { name: 'Colégio da Bravura', nivel: 3, descricao: 'Bardo de combate, inspirado pelos feitos heróicos.', habilidades: [{ name: 'Inspiração de Bravura', descricao: 'Você concede bônus de ataque e defesa aos aliados inspirados.' }], truques: [] },
    { name: 'Colégio do Glamour', nivel: 3, descricao: 'Bardo feérico, com magias de charme e medo.', habilidades: [{ name: 'Presença Feérica', descricao: 'Você encanta aliados e confunde inimigos com sua presença mágica.' }], truques: [] },
    { name: 'Colégio do Sussurro (Whispers)', nivel: 3, descricao: 'Bardo sombrio, que rouba segredos e manipula mentes.', habilidades: [{ name: 'Segredos Sussurrados', descricao: 'Você usa segredos roubados para causar medo e controlar mentes.' }], truques: [] },
    { name: 'Colégio do Eloquence', nivel: 3, descricao: 'Mestre da persuasão, com palavras cortantes.', habilidades: [{ name: 'Eloquência Avassaladora', descricao: 'Sua fala torna seus argumentos mais difíceis de resistir.' }], truques: [] },
    { name: 'Colégio dos Espíritos', nivel: 3, descricao: 'Bardo espiritualista, que invoca contos e inspira aliados.', habilidades: [{ name: 'Histórias dos Espíritos', descricao: 'Você convoca histórias espirituais que fortalecem aliados e confundem inimigos.' }], truques: [] }
  ],
  clerigo: [
    { name: 'Domínio da Guerra', nivel: 1, descricao: 'Clérigo focado em combate e bênçãos marciais.', habilidades: [{ name: 'Bênção de Guerra', descricao: 'Seu domínio concede bônus especiais em combate.' }], truques: [] },
    { name: 'Domínio da Vida', nivel: 1, descricao: 'Clérigo especializado em cura e proteção.', habilidades: [{ name: 'Discípulo da Vida', descricao: 'Suas magias de cura restauram mais pontos de vida.' }], truques: [] },
    { name: 'Domínio da Luz', nivel: 1, descricao: 'Clérigo da luz, queima os inimigos com fogo radiante.', habilidades: [{ name: 'Luz Guardiã', descricao: 'Você ofusca inimigos com luz divina para protegê-lo.' }], truques: [] },
    { name: 'Domínio da Tempestade', nivel: 1, descricao: 'Clérigo que empunha a fúria dos céus.', habilidades: [{ name: 'Fúria da Tempestade', descricao: 'Você causa dano elétrico adicional e empurra inimigos.' }], truques: [] },
    { name: 'Domínio da Ordem', nivel: 1, descricao: 'Clérigo da ordem, com magias de controle e combate.', habilidades: [{ name: 'Voz da Autoridade', descricao: 'Você impõe sua vontade para controlar inimigos e proteger aliados.' }], truques: [] },
    { name: 'Domínio da Forja', nivel: 1, descricao: 'Clérigo ferreiro, com bênçãos para armas e armaduras.', habilidades: [{ name: 'Bênção da Forja', descricao: 'Você fortalece equipamentos e concede proteção extra.' }], truques: [] },
    { name: 'Domínio do Conhecimento', nivel: 1, descricao: 'Clérigo estudioso, com magias de identificação e controle mental.', habilidades: [{ name: 'Benção do Conhecimento', descricao: 'Você obtém proficiência em perícias e insights arcanos.' }], truques: [] },
    { name: 'Domínio da Natureza', nivel: 1, descricao: 'Clérigo druídico, com magias de terra e fauna.', habilidades: [{ name: 'Acolyte of Nature', descricao: 'Você aprende magias relacionadas à natureza e herança druidica.' }], truques: [] },
    { name: 'Domínio do Engano (Trickery)', nivel: 1, descricao: 'Clérigo traiçoeiro, com bênçãos de ilusão e duplicação.', habilidades: [{ name: 'Bênção do Engano', descricao: 'Você cria ilusões e duplicatas que confundem seus inimigos.' }], truques: [] },
    { name: 'Domínio da Paz (Peace)', nivel: 1, descricao: 'Clérigo pacífico, com bênçãos de harmonia e proteção.', habilidades: [{ name: 'Serenidade Corporificada', descricao: 'Sua presença reduz dano e mantém aliados protegidos.' }], truques: [] },
    { name: 'Domínio da Sepultura (Grave)', nivel: 1, descricao: 'Clérigo dos mortos, com magias de necromancia e cura.', habilidades: [{ name: 'Círculo da Mortalidade', descricao: 'Você manipula a vida e a morte para proteger aliados vulneráveis.' }], truques: [] }
  ],
  druida: [
    { name: 'Círculo da Lua', nivel: 2, descricao: 'Especialista em mudança de forma em formas animais.', habilidades: [{ name: 'Forma da Lua', descricao: 'Você pode usar a magia da lua para fortalecer sua forma selvagem.' }], truques: [] },
    { name: 'Círculo da Terra', nivel: 2, descricao: 'Druida focado em magias de terra, água, fogo ou ar.', habilidades: [{ name: 'Vínculo com a Terra', descricao: 'Você aprende magias adicionais e ganha resistência elemental.' }], truques: [] },
    { name: 'Círculo do Pastoreio (Shepherd)', nivel: 2, descricao: 'Druida que invoca espíritos animais para ajudar aliados.', habilidades: [{ name: 'Totem Espiritual', descricao: 'Você convoca espíritos animais que curam aliados e enfraquecem inimigos.' }], truques: [] },
    { name: 'Círculo dos Cogumelos (Spores)', nivel: 2, descricao: 'Druida fúngico, com necromancia e explosões de esporos.', habilidades: [{ name: 'Simbiose Esporal', descricao: 'Você cria uma presença de esporos que danifica inimigos e protege você.' }], truques: [] },
    { name: 'Círculo da Estrelas (Stars)', nivel: 2, descricao: 'Druida astrólogo, com magias de constelação e forma estelar.', habilidades: [{ name: 'Conexão Estelar', descricao: 'Você canaliza energia cósmica para curar aliados e ferir inimigos.' }], truques: [] },
    { name: 'Círculo do Fogo (Wildfire)', nivel: 2, descricao: 'Druida elemental, com um espírito de fogo aliado.', habilidades: [{ name: 'Espírito Selvagem', descricao: 'Você convoca um espírito de fogo que auxilia em cura e combate.' }], truques: [] }
  ],
  guerreiro: [
    { name: 'Campeão', nivel: 3, descricao: 'Guerreiro puro, focado em crítico e proeza física.', habilidades: [{ name: 'Golpe Crítico Aprimorado', descricao: 'Seus ataques críticos são mais fáceis de conseguir e mais devastadores.' }], truques: [] },
    { name: 'Mestre de Batalha', nivel: 3, descricao: 'Tático superior, com manobras especiais de combate.', habilidades: [{ name: 'Superioridade de Combate', descricao: 'Você usa dados de superioridade para executar manobras poderosas.' }], truques: [] },
    { name: 'Cavaleiro Arcano', nivel: 3, descricao: 'Mistura magia com combate, conjurando feitiços em armadura.', habilidades: [{ name: 'Laço de Arma', descricao: 'Você liga sua arma a você e conjura magias sem perder forma de ataque.' }], truques: [] },
    { name: 'Cavaleiro Rúnico (Rune Knight)', nivel: 3, descricao: 'Guerreiro com runas mágicas, capaz de crescer em tamanho.', habilidades: [{ name: 'Runas Mágicas', descricao: 'Você inscreve runas que conferem efeitos especiais ao seu equipamento.' }], truques: [] },
    { name: 'Cavaleiro Psíquico (Psi Warrior)', nivel: 3, descricao: 'Guerreiro com poder psônico, usa energia mental em combate.', habilidades: [{ name: 'Poder Psíquico', descricao: 'Você usa energia mental para adicionar efeitos especiais aos seus ataques.' }], truques: [] },
    { name: 'Cavaleiro das Trevas (Echo Knight)', nivel: 3, descricao: 'Guerreiro que cria ecos de si mesmo em combate.', habilidades: [{ name: 'Eco Manifestado', descricao: 'Você cria um eco que pode atacar ou se mover em seu lugar.' }], truques: [] },
    { name: 'Samurai', nivel: 3, descricao: 'Guerreiro com honra, com bônus de combate e vantagem.', habilidades: [{ name: 'Espírito de Combate', descricao: 'Você obtém bônus temporários de ataque e resistência.' }], truques: [] },
    { name: 'Cavaleiro (Cavalier)', nivel: 3, descricao: 'Guerreiro montado, especialista em defesa e marcação.', habilidades: [{ name: 'Marcação Defensiva', descricao: 'Você protege aliados e impede inimigos de fugir de você.' }], truques: [] }
  ],
  mago: [
    { name: 'Escola de Abjuração', nivel: 2, descricao: 'Especialista em magias de proteção e contrafeitiços.', habilidades: [{ name: 'Barreira Arcana', descricao: 'Você cria defesas mágicas poderosas.' }], truques: [] },
    { name: 'Escola de Evocação', nivel: 2, descricao: 'Mestre das magias de dano elemental.', habilidades: [{ name: 'Esculpir Evocação', descricao: 'Você pode moldar suas magias para evitar aliados inocentes.' }], truques: [] },
    { name: 'Escola de Transmutação', nivel: 2, descricao: 'Manipula a estrutura da matéria e da energia.', habilidades: [{ name: 'Alquimia Menor', descricao: 'Você altera propriedades de objetos e criaturas com transmutação.' }], truques: [] },
    { name: 'Escola de Adivinhação', nivel: 2, descricao: 'Mago vidente, com magias de profecia e revelação.', habilidades: [{ name: 'Presságios', descricao: 'Você rola dados extras e pode substituir resultados de rolagens.' }], truques: [] },
    { name: 'Escola de Conjuração', nivel: 2, descricao: 'Mago invocador, com magias de transporte e invocação.', habilidades: [{ name: 'Transposição Benigna', descricao: 'Você move aliados e inimigos com suas conjurações.' }], truques: [] },
    { name: 'Escola de Encantamento', nivel: 2, descricao: 'Mago manipulador, com magias de charme e controle mental.', habilidades: [{ name: 'Olhar Hipnótico', descricao: 'Seus encantamentos ficam mais difíceis de resistir.' }], truques: [] },
    { name: 'Escola de Ilusão', nivel: 2, descricao: 'Mago enganador, com magias de ilusão e medo.', habilidades: [{ name: 'Ilusão Aprimorada', descricao: 'Suas ilusões tornam-se mais convincentes e duradouras.' }], truques: [] },
    { name: 'Escola de Necromancia', nivel: 2, descricao: 'Mago sombrio, com magias de mortos-vivos e energia negativa.', habilidades: [{ name: 'Colheita Sombria', descricao: 'Você drena energia para recuperar pontos de vida ao ferir inimigos.' }], truques: [] },
    { name: 'Escola de Magia de Guerra (War Magic)', nivel: 2, descricao: 'Mago de combate, com defesas arcanas e poder de fogo.', habilidades: [{ name: 'Defesa Arcana', descricao: 'Você usa magia para aumentar sua resistência em combate.' }], truques: [] },
    { name: 'Escola de Gravitação (Graviturgy)', nivel: 2, descricao: 'Mago com poder sobre a gravidade.', habilidades: [{ name: 'Manipular Gravidade', descricao: 'Você altera o peso e o movimento de criaturas e objetos.' }], truques: [] },
    { name: 'Escola Temporal (Chronurgy)', nivel: 2, descricao: 'Mago com controle sobre o tempo.', habilidades: [{ name: 'Dobra Temporal', descricao: 'Você manipula o tempo para alterar resultados e efeitos.' }], truques: [] },
    { name: 'Trilha do Artilheiro (Bladesinger)', nivel: 2, descricao: 'Mago élfico que mistura magia e combate corpo a corpo.', habilidades: [{ name: 'Canção da Lâmina', descricao: 'Você anima sua lâmina com magia para lutar melhor enquanto conjura.' }], truques: [] }
  ],
  monge: [
    { name: 'Caminho da Mão Aberta', nivel: 3, descricao: 'Monge focado em técnicas de Ki desimpedidas.', habilidades: [{ name: 'Técnica da Mão Aberta', descricao: 'Seus ataques desarmados aplicam efeitos adicionais de Ki.' }], truques: [] },
    { name: 'Caminho das Sombras', nivel: 3, descricao: 'Monge que canaliza o Ki para criar escuridão e se esconder.', habilidades: [{ name: 'Artes das Sombras', descricao: 'Você usa Ki para teleportar entre sombras e criar furtividade.' }], truques: [] },
    { name: 'Caminho dos Quatro Elementos', nivel: 3, descricao: 'Monge elemental que manipula fogo, água, ar e terra.', habilidades: [{ name: 'Magias Elementais', descricao: 'Você aprende técnicas elementais que se comportam como magias.' }], truques: [] },
    { name: 'Caminho do Kensei', nivel: 3, descricao: 'Monge que arma-se com armas e arcos como extensões do Ki.', habilidades: [{ name: 'Maestria Kensei', descricao: 'Você trata armas selecionadas como extensões perfeitas do seu Ki.' }], truques: [] },
    { name: 'Caminho do Mestre do Vinho (Drunken)', nivel: 3, descricao: 'Monge com estilo único, combinando bebida e Ki.', habilidades: [{ name: 'Técnica do Vinho', descricao: 'Você usa movimentos erráticos para evitar ataques e confundir inimigos.' }], truques: [] },
    { name: 'Caminho do Long Death', nivel: 3, descricao: 'Monge que canaliza o Ki para manipular a linha entre vida e morte.', habilidades: [{ name: 'Toque da Longa Morte', descricao: 'Você causa medo e dano necromântico aos inimigos que toca.' }], truques: [] },
    { name: 'Caminho do Sun Soul', nivel: 3, descricao: 'Monge com Ki radiante, que queima inimigos.', habilidades: [{ name: 'Raio Solar', descricao: 'Você dispara energia solar em ataques à distância e corpo a corpo.' }], truques: [] },
    { name: 'Caminho do Mercy (Mercy)', nivel: 3, descricao: 'Monge com Ki curativo, capaz de curar e ferir.', habilidades: [{ name: 'Mãos da Misericórdia', descricao: 'Você cura aliados ou causa dano sagrado com seus toques.' }], truques: [] },
    { name: 'Caminho do Astral Self', nivel: 3, descricao: 'Monge que projeta uma versão astral de si mesmo.', habilidades: [{ name: 'Alma Astral', descricao: 'Você manifesta partes de seu corpo astral para lutar e proteger.' }], truques: [] }
  ],
  paladino: [
    { name: 'Juramento de Devoção', nivel: 3, descricao: 'Paladino da justiça e da ordem tradicionais.', habilidades: [{ name: 'Aura de Devoção', descricao: 'Sua presença protege aliados próximos contra a corrupção.' }], truques: [] },
    { name: 'Juramento dos Anciões', nivel: 3, descricao: 'Paladino que segue os caminhos dos deuses antigos.', habilidades: [{ name: 'Aura dos Anciões', descricao: 'Você irradia proteção e sabedoria para aliados próximos.' }], truques: [] },
    { name: 'Juramento de Vingança', nivel: 3, descricao: 'Paladino implacável contra os que cometem grandes males.', habilidades: [{ name: 'Juramento de Vingança', descricao: 'Você marca um inimigo para surpreendê-lo e causar mais dano.' }], truques: [] },
    { name: 'Juramento da Coroa (Crown)', nivel: 3, descricao: 'Paladino líder, com bônus de intimidação e controle.', habilidades: [{ name: 'Presença Real', descricao: 'Você inspira aliados e domina inimigos com sua autoridade.' }], truques: [] },
    { name: 'Juramento da Glória (Glory)', nivel: 3, descricao: 'Paladino heroico, com habilidades de combate épico.', habilidades: [{ name: 'Aura Heroica', descricao: 'Você inspira aliados e cega inimigos com sua presença luminosa.' }], truques: [] },
    { name: 'Juramento da Proteção (Redemption)', nivel: 3, descricao: 'Paladino pacífico, focado em redenção e não-violência.', habilidades: [{ name: 'Aura da Redenção', descricao: 'Você reduz dano e dissuade agressão com sua presença pacificadora.' }], truques: [] },
    { name: 'Juramento do Vigário (Watchers)', nivel: 3, descricao: 'Paladino protetor contra ameaças extraplanares.', habilidades: [{ name: 'Sentinela Divina', descricao: 'Você identifica e bloqueia criaturas extraplanares.' }], truques: [] },
    { name: 'Juramento do Conquistador (Conquest)', nivel: 3, descricao: 'Paladino sombrio, com medo e controle de mente.', habilidades: [{ name: 'Presença de Conquista', descricao: 'Você impõe medo e controle sobre inimigos próximos.' }], truques: [] },
    { name: 'Juramento do Pôr do Sol (Treachery)', nivel: 3, descricao: 'Paladino traiçoeiro, com magias de controle e engano.', habilidades: [{ name: 'Capa de Treachery', descricao: 'Você se torna difícil de atingir e pode esconder sua presença.' }], truques: [] }
  ],
  ranger: [
    { name: 'Caçador', nivel: 3, descricao: 'Ranger focado em técnicas de caça contra presas específicas.', habilidades: [{ name: 'Táticas do Caçador', descricao: 'Você aprende técnicas especiais contra alvos específicos.' }], truques: [] },
    { name: 'Mestre de Feras', nivel: 3, descricao: 'Ranger acompanhado por um companheiro animal leal.', habilidades: [{ name: 'Companheiro Animal', descricao: 'Você treina um companheiro animal que luta ao seu lado.' }], truques: [] },
    { name: 'Errante Cinzento (Gloom Stalker)', nivel: 3, descricao: 'Ranger sombrio, especialista em emboscadas e invisibilidade na escuridão.', habilidades: [{ name: 'Emboscada Sombria', descricao: 'Você é mais eficaz em ataques surpreendentes e combate noturno.' }], truques: [] },
    { name: 'Caminho do Destruidor (Horizon Walker)', nivel: 3, descricao: 'Ranger planar, com poderes sobre outras dimensões.', habilidades: [{ name: 'Guerreiro Planar', descricao: 'Você teleporta-se e ataca com energia planar.' }], truques: [] },
    { name: 'Caminho do Monstro (Monster Slayer)', nivel: 3, descricao: 'Ranger especializado em caçar monstros e criaturas mágicas.', habilidades: [{ name: 'Sentido do Caçador', descricao: 'Você detecta fraquezas em monstruosidades e criaturas mágicas.' }], truques: [] },
    { name: 'Caminho do Guardião (Swarmkeeper)', nivel: 3, descricao: 'Ranger com um enxame de espíritos animais aliados.', habilidades: [{ name: 'Enxame Aliado', descricao: 'Você controla um enxame para empurrar, puxar ou proteger.' }], truques: [] },
    { name: 'Caminho da Lâmina (Drakewarden)', nivel: 3, descricao: 'Ranger com um companheiro dracônico.', habilidades: [{ name: 'Guardião Dracônico', descricao: 'Você convoca um drake que luta e protege você.' }], truques: [] },
    { name: 'Caminho da Fera Primordial (Primeval Guardian)', nivel: 3, descricao: 'Ranger com poderes primordiais de proteção.', habilidades: [{ name: 'Guardião Primordial', descricao: 'Você assume uma forma protetora e fortalece aliados.' }], truques: [] },
    { name: 'Caminho do Caçador Furtivo (Fey Wanderer)', nivel: 3, descricao: 'Ranger com poderes feéricos, de charme e medo.', habilidades: [{ name: 'Presença Feérica', descricao: 'Você usa charme feérico para distrair e controlar inimigos.' }], truques: [] }
  ],
  ladino: [
    { name: 'Ladrão', nivel: 3, descricao: 'Ladino clássico, mestre da escalada, fintagem e mãos rápidas.', habilidades: [{ name: 'Mãos Rápidas', descricao: 'Você age rapidamente e manipula objetos com maior habilidade.' }], truques: [] },
    { name: 'Assassino', nivel: 3, descricao: 'Ladino letal, especialista em emboscadas e一击致命.', habilidades: [{ name: 'Assassinar', descricao: 'Você causa ataque surpresa e dano crítico contra inimigos desprevenidos.' }], truques: [] },
    { name: 'Trapaceiro Arcano', nivel: 3, descricao: 'Ladino que mistura truques arcanos com a sua trapaçaria.', habilidades: [{ name: 'Mãos Mágicas Aprimoradas', descricao: 'Você utiliza Mãos Mágicas de forma furtiva e potente.' }], truques: [] },
    { name: 'Lâmina Psíquica (Soulknife)', nivel: 3, descricao: 'Ladino com poder psônico, cria lâminas mentais e usa habilidades telepáticas.', habilidades: [
      { name: 'Lâminas Psíquicas (Psychic Blades)', descricao: 'Você cria lâminas mentais que causam dano de força e podem ser lançadas à distância.' },
      { name: 'Dados Psíquicos (Psionic Dice)', descricao: 'Você usa dados psíquicos para aprimorar ataques, defesas e testes de habilidade.' },
      { name: 'Fala Telepática (Telepathic Speech)', descricao: 'Você pode se comunicar mentalmente com aliados próximos.' }
    ], truques: [] },
    { name: 'Espião (Swashbuckler)', nivel: 3, descricao: 'Ladino carismático, especialista em combate individual e estilo.', habilidades: [{ name: 'Movimento Elegante', descricao: 'Você se move com graça e evita ataques de oportunidade.' }], truques: [] },
    { name: 'Investigador (Investigator)', nivel: 3, descricao: 'Ladino detetive, analisa fraquezas dos inimigos antes de atacar.', habilidades: [{ name: 'Instinto do Inquisidor', descricao: 'Você encontra pistas e explora fraquezas com precisão.' }], truques: [] },
    { name: 'Mestre da Trapaça (Mastermind)', nivel: 3, descricao: 'Ladino manipulador, com truques de intimidação e controle social.', habilidades: [{ name: 'Manipulação Maestral', descricao: 'Você engana e direciona aliados e inimigos com perícia.' }], truques: [] },
    { name: 'Escarlate (Scout)', nivel: 3, descricao: 'Ladino batedor, especialista em sobrevivência e combate na natureza.', habilidades: [{ name: 'Atirador Ágil', descricao: 'Você se move pelo terreno e ataca com vantagem contra inimigos desprevenidos.' }], truques: [] }
  ],
  feiticeiro: [
    { name: 'Dracônico (Ancestral Draconata)', nivel: 1, descricao: 'Linhagem de dragões, com HP extra e magia elemental.', habilidades: [{ name: 'Resistência Dracônica', descricao: 'Seu sangue dracônico concede resistência elemental e vigor extra.' }], truques: [] },
    { name: 'Magia Selvagem', nivel: 1, descricao: 'Magia instável e imprevisível, com efeitos caóticos.', habilidades: [{ name: 'Caos Selvagem', descricao: 'Seus feitiços podem gerar efeitos mágicos imprevisíveis.' }], truques: [] },
    { name: 'Linhagem Divina (Divine Soul)', nivel: 1, descricao: 'Linhagem celestial, com magias de cura e dano radiante.', habilidades: [{ name: 'Magia Divina', descricao: 'Você aprende magias adicionais ligadas à sua herança celestial.' }], truques: [] },
    { name: 'Linhagem do Aberrante (Aberrant Mind)', nivel: 1, descricao: 'Magia psiónica e telepática, com magias de controle mental.', habilidades: [{ name: 'Mente Aberrante', descricao: 'Você canaliza energia psíquica para manipular mentes e atacar inimigos.' }], truques: [] },
    { name: 'Alma Mecânica (Clockwork Soul)', nivel: 1, descricao: 'Magia ordenada, com magias de proteção e ordem.', habilidades: [{ name: 'Ordem Mecânica', descricao: 'Sua magia dá estrutura e equilíbrio, prevenindo caos.' }], truques: [] },
    { name: 'Magia da Tempestade (Storm Sorcery)', nivel: 1, descricao: 'Linhagem elemental, com magias de raio e vento.', habilidades: [{ name: 'Magia da Tempestade', descricao: 'Você canaliza vento e trovão para reforçar suas magias.' }], truques: [] },
    { name: 'Linhagem das Sombras (Shadow Magic)', nivel: 1, descricao: 'Linhagem sombria, com magias de escuridão e medo.', habilidades: [{ name: 'Olhos da Escuridão', descricao: 'Você enxerga no escuro e conjura magias de sombras com maior facilidade.' }], truques: [] }
  ],
  bruxo: [
    { name: 'O Arquifada', nivel: 1, descricao: 'Pacto com um Arquifada (ser celestial), ganhando uma espada sentiente.', habilidades: [{ name: 'Presença Feérica', descricao: 'Sua entidade concede presença encantadora que amedronta ou fascina.' }], truques: [] },
    { name: 'O Corruptor', nivel: 1, descricao: 'Pacto com um Corruptor (fada sombria), com livro de sombras e magias de ilusão.', habilidades: [{ name: 'Sombra Corrompida', descricao: 'Você utiliza ilusões sombrias para enganar e dominar inimigos.' }], truques: [] },
    { name: 'O Grande Antigo', nivel: 1, descricao: 'Pacto com uma entidade cósmica alienígena, com magias de controle mental.', habilidades: [{ name: 'Mente Desperta', descricao: 'Você pode se comunicar telepaticamente e confundir a mente dos outros.' }], truques: [] },
    { name: 'O Hexblade', nivel: 1, descricao: 'Pacto com uma entidade do Plano das Sombras, com poder sobre maldições.', habilidades: [{ name: 'Maldição da Hexblade', descricao: 'Você amaldiçoa inimigos e fortalece seus ataques contra eles.' }], truques: [] },
    { name: 'O Celestial', nivel: 1, descricao: 'Pacto com um ser celestial, com magias de cura e dano radiante.', habilidades: [{ name: 'Luz Curativa', descricao: 'Você cura aliados com sua energia celestial e causa dano radiante.' }], truques: [] },
    { name: 'O Não-Morto (Undying)', nivel: 1, descricao: 'Pacto com um ser não-morto, com magias de necromancia e resistência.', habilidades: [{ name: 'Presença Imortal', descricao: 'Você resiste à morte e recupera recursos com facilidade.' }], truques: [] },
    { name: 'O Fathomless', nivel: 1, descricao: 'Pacto com uma entidade abissal marinha, com magias de água e tentáculos.', habilidades: [{ name: 'Profundezas', descricao: 'Você convoca tentáculos e manipula a água para atacar e controlar inimigos.' }], truques: [] },
    { name: 'O Genie', nivel: 1, descricao: 'Pacto com um gênio elemental, com magias elementais e bônus de maravilha.', habilidades: [{ name: 'Vasilha Genial', descricao: 'Você ganha poderes elementares e acesso a um recipiente mágico especial.' }], truques: [] }
  ]
};
