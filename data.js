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
      { name: 'Mensagem (Message)', descricao: 'Truque — Duração 1 rodada. Você aponta para uma criatura e sussurra uma mensagem. O alvo (e só ele) ouve a mensagem e pode responder.' },
      { name: 'Prestidigitação (Prestidigitation)', descricao: 'Truque — Duração até 1 hora. Pequenos efeitos mágicos: acender/apagar uma vela, limpar/manchar objeto, sabor/cheiro/luz/temperatura, símbolo que aparece, etc.' },
      { name: 'Ilusão Menor (Minor Illusion)', descricao: 'Truque — Duração 1 minuto. Cria um som ou imagem de um objeto inanimado que não exceda 1,5 m³. Teste de Investigação para desmascarar.' },
      { name: 'Amizade (Friends)', descricao: 'Truque — Duração 1 minuto (Concentração). Você tem vantagem em testes de Carisma contra uma criatura, mas ela percebe que foi enfeitiçada se hostil.' },
      { name: 'Luz (Light)', descricao: 'Truque — Duração 1 hora. Um objeto emite luz brilhante em 6 m e penumbra por mais 6 m. Sem parâmetros de ataque.' },
      { name: 'Mãos Mágicas (Mage Hand)', descricao: 'Truque — Duração 1 minuto. Cria uma mão espectral que pode manipular objetos de até 5 kg a 9 m de distância.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Sono (Sleep)', descricao: '1º Círculo — Duração 1 minuto. 5d8 de HP de criaturas (começando pelas mais próximas) caem inconscientes. Sem parâmetros de ataque.' },
        { name: 'Cativar (Charm Person)', descricao: '1º Círculo — Duração 1 hora. Teste de Sabedoria ou a criatura humana te vê como amigo. Sem ataque.' },
        { name: 'Acalmar Emoções (Calm Emotions)', descricao: '1º Círculo — Duração 1 minuto. Suprime efeitos de medo e chamego em 6 m raio. Sem ataque.' }
      ],
      '2º Círculo': [
        { name: 'Sugestão (Suggestion)', descricao: '2º Círculo — Duração 8 horas. Sugere uma atividade razoável; Teste de Sabedoria ou a criatura segue. Sem ataque.' },
        { name: 'Silêncio (Silence)', descricao: '2º Círculo — Duração 10 minutos. Esfera de 6 m onde nenhum som é emitido. Sem ataque.' },
        { name: 'Invisibilidade (Invisibility)', descricao: '2º Círculo — Duração 1 hora. Uma criatura vira invisível. O ataque termina a magia. Sem ataque.' }
      ],
      '3º Círculo': [
        { name: 'Leque Cromático (Color Spray)', descricao: '3º Círculo — Instantâneo. Cone 4,5 m × 4,5 m. 6d10 de dano de energia (cega por 1 rodada) em Teste de Constituição.' },
        { name: 'Talas de Vento (Wind Wall)', descricao: '3º Círculo — Duração 1 minuto. Muro de vento 15 m x 3 m x 4,5 cm. Bloqueia projéteis e criaturas voadoras.' },
        { name: 'Círculo Mágico (Magic Circle)', descricao: '3º Círculo — Duração 1 hora. Círculo protetor de 3 m contra uma categoria de criatura. Sem ataque.' }
      ]
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
      { name: 'Orientação (Guidance)', descricao: 'Truque — Duração 1 minuto (Concentração). Alvo recebe +1d4 em teste de habilidade. Sem ataque.' },
      { name: 'Luz (Light)', descricao: 'Truque — Duração 1 hora. Objeto emite luz em 6 m. Sem ataque.' },
      { name: 'Chama Sagrada (Sacred Flame)', descricao: 'Truque — Dano: 1d8 de dano radiante. Teste de Destreza, ignora cobertura. Alcance 18 m. 1 alvo.' },
      { name: 'Thaumaturgia (Thaumaturgy)', descricao: 'Truque — 1 minuto. Pequenos milagres: sua voz ecoa, chamas tremem, comida se deteriora, você abre/fecha uma porta à distância, etc. Sem ataque.' },
      { name: 'Voz Divina (Word of Radiance)', descricao: 'Truque — Dano: 1d6 de dano radiante. Todos em 1,5 m de você (CD teste Constituição). 1 ação.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Curar Feridas (Cure Wounds)', descricao: '1º Círculo — Duração Instantâneo. Toque: 1d8 + modificador de magia de cura. 1 alvo. Sem ataque.' },
        { name: 'Bênção (Bless)', descricao: '1º Círculo — Duração 1 minuto (Concentração). 3 criaturas ganham +1d4 em ataques e testes de resistência. Sem ataque.' },
        { name: 'Comando (Command)', descricao: '1º Círculo — Duração 1 rodada. Alvo faz Teste de Sabedoria ou segue um comando de 1 palavra (Soltar, Fugir, Pousar, etc.). 1 alvo. Sem ataque.' },
        { name: 'Escudo da Fé (Shield of Faith)', descricao: '1º Círculo — Duração 10 minutos (Concentração). +2 CA para 1 criatura. Sem ataque.' },
        { name: 'Palavra Curativa (Healing Word)', descricao: '1º Círculo — Duração Instantâneo. À distância 18 m: 1d4 + mod. magia de cura. 1 alvo. Sem ataque.' }
      ],
      '2º Círculo': [
        { name: 'Augúrio (Augury)', descricao: '2º Círculo — Duração Instantâneo. Faz pergunta sobre evento em 30 min. Resposta: bom/fracasso.' },
        { name: 'Auxílio (Aid)', descricao: '2º Círculo — Duração 8 horas. 3 criaturas ganham 5 PV máximos e atuais. Sem ataque.' },
        { name: 'Imobilizar Pessoa (Hold Person)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Teste de Sabedoria; sem sucesso, alvo fica paralisado. Re-teste por turno. 1 alvo. Sem ataque.' },
        { name: 'Restauração Menor (Lesser Restoration)', descricao: '2º Círculo — Remove 1 doença/condição (cego, surdo, paralisado, envenenado). Sem ataque.' }
      ]
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
      { name: 'Orientação (Guidance)', descricao: 'Truque — Duração 1 minuto (Concentração). Alvo +1d4 em teste. Sem ataque.' },
      { name: 'Druidismo (Druidcraft)', descricao: 'Truque — Duração Instantânea. Predizer clima, fazer uma flor brotar, acender/apagar chama, etc. Sem ataque.' },
      { name: 'Produzir Chamas (Produce Flame)', descricao: 'Truque — Duração 10 minutos. Ilumina 3 m ou dispara chama. Dano: 1d8 ígneo, Teste de Constituição, alcance 9 m. 1 alvo.' },
      { name: 'Chicote de Espinhos (Thorn Whip)', descricao: 'Truque — Duração Instantâneo. Dano: 1d6 perfurante, Teste de Força, alcance 9 m, 9 m de puxão. 1 alvo.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Curar Feridas (Cure Wounds)', descricao: '1º Círculo — Toque: 1d8 + mod. magia de cura. Sem ataque.' },
        { name: 'Emaranhar (Entangle)', descricao: '1º Círculo — Duração 1 minuto (Concentração). Cubo 6 m; Teste de Força ou fica enraizado. Sem ataque.' },
        { name: 'Bagoá (Goodberry)', descricao: '1º Círculo — Duração Instantâneo. Cria 10 bagas que curam 1 PV cada.' },
        { name: 'Palavra Curativa (Healing Word)', descricao: '1º Círculo — À distância 18 m: 1d4 + mod. magia de cura. 1 alvo. Sem ataque.' }
      ],
      '2º Círculo': [
        { name: 'Pele de Árvore (Barkskin)', descricao: '2º Círculo — Duração 1 hora (Concentração). CA mínima 16. Sem ataque.' },
        { name: 'Rajada de Vento (Gust of Wind)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Linha 18 m: Teste de Força ou empurrado 4,5 m. Sem ataque.' },
        { name: 'Passo sem Rastro (Pass without Trace)', descricao: '2º Círculo — Duração 1 hora (Concentração). +10 testes de Furtividade para 9 m.' },
        { name: 'Chamejante (Flaming Sphere)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Esfera 1,5 m; Dano: 2d6 ígneo, Teste de Destreza, alcance 18 m. 1 alvo.' }
      ]
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
      { name: 'Mãos Mágicas (Mage Hand)', descricao: 'Truque — Duração 1 minuto. Mão espectral manipula até 5 kg a 9 m. Sem ataque.' },
      { name: 'Prestidigitação (Prestidigitation)', descricao: 'Truque — Duração até 1 hora. Pequenos truques. Sem ataque.' },
      { name: 'Ilusão Menor (Minor Illusion)', descricao: 'Truque — Duração 1 minuto. Som ou imagem 1,5 m³. Sem ataque.' },
      { name: 'Toque Chocante (Shocking Grasp)', descricao: 'Truque — Duração Instantâneo. Dano: 1d8 elétrico. Vantagem contra alvo com armadura metálica. Reação. 1 alvo. Toque.' },
      { name: 'Raio de Gelo (Ray of Frost)', descricao: 'Truque — Duração Instantâneo. Dano: 1d8 frio. Reduz velocidade em 3 m. Teste de Constituição, alcance 18 m. 1 alvo.' },
      { name: 'Luz (Light)', descricao: 'Truque — Duração 1 hora. Objeto emite luz em 6 m. Sem ataque.' },
      { name: 'Mensagem (Message)', descricao: 'Truque — Duração 1 rodada. Sussurra mensagem a 36 m. Sem ataque.' },
      { name: 'Raio de Fogo (Fire Bolt)', descricao: 'Truque — Duração Instantâneo. Dano: 1d10 ígneo. Teste de Destreza, alcance 36 m. 1 alvo.' },
      { name: 'Rajada de Veneno (Poison Spray)', descricao: 'Truque — Duração Instantâneo. Dano: 1d12 venenoso. Teste de Constituição, alcance 3 m. 1 alvo.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Mísseis Mágicos (Magic Missile)', descricao: '1º Círculo — Dano: 1d4+1 de dano de força por dardo (3 dardos). Acerto automático. Alcance 36 m. 1-3 alvos.' },
        { name: 'Escudo Arcano (Shield)', descricao: '1º Círculo — Duração 1 rodada. Reação. +5 CA até o próximo turno. Sem ataque.' },
        { name: 'Armadura Arcana (Mage Armor)', descricao: '1º Círculo — Duração 8 horas. CA base 13 + modificador de Destreza. Sem ataque.' },
        { name: 'Identificar (Identify)', descricao: '1º Círculo — Duração Instantâneo. Aprende propriedades de item mágico. Sem ataque.' },
        { name: 'Proteção contra o Mal e o Bem (Protection from Evil and Good)', descricao: '1º Círculo — Duração 10 minutos (Concentração). +1 CA e testes de resistência contra 1 tipo de criatura. Sem ataque.' },
        { name: 'Onda Trovejante (Thunderwave)', descricao: '1º Círculo — Dano: 2d8 trovejante, Teste de Constituição, empurra 3 m. Cubo 4,5 m. Múltiplos alvos.' }
      ],
      '2º Círculo': [
        { name: 'Invisibilidade (Invisibility)', descricao: '2º Círculo — Duração 1 hora (Concentração). 1 criatura vira invisível. Sem ataque.' },
        { name: 'Passo Nebuloso (Misty Step)', descricao: '2º Círculo — Duração Instantâneo. Teleporte até 9 m. Sem ataque.' },
        { name: 'Sugestão (Suggestion)', descricao: '2º Círculo — Duração 8 horas. Teste de Sabedoria ou segue sugestão. 1 alvo. Sem ataque.' },
        { name: 'Nuvem de Névoa (Fog Cloud)', descricao: '2º Círculo — Duração 1 hora. Esfera 6 m de neblina pesada. Sem ataque.' },
        { name: 'Manto do Cruzado (Mirror Image)', descricao: '2º Círculo — Duração 1 minuto. 3 duplicatas que confundem ataques. Sem ataque.' }
      ],
      '3º Círculo': [
        { name: 'Bola de Fogo (Fireball)', descricao: '3º Círculo — Dano: 8d6 ígneo, Teste de Destreza (metade em falha). Esfera 6 m raio. Múltiplos alvos.' },
        { name: 'Contramágica (Counterspell)', descricao: '3º Círculo — Duração Instantâneo. Reação. Anula magia alvo.' },
        { name: 'Tempestade de Gelo (Ice Storm)', descricao: '3º Círculo — Dano: 4d6 frio + 2d6 cortante, Teste de Destreza. Cilindro 6 m x 3 m.' },
        { name: 'Dissipar Magia (Dispel Magic)', descricao: '3º Círculo — Duração Instantâneo. Encerra magia de 3º círculo ou menor.' },
        { name: 'Voar (Fly)', descricao: '3º Círculo — Duração 10 minutos (Concentração). 1 alvo ganha velocidade de voo 18 m.' }
      ]
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
      { name: 'Sentido Divino (Divine Sense)', descricao: 'Duração 1 minuto (Concentração). 1+CA mod. vezes por descanso longo. Detecta celestiais, dríades, feéricos e abissais em 18 m.' },
      { name: 'Mãos Curativas (Lay on Hands)', descricao: 'Pool de cura: 5 × nível por descanso longo. Como ação, cura PV até o valor do pool ou cura doenças/venenos.' },
      { name: 'Conjuração (Spellcasting)', descricao: 'Meio-conjurador: prepara magias de paladino. Truques sempre, magias 1º a 5º círculo. Atributo: Carisma.' }
    ],
    truques: [
      { name: 'Toque Sagrado (Sacred Flame)', descricao: 'Dano: 1d8 radiante. Teste de Destreza, alcance 18 m. 1 alvo. (Em portugês é Chama Sagrada; mesmo feitiço.)' },
      { name: 'Orientação Divina (Divine Guidance)', descricao: 'Truque (Xanathar). Adiciona +1d4 a um teste de ataque ou salvaguarda.' },
      { name: 'Luz (Light)', descricao: 'Duração 1 hora. Luz em 6 m. Sem ataque.' },
      { name: 'Thaumaturgia (Thaumaturgy)', descricao: 'Pequenos milagres: voz ecoante, chamas tremem, etc. Sem ataque.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Bênção (Bless)', descricao: '1º Círculo — Duração 1 minuto (Concentração). 3 criaturas ganham +1d4 em ataques e salv. Sem ataque.' },
        { name: 'Curar Feridas (Cure Wounds)', descricao: '1º Círculo — 1d8 + mod. magia de cura. Toque. Sem ataque.' },
        { name: 'Comando (Command)', descricao: '1º Círculo — 1 rodada. Teste de Sabedoria ou segue 1 comando. Sem ataque.' },
        { name: 'Palavra Curativa (Healing Word)', descricao: '1º Círculo — 1d4 + mod. cura. À distância 18 m. Sem ataque.' },
        { name: 'Escudo da Fé (Shield of Faith)', descricao: '1º Círculo — Duração 10 min (Concentração). +2 CA. Sem ataque.' },
        { name: 'Punição Marcante (Searing Smite)', descricao: '1º Círculo — Duração 1 min (Concentração). +1d6 ígneo, +1d6/turno. Adiciona ao ataque corpo a corpo. 1 alvo.' }
      ],
      '2º Círculo': [
        { name: 'Aura de Proteção (não é magia)', descricao: 'Você e aliados em 3 m ganham bônus de salvaguarda = mod. Carisma.' },
        { name: 'Auxílio (Aid)', descricao: '2º Círculo — 3 criaturas ganham 5 PV máximos. Sem ataque.' },
        { name: 'Imobilizar Pessoa (Hold Person)', descricao: '2º Círculo — 1 min (Concentração). Teste de Sabedoria ou fica paralisado. Sem ataque.' },
        { name: 'Restauração Menor (Lesser Restoration)', descricao: '2º Círculo — Remove 1 condição/doença. Sem ataque.' },
        { name: 'Localizar Objeto (Locate Object)', descricao: '2º Círculo — 10 min (Concentração). Sente direção a um objeto familiar. Sem ataque.' },
        { name: 'Marca da Punição (Branding Smite)', descricao: '2º Círculo — 1 min (Concentração). +2d6 radiante, alvo brilha. Ataque corpo a corpo. 1 alvo.' }
      ]
    }
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
      { name: 'Campesinato Favorito (Favored Enemy)', descricao: 'Vantagem em testes de Sobrevivência para rastrear, e aprende +1 idioma. Escolha tipo de inimigo (humanoides, monstros etc.).' },
      { name: 'Explorador Natural (Natural Explorer)', descricao: 'Vantagem em testes de iniciativa e Investigação/Percepção/Stealth/Sobrevivência ao viajar 1h em terreno familiar. Não se perde.' },
      { name: 'Conjuração (Spellcasting)', descricao: 'Meio-conjurador (começa no nível 2). Truques sempre, magias 1º a 5º círculo. Atributo: Sabedoria.' }
    ],
    truques: [
      { name: 'Orientação (Guidance)', descricao: 'Duração 1 min (Concentração). +1d4 em teste. Sem ataque.' },
      { name: 'Produzir Chamas (Produce Flame)', descricao: 'Duração 10 min. Ilumina 3 m ou dispara chama. Dano: 1d8 ígneo, Teste Constituição, alcance 9 m. 1 alvo.' },
      { name: 'Chicote de Espinhos (Thorn Whip)', descricao: 'Dano: 1d6 perfurante. Teste de Força, alcance 9 m, puxa 9 m. 1 alvo.' },
      { name: 'Resistência (Resistance)', descricao: 'Duração 1 min (Concentração). +1d4 em teste de salvaguarda. Sem ataque.' },
      { name: 'Druidcraft (Druidcraft)', descricao: 'Pequenos truques de natureza. Sem ataque.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Curar Feridas (Cure Wounds)', descricao: '1º Círculo — 1d8 + mod. cura. Toque. Sem ataque.' },
        { name: 'Marca do Caçador (Hunter\'s Mark)', descricao: '1º Círculo — 1h (Concentração). +1d6 dano em 1 alvo. Sem ataque.' },
        { name: 'Passo sem Rastro (Pass without Trace)', descricao: '2º Círculo (PHB). +10 Furtividade para 9 m. (Listado como 1º círculo no jogo.)' },
        { name: 'Bom Fruto (Goodberry)', descricao: '1º Círculo — Cria 10 bagas que curam 1 PV. Sem ataque.' },
        { name: 'Nó de Chifre (Entangle)', descricao: '1º Círculo — 1 min (Concentração). Cubo 6 m; Teste de Força ou enraizado. Sem ataque.' }
      ],
      '2º Círculo': [
        { name: 'Chamejante (Flaming Sphere)', descricao: '2º Círculo — 1 min (Concentração). Esfera 1,5 m; 2d6 ígneo, Teste Destreza, alcance 18 m. 1 alvo.' },
        { name: 'Imobilizar Pessoa (Hold Person)', descricao: '2º Círculo — 1 min (Concentração). Teste Sabedoria ou paralisado. Sem ataque.' },
        { name: 'Localizar Animais ou Plantas (Locate Animals or Plants)', descricao: '2º Círculo — Duração Instantânea. Sente direção. Sem ataque.' },
        { name: 'Arma Espiritual (Spiritual Weapon)', descricao: '2º Círculo — 1 min. Dano: 1d8 + mod. por ataque mágico. Sem ataque direto (cria arma flutuante).' },
        { name: 'Restauração Menor (Lesser Restoration)', descricao: '2º Círculo — Remove condição. Sem ataque.' }
      ]
    }
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
      { name: 'Ataque Sorrateiro (Sneak Attack)', descricao: 'Dano: escala com o nível — 1d6 (1º), 2d6 (3º), 3d6 (5º), 4d6 (7º), 5d6 (9º), 6d6 (11º), 7d6 (13º), 8d6 (15º), 9d6 (17º), 10d6 (19º). Adiciona dano extra (1x por turno) ao acertar com ataque com Furtividade ou à distância, se tiver vantagem ou um aliado adjacente ao alvo. Requer: arma Furtiva ou à distância. Exemplo: nível 3 = 2d6 de dano extra.' },
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
      { name: 'Magia Inata (Innate Spellcasting)', descricao: 'Conjurador completo. Truques sempre, magias 1º a 9º círculo. Atributo: Carisma. Conhece poucas magias mas lança mais.' },
      { name: 'Metamagia (Metamagic)', descricao: 'Pode modificar magias (trans, dupla, ampliação etc.). Custa Pontos de Feitiçaria.' },
      { name: 'Fonte de Feitiçaria (Sorcery Points)', descricao: 'Pontos de Feitiçaria por descanso longo: iguais ao nível. Usados para Metamagia ou para criar espaços de magia.' }
    ],
    truques: [
      { name: 'Prestidigitação (Prestidigitation)', descricao: 'Duração até 1 hora. Pequenos efeitos. Sem ataque.' },
      { name: 'Mãos Mágicas (Mage Hand)', descricao: 'Duração 1 minuto. Mão espectral, 5 kg, 9 m. Sem ataque.' },
      { name: 'Luz (Light)', descricao: 'Duração 1 hora. Luz em 6 m. Sem ataque.' },
      { name: 'Ilusão Menor (Minor Illusion)', descricao: 'Duração 1 minuto. Som ou imagem 1,5 m³. Sem ataque.' },
      { name: 'Toque Chocante (Shocking Grasp)', descricao: 'Dano: 1d8 elétrico. Vantagem contra armadura metálica. Reação. 1 alvo.' },
      { name: 'Raio de Gelo (Ray of Frost)', descricao: 'Dano: 1d8 frio. Reduz velocidade 3 m. Alcance 18 m. 1 alvo.' },
      { name: 'Raio de Fogo (Fire Bolt)', descricao: 'Dano: 1d10 ígneo. Teste de Destreza, alcance 36 m. 1 alvo.' },
      { name: 'Rajada de Veneno (Poison Spray)', descricao: 'Dano: 1d12 venenoso. Teste de Constituição, alcance 3 m. 1 alvo.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Mísseis Mágicos (Magic Missile)', descricao: '1º Círculo — 1d4+1 de dano de força por dardo (3 dardos). Acerto automático. Alcance 36 m. 1-3 alvos.' },
        { name: 'Armadura Arcana (Mage Armor)', descricao: '1º Círculo — Duração 8 horas. CA 13 + mod. Destreza. Sem ataque.' },
        { name: 'Escudo Arcano (Shield)', descricao: '1º Círculo — Duração 1 rodada. Reação. +5 CA. Sem ataque.' },
        { name: 'Chama (Burning Hands)', descricao: '1º Círculo — Dano: 3d6 ígneo, Teste Destreza (metade em falha). Cone 4,5 m. Múltiplos alvos.' },
        { name: 'Onda Trovejante (Thunderwave)', descricao: '1º Círculo — Dano: 2d8 trovejante, Teste Constituição, empurra 3 m. Cubo 4,5 m.' },
        { name: 'Maldição (Hex)', descricao: '1º Círculo — 1 hora (Concentração). +1d6 dano, desvantagem em teste específico. 1 alvo.' }
      ],
      '2º Círculo': [
        { name: 'Invisibilidade (Invisibility)', descricao: '2º Círculo — 1 hora (Concentração). 1 criatura invisível. Sem ataque.' },
        { name: 'Passo Nebuloso (Misty Step)', descricao: '2º Círculo — Instantâneo. Teleporte até 9 m. Sem ataque.' },
        { name: 'Sugestão (Suggestion)', descricao: '2º Círculo — 8 horas. Teste de Sabedoria ou segue sugestão. Sem ataque.' },
        { name: 'Manto do Cruzado (Mirror Image)', descricao: '2º Círculo — 1 minuto. 3 duplicatas. Sem ataque.' },
        { name: 'Nuvem de Névoa (Fog Cloud)', descricao: '2º Círculo — 1 hora. Esfera 6 m de neblina. Sem ataque.' },
        { name: 'Nublar (Blur)', descricao: '2º Círculo — 1 minuto (Concentração). Ataques contra você têm desvantagem. Sem ataque.' }
      ],
      '3º Círculo': [
        { name: 'Bola de Fogo (Fireball)', descricao: '3º Círculo — 8d6 ígneo, Teste de Destreza (metade em falha). Esfera 6 m raio. Múltiplos alvos.' },
        { name: 'Contramágica (Counterspell)', descricao: '3º Círculo — Reação. Anula magia alvo. Sem ataque.' },
        { name: 'Tempestade de Gelo (Ice Storm)', descricao: '3º Círculo — 4d6 frio + 2d6 cortante, Teste Destreza. Cilindro 6 m x 3 m.' },
        { name: 'Dissipar Magia (Dispel Magic)', descricao: '3º Círculo — Encerra magia de 3º ou menor. Sem ataque.' },
        { name: 'Voar (Fly)', descricao: '3º Círculo — 10 min (Concentração). Velocidade de voo 18 m. Sem ataque.' },
        { name: 'Relâmpago (Lightning Bolt)', descricao: '3º Círculo — 8d6 elétrico, Teste Destreza. Linha 30 m. Múltiplos alvos.' }
      ]
    }
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
      { name: 'Prestidigitação (Prestidigitation)', descricao: 'Truque — Duração até 1 hora. Pequenos efeitos. Sem ataque.' },
      { name: 'Mãos Mágicas (Mage Hand)', descricao: 'Truque — Duração 1 minuto. Mão espectral, 5 kg, 9 m. Sem ataque.' },
      { name: 'Ilusão Menor (Minor Illusion)', descricao: 'Truque — Duração 1 minuto. Som ou imagem 1,5 m³. Sem ataque.' },
      { name: 'Raio de Eldritch (Eldritch Blast)', descricao: 'Truque — Dano: 1d10 de força. Acerto automático. Alcance 18 m. 1 alvo. (Aumenta para 2 feixes no nível 5, 3 no 11, 4 no 17.)' }
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
    { name: 'Escola do Filão de Lâmina (Bladesinging)', nivel: 2, descricao: 'Mago élfico que mistura magia e combate corpo a corpo.', habilidades: [{ name: 'Canção da Lâmina', descricao: 'Você anima sua lâmina com magia para lutar melhor enquanto conjura.' }], truques: [] }
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
    {
      name: 'Lâmina Psíquica (Soulknife)', nivel: 3, descricao: 'Ladino com poder psônico, cria lâminas mentais e usa habilidades telepáticas.', habilidades: [
        { name: 'Lâminas Psíquicas (Psychic Blades)', descricao: 'Você cria lâminas mentais que causam dano de força e podem ser lançadas à distância.' },
        { name: 'Dados Psíquicos (Psionic Dice)', descricao: 'Você usa dados psíquicos para aprimorar ataques, defesas e testes de habilidade.' },
        { name: 'Fala Telepática (Telepathic Speech)', descricao: 'Você pode se comunicar mentalmente com aliados próximos.' }
      ], truques: []
    },
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
