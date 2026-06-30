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
    toque: 'Fúria, Defesa insana, Crítico melhorado'
  },
  bardo: {
    name: 'Bardo',
    hpInicial: 8,
    atributoChave: 'charisma',
    pericias: ['Acrobacias', 'Enganação', 'Performance', 'Persuasão'],
    armas: ['Armas simples, espadas simples de uma mão'],
    descricao: 'Um mago da música e da magia que encanta e inspira.',
    toque: 'Inspiração de Bardo, Magia, Truques'
  },
  clerigo: {
    name: 'Clérigo',
    hpInicial: 8,
    atributoChave: 'wisdom',
    pericias: ['Insight', 'Medicina', 'Persuasão'],
    armas: ['Armas simples'],
    descricao: 'Um guerreiro sagrado que canaliza o poder divino.',
    toque: 'Magia Divina, Canalizar Divindade, Cura'
  },
  druida: {
    name: 'Druida',
    hpInicial: 8,
    atributoChave: 'wisdom',
    pericias: ['Arcanos', 'Insight', 'Medicina', 'Natureza', 'Percepção'],
    armas: ['Armas simples de corpo a corpo'],
    descricao: 'Um mago da natureza que protege o equilíbrio do mundo.',
    toque: 'Circulo Druida, Mudança de Forma, Magia Natural'
  },
  guerreiro: {
    name: 'Guerreiro',
    hpInicial: 10,
    atributoChave: 'strength',
    pericias: ['Atletismo', 'Insight', 'Intuição'],
    armas: ['Todas as armas'],
    descricao: 'Um mestre da batalha, treinado em armas e armaduras.',
    toque: 'Ataques extras, Segundo vento, Habilidades marciais'
  },
  mago: {
    name: 'Mago',
    hpInicial: 6,
    atributoChave: 'intelligence',
    pericias: ['Arcanos', 'História', 'Investigação'],
    armas: ['Adagas, dardos, fundas, cajados, balestim leve'],
    descricao: 'Um estudioso de magia arcana que lança feitiços devastadores.',
    toque: 'Grimório, Magia Arcana, Truques poderosos'
  },
  monge: {
    name: 'Mônge',
    hpInicial: 8,
    atributoChave: 'dexterity',
    pericias: ['Acrobacias', 'Atletismo', 'Furtividade', 'Insight'],
    armas: ['Armas simples, espadas simples de uma mão'],
    descricao: 'Um mestre marcial que canaliza a energia interna (Ki).',
    toque: 'Pontos de Ki, Movimento sem Armadura, Artes Marciais'
  },
  paladino: {
    name: 'Paladino',
    hpInicial: 10,
    atributoChave: 'strength',
    pericias: ['Atletismo', 'Insight', 'Intimidação', 'Religião'],
    armas: ['Todas as armas'],
    descricao: 'Um guerreiro sagrado que faz juramento para uma causa nobre.',
    toque: 'Juramento Sagrado, Magia Divina, Aura Sagrada'
  },
  ranger: {
    name: 'Ranger',
    hpInicial: 10,
    atributoChave: 'dexterity',
    pericias: ['Atletismo', 'Furtividade', 'Natureza', 'Percepção', 'Sobrevivência'],
    armas: ['Todas as armas simples e de guerra'],
    descricao: 'Um guerreiro das terras selvagens que caça e rastreia inimigos.',
    toque: 'Campesinato Favorito, Magia Natural, Companheiro Animal'
  },
  ladino: {
    name: 'Ladino',
    hpInicial: 8,
    atributoChave: 'dexterity',
    pericias: ['Acrobacias', 'Atletismo', 'Enganação', 'Furtividade', 'Investigação', 'Percepção'],
    armas: ['Armas simples, espadas simples de uma mão'],
    descricao: 'Um especialista em furtividade, roubo e precisão.',
    toque: 'Ataque Sorrateiro, Perícia, Senso Especial'
  },
  feiticeiro: {
    name: 'Feiticeiro',
    hpInicial: 6,
    atributoChave: 'charisma',
    pericias: ['Arcanos', 'Enganação', 'Intimidação', 'Persuasão'],
    armas: ['Adagas, dardos, fundas, cajados, balestim leve'],
    descricao: 'Um mago inato que canaliza magia através de seu poder interior.',
    toque: 'Magia Inata, Pontos de Feitiçaria, Metamagia'
  },
  bruxo: {
    name: 'Bruxo',
    hpInicial: 6,
    atributoChave: 'charisma',
    pericias: ['Arcanos', 'Enganação', 'História', 'Intimidação'],
    armas: ['Armas simples'],
    descricao: 'Um mago que fez um pacto com uma entidade poderosa.',
    toque: 'Pacto Eldritch, Invocações, Magia Invertida'
  }
};

// D&D 5e - Subclasses (Arquetipos) por classe
// Apenas classes do PHB (Livro do Jogador) com arquétipos básicos.
// Subclasses são desbloqueadas a partir do nível 3 (exceto o Bruxo, que também é nível 1 para o Pacto).
const SUBCLASSES_DATA = {
  barbaro: [
    { name: 'Caminho do Berserker', nivel: 3, descricao: 'Fúria implacável e golpes devastadores em combate corpo a corpo.' },
    { name: 'Caminho do Guerreiro Totêmico', nivel: 3, descricao: 'Canaliza o espírito dos animais para ganhar poder totêmico.' },
    { name: 'Caminho do Predador', nivel: 3, descricao: 'Caçador feroz que rastreia e marca suas presas.' },
    { name: 'Caminho do Storm Herald', nivel: 3, descricao: 'Canaliza a fúria das tempestades, desertos, mares ou gelo.' },
    { name: 'Caminho do Zealot', nivel: 3, descricao: 'Bárbaro fanático, com destruição divina garantida.' },
    { name: 'Caminho do Gigante das Nuvens', nivel: 3, descricao: 'Canaliza a força elemental de gigantes.' },
    { name: 'Caminho do Beast', nivel: 3, descricao: 'Forma um vínculo animal e usa uma Besta Espiritual.' },
    { name: 'Caminho do Wild Magic', nivel: 3, descricao: 'Fúria imprevisível com explosões de magia selvagem.' }
  ],
  bardo: [
    { name: 'Colégio do Conhecimento', nivel: 3, descricao: 'Especialista em lore, investigação e magias arcanas.' },
    { name: 'Colégio da Bravura', nivel: 3, descricao: 'Bardo de combate, inspirado pelos feitos heróicos.' },
    { name: 'Colégio do Glamour', nivel: 3, descricao: 'Bardo feérico, com magias de charme e medo.' },
    { name: 'Colégio do Sussurro (Whispers)', nivel: 3, descricao: 'Bardo sombrio, que rouba segredos e manipula mentes.' },
    { name: 'Colégio do Eloquence', nivel: 3, descricao: 'Mestre da persuasão, com palavras cortantes.' },
    { name: 'Colégio dos Espíritos', nivel: 3, descricao: 'Bardo espiritualista, que invoca contos e inspira aliados.' }
  ],
  clerigo: [
    { name: 'Domínio da Guerra', nivel: 1, descricao: 'Clérigo focado em combate e bênçãos marciais.' },
    { name: 'Domínio da Vida', nivel: 1, descricao: 'Clérigo especializado em cura e proteção.' },
    { name: 'Domínio da Luz', nivel: 1, descricao: 'Clérimo da luz, queima os inimigos com fogo radiante.' },
    { name: 'Domínio da Tempestade', nivel: 1, descricao: 'Clérimo que empunha a fúria dos céus.' },
    { name: 'Domínio da Ordem', nivel: 1, descricao: 'Clérimo da ordem, com magias de controle e combate.' },
    { name: 'Domínio da Forja', nivel: 1, descricao: 'Clérimo ferreiro, com bênçãos para armas e armaduras.' },
    { name: 'Domínio do Conhecimento', nivel: 1, descricao: 'Clérimo estudioso, com magias de identificação e controle mental.' },
    { name: 'Domínio da Natureza', nivel: 1, descricao: 'Clérimo druídico, com magias de terra e fauna.' },
    { name: 'Domínio do Engano (Trickery)', nivel: 1, descricao: 'Clérimo traiçoeiro, com bênçãos de ilusão e duplicação.' },
    { name: 'Domínio da Paz (Peace)', nivel: 1, descricao: 'Clérimo pacífico, com bênçãos de harmonia e proteção.' },
    { name: 'Domínio da Sepultura (Grave)', nivel: 1, descricao: 'Clérimo dos mortos, com magias de necromancia e cura.' }
  ],
  druida: [
    { name: 'Círculo da Lua', nivel: 2, descricao: 'Especialista em mudança de forma em formas animais.' },
    { name: 'Círculo da Terra', nivel: 2, descricao: 'Druida focado em magias de terra, água, fogo ou ar.' },
    { name: 'Círculo do Pastoreio (Shepherd)', nivel: 2, descricao: 'Druida que invoca espíritos animais para ajudar aliados.' },
    { name: 'Círculo dos Cogumelos (Spores)', nivel: 2, descricao: 'Druida fúngico, com necromancia e explosões de esporos.' },
    { name: 'Círculo da Estrelas (Stars)', nivel: 2, descricao: 'Druida astrólogo, com magias de constelação e forma estelar.' },
    { name: 'Círculo do Fogo (Wildfire)', nivel: 2, descricao: 'Druida elemental, com um espírito de fogo aliado.' }
  ],
  guerreiro: [
    { name: 'Campeão', nivel: 3, descricao: 'Guerreiro puro, focado em crítico e proeza física.' },
    { name: 'Mestre de Batalha', nivel: 3, descricao: 'Tático superior, com manobras especiais de combate.' },
    { name: 'Cavaleiro Arcano', nivel: 3, descricao: 'Mistura magia com combate, conjurando feitiços em armadura.' },
    { name: 'Cavaleiro Rúnico (Rune Knight)', nivel: 3, descricao: 'Guerreiro com runas mágicas, capaz de crescer em tamanho.' },
    { name: 'Cavaleiro Psíquico (Psi Warrior)', nivel: 3, descricao: 'Guerreiro com poder psônico, usa energia mental em combate.' },
    { name: 'Cavaleiro das Trevas (Echo Knight)', nivel: 3, descricao: 'Guerreiro que cria ecos de si mesmo em combate.' },
    { name: 'Samurai', nivel: 3, descricao: 'Guerreiro com honra, com bônus de combate e vantagem.' },
    { name: 'Cavaleiro (Cavalier)', nivel: 3, descricao: 'Guerreiro montado, especialista em defesa e marcação.' }
  ],
  mago: [
    { name: 'Escola de Abjuração', nivel: 2, descricao: 'Especialista em magias de proteção e contrafeitiços.' },
    { name: 'Escola de Evocação', nivel: 2, descricao: 'Mestre das magias de dano elemental.' },
    { name: 'Escola de Transmutação', nivel: 2, descricao: 'Manipula a estrutura da matéria e da energia.' },
    { name: 'Escola de Adivinhação', nivel: 2, descricao: 'Mago vidente, com magias de profecia e revelação.' },
    { name: 'Escola de Conjuração', nivel: 2, descricao: 'Mago invocador, com magias de transporte e invocação.' },
    { name: 'Escola de Encantamento', nivel: 2, descricao: 'Mago manipulador, com magias de charme e controle mental.' },
    { name: 'Escola de Ilusão', nivel: 2, descricao: 'Mago enganador, com magias de ilusão e medo.' },
    { name: 'Escola de Necromancia', nivel: 2, descricao: 'Mago sombrio, com magias de mortos-vivos e energia negativa.' },
    { name: 'Escola de Magia de Guerra (War Magic)', nivel: 2, descricao: 'Mago de combate, com defesas arcanas e poder de fogo.' },
    { name: 'Escola de Gravitação (Graviturgy)', nivel: 2, descricao: 'Mago com poder sobre a gravidade.' },
    { name: 'Escola Temporal (Chronurgy)', nivel: 2, descricao: 'Mago com controle sobre o tempo.' },
    { name: 'Trilha do Artilheiro (Bladesinger)', nivel: 2, descricao: 'Mago élfico que mistura magia e combate corpo a corpo.' }
  ],
  monge: [
    { name: 'Caminho da Mão Aberta', nivel: 3, descricao: 'Monge focado em técnicas de Ki desimpedidas.' },
    { name: 'Caminho das Sombras', nivel: 3, descricao: 'Monge que canaliza o Ki para criar escuridão e se esconder.' },
    { name: 'Caminho dos Quatro Elementos', nivel: 3, descricao: 'Monge elemental que manipula fogo, água, ar e terra.' },
    { name: 'Caminho do Kensei', nivel: 3, descricao: 'Monge que arma-se com armas e arcos como extensões do Ki.' },
    { name: 'Caminho do Mestre do Vinho (Drunken)', nivel: 3, descricao: 'Monge com estilo único, combinando bebida e Ki.' },
    { name: 'Caminho do Long Death', nivel: 3, descricao: 'Monge que canaliza o Ki para manipular a linha entre vida e morte.' },
    { name: 'Caminho do Sun Soul', nivel: 3, descricao: 'Monge com Ki radiante, que queima inimigos.' },
    { name: 'Caminho do Mercy (Mercy)', nivel: 3, descricao: 'Monge com Ki curativo, capaz de curar e ferir.' },
    { name: 'Caminho do Astral Self', nivel: 3, descricao: 'Monge que projeta uma versão astral de si mesmo.' }
  ],
  paladino: [
    { name: 'Juramento de Devoção', nivel: 3, descricao: 'Paladino da justiça e da ordem tradicionais.' },
    { name: 'Juramento dos Anciões', nivel: 3, descricao: 'Paladino que segue os caminhos dos deuses antigos.' },
    { name: 'Juramento de Vingança', nivel: 3, descricao: 'Paladino implacável contra os que cometem grandes males.' },
    { name: 'Juramento da Coroa (Crown)', nivel: 3, descricao: 'Paladino líder, com bônus de intimidação e controle.' },
    { name: 'Juramento da Glória (Glory)', nivel: 3, descricao: 'Paladino heroico, com habilidades de combate épico.' },
    { name: 'Juramento da Proteção (Redemption)', nivel: 3, descricao: 'Paladino pacífico, focado em redenção e não-violência.' },
    { name: 'Juramento do Vigário (Watchers)', nivel: 3, descricao: 'Paladino protetor contra ameaças extraplanares.' },
    { name: 'Juramento do Conquistador (Conquest)', nivel: 3, descricao: 'Paladino sombrio, com medo e controle de mente.' },
    { name: 'Juramento do Pôr do Sol (Treachery)', nivel: 3, descricao: 'Paladino traiçoeiro, com magias de controle e engano.' }
  ],
  ranger: [
    { name: 'Caçador', nivel: 3, descricao: 'Ranger focado em técnicas de caça contra presas específicas.' },
    { name: 'Mestre de Feras', nivel: 3, descricao: 'Ranger acompanhado por um companheiro animal leal.' },
    { name: 'Errante Cinzento (Gloom Stalker)', nivel: 3, descricao: 'Ranger sombrio, especialista em emboscadas e invisibilidade na escuridão.' },
    { name: 'Caminho do Destruidor (Horizon Walker)', nivel: 3, descricao: 'Ranger planar, com poderes sobre outras dimensões.' },
    { name: 'Caminho do Monstro (Monster Slayer)', nivel: 3, descricao: 'Ranger especializado em caçar monstros e criaturas mágicas.' },
    { name: 'Caminho do Guardião (Swarmkeeper)', nivel: 3, descricao: 'Ranger com um enxame de espíritos animais aliados.' },
    { name: 'Caminho da Lâmina (Drakewarden)', nivel: 3, descricao: 'Ranger com um companheiro dracônico.' },
    { name: 'Caminho da Fera Primordial (Primeval Guardian)', nivel: 3, descricao: 'Ranger com poderes primordiais de proteção.' },
    { name: 'Caminho do Caçador Furtivo (Fey Wanderer)', nivel: 3, descricao: 'Ranger com poderes feéricos, de charme e medo.' }
  ],
  ladino: [
    { name: 'Ladrão', nivel: 3, descricao: 'Ladino clássico, mestre da escalada, fintagem e mãos rápidas.' },
    { name: 'Assassino', nivel: 3, descricao: 'Ladino letal, especialista em emboscadas e一击致命.' },
    { name: 'Trapaceiro Arcano', nivel: 3, descricao: 'Ladino que mistura truques arcanos com a sua trapaçaria.' },
    { name: 'Lâmina Psíquica (Soulknife)', nivel: 3, descricao: 'Ladino com poder psônico, cria lâminas mentais e usa habilidades telepáticas.' },
    { name: 'Espião (Swashbuckler)', nivel: 3, descricao: 'Ladino carismático, especialista em combate individual e estilo.' },
    { name: 'Investigador (Investigator)', nivel: 3, descricao: 'Ladino detetive, analisa fraquezas dos inimigos antes de atacar.' },
    { name: 'Mestre da Trapaça (Mastermind)', nivel: 3, descricao: 'Ladino manipulador, com truques de intimidação e controle social.' },
    { name: 'Escarlate (Scout)', nivel: 3, descricao: 'Ladino batedor, especialista em sobrevivência e combate na natureza.' }
  ],
  feiticeiro: [
    { name: 'Dracônico (Ancestral Draconata)', nivel: 1, descricao: 'Linhagem de dragões, com HP extra e magia elemental.' },
    { name: 'Magia Selvagem', nivel: 1, descricao: 'Magia instável e imprevisível, com efeitos caóticos.' },
    { name: 'Linhagem Divina (Divine Soul)', nivel: 1, descricao: 'Linhagem celestial, com magias de cura e dano radiante.' },
    { name: 'Linhagem do Aberrante (Aberrant Mind)', nivel: 1, descricao: 'Magia psiónica e telepática, com magias de controle mental.' },
    { name: 'Alma Mecânica (Clockwork Soul)', nivel: 1, descricao: 'Magia ordenada, com magias de proteção e ordem.' },
    { name: 'Magia da Tempestade (Storm Sorcery)', nivel: 1, descricao: 'Linhagem elemental, com magias de raio e vento.' },
    { name: 'Linhagem das Sombras (Shadow Magic)', nivel: 1, descricao: 'Linhagem sombria, com magias de escuridão e medo.' }
  ],
  bruxo: [
    { name: 'O Arquifada', nivel: 1, descricao: 'Pacto com um Arquifada (ser celestial), ganhando uma espada sentiente.' },
    { name: 'O Corruptor', nivel: 1, descricao: 'Pacto com um Corruptor (fada sombria), com livro de sombras e magias de ilusão.' },
    { name: 'O Grande Antigo', nivel: 1, descricao: 'Pacto com uma entidade cósmica alienígena, com magias de controle mental.' },
    { name: 'O Hexblade', nivel: 1, descricao: 'Pacto com uma entidade do Plano das Sombras, com poder sobre maldições.' },
    { name: 'O Celestial', nivel: 1, descricao: 'Pacto com um ser celestial, com magias de cura e dano radiante.' },
    { name: 'O Não-Morto (Undying)', nivel: 1, descricao: 'Pacto com um ser não-morto, com magias de necromancia e resistência.' },
    { name: 'O Fathomless', nivel: 1, descricao: 'Pacto com uma entidade abissal marinha, com magias de água e tentáculos.' },
    { name: 'O Genie', nivel: 1, descricao: 'Pacto com um gênio elemental, com magias elementais e bônus de maravilha.' }
  ]
};
