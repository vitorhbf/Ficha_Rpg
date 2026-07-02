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
    bonusAtributos: { strength: 2, constitution: 1 },
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
      { name: 'Fúria (Rage)', level: 1, dano: 'Não causa dano direto (bônus de ataque)', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode entrar em fúria, ganhando bônus de dano e resistência a dano. Duração: 1 minuto. 2 vezes por descanso curto ou longo.' },
      { name: 'Defesa sem Armadura (Unarmored Defense)', level: 1, descricao: 'Sua Classe de Armadura é 10 + Modificador de Destreza + Modificador de Constituição.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
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
      { name: 'Conjuração (Spellcasting)', level: 1, descricao: 'Você pode aprender e lançar magias de bardo.', dano: 'Não causa dano direto', alcance: 'Varia pela magia', alvos: 'Varia pela magia' },
      { name: 'Inspiração de Bardo (Bardic Inspiration)', level: 1, dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo', descricao: 'Você pode inspirar aliados com um bônus de competência em testes. Duração: 10 rodadas. 1x por descanso curto ou longo (aumenta com o nível).' }
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
        { name: 'Sono (Sleep)', descricao: '1º Círculo — Duração 1 minuto. Alcance 27 m. Afeta criaturas em raio de 6 m somando 5d8 PV (começando pelas mais fracas). Sem teste de resistência. Múltiplos alvos.' },
        { name: 'Cativar Pessoa (Charm Person)', descricao: '1º Círculo — Duração 1 hora. Alcance 9 m. Teste de Sabedoria ou a criatura te trata como amigo. 1 alvo humanoide.' },
        { name: 'Acalmar Emoções (Calm Emotions)', descricao: '1º Círculo — Duração 1 minuto (Concentração). Alcance 18 m. Esfera 6 m raio: suprime medo/charme ou torna criaturas indiferentes. Múltiplos alvos.' }
      ],
      '2º Círculo': [
        { name: 'Sugestão (Suggestion)', descricao: '2º Círculo — Duração 8 horas (Concentração). Alcance 9 m. Teste de Sabedoria ou a criatura segue sugestão razoável. 1 alvo.' },
        { name: 'Silêncio (Silence)', descricao: '2º Círculo — Duração 10 minutos (Concentração). Alcance 36 m. Esfera 6 m raio: nenhum som emitido, magias com componente verbal bloqueadas. Múltiplos alvos.' },
        { name: 'Invisibilidade (Invisibility)', descricao: '2º Círculo — Duração 1 hora (Concentração). Alcance toque. 1 criatura fica invisível. Termina se atacar ou lançar magia. 1 alvo.' }
      ],
      '3º Círculo': [
        { name: 'Muro de Vento (Wind Wall)', descricao: '3º Círculo — Duração 1 minuto (Concentração). Alcance 36 m. Muro 15 m × 3 m × 0,3 m. Dano: 3d8 cortante, Teste de Força ou empurrado. Bloqueia projéteis e criaturas voadoras. Múltiplos alvos.' },
        { name: 'Círculo Mágico (Magic Circle)', descricao: '3º Círculo — Duração 1 hora. Alcance 3 m. Cilindro 3 m raio × 6 m altura. Protege contra 1 tipo de criatura (celestial, elemental, fada, infernal ou morto-vivo). Sem ataque.' },
        { name: 'Hipnotizar (Hypnotic Pattern)', descricao: '3º Círculo — Duração 1 minuto (Concentração). Alcance 36 m. Cubo 9 m: Teste de Sabedoria ou fica enfeitiçado e incapacitado. Múltiplos alvos.' }
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
      { name: 'Conjuração (Spellcasting)', level: 1, descricao: 'Você pode aprender e lançar magias divinas.', dano: 'Não causa dano direto', alcance: 'Varia pela magia', alvos: 'Varia pela magia' },
      { name: 'Domínio Divino (Divine Domain)', level: 1, descricao: 'Você escolhe um domínio que concede habilidades adicionais.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
      { name: 'Canalizar Divindade (Channel Divinity)', level: 1, dano: 'Não causa dano direto', alcance: 'Varia pelo domínio', alvos: 'Varia pelo domínio', descricao: 'Você pode usar energia divina para efeitos mágicos e curativos. 1x por descanso curto ou longo.' }
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
        { name: 'Augúrio (Augury)', descricao: '2º Círculo — Duração Instantâneo. Alcance pessoal. Ritual: faz pergunta sobre ação nos próximos 30 min. Resposta: Bem, Mal, Bem e Mal, ou Nada. Sem ataque. 1 alvo (você).' },
        { name: 'Auxílio (Aid)', descricao: '2º Círculo — Duração 8 horas. Alcance 9 m. 3 criaturas ganham +5 PV máximos e atuais. Sem ataque. 3 alvos.' },
        { name: 'Imobilizar Pessoa (Hold Person)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Alcance 18 m. Teste de Sabedoria ou fica paralisado. Novo teste a cada turno. 1 alvo humanoide.' },
        { name: 'Restauração Menor (Lesser Restoration)', descricao: '2º Círculo — Duração Instantâneo. Alcance toque. Remove 1 doença ou condição (cego, surdo, paralisado, envenenado). Sem ataque. 1 alvo.' }
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
      { name: 'Conjuração (Spellcasting)', level: 1, descricao: 'Você pode aprender e lançar magias druidas.', dano: 'Não causa dano direto', alcance: 'Varia pela magia', alvos: 'Varia pela magia' },
      { name: 'Forma Selvagem (Wild Shape)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode assumir a forma de uma fera que já viu. 2 vezes por descanso curto ou longo.' },
      { name: 'Druidismo (Druidic)', level: 1, descricao: 'Você aprende e usa os segredos da magia da natureza.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
    ],
    truques: [
      { name: 'Orientação (Guidance)', descricao: 'Truque — Duração 1 minuto (Concentração). Alvo +1d4 em teste. Sem ataque.' },
      { name: 'Druidismo (Druidcraft)', descricao: 'Truque — Duração Instantânea. Predizer clima, fazer uma flor brotar, acender/apagar chama, etc. Sem ataque.' },
      { name: 'Produzir Chamas (Produce Flame)', descricao: 'Truque — Duração 10 minutos. Ilumina 3 m ou dispara chama. Dano: 1d8 ígneo, Teste de Constituição, alcance 9 m. 1 alvo.' },
      { name: 'Chicote de Espinhos (Thorn Whip)', descricao: 'Truque — Duração Instantâneo. Dano: 1d6 perfurante, Teste de Força, alcance 9 m, 9 m de puxão. 1 alvo.' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Curar Feridas (Cure Wounds)', descricao: '1º Círculo — Duração Instantâneo. Alcance toque. Cura 1d8 + mod. magia de Sabedoria. Sem ataque. 1 alvo.' },
        { name: 'Emaranhar (Entangle)', descricao: '1º Círculo — Duração 1 minuto (Concentração). Alcance 27 m. Quadrado 6 m: Teste de Força ou fica enraizado. Múltiplos alvos.' },
        { name: 'Bagas Boas (Goodberry)', descricao: '1º Círculo — Duração Instantâneo. Alcance toque. Cria até 10 bagas mágicas; cada uma cura 1 PV e alimenta por 1 dia. Até 10 alvos.' },
        { name: 'Palavra Curativa (Healing Word)', descricao: '1º Círculo — Duração Instantâneo. Alcance 18 m. Ação bônus. Cura 1d4 + mod. magia de Sabedoria. Sem ataque. 1 alvo.' }
      ],
      '2º Círculo': [
        { name: 'Pele de Árvore (Barkskin)', descricao: '2º Círculo — Duração 1 hora (Concentração). Alcance toque. CA mínima 16 para o alvo. Sem ataque. 1 alvo.' },
        { name: 'Rajada de Vento (Gust of Wind)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Alcance pessoal. Linha 18 m × 3 m: Teste de Força ou empurrado 4,5 m e velocidade reduzida. Múltiplos alvos.' },
        { name: 'Passo sem Rastro (Pass without Trace)', descricao: '2º Círculo — Duração 1 hora (Concentração). Alcance pessoal. Aura 9 m raio: você e aliados ganham +10 em Furtividade e não deixam rastros. Múltiplos alvos.' },
        { name: 'Esfera Flamejante (Flaming Sphere)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Alcance 18 m. Esfera 1,5 m raio: Dano 2d6 ígneo, Teste de Destreza (metade em falha). Move 9 m por ação bônus. 1 alvo por turno.' }
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
      { name: 'Estilo de Luta (Fighting Style)', level: 1, descricao: 'Você adota um estilo de luta particular como sua especialidade.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
      { name: 'Segundo Vento (Second Wind)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Uma vez por descanso curto ou longo, você pode usar uma ação bônus para recuperar pontos de vida. Recupera 1d10 + nível de guerreiro PV.' }
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
      { name: 'Conjuração (Spellcasting)', level: 1, descricao: 'Você pode aprender e lançar magias arcanas.', dano: 'Não causa dano direto', alcance: 'Varia pela magia', alvos: 'Varia pela magia' },
      { name: 'Grimório (Spellbook)', level: 1, descricao: 'Você possui um livro com as magias que conhece.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
      { name: 'Recuperação Arcana (Arcane Recovery)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode recuperar espaços de magia durante um descanso curto. Recupera magias até metade dos seus pontos de feitiçaria.' }
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
      { name: 'Artes Marciais (Martial Arts)', level: 1, dano: '1d4 desarmado (início), escala com nível', alcance: 'Corpo a corpo', alvos: '1 alvo', descricao: 'Você usa Ki para realizar golpes especiais com armas e sem elas. Seu dado de ataque desarmado escala com o nível de monge.' },
      { name: 'Ki (Ki)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode canalizar energia interna para realizar técnicas místicas. Pontos de Ki: iguais ao nível de monge.' },
      { name: 'Movimento sem Armadura (Unarmored Movement)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você se move com agilidade sem depender de armadura ou armas. Velocidade aumenta em +10 pés a partir do nível 2.' }
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
      { name: 'Sentido Divino (Divine Sense)', level: 1, dano: 'Não causa dano direto', alcance: '18 m', alvos: 'Detecta criaturas em área', descricao: 'Duração 1 minuto (Concentração). Detecta celestiais, dríades, feéricos e abissais em 18 m. 1+mod. Carisma vezes por descanso longo.' },
      { name: 'Mãos Curativas (Lay on Hands)', level: 1, dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo', descricao: 'Pool de cura: 5 × nível por descanso longo. Como ação, cura PV até o valor do pool ou cura doenças/venenos.' },
      { name: 'Conjuração (Spellcasting)', level: 1, descricao: 'Meio-conjurador: prepara magias de paladino. Truques sempre, magias 1º a 5º círculo. Atributo: Carisma.', dano: 'Não causa dano direto', alcance: 'Varia pela magia', alvos: 'Varia pela magia' }
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
        { name: 'Auxílio (Aid)', descricao: '2º Círculo — Duração 8 horas. Alcance 9 m. 3 criaturas ganham +5 PV máximos e atuais. Sem ataque. 3 alvos.' },
        { name: 'Imobilizar Pessoa (Hold Person)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Alcance 18 m. Teste de Sabedoria ou fica paralisado. Novo teste a cada turno. 1 alvo humanoide.' },
        { name: 'Restauração Menor (Lesser Restoration)', descricao: '2º Círculo — Duração Instantâneo. Alcance toque. Remove 1 doença ou condição (cego, surdo, paralisado, envenenado). Sem ataque. 1 alvo.' },
        { name: 'Localizar Objeto (Locate Object)', descricao: '2º Círculo — Duração 10 minutos (Concentração). Alcance pessoal. Raio 300 m: sente direção de objeto familiar ou tipo de objeto. Sem ataque. 1 alvo (você).' },
        { name: 'Marca da Punição (Branding Smite)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Alcance pessoal. Próximo ataque corpo a corpo causa +2d6 radiante extra e o alvo emite luz (não pode ficar invisível). 1 alvo.' }
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
      { name: 'Campesinato Favorito (Favored Enemy)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Vantagem em testes de Sobrevivência para rastrear, e aprende +1 idioma. Escolha tipo de inimigo (humanoides, monstros etc.).' },
      { name: 'Explorador Natural (Natural Explorer)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Vantagem em testes de iniciativa e Investigação/Percepção/Stealth/Sobrevivência ao viajar 1h em terreno familiar. Não se perde.' },
      { name: 'Conjuração (Spellcasting)', level: 2, descricao: 'Meio-conjurador (começa no nível 2). Truques sempre, magias 1º a 5º círculo. Atributo: Sabedoria.', dano: 'Não causa dano direto', alcance: 'Varia pela magia', alvos: 'Varia pela magia' }
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
        { name: 'Curar Feridas (Cure Wounds)', descricao: '1º Círculo — Duração Instantâneo. Alcance toque. Cura 1d8 + mod. magia de Sabedoria. Sem ataque. 1 alvo.' },
        { name: 'Marca do Caçador (Hunter\'s Mark)', descricao: '1º Círculo — Duração 1 hora (Concentração). Alcance 27 m. Você marca 1 alvo: causa +1d6 dano extra ao acertá-lo. Pode mover a marca se o alvo morrer. 1 alvo.' },
        { name: 'Bagas Boas (Goodberry)', descricao: '1º Círculo — Duração Instantâneo. Alcance toque. Cria até 10 bagas mágicas; cada uma cura 1 PV e alimenta por 1 dia. Até 10 alvos.' },
        { name: 'Emaranhar (Entangle)', descricao: '1º Círculo — Duração 1 minuto (Concentração). Alcance 27 m. Quadrado 6 m: Teste de Força ou fica enraizado. Múltiplos alvos.' }
      ],
      '2º Círculo': [
        { name: 'Esfera Flamejante (Flaming Sphere)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Alcance 18 m. Esfera 1,5 m raio: Dano 2d6 ígneo, Teste de Destreza (metade em falha). Move 9 m por ação bônus. 1 alvo por turno.' },
        { name: 'Imobilizar Pessoa (Hold Person)', descricao: '2º Círculo — Duração 1 minuto (Concentração). Alcance 18 m. Teste de Sabedoria ou fica paralisado. Novo teste a cada turno. 1 alvo humanoide.' },
        { name: 'Localizar Animais ou Plantas (Locate Animals or Plants)', descricao: '2º Círculo — Duração 30 minutos (Concentração). Alcance pessoal. Raio 1,5 km: sente direção e distância de espécie específica de animal ou planta. Sem ataque. 1 alvo (você).' },
        { name: 'Arma Espiritual (Spiritual Weapon)', descricao: '2º Círculo — Duração 1 minuto. Alcance 18 m. Cria arma flutuante: ataque mágico corpo a corpo, Dano 1d8 + mod. Sabedoria. Move 6 m e ataca por ação bônus. 1 alvo por turno.' },
        { name: 'Restauração Menor (Lesser Restoration)', descricao: '2º Círculo — Duração Instantâneo. Alcance toque. Remove 1 doença ou condição (cego, surdo, paralisado, envenenado). Sem ataque. 1 alvo.' }
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
      { name: 'Ataque Sorrateiro (Sneak Attack)', level: 1, dano: '1d6 por nível de ladino (escala)', alcance: 'Alcance da arma', alvos: '1 alvo', descricao: 'Adiciona dano extra (1x por turno) ao acertar com ataque com Furtividade ou à distância, se tiver vantagem ou um aliado adjacente ao alvo. Requer: arma Furtiva ou à distância.' },
      { name: 'Perícia (Expertise)', level: 1, descricao: 'Você pode escolher perícias para se tornar particularmente hábil nelas.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
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
      { name: 'Magia Inata (Innate Spellcasting)', level: 1, descricao: 'Conjurador completo. Truques sempre, magias 1º a 9º círculo. Atributo: Carisma. Conhece poucas magias mas lança mais.', dano: 'Não causa dano direto', alcance: 'Varia pela magia', alvos: 'Varia pela magia' },
      { name: 'Metamagia (Metamagic)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Pode modificar magias (trans, dupla, ampliação etc.). Custa Pontos de Feitiçaria.' },
      { name: 'Fonte de Feitiçaria (Sorcery Points)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Pontos de Feitiçaria por descanso longo: iguais ao nível. Usados para Metamagia ou para criar espaços de magia.' }
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
      { name: 'Pacto (Pact Boon)', level: 1, descricao: 'Você faz um pacto com uma entidade especial.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
      { name: 'Patrono (Otherworldly Patron)', level: 1, descricao: 'Sua entidade patrona concede poderes e benefícios únicos.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
      { name: 'Invocações (Eldritch Invocations)', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode aprender invocações especiais inspiradas em seu pacto. 2 invocações no nível 3, mais a cada 5 níveis.' }
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
    { name: 'Caminho do Berserker', nivel: 3, descricao: 'Fúria implacável e golpes devastadores em combate corpo a corpo.', habilidades: [{ name: 'Frenesi (Frenzy)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode entrar em frenesi para atacar ainda mais enquanto estiver em fúria. 1x por descanso curto ou longo.' }], truques: [] },
    { name: 'Caminho do Guerreiro Totêmico', nivel: 3, descricao: 'Canaliza o espírito dos animais para ganhar poder totêmico.', habilidades: [{ name: 'Espírito Totêmico (Totem Spirit)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você recebe benefícios especiais baseados no totem animal escolhido.' }], truques: [] },
    { name: 'Caminho do Predador', nivel: 3, descricao: 'Caçador feroz que rastreia e marca suas presas.', habilidades: [{ name: 'Marca do Predador', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você marca uma presa para ganhar vantagem contra ela e rastreá-la melhor.' }], truques: [] },
    { name: 'Caminho do Storm Herald', nivel: 3, descricao: 'Canaliza a fúria das tempestades, desertos, mares ou gelo.', habilidades: [{ name: 'Aura do Storm Herald', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você cria uma aura elemental que causa efeitos adicionais em inimigos próximos.' }], truques: [] },
    { name: 'Caminho do Zealot', nivel: 3, descricao: 'Bárbaro fanático, com destruição divina garantida.', habilidades: [{ name: 'Fúria Divina (Divine Fury)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode causar dano extra de energia sagrada quando ataca em fúria.' }], truques: [] },
    { name: 'Caminho do Gigante das Nuvens', nivel: 3, descricao: 'Canaliza a força elemental de gigantes.', habilidades: [{ name: 'Vigor Elemental', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você obtém força e resistência adicionais com a bênção dos gigantes.' }], truques: [] },
    { name: 'Caminho do Beast', nivel: 3, descricao: 'Forma um vínculo animal e usa uma Besta Espiritual.', habilidades: [{ name: 'Companheiro Bestial', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você convoca um companheiro animal espiritual que o auxilia em combate.' }], truques: [] },
    { name: 'Caminho do Wild Magic', nivel: 3, descricao: 'Fúria imprevisível com explosões de magia selvagem.', habilidades: [{ name: 'Magia Selvagem', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Sua fúria pode desencadear efeitos mágicos imprevisíveis ao atacar.' }], truques: [] }
  ],
  bardo: [
    { name: 'Colégio do Conhecimento', nivel: 3, descricao: 'Especialista em lore, investigação e magias arcanas.', habilidades: [{ name: 'Conhecimento Aprimorado', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'O bardo ganha maior capacidade de pesquisa, lore e respostas.' }], truques: [] },
    { name: 'Colégio da Bravura', nivel: 3, descricao: 'Bardo de combate, inspirado pelos feitos heróicos.', habilidades: [{ name: 'Inspiração de Bravura', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você concede bônus de ataque e defesa aos aliados inspirados.' }], truques: [] },
    { name: 'Colégio do Glamour', nivel: 3, descricao: 'Bardo feérico, com magias de charme e medo.', habilidades: [{ name: 'Presença Feérica', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você encanta aliados e confunde inimigos com sua presença mágica.' }], truques: [] },
    { name: 'Colégio do Sussurro (Whispers)', nivel: 3, descricao: 'Bardo sombrio, que rouba segredos e manipula mentes.', habilidades: [{ name: 'Segredos Sussurrados', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você usa segredos roubados para causar medo e controlar mentes.' }], truques: [] },
    { name: 'Colégio do Eloquence', nivel: 3, descricao: 'Mestre da persuasão, com palavras cortantes.', habilidades: [{ name: 'Eloquência Avassaladora', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Sua fala torna seus argumentos mais difíceis de resistir.' }], truques: [] },
    { name: 'Colégio dos Espíritos', nivel: 3, descricao: 'Bardo espiritualista, que invoca contos e inspira aliados.', habilidades: [{ name: 'Histórias dos Espíritos', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você convoca histórias espirituais que fortalecem aliados e confundem inimigos.' }], truques: [] }
  ],
  clerigo: [
    { name: 'Domínio da Guerra', nivel: 1, descricao: 'Clérigo focado em combate e bênçãos marciais.', habilidades: [{ name: 'Bênção de Guerra', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Seu domínio concede bônus especiais em combate.' }], truques: [] },
    { name: 'Domínio da Vida', nivel: 1, descricao: 'Clérigo especializado em cura e proteção.', habilidades: [{ name: 'Discípulo da Vida', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Suas magias de cura restauram mais pontos de vida.' }], truques: [] },
    { name: 'Domínio da Luz', nivel: 1, descricao: 'Clérigo da luz, queima os inimigos com fogo radiante.', habilidades: [{ name: 'Luz Guardiã', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você ofusca inimigos com luz divina para protegê-lo.' }], truques: [] },
    { name: 'Domínio da Tempestade', nivel: 1, descricao: 'Clérigo que empunha a fúria dos céus.', habilidades: [{ name: 'Fúria da Tempestade', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você causa dano elétrico adicional e empurra inimigos.' }], truques: [] },
    { name: 'Domínio da Ordem', nivel: 1, descricao: 'Clérigo da ordem, com magias de controle e combate.', habilidades: [{ name: 'Voz da Autoridade', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você impõe sua vontade para controlar inimigos e proteger aliados.' }], truques: [] },
    { name: 'Domínio da Forja', nivel: 1, descricao: 'Clérigo ferreiro, com bênçãos para armas e armaduras.', habilidades: [{ name: 'Bênção da Forja', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você fortalece equipamentos e concede proteção extra.' }], truques: [] },
    { name: 'Domínio do Conhecimento', nivel: 1, descricao: 'Clérigo estudioso, com magias de identificação e controle mental.', habilidades: [{ name: 'Benção do Conhecimento', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você obtém proficiência em perícias e insights arcanos.' }], truques: [] },
    { name: 'Domínio da Natureza', nivel: 1, descricao: 'Clérigo druídico, com magias de terra e fauna.', habilidades: [{ name: 'Acolyte of Nature', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você aprende magias relacionadas à natureza e herança druidica.' }], truques: [] },
    { name: 'Domínio do Engano (Trickery)', nivel: 1, descricao: 'Clérigo traiçoeiro, com bênçãos de ilusão e duplicação.', habilidades: [{ name: 'Bênção do Engano', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você cria ilusões e duplicatas que confundem seus inimigos.' }], truques: [] },
    { name: 'Domínio da Paz (Peace)', nivel: 1, descricao: 'Clérigo pacífico, com bênçãos de harmonia e proteção.', habilidades: [{ name: 'Serenidade Corporificada', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Sua presença reduz dano e mantém aliados protegidos.' }], truques: [] },
    { name: 'Domínio da Sepultura (Grave)', nivel: 1, descricao: 'Clérigo dos mortos, com magias de necromancia e cura.', habilidades: [{ name: 'Círculo da Mortalidade', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você manipula a vida e a morte para proteger aliados vulneráveis.' }], truques: [] }
  ],
  druida: [
    { name: 'Círculo da Lua', nivel: 2, descricao: 'Especialista em mudança de forma em formas animais.', habilidades: [{ name: 'Forma da Lua', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode usar a magia da lua para fortalecer sua forma selvagem.' }], truques: [] },
    { name: 'Círculo da Terra', nivel: 2, descricao: 'Druida focado em magias de terra, água, fogo ou ar.', habilidades: [{ name: 'Vínculo com a Terra', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você aprende magias adicionais e ganha resistência elemental.' }], truques: [] },
    { name: 'Círculo do Pastoreio (Shepherd)', nivel: 2, descricao: 'Druida que invoca espíritos animais para ajudar aliados.', habilidades: [{ name: 'Totem Espiritual', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você convoca espíritos animais que curam aliados e enfraquecem inimigos.' }], truques: [] },
    { name: 'Círculo dos Cogumelos (Spores)', nivel: 2, descricao: 'Druida fúngico, com necromancia e explosões de esporos.', habilidades: [{ name: 'Simbiose Esporal', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você cria uma presença de esporos que danifica inimigos e protege você.' }], truques: [] },
    { name: 'Círculo da Estrelas (Stars)', nivel: 2, descricao: 'Druida astrólogo, com magias de constelação e forma estelar.', habilidades: [{ name: 'Conexão Estelar', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você canaliza energia cósmica para curar aliados e ferir inimigos.' }], truques: [] },
    { name: 'Círculo do Fogo (Wildfire)', nivel: 2, descricao: 'Druida elemental, com um espírito de fogo aliado.', habilidades: [{ name: 'Espírito Selvagem', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você convoca um espírito de fogo que auxilia em cura e combate.' }], truques: [] }
  ],
  guerreiro: [
    { name: 'Campeão', nivel: 3, descricao: 'Guerreiro puro, focado em crítico e proeza física.', habilidades: [{ name: 'Golpe Crítico Aprimorado', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Seus ataques críticos são mais fáceis de conseguir e mais devastadores.' }], truques: [] },
    { name: 'Mestre de Batalha', nivel: 3, descricao: 'Tático superior, com manobras especiais de combate.', habilidades: [{ name: 'Superioridade de Combate', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você usa dados de superioridade para executar manobras poderosas.' }], truques: [] },
    { name: 'Cavaleiro Arcano', nivel: 3, descricao: 'Mistura magia com combate, conjurando feitiços em armadura.', habilidades: [{ name: 'Laço de Arma', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você liga sua arma a você e conjura magias sem perder forma de ataque.' }], truques: [] },
    { name: 'Cavaleiro Rúnico (Rune Knight)', nivel: 3, descricao: 'Guerreiro com runas mágicas, capaz de crescer em tamanho.', habilidades: [{ name: 'Runas Mágicas', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você inscreve runas que conferem efeitos especiais ao seu equipamento.' }], truques: [] },
    { name: 'Cavaleiro Psíquico (Psi Warrior)', nivel: 3, descricao: 'Guerreiro com poder psônico, usa energia mental em combate.', habilidades: [{ name: 'Poder Psíquico', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você usa energia mental para adicionar efeitos especiais aos seus ataques.' }], truques: [] },
    { name: 'Cavaleiro das Trevas (Echo Knight)', nivel: 3, descricao: 'Guerreiro que cria ecos de si mesmo em combate.', habilidades: [{ name: 'Eco Manifestado', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você cria um eco que pode atacar ou se mover em seu lugar.' }], truques: [] },
    { name: 'Samurai', nivel: 3, descricao: 'Guerreiro com honra, com bônus de combate e vantagem.', habilidades: [{ name: 'Espírito de Combate', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você obtém bônus temporários de ataque e resistência.' }], truques: [] },
    { name: 'Cavaleiro (Cavalier)', nivel: 3, descricao: 'Guerreiro montado, especialista em defesa e marcação.', habilidades: [{ name: 'Marcação Defensiva', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você protege aliados e impede inimigos de fugir de você.' }], truques: [] }
  ],
  mago: [
    { name: 'Escola de Abjuração', nivel: 2, descricao: 'Especialista em magias de proteção e contrafeitiços.', habilidades: [{ name: 'Barreira Arcana', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você cria defesas mágicas poderosas.' }], truques: [] },
    { name: 'Escola de Evocação', nivel: 2, descricao: 'Mestre das magias de dano elemental.', habilidades: [{ name: 'Esculpir Evocação', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode moldar suas magias para evitar aliados inocentes.' }], truques: [] },
    { name: 'Escola de Transmutação', nivel: 2, descricao: 'Manipula a estrutura da matéria e da energia.', habilidades: [{ name: 'Alquimia Menor', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você altera propriedades de objetos e criaturas com transmutação.' }], truques: [] },
    { name: 'Escola de Adivinhação', nivel: 2, descricao: 'Mago vidente, com magias de profecia e revelação.', habilidades: [{ name: 'Presságios', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você rola dados extras e pode substituir resultados de rolagens.' }], truques: [] },
    { name: 'Escola de Conjuração', nivel: 2, descricao: 'Mago invocador, com magias de transporte e invocação.', habilidades: [{ name: 'Transposição Benigna', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você move aliados e inimigos com suas conjurações.' }], truques: [] },
    { name: 'Escola de Encantamento', nivel: 2, descricao: 'Mago manipulador, com magias de charme e controle mental.', habilidades: [{ name: 'Olhar Hipnótico', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Seus encantamentos ficam mais difíceis de resistir.' }], truques: [] },
    { name: 'Escola de Ilusão', nivel: 2, descricao: 'Mago enganador, com magias de ilusão e medo.', habilidades: [{ name: 'Ilusão Aprimorada', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Suas ilusões tornam-se mais convincentes e duradouras.' }], truques: [] },
    { name: 'Escola de Necromancia', nivel: 2, descricao: 'Mago sombrio, com magias de mortos-vivos e energia negativa.', habilidades: [{ name: 'Colheita Sombria', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você drena energia para recuperar pontos de vida ao ferir inimigos.' }], truques: [] },
    { name: 'Escola de Magia de Guerra (War Magic)', nivel: 2, descricao: 'Mago de combate, com defesas arcanas e poder de fogo.', habilidades: [{ name: 'Defesa Arcana', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você usa magia para aumentar sua resistência em combate.' }], truques: [] },
    { name: 'Escola de Gravitação (Graviturgy)', nivel: 2, descricao: 'Mago com poder sobre a gravidade.', habilidades: [{ name: 'Manipular Gravidade', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você altera o peso e o movimento de criaturas e objetos.' }], truques: [] },
    { name: 'Escola Temporal (Chronurgy)', nivel: 2, descricao: 'Mago com controle sobre o tempo.', habilidades: [{ name: 'Dobra Temporal', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você manipula o tempo para alterar resultados e efeitos.' }], truques: [] },
    { name: 'Escola do Filão de Lâmina (Bladesinging)', nivel: 2, descricao: 'Mago élfico que mistura magia e combate corpo a corpo.', habilidades: [{ name: 'Canção da Lâmina', level: 2, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você anima sua lâmina com magia para lutar melhor enquanto conjura.' }], truques: [] }
  ],
  monge: [
    { name: 'Caminho da Mão Aberta', nivel: 3, descricao: 'Monge focado em técnicas de Ki desimpedidas.', habilidades: [{ name: 'Técnica da Mão Aberta', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Seus ataques desarmados aplicam efeitos adicionais de Ki.' }], truques: [] },
    { name: 'Caminho das Sombras', nivel: 3, descricao: 'Monge que canaliza o Ki para criar escuridão e se esconder.', habilidades: [{ name: 'Artes das Sombras', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você usa Ki para teleportar entre sombras e criar furtividade.' }], truques: [] },
    { name: 'Caminho dos Quatro Elementos', nivel: 3, descricao: 'Monge elemental que manipula fogo, água, ar e terra.', habilidades: [{ name: 'Magias Elementais', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você aprende técnicas elementais que se comportam como magias.' }], truques: [] },
    { name: 'Caminho do Kensei', nivel: 3, descricao: 'Monge que arma-se com armas e arcos como extensões do Ki.', habilidades: [{ name: 'Maestria Kensei', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você trata armas selecionadas como extensões perfeitas do seu Ki.' }], truques: [] },
    { name: 'Caminho do Mestre do Vinho (Drunken)', nivel: 3, descricao: 'Monge com estilo único, combinando bebida e Ki.', habilidades: [{ name: 'Técnica do Vinho', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você usa movimentos erráticos para evitar ataques e confundir inimigos.' }], truques: [] },
    { name: 'Caminho do Long Death', nivel: 3, descricao: 'Monge que canaliza o Ki para manipular a linha entre vida e morte.', habilidades: [{ name: 'Toque da Longa Morte', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você causa medo e dano necromântico aos inimigos que toca.' }], truques: [] },
    { name: 'Caminho do Sun Soul', nivel: 3, descricao: 'Monge com Ki radiante, que queima inimigos.', habilidades: [{ name: 'Raio Solar', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você dispara energia solar em ataques à distância e corpo a corpo.' }], truques: [] },
    { name: 'Caminho do Mercy (Mercy)', nivel: 3, descricao: 'Monge com Ki curativo, capaz de curar e ferir.', habilidades: [{ name: 'Mãos da Misericórdia', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você cura aliados ou causa dano sagrado com seus toques.' }], truques: [] },
    { name: 'Caminho do Astral Self', nivel: 3, descricao: 'Monge que projeta uma versão astral de si mesmo.', habilidades: [{ name: 'Alma Astral', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você manifesta partes de seu corpo astral para lutar e proteger.' }], truques: [] }
  ],
  paladino: [
    { name: 'Juramento de Devoção', nivel: 3, descricao: 'Paladino da justiça e da ordem tradicionais.', habilidades: [{ name: 'Aura de Devoção', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Sua presença protege aliados próximos contra a corrupção.' }], truques: [] },
    { name: 'Juramento dos Anciões', nivel: 3, descricao: 'Paladino que segue os caminhos dos deuses antigos.', habilidades: [{ name: 'Aura dos Anciões', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você irradia proteção e sabedoria para aliados próximos.' }], truques: [] },
    { name: 'Juramento de Vingança', nivel: 3, descricao: 'Paladino implacável contra os que cometem grandes males.', habilidades: [{ name: 'Juramento de Vingança', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você marca um inimigo para surpreendê-lo e causar mais dano.' }], truques: [] },
    { name: 'Juramento da Coroa (Crown)', nivel: 3, descricao: 'Paladino líder, com bônus de intimidação e controle.', habilidades: [{ name: 'Presença Real', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você inspira aliados e domina inimigos com sua autoridade.' }], truques: [] },
    { name: 'Juramento da Glória (Glory)', nivel: 3, descricao: 'Paladino heroico, com habilidades de combate épico.', habilidades: [{ name: 'Aura Heroica', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você inspira aliados e cega inimigos com sua presença luminosa.' }], truques: [] },
    { name: 'Juramento da Proteção (Redemption)', nivel: 3, descricao: 'Paladino pacífico, focado em redenção e não-violência.', habilidades: [{ name: 'Aura da Redenção', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você reduz dano e dissuade agressão com sua presença pacificadora.' }], truques: [] },
    { name: 'Juramento do Vigário (Watchers)', nivel: 3, descricao: 'Paladino protetor contra ameaças extraplanares.', habilidades: [{ name: 'Sentinela Divina', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você identifica e bloqueia criaturas extraplanares.' }], truques: [] },
    { name: 'Juramento do Conquistador (Conquest)', nivel: 3, descricao: 'Paladino sombrio, com medo e controle de mente.', habilidades: [{ name: 'Presença de Conquista', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você impõe medo e controle sobre inimigos próximos.' }], truques: [] },
    { name: 'Juramento do Pôr do Sol (Treachery)', nivel: 3, descricao: 'Paladino traiçoeiro, com magias de controle e engano.', habilidades: [{ name: 'Capa de Treachery', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você se torna difícil de atingir e pode esconder sua presença.' }], truques: [] }
  ],
  ranger: [
    { name: 'Caçador', nivel: 3, descricao: 'Ranger focado em técnicas de caça contra presas específicas.', habilidades: [{ name: 'Táticas do Caçador', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você aprende técnicas especiais contra alvos específicos.' }], truques: [] },
    { name: 'Mestre de Feras', nivel: 3, descricao: 'Ranger acompanhado por um companheiro animal leal.', habilidades: [{ name: 'Companheiro Animal', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você treina um companheiro animal que luta ao seu lado.' }], truques: [] },
    { name: 'Errante Cinzento (Gloom Stalker)', nivel: 3, descricao: 'Ranger sombrio, especialista em emboscadas e invisibilidade na escuridão.', habilidades: [{ name: 'Emboscada Sombria', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você é mais eficaz em ataques surpreendentes e combate noturno.' }], truques: [] },
    { name: 'Caminho do Destruidor (Horizon Walker)', nivel: 3, descricao: 'Ranger planar, com poderes sobre outras dimensões.', habilidades: [{ name: 'Guerreiro Planar', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você teleporta-se e ataca com energia planar.' }], truques: [] },
    { name: 'Caminho do Monstro (Monster Slayer)', nivel: 3, descricao: 'Ranger especializado em caçar monstros e criaturas mágicas.', habilidades: [{ name: 'Sentido do Caçador', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você detecta fraquezas em monstruosidades e criaturas mágicas.' }], truques: [] },
    { name: 'Caminho do Guardião (Swarmkeeper)', nivel: 3, descricao: 'Ranger com um enxame de espíritos animais aliados.', habilidades: [{ name: 'Enxame Aliado', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você controla um enxame para empurrar, puxar ou proteger.' }], truques: [] },
    { name: 'Caminho da Lâmina (Drakewarden)', nivel: 3, descricao: 'Ranger com um companheiro dracônico.', habilidades: [{ name: 'Guardião Dracônico', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você convoca um drake que luta e protege você.' }], truques: [] },
    { name: 'Caminho da Fera Primordial (Primeval Guardian)', nivel: 3, descricao: 'Ranger com poderes primordiais de proteção.', habilidades: [{ name: 'Guardião Primordial', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você assume uma forma protetora e fortalece aliados.' }], truques: [] },
    { name: 'Caminho do Caçador Furtivo (Fey Wanderer)', nivel: 3, descricao: 'Ranger com poderes feéricos, de charme e medo.', habilidades: [{ name: 'Presença Feérica', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você usa charme feérico para distrair e controlar inimigos.' }], truques: [] }
  ],
  ladino: [
    { name: 'Ladrão (Thief)', nivel: 3, descricao: 'Ladino clássico, mestre da escalada, fintagem e mãos rápidas.', habilidades: [
      { name: 'Mãos Rápidas (Fast Hands)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode usar uma ação bônus para realizar uma ação de interagir com objetos ou usar um item mágico como parte da mesma ação.' }
    ], truques: [] },
    { name: 'Assassino (Assassin)', nivel: 3, descricao: 'Ladino letal, especialista em emboscadas e ataque surpresa.', habilidades: [
      { name: 'Assassinar (Assassinate)', level: 3, dano: 'Não causa dano direto (aumenta críticos)', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'No primeiro turno de combate, você tem vantagem em ataques contra criaturas que ainda não agiram. Críticos automáticos contra alvos surpresos.' }
    ], truques: [] },
    { name: 'Trapaceiro Arcano (Arcane Trickster)', nivel: 3, descricao: 'Ladino que mistura truques arcanos com a sua trapaçaria.', habilidades: [
      { name: 'Mãos Mágicas (Magical Knack)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode usar Mãos Mágicas para lançar magias de ilusão e manipulação de forma furtiva.' },
      { name: 'Ilusão Menor (Minor Illusion)', level: 3, dano: 'Não causa dano direto', alcance: '18 m', alvos: '1 alvo', descricao: 'Cria som ou imagem de objeto inanimado de até 1,5 m³. Duração 1 minuto. Teste de Investigação (CD 13) para desmascarar.' },
      { name: 'Amigos (Friends)', level: 3, dano: 'Não causa dano direto', alcance: '1,5 m', alvos: '1 alvo', descricao: 'Você tem vantagem em testes de Carisma contra 1 criatura não hostil. Ela percebe o encantamento ao fim.' }
    ], truques: [
      { name: 'Mãos Mágicas (Mage Hand)', level: 3, dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo', descricao: 'Mão espectral invisível manipula objetos até 5 kg a 9 m. Pode usar para Prestidigitação ou Ladinagem furtivamente.' },
      { name: 'Ilusão Menor (Minor Illusion)', level: 3, dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo', descricao: 'Cria som ou imagem inanimada em 9 m. Teste de Investigação (CD sua magia) para desmascarar.' },
      { name: 'Amigos (Friends)', level: 3, dano: 'Não causa dano direto', alcance: '1,5 m', alvos: '1 alvo', descricao: 'Vantagem em testes de Carisma contra 1 criatura não hostil. Ela percebe o encantamento ao fim.' }
    ], magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Sono (Sleep)', level: 3, descricao: 'Afeta criaturas em raio de 6 m somando 5d8 PV (começando pelas mais fracas). Sem teste de resistência.', dano: 'Não causa dano direto (efeito)', alcance: '27 m', alvos: 'Múltiplos alvos' },
        { name: 'Cativar Pessoa (Charm Person)', level: 3, descricao: 'Teste de Sabedoria ou a criatura te trata como amigo.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo humanoide' },
        { name: 'Disfarce (Disguise Self)', level: 3, descricao: 'Você altera sua aparência física (altura ±30 cm, roupas, rosto). Teste de Investigação CD 13 para desmascarar.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Cor Cegante (Color Spray)', level: 3, descricao: 'Cone de 4,5 m. Afeta criaturas somando 6d10 PV (começando pelas mais fracas) — ficam cegas por 1 rodada.', dano: 'Não causa dano direto (efeito)', alcance: '4,5 m', alvos: 'Múltiplos alvos' },
        { name: 'Escudo (Shield)', level: 3, descricao: 'Reação ao ser atacado. +5 CA até o início do seu próximo turno.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
      ],
      '2º Círculo': [
        { name: 'Invisibilidade (Invisibility)', level: 3, descricao: '1 criatura fica invisível. Termina se atacar ou lançar magia.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Passo Nebuloso (Misty Step)', level: 3, descricao: 'Ação bônus. Você se teleporta até 9 m para um espaço visível.', dano: 'Não causa dano direto', alcance: '9 m', alvos: 'Apenas o conjurador' },
        { name: 'Sugestão (Suggestion)', level: 3, descricao: 'Teste de Sabedoria ou a criatura segue uma sugestão razoável.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo' },
        { name: 'Imagem Espelhada (Mirror Image)', level: 3, descricao: 'Cria 3 duplicatas suas. Ataques contra você têm chance de acertar a duplicata.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
      ],
      '3º Círculo': [
        { name: 'Piscar (Blink)', level: 3, descricao: 'No fim de cada turno, role d20: 11+ você vai para o Plano Etéreo até o início do próximo turno.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Dissipar Magia (Dispel Magic)', level: 3, descricao: 'Encerra automaticamente magias de 3º círculo ou menor no alvo.', dano: 'Não causa dano direto', alcance: '36 m', alvos: '1 alvo' },
        { name: 'Medo (Fear)', level: 3, descricao: 'Cone de 9 m. Teste de Sabedoria ou a criatura fica amedrontada e foge.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: 'Múltiplos alvos' }
      ]
    } },
    {
      name: 'Lâmina Psíquica (Soulknife)', nivel: 3, descricao: 'Ladino com poder psônico, cria lâminas mentais e usa habilidades telepáticas.', habilidades: [
        { name: 'Lâminas Psíquicas (Psychic Blades)', level: 3, dano: '1d6 psíquico (principal) + 1d4 psíquico (bônus)', alcance: '1,5 m (corpo a corpo) ou 18 m (arremesso)', alvos: '1 alvo', descricao: 'Você materializa lâminas de energia psíquica pura. Como parte de um ataque, você cria uma lâmina que desaparece após o golpe e não pode ser desarmada.' },
        { name: 'Poder Psiónico (Psionic Power)', level: 3, descricao: 'Você possui dados de energia psiónica usados para somar em testes de perícia com proficiência que falharam, adicionando o resultado ao total após a rolagem. Você tem 2d4 psiónicos por nível de ladino.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Fala Telepática (Telepathic Speech)', level: 3, dano: 'Não causa dano direto', alcance: '1.600 m', alvos: 'Criaturas igual à proficiência', descricao: 'Você cria um elo telepático com um número de criaturas igual ao seu bônus de proficiência. As criaturas podem estar a até 1.600 metros (1 milha) de distância.' }
      ], truques: []
    },
    { name: 'Espião (Swashbuckler)', nivel: 3, descricao: 'Ladino carismático, especialista em combate individual e estilo.', habilidades: [
      { name: 'Movimento Elegante (Rakishness)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você se move com graça e evita ataques de oportunidade. Adiciona Carisma aos PV temporários ao usar ação de Ataque.' }
    ], truques: [] },
    { name: 'Investigador (Investigator)', nivel: 3, descricao: 'Ladino detetive, analisa fraquezas dos inimigos antes de atacar.', habilidades: [
      { name: 'Instinto do Inquisidor (Investigator)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você encontra pistas e explora fraquezas com precisão. Pode usar Investigação como ação bônus.' }
    ], truques: [] },
    { name: 'Mestre da Trapaça (Mastermind)', nivel: 3, descricao: 'Ladino manipulador, com truques de intimidação e controle social.', habilidades: [
      { name: 'Manipulação Maestral (Mastermind)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você engana e direciona aliados e inimigos com perícia. Pode usar Intimidação para obter informações.' }
    ], truques: [] },
    { name: 'Escarlate (Scout)', nivel: 3, descricao: 'Ladino batedor, especialista em sobrevivência e combate na natureza.', habilidades: [
      { name: 'Atirador Ágil (Skirmisher)', level: 3, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você se move pelo terreno e ataca com vantagem contra inimigos desprevenidos. Pode usar ação bônus para mover 10 m sem ataque de oportunidade.' }
    ], truques: [] }
  ],
  feiticeiro: [
    { name: 'Dracônico (Ancestral Draconata)', nivel: 1, descricao: 'Linhagem de dragões, com HP extra e magia elemental.', habilidades: [{ name: 'Resistência Dracônica', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Seu sangue dracônico concede resistência elemental e vigor extra.' }], truques: [] },
    { name: 'Magia Selvagem', nivel: 1, descricao: 'Magia instável e imprevisível, com efeitos caóticos.', habilidades: [{ name: 'Caos Selvagem', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Seus feitiços podem gerar efeitos mágicos imprevisíveis.' }], truques: [] },
    { name: 'Linhagem Divina (Divine Soul)', nivel: 1, descricao: 'Linhagem celestial, com magias de cura e dano radiante.', habilidades: [{ name: 'Magia Divina', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você aprende magias adicionais ligadas à sua herança celestial.' }], truques: [] },
    { name: 'Linhagem do Aberrante (Aberrant Mind)', nivel: 1, descricao: 'Magia psiónica e telepática, com magias de controle mental.', habilidades: [{ name: 'Mente Aberrante', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você canaliza energia psíquica para manipular mentes e atacar inimigos.' }], truques: [] },
    { name: 'Alma Mecânica (Clockwork Soul)', nivel: 1, descricao: 'Magia ordenada, com magias de proteção e ordem.', habilidades: [{ name: 'Ordem Mecânica', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Sua magia dá estrutura e equilíbrio, prevenindo caos.' }], truques: [] },
    { name: 'Magia da Tempestade (Storm Sorcery)', nivel: 1, descricao: 'Linhagem elemental, com magias de raio e vento.', habilidades: [{ name: 'Magia da Tempestade', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você canaliza vento e trovão para reforçar suas magias.' }], truques: [] },
    { name: 'Linhagem das Sombras (Shadow Magic)', nivel: 1, descricao: 'Linhagem sombria, com magias de escuridão e medo.', habilidades: [{ name: 'Olhos da Escuridão', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você enxerga no escuro e conjura magias de sombras com maior facilidade.' }], truques: [] }
  ],
  bruxo: [
    { name: 'O Arquifada', nivel: 1, descricao: 'Pacto com um Arquifada (ser celestial), ganhando uma espada sentiente.', habilidades: [{ name: 'Presença Feérica', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Sua entidade concede presença encantadora que amedronta ou fascina.' }], truques: [] },
    { name: 'O Corruptor', nivel: 1, descricao: 'Pacto com um Corruptor (fada sombria), com livro de sombras e magias de ilusão.', habilidades: [{ name: 'Sombra Corrompida', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você utiliza ilusões sombrias para enganar e dominar inimigos.' }], truques: [] },
    { name: 'O Grande Antigo', nivel: 1, descricao: 'Pacto com uma entidade cósmica alienígena, com magias de controle mental.', habilidades: [{ name: 'Mente Desperta', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você pode se comunicar telepaticamente e confundir a mente dos outros.' }], truques: [] },
    { name: 'O Hexblade', nivel: 1, descricao: 'Pacto com uma entidade do Plano das Sombras, com poder sobre maldições.', habilidades: [{ name: 'Maldição da Hexblade', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você amaldiçoa inimigos e fortalece seus ataques contra eles.' }], truques: [] },
    { name: 'O Celestial', nivel: 1, descricao: 'Pacto com um ser celestial, com magias de cura e dano radiante.', habilidades: [{ name: 'Luz Curativa', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você cura aliados com sua energia celestial e causa dano radiante.' }], truques: [] },
    { name: 'O Não-Morto (Undying)', nivel: 1, descricao: 'Pacto com um ser não-morto, com magias de necromancia e resistência.', habilidades: [{ name: 'Presença Imortal', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você resiste à morte e recupera recursos com facilidade.' }], truques: [] },
    { name: 'O Fathomless', nivel: 1, descricao: 'Pacto com uma entidade abissal marinha, com magias de água e tentáculos.', habilidades: [{ name: 'Profundezas', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você convoca tentáculos e manipula a água para atacar e controlar inimigos.' }], truques: [] },
    { name: 'O Genie', nivel: 1, descricao: 'Pacto com um gênio elemental, com magias elementais e bônus de maravilha.', habilidades: [{ name: 'Vasilha Genial', level: 1, dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador', descricao: 'Você ganha poderes elementares e acesso a um recipiente mágico especial.' }], truques: [] }
  ]
};
