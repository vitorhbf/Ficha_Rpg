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
  },
  goblin: {
    name: 'Goblin',
    bonusAtributos: { dexterity: 2, constitution: 1 },
    tamanho: 'Pequeno',
    velocidade: '30 pés',
    idiomas: 'Comum, Goblinês',
    descricao: 'Goblin são criaturas pequenas e astutas, conhecidas por sua agilidade e natureza caótica.'
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
      { name: 'Mensagem (Message)', level: 0, descricao: 'Você aponta o dedo em direção a uma criatura dentro do alcance e sussurra uma mensagem. O alvo (e somente ele) ouve a mensagem e pode responder em sussurro que só você ouve. Você pode lançar este truque através de objetos sólidos se conhecer o alvo e ele estiver dentro do alcance.', dano: 'Não causa dano direto', alcance: '36 m', alvos: '2 alvos' },
      { name: 'Prestidigitação (Prestidigitation)', level: 0, descricao: 'Você cria um dos seguintes efeitos mágicos menores: acender ou apagar uma chama; limpar ou sujar um objeto; esfriar, aquecer ou dar sabor a até 0,03 m³ de material não vivo; criar um pequeno efeito sensório (cheiro, som, imagem); criar uma marca ou símbolo em uma superfície. Cada efeito dura até 1 hora.', dano: 'Não causa dano direto', alcance: '3 m', alvos: 'Varia pelo efeito' },
      { name: 'Ilusão Menor (Minor Illusion)', level: 0, descricao: 'Você cria um som ou imagem de um objeto dentro do alcance que dura 1 minuto. A ilusão termina se você a dispensar ou lançar este truque novamente. Se criar um som, ele pode ser qualquer voz, música, animal ou outro som. Se criar uma imagem, ela não pode exceder 1,5 m³ e não pode produzir luz, som, cheiro ou qualquer outro efeito sensório. Uma criatura pode usar sua ação para examinar o som ou imagem e fazer um teste de Investigação contra a CD da sua magia.', dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo (objeto)' },
      { name: 'Amizade (Friends)', level: 0, descricao: 'Durante a duração, você tem vantagem em todos os testes de Carisma direcionados a uma criatura não hostil de sua escolha. Quando a magia terminar, a criatura percebe que você usou magia para influenciá-la e fica hostil a você. Uma criatura que seja propensa à violência pode atacar você.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: '1 alvo' },
      { name: 'Luz (Light)', level: 0, descricao: 'Você toca um objeto que não seja maior que 3 m em qualquer dimensão. Até o fim da duração, o objeto emite luz brilhante em um raio de 6 m e luz fraca por mais 6 m. A cor da luz pode ser escolhida por você. Se um ser hostil estiver segurando ou carregando o objeto, ele pode fazer um teste de Destreza para evitar o efeito.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo (objeto)' },
      { name: 'Mãos Mágicas (Mage Hand)', level: 0, descricao: 'Uma mão espectral flutuante aparece no ponto que você escolher dentro do alcance. A mão dura 1 minuto e desaparece se você a dispensar ou lançar este truque novamente. Você pode usar a mão para manipular um objeto, abrir uma porta ou recipiente destrancado, guardar ou recuperar um item de um recipiente aberto, ou derramar o conteúdo de um frasco. A mão não pode atacar, ativar itens mágicos ou carregar mais de 5 kg.', dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo (objeto)' },
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Sono (Sleep)', level: 1, descricao: 'Você escolhe um ponto dentro do alcance. Criaturas em um raio de 6 m a partir desse ponto devem fazer um teste de resistência de Constituição. As criaturas são afetadas em ordem, começando pelas que têm menos PV. As criaturas afetadas ficam inconscientes. Uma criatura que sofre dano ou recebe um teste de habilidade com vantagem acaba com o efeito.', dano: 'Não causa dano direto (efeito)', alcance: '27 m', alvos: 'Múltiplos alvos' },
        { name: 'Cativar Pessoa (Charm Person)', level: 1, descricao: 'Você aponta uma criatura que possa ser vista dentro do alcance. A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, você a encanta até o fim da duração ou até que você ou seus aliados causem dano nela. Enquanto encantada, a criatura te trata como um amigo e tem desvantagem em testes de habilidade para detectar que foi encantada.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo humanoide' },
        { name: 'Acalmar Emoções (Calm Emotions)', level: 1, descricao: 'Você escolhe um ponto dentro do alcance. Criaturas em uma esfera de 6 m a partir desse ponto devem fazer um teste de resistência de Sabedoria. Você pode suprimir qualquer efeito que cause medo ou encantamento nelas, ou torná-las indiferentes se já estiverem hostis. As criaturas indiferentes não atacam você a menos que sejam provocadas.', dano: 'Não causa dano direto (efeito)', alcance: '18 m', alvos: 'Múltiplos alvos' }
      ],
      '2º Círculo': [
        { name: 'Sugestão (Suggestion)', level: 2, descricao: 'Você faz uma sugestão razoável (máximo de 10 palavras) para uma criatura que possa ser vista e ouvida por você dentro do alcance. Ela deve fazer um teste de resistência de Sabedoria. Se falhar, seguirá a sugestão o máximo possível durante a duração. A sugestão deve ser feita de forma que pareça natural.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo' },
        { name: 'Silêncio (Silence)', level: 2, descricao: 'Você escolhe um ponto dentro do alcance. Uma esfera de 6 m de raio a partir desse ponto fica imersa em silêncio. Nenhum som é emitido ou pode ser ouvido dentro da esfera. Magias com componente verbal não podem ser lançadas dentro da área.', dano: 'Não causa dano direto', alcance: '36 m', alvos: 'Múltiplos alvos' },
        { name: 'Invisibilidade (Invisibility)', level: 2, descricao: 'Você toca uma criatura e ela fica invisível até o fim da duração ou até que ataque, lance uma magia ou use uma ação de reação. A invisibilidade termina se a criatura causar dano ou lançar uma magia.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' }
      ],
      '3º Círculo': [
        { name: 'Muro de Vento (Wind Wall)', level: 3, descricao: 'Você cria um muro de vento forte que bloqueia projéteis e criaturas voadoras. O muro tem 15 m de comprimento, 3 m de altura e 0,3 m de espessura. Criaturas que tentam atravessar o muro devem fazer um teste de resistência de Força. Se falharem, são empurradas para trás 1,5 m.', dano: 'Não causa dano direto (efeito)', alcance: '36 m', alvos: 'Múltiplos alvos' },
        { name: 'Círculo Mágico (Magic Circle)', level: 3, descricao: 'Você cria um círculo mágico no chão em um ponto dentro do alcance. O círculo tem 3 m de raio e 6 m de altura. Ele protege contra criaturas de um tipo específico (celestial, elemental, fada, infernal ou morto-vivo). As criaturas do tipo escolhido não podem entrar na área ou atacar através do círculo.', dano: 'Não causa dano direto', alcance: '3 m', alvos: '1 alvo (área protegida)' },
        { name: 'Hipnotizar (Hypnotic Pattern)', level: 3, descricao: 'Você cria um padrão de luzes coloridas que se movem em um cubo de 9 m. Criaturas no cubo devem fazer um teste de resistência de Sabedoria. Se falharem, ficam enfeitiçadas até o fim da duração. Uma criatura enfeitiçada fica incapacitada e não se move, a menos que seja empurrada.', dano: 'Não causa dano direto (efeito)', alcance: '36 m', alvos: 'Múltiplos alvos' }
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
      { name: 'Orientação (Guidance)', level: 0, descricao: 'Você toca uma criatura disposta. Uma vez antes da magia terminar, o alvo pode rolar 1d4 e adicionar o número rolado a um teste de habilidade de sua escolha. Ele pode rolar o dado antes ou depois de fazer o teste de habilidade. A magia termina após isso.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
      { name: 'Luz (Light)', level: 0, descricao: 'Você toca um objeto que não seja maior que 3 m em qualquer dimensão. Até o fim da duração, o objeto emite luz brilhante em um raio de 6 m e luz fraca por mais 6 m. A cor da luz pode ser escolhida por você. Se um ser hostil estiver segurando ou carregando o objeto, ele pode fazer um teste de Destreza para evitar o efeito.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo (objeto)' },
      { name: 'Chama Sagrada (Sacred Flame)', level: 0, descricao: 'Chamas semelhantes à luz radiante descem sobre uma criatura que você possa ver dentro do alcance. O alvo deve ser bem-sucedido em um teste de resistência de Destreza ou sofrer 1d8 de dano radiante. O alvo não se beneficia de cobertura para este teste de resistência. O dano aumenta em 1d8 quando você atinge o 5º nível (2d8), 11º nível (3d8) e 17º nível (4d8).', dano: '1d8 radiante', alcance: '18 m', alvos: '1 alvo' },
      { name: 'Thaumaturgia (Thaumaturgy)', level: 0, descricao: 'Você manifesta um sinal menor de poder sobrenatural. Você cria um dos seguintes efeitos mágicos: sua voz ecoa até três vezes mais alto pelo próximo minuto; chamas tremem, ficam mais brilhantes ou mudam de cor pelo próximo minuto; tremores inofensivos no chão pelo próximo minuto; um som instantâneo que se origina de um ponto de sua escolha; você abre ou fecha instantaneamente uma porta ou janela destrancada.', dano: 'Não causa dano direto', alcance: '9 m', alvos: 'Varia pelo efeito' },
      { name: 'Voz Divina (Word of Radiance)', level: 0, descricao: 'Você pronuncia uma palavra divina e energia radiante irrompe de você. Cada criatura de sua escolha que você possa ver dentro do alcance deve ser bem-sucedida em um teste de resistência de Constituição ou sofrer 1d6 de dano radiante. O dano aumenta em 1d6 quando você atinge o 5º nível (2d6), 11º nível (3d6) e 17º nível (4d6).', dano: '1d6 radiante', alcance: '1,5 m', alvos: 'Múltiplos alvos' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Curar Feridas (Cure Wounds)', level: 1, descricao: 'Você toca uma criatura e ela recupera uma quantidade de PV igual ao 1d8 + seu modificador de Sabedoria (ou outro atributo usado para conjuração). A magia não tem efeito em mortos-vivos.', dano: 'Não causa dano direto (cura)', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Bênção (Bless)', level: 1, descricao: 'Você abençoa até três criaturas de sua escolha dentro do alcance. Enquanto abençoadas, cada criatura adiciona 1d4 ao resultado de seus testes de ataque e de salvaguarda. As criaturas devem ser vistas por você.', dano: 'Não causa dano direto', alcance: '30 m', alvos: '3 alvos' },
        { name: 'Comando (Command)', level: 1, descricao: 'Você fala uma palavra de poder que obriga uma criatura a agir de uma certa forma. A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, segue o comando (como Soltar, Fugir, Pousar, Render-se, etc.) no próximo turno.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo' },
        { name: 'Escudo da Fé (Shield of Faith)', level: 1, descricao: 'Você cria um campo de força celestial que envolve uma criatura. A criatura ganha +2 à CA até o fim da duração. A criatura deve ser vista por você.', dano: 'Não causa dano direto', alcance: '30 m', alvos: '1 alvo' },
        { name: 'Palavra Curativa (Healing Word)', level: 1, descricao: 'Você cura uma criatura que possa ser ouvida por você dentro do alcance. A criatura recupera 1d4 + seu modificador de Sabedoria (ou outro atributo usado para conjuração) em PV. A criatura deve ser vista por você.', dano: 'Não causa dano direto (cura)', alcance: '18 m', alvos: '1 alvo' }
      ],
      '2º Círculo': [
        { name: 'Augúrio (Augury)', level: 2, descricao: 'Você recebe um presságio sobre o resultado de uma ação específica que será realizada nos próximos 30 minutos. O Mestre pode responder com Bem, Mal, Bem e Mal ou Nada. Requer 1 minuto para conjurar e uma oferta sacrificial de 25 po.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Auxílio (Aid)', level: 2, descricao: 'Você toca até três criaturas. Cada criatura ganha +5 PV temporários e seus PV máximos aumentam em 5 até o fim da duração. A criatura deve ser vista por você.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '3 alvos' },
        { name: 'Imobilizar Pessoa (Hold Person)', level: 2, descricao: 'Você escolhe uma criatura humanaide que possa ser vista dentro do alcance. A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, fica paralisado até o fim da duração ou até que sofra dano. Uma criatura paralisada está inconsciente e seus ataques contra ela têm vantagem.', dano: 'Não causa dano direto (efeito)', alcance: '18 m', alvos: '1 alvo humanoide' },
        { name: 'Restauração Menor (Lesser Restoration)', level: 2, descricao: 'Você toca uma criatura e remove dela uma condição adversa: cega, surda, envenenada, paralisada, ou uma doença. A criatura deve ser vista por você.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' }
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
      { name: 'Orientação (Guidance)', level: 0, descricao: 'Você toca uma criatura disposta. Uma vez antes da magia terminar, o alvo pode rolar 1d4 e adicionar o número rolado a um teste de habilidade de sua escolha. Ele pode rolar o dado antes ou depois de fazer o teste de habilidade. A magia termina após isso.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
      { name: 'Druidismo (Druidcraft)', level: 0, descricao: 'Truque — Duração Instantânea. Predizer clima, fazer uma flor brotar, acender/apagar chama, etc. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
      { name: 'Produzir Chamas (Produce Flame)', level: 0, descricao: 'Truque — Duração 10 minutos. Ilumina 3 m ou dispara chama. Dano: 1d8 ígneo, Teste de Constituição, alcance 9 m.', dano: '1d8 ígneo', alcance: '9 m', alvos: '1 alvo' },
      { name: 'Chicote de Espinhos (Thorn Whip)', level: 0, descricao: 'Truque — Duração Instantâneo. Dano: 1d6 perfurante, Teste de Força, alcance 9 m, 9 m de puxão.', dano: '1d6 perfurante', alcance: '9 m', alvos: '1 alvo' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Curar Feridas (Cure Wounds)', level: 1, descricao: 'Você toca uma criatura e ela recupera uma quantidade de PV igual ao 1d8 + seu modificador de Sabedoria. A magia não tem efeito em mortos-vivos.', dano: 'Não causa dano direto (cura)', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Emaranhar (Entangle)', level: 1, descricao: 'Plantas ágeis e enredadores se espalham a partir de um ponto dentro do alcance, criando um quadrado de 6 m. Criaturas no quadrado devem fazer um teste de resistência de Força. Se falharem, ficam enraizadas (restritas) até o fim da duração.', dano: 'Não causa dano direto (efeito)', alcance: '27 m', alvos: 'Múltiplos alvos' },
        { name: 'Bagas Boas (Goodberry)', level: 1, descricao: 'Você toca uma planta e cria até 10 bagas mágicas. Cada baga cura 1 PV quando comida e alimenta uma criatura por um dia. As bagas são inofensivas e saborosas.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: 'Até 10 alvos' },
        { name: 'Palavra Curativa (Healing Word)', level: 1, descricao: 'Você cura uma criatura que possa ser ouvida por você dentro do alcance. A criatura recupera 1d4 + seu modificador de Sabedoria em PV. A criatura deve ser vista por você.', dano: 'Não causa dano direto (cura)', alcance: '18 m', alvos: '1 alvo' }
      ],
      '2º Círculo': [
        { name: 'Pele de Árvore (Barkskin)', level: 2, descricao: 'Você toca uma criatura. Até o fim da duração, a pele da criatura fica áspera e casca como a de uma árvore. A CA mínima da criatura é 16, se já não for maior.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Rajada de Vento (Gust of Wind)', level: 2, descricao: 'Você cria uma linha de vento forte que se estende de você em uma direção. Criaturas na linha devem fazer um teste de resistência de Força. Se falharem, são empurradas para trás 4,5 m e sua velocidade é reduzida pela metade até o fim do próximo turno.', dano: 'Não causa dano direto (efeito)', alcance: 'Pessoal', alvos: 'Múltiplos alvos' },
        { name: 'Passo sem Rastro (Pass without Trace)', level: 2, descricao: 'Você cria uma aura que envolve você e até dez criaturas que escolher dentro do alcance. Enquanto dentro da aura, você e as criaturas ganham +10 em testes de Furtividade e não deixam rastros físicos.', dano: 'Não causa dano direto', alcance: 'Pessoal', alvos: 'Múltiplos alvos' },
        { name: 'Esfera Flamejante (Flaming Sphere)', level: 2, descricao: 'Você cria uma esfera de fogo de 1,5 m de raio em um ponto dentro do alcance. A esfera derrama luz brilhante em 6 m e penumbra em mais 6 m. A cada turno, você pode usar uma ação bônus para mover a esfera até 9 m e empurrá-la contra uma criatura, causando dano.', dano: '2d6 ígneo', alcance: '18 m', alvos: '1 alvo por turno' }
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
      { name: 'Mãos Mágicas (Mage Hand)', level: 0, descricao: 'Truque — Duração 1 minuto. Mão espectral manipula até 5 kg a 9 m. Sem ataque.', dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo (objeto)' },
      { name: 'Prestidigitação (Prestidigitation)', level: 0, descricao: 'Truque — Duração até 1 hora. Pequenos truques. Sem ataque.', dano: 'Não causa dano direto', alcance: '3 m', alvos: 'Varia pelo efeito' },
      { name: 'Ilusão Menor (Minor Illusion)', level: 0, descricao: 'Truque — Duração 1 minuto. Som ou imagem 1,5 m³. Sem ataque.', dano: 'Não causa dano direto', alcance: '18 m', alvos: '1 alvo (objeto)' },
      { name: 'Toque Chocante (Shocking Grasp)', level: 0, descricao: 'Truque — Duração Instantâneo. Dano: 1d8 elétrico. Vantagem contra alvo com armadura metálica. Reação. 1 alvo. Toque.', dano: '1d8 elétrico', alcance: 'Toque', alvos: '1 alvo' },
      { name: 'Raio de Gelo (Ray of Frost)', level: 0, descricao: 'Truque — Duração Instantâneo. Dano: 1d8 frio. Reduz velocidade em 3 m. Teste de Constituição, alcance 18 m.', dano: '1d8 frio', alcance: '18 m', alvos: '1 alvo' },
      { name: 'Luz (Light)', level: 0, descricao: 'Truque — Duração 1 hora. Luz em 6 m. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo (objeto)' },
      { name: 'Mensagem (Message)', level: 0, descricao: 'Truque — Duração 1 rodada. Sussurra mensagem a 36 m. Sem ataque.', dano: 'Não causa dano direto', alcance: '36 m', alvos: '2 alvos' },
      { name: 'Raio de Fogo (Fire Bolt)', level: 0, descricao: 'Truque — Duração Instantâneo. Dano: 1d10 ígneo. Teste de Destreza, alcance 36 m.', dano: '1d10 ígneo', alcance: '36 m', alvos: '1 alvo' },
      { name: 'Rajada de Veneno (Poison Spray)', level: 0, descricao: 'Truque — Duração Instantâneo. Dano: 1d12 venenoso. Teste de Constituição, alcance 3 m.', dano: '1d12 venenoso', alcance: '3 m', alvos: '1 alvo' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Mísseis Mágicos (Magic Missile)', level: 1, descricao: 'Você cria três dardos de força que atingem automaticamente uma ou mais criaturas dentro do alcance. Cada dardo causa 1d4+1 de dano de força. Você pode distribuir os dardos entre quantas criaturas quiser, mas cada criatura pode ser atingida por no máximo um dardo.', dano: '1d4+1 força por dardo (3 dardos)', alcance: '36 m', alvos: '1-3 alvos' },
        { name: 'Escudo Arcano (Shield)', level: 1, descricao: 'Você cria um escudo de força invisível em frente a você. O escudo dura até o início do seu próximo turno e oferece +5 à CA contra todos os ataques. O escudo surge automaticamente quando você é atingido por um ataque.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Armadura Arcana (Mage Armor)', level: 1, descricao: 'Você toca uma criatura não equipada com armadura. Até o fim da duração, a CA da criatura é 13 + seu modificador de Destreza. A magia não tem efeito se a criatura já estiver usando armadura.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Identificar (Identify)', level: 1, descricao: 'Você toca um objeto e aprende suas propriedades mágicas, incluindo qual magia foi usada para criá-lo (se aplicável), quantos cargos ou usos restantes tiver e quaisquer outras informações relevantes. Requer 1 minuto para conjurar.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo (objeto)' },
        { name: 'Proteção contra o Mal e o Bem (Protection from Evil and Good)', level: 1, descricao: 'Você toca uma criatura e cria uma barreira protetora contra celestiais, elementais, fadas, infernais e mortos-vivos. A criatura protegida não pode ser atacada por essas criaturas e testes de habilidade contra elas têm vantagem.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Onda Trovejante (Thunderwave)', level: 1, descricao: 'Você cria uma onda de som trovejante que se expande a partir de você em um cubo de 4,5 m. Criaturas na área devem fazer um teste de resistência de Constituição. Se falharem, recebem dano e são empurradas para trás 3 m.', dano: '2d8 trovejante', alcance: '4,5 m', alvos: 'Múltiplos alvos' }
      ],
      '2º Círculo': [
        { name: 'Invisibilidade (Invisibility)', level: 2, descricao: 'Você toca uma criatura e ela fica invisível até o fim da duração ou até que ataque, lance uma magia ou use uma ação de reação. A invisibilidade termina se a criatura causar dano ou lançar uma magia.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Passo Nebuloso (Misty Step)', level: 2, descricao: 'Você se teleporta até 9 m para um espaço que possa ver. Você se transforma momentaneamente em névoa até chegar ao destino. Você pode usar esta magia mesmo se estiver enfeitiçado ou paralisado.', dano: 'Não causa dano direto', alcance: '9 m', alvos: 'Apenas o conjurador' },
        { name: 'Sugestão (Suggestion)', level: 2, descricao: 'Você faz uma sugestão razoável (máximo de 10 palavras) para uma criatura que possa ser vista e ouvida por você dentro do alcance. Ela deve fazer um teste de resistência de Sabedoria. Se falhar, seguirá a sugestão o máximo possível durante a duração.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo' },
        { name: 'Nuvem de Névoa (Fog Cloud)', level: 2, descricao: 'Você cria uma esfera de neblina pesada de 6 m de raio em um ponto dentro do alcance. A neblina bloqueia visão e dá desvantagem em testes de Percepção baseados em visão. O vento forte dissipa a neblina.', dano: 'Não causa dano direto', alcance: '120 m', alvos: 'Múltiplos alvos' },
        { name: 'Manto do Cruzado (Mirror Image)', level: 2, descricao: 'Você cria três duplicatas de si mesmo até o fim da duração. Ataques contra você têm 1 chance em 3 de acertar uma duplicata em vez de você. Uma duplicata é destruída quando um ataque a acerta.', dano: 'Não causa dano direto', alcance: '12 m', alvos: 'Apenas o conjurador' }
      ],
      '3º Círculo': [
        { name: 'Bola de Fogo (Fireball)', level: 3, descricao: 'Você cria uma bola de fogo no ponto de sua escolha dentro do alcance. A bola explode em um raio de 6 m, causando 8d6 de dano ígneo. Criaturas na área devem fazer um teste de resistência de Destreza. Se falharem, recebem o dano total. Se acertarem, recebem metade do dano.', dano: '8d6 ígneo', alcance: '150 m', alvos: 'Múltiplos alvos' },
        { name: 'Contramágica (Counterspell)', level: 3, descricao: 'Você interrompe uma criatura que está conjurando uma magia. Se a magia for de 3º círculo ou menor, ela é anulada automaticamente. Se for de nível superior, a criatura deve fazer um teste de habilidade de conjuração com desvantagem.', dano: 'Não causa dano direto', alcance: '60 m', alvos: '1 alvo' },
        { name: 'Tempestade de Gelo (Ice Storm)', level: 3, descricao: 'Você cria uma chuva de pedras de gelo em um cilindro de 6 m de raio e 3 m de altura dentro do alcance. O dano inicial é 4d6 de dano frio e 2d6 de dano cortante. Criaturas na área devem fazer um teste de resistência de Destreza. Se falharem, recebem o dano total.', dano: '4d6 frio + 2d6 cortante', alcance: '120 m', alvos: 'Múltiplos alvos' },
        { name: 'Dissipar Magia (Dispel Magic)', level: 3, descricao: 'Você escolhe uma criatura, objeto ou magia dentro do alcance. Se for uma magia, ela é encerrada se for de 3º círculo ou menor. Se for de nível superior, o alvo deve fazer um teste de habilidade de conjuração. Se falhar, a magia é encerrada.', dano: 'Não causa dano direto', alcance: '120 m', alvos: '1 alvo' },
        { name: 'Voar (Fly)', level: 3, descricao: 'Você toca uma criatura e ela ganha uma velocidade de voo de 18 m até o fim da duração. A criatura deve ser vista por você. Se a magia terminar enquanto a criatura estiver no ar, ela cai.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' }
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
      { name: 'Toque Sagrado (Sacred Flame)', level: 0, descricao: 'Dano: 1d8 radiante. Teste de Destreza, alcance 18 m. 1 alvo. (Em português é Chama Sagrada; mesmo feitiço.)', dano: '1d8 radiante', alcance: '18 m', alvos: '1 alvo' },
      { name: 'Orientação Divina (Divine Guidance)', level: 0, descricao: 'Truque (Xanathar). Adiciona +1d4 a um teste de ataque ou salvaguarda.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
      { name: 'Luz (Light)', level: 0, descricao: 'Duração 1 hora. Luz em 6 m. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo (objeto)' },
      { name: 'Thaumaturgia (Thaumaturgy)', level: 0, descricao: 'Pequenos milagres: voz ecoante, chamas tremem, etc. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Bênção (Bless)', level: 1, descricao: 'Você abençoa até três criaturas de sua escolha dentro do alcance. Enquanto abençoadas, cada criatura adiciona 1d4 ao resultado de seus testes de ataque e de salvaguarda. As criaturas devem ser vistas por você.', dano: 'Não causa dano direto', alcance: '30 m', alvos: '3 alvos' },
        { name: 'Curar Feridas (Cure Wounds)', level: 1, descricao: 'Você toca uma criatura e ela recupera uma quantidade de PV igual ao 1d8 + seu modificador de Carisma. A magia não tem efeito em mortos-vivos.', dano: 'Não causa dano direto (cura)', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Comando (Command)', level: 1, descricao: 'Você fala uma palavra de poder que obriga uma criatura a agir de uma certa forma. A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, segue o comando (como Soltar, Fugir, Pousar, Render-se, etc.) no próximo turno.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo' },
        { name: 'Palavra Curativa (Healing Word)', level: 1, descricao: 'Você cura uma criatura que possa ser ouvida por você dentro do alcance. A criatura recupera 1d4 + seu modificador de Carisma em PV. A criatura deve ser vista por você.', dano: 'Não causa dano direto (cura)', alcance: '18 m', alvos: '1 alvo' },
        { name: 'Escudo da Fé (Shield of Faith)', level: 1, descricao: 'Você cria um campo de força celestial que envolve uma criatura. A criatura ganha +2 à CA até o fim da duração. A criatura deve ser vista por você.', dano: 'Não causa dano direto', alcance: '30 m', alvos: '1 alvo' },
        { name: 'Punição Marcante (Searing Smite)', level: 1, descricao: 'Quando você acertar um ataque corpo a corpo com uma arma, você pode ativar esta magia. O alvo recebe dano extra de 1d6 ígneo e, a cada turno até o fim da duração, recebe 1d6 ígneo extra se estiver tocando você ou estiver a 1,5 m de você.', dano: 'Não causa dano direto (bônus de ataque)', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
      ],
      '2º Círculo': [
        { name: 'Auxílio (Aid)', level: 2, descricao: 'Você toca até três criaturas. Cada criatura ganha +5 PV temporários e seus PV máximos aumentam em 5 até o fim da duração. A criatura deve ser vista por você.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '3 alvos' },
        { name: 'Imobilizar Pessoa (Hold Person)', level: 2, descricao: 'Você escolhe uma criatura humanaide que possa ser vista dentro do alcance. A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, fica paralisado até o fim da duração ou até que sofra dano. Uma criatura paralisada está inconsciente e seus ataques contra ela têm vantagem.', dano: 'Não causa dano direto (efeito)', alcance: '18 m', alvos: '1 alvo humanoide' },
        { name: 'Restauração Menor (Lesser Restoration)', level: 2, descricao: 'Você toca uma criatura e remove dela uma condição adversa: cega, surda, envenenada, paralisada, ou uma doença. A criatura deve ser vista por você.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Localizar Objeto (Locate Object)', level: 2, descricao: 'Você cria um senso direcional para o objeto mais próximo do tipo descrito. A direção e distância são sentidas mentalmente. Se houver múltiplos objetos do mesmo tipo, o mais próximo é sentido. Requer 1 minuto para conjurar.', dano: 'Não causa dano direto', alcance: 'Pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Marca da Punição (Branding Smite)', level: 2, descricao: 'Quando você acertar um ataque corpo a corpo com uma arma, você pode ativar esta magia. O alvo recebe dano extra de 2d6 radiante e brilha com luz até o fim da duração. O alvo não pode ficar invisível enquanto estiver iluminado.', dano: 'Não causa dano direto (bônus de ataque)', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
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
      { name: 'Orientação (Guidance)', level: 0, descricao: 'Duração 1 min (Concentração). +1d4 em teste. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
      { name: 'Produzir Chamas (Produce Flame)', level: 0, descricao: 'Duração 10 min. Ilumina 3 m ou dispara chama. Dano: 1d8 ígneo, Teste Constituição, alcance 9 m.', dano: '1d8 ígneo', alcance: '9 m', alvos: '1 alvo' },
      { name: 'Chicote de Espinhos (Thorn Whip)', level: 0, descricao: 'Dano: 1d6 perfurante. Teste de Força, alcance 9 m, puxa 9 m.', dano: '1d6 perfurante', alcance: '9 m', alvos: '1 alvo' },
      { name: 'Resistência (Resistance)', level: 0, descricao: 'Duração 1 min (Concentração). +1d4 em teste de salvaguarda. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
      { name: 'Druidcraft', level: 0, descricao: 'Pequenos truques de natureza. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Curar Feridas (Cure Wounds)', level: 1, descricao: 'Você toca uma criatura e ela recupera uma quantidade de PV igual ao 1d8 + seu modificador de Sabedoria. A magia não tem efeito em mortos-vivos.', dano: 'Não causa dano direto (cura)', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Marca do Caçador (Hunter\'s Mark)', level: 1, descricao: 'Você escolhe uma criatura dentro do alcance e a marca até o fim da duração. Enquanto marcada, você tem vantagem em testes de Percepção e Investigação para localizá-la. Quando acertar um ataque contra ela, causa 1d6 de dano extra.', dano: 'Não causa dano direto (bônus de ataque)', alcance: '27 m', alvos: '1 alvo' },
        { name: 'Bagas Boas (Goodberry)', level: 1, descricao: 'Você toca uma planta e cria até 10 bagas mágicas. Cada baga cura 1 PV quando comida e alimenta uma criatura por um dia. As bagas são inofensivas e saborosas.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: 'Até 10 alvos' },
        { name: 'Emaranhar (Entangle)', level: 1, descricao: 'Plantas ágeis e enredadores se espalham a partir de um ponto dentro do alcance, criando um quadrado de 6 m. Criaturas no quadrado devem fazer um teste de resistência de Força. Se falharem, ficam enraizadas (restritas) até o fim da duração.', dano: 'Não causa dano direto (efeito)', alcance: '27 m', alvos: 'Múltiplos alvos' }
      ],
      '2º Círculo': [
        { name: 'Esfera Flamejante (Flaming Sphere)', level: 2, descricao: 'Você cria uma esfera de fogo de 1,5 m de raio em um ponto dentro do alcance. A esfera derrama luz brilhante em 6 m e penumbra em mais 6 m. A cada turno, você pode usar uma ação bônus para mover a esfera até 9 m e empurrá-la contra uma criatura, causando dano.', dano: '2d6 ígneo', alcance: '18 m', alvos: '1 alvo por turno' },
        { name: 'Imobilizar Pessoa (Hold Person)', level: 2, descricao: 'Você escolhe uma criatura humanaide que possa ser vista dentro do alcance. A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, fica paralisado até o fim da duração ou até que sofra dano. Uma criatura paralisada está inconsciente e seus ataques contra ela têm vantagem.', dano: 'Não causa dano direto (efeito)', alcance: '18 m', alvos: '1 alvo humanoide' },
        { name: 'Localizar Animais ou Plantas (Locate Animals or Plants)', level: 2, descricao: 'Você cria um senso direcional para o animal ou planta mais próximo do tipo descrito. A direção e distância são sentidas mentalmente. Se houver múltiplos do mesmo tipo, o mais próximo é sentido. Requer 1 minuto para conjurar.', dano: 'Não causa dano direto', alcance: 'Pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Arma Espiritual (Spiritual Weapon)', level: 2, descricao: 'Você cria uma arma flutuante em um ponto dentro do alcance. A arma ataca automaticamente criaturas a cada turno. O dano é 1d8 + seu modificador de Sabedoria. Você pode usar uma ação bônus para mover a arma até 6 m e atacar.', dano: '1d8 + mod. Sabedoria', alcance: '18 m', alvos: '1 alvo por turno' },
        { name: 'Restauração Menor (Lesser Restoration)', level: 2, descricao: 'Você toca uma criatura e remove dela uma condição adversa: cega, surda, envenenada, paralisada, ou uma doença. A criatura deve ser vista por você.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' }
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
      {
        name: 'Ataque Sorrateiro (Sneak Attack)',
        level: 1,
        dano: '1d6 de dano extra',
        alcance: 'Alcance da arma',
        alvos: '1 alvo',
        descricao: 'Adiciona dano extra (1x por turno) ao acertar com ataque usando arma com Furtividade ou à distância, se tiver vantagem ou um aliado adjacente ao alvo.',
        description: 'Adiciona dano extra (1x por turno) ao acertar com ataque usando arma com Furtividade ou à distância, se tiver vantagem ou um aliado adjacente ao alvo.'
      },
      {
        name: 'Perícia (Expertise)',
        level: 1,
        dano: 'Não causa dano direto',
        alcance: 'Uso pessoal',
        alvos: 'Apenas o conjurador',
        descricao: 'Você pode escolher perícias para se tornar particularmente hábil nelas, dobrando o seu bônus de proficiência.',
        description: 'Você pode escolher perícias para se tornar particularmente hábil nelas, dobrando o seu bônus de proficiência.'
      }
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
      { name: 'Prestidigitação (Prestidigitation)', level: 0, descricao: 'Duração até 1 hora. Pequenos efeitos. Sem ataque.', dano: 'Não causa dano direto', alcance: '3 m', alvos: 'Varia pelo efeito' },
      { name: 'Mãos Mágicas (Mage Hand)', level: 0, descricao: 'Duração 1 minuto. Mão espectral, 5 kg, 9 m. Sem ataque.', dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo (objeto)' },
      { name: 'Luz (Light)', level: 0, descricao: 'Duração 1 hora. Luz em 6 m. Sem ataque.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo (objeto)' },
      { name: 'Ilusão Menor (Minor Illusion)', level: 0, descricao: 'Duração 1 minuto. Som ou imagem 1,5 m³. Sem ataque.', dano: 'Não causa dano direto', alcance: '18 m', alvos: '1 alvo (objeto)' },
      { name: 'Toque Chocante (Shocking Grasp)', level: 0, descricao: 'Dano: 1d8 elétrico. Vantagem contra armadura metálica. Reação. 1 alvo.', dano: '1d8 elétrico', alcance: 'Toque', alvos: '1 alvo' },
      { name: 'Raio de Gelo (Ray of Frost)', level: 0, descricao: 'Dano: 1d8 frio. Reduz velocidade 3 m. Alcance 18 m.', dano: '1d8 frio', alcance: '18 m', alvos: '1 alvo' },
      { name: 'Raio de Fogo (Fire Bolt)', level: 0, descricao: 'Dano: 1d10 ígneo. Teste de Destreza, alcance 36 m.', dano: '1d10 ígneo', alcance: '36 m', alvos: '1 alvo' },
      { name: 'Rajada de Veneno (Poison Spray)', level: 0, descricao: 'Dano: 1d12 venenoso. Teste de Constituição, alcance 3 m.', dano: '1d12 venenoso', alcance: '3 m', alvos: '1 alvo' }
    ],
    magiasPorCirculo: {
      '1º Círculo': [
        { name: 'Mísseis Mágicos (Magic Missile)', level: 1, descricao: 'Você cria três dardos de força que atingem automaticamente uma ou mais criaturas dentro do alcance. Cada dardo causa 1d4+1 de dano de força. Você pode distribuir os dardos entre quantas criaturas quiser, mas cada criatura pode ser atingida por no máximo um dardo.', dano: '1d4+1 força por dardo (3 dardos)', alcance: '36 m', alvos: '1-3 alvos' },
        { name: 'Armadura Arcana (Mage Armor)', level: 1, descricao: 'Você toca uma criatura não equipada com armadura. Até o fim da duração, a CA da criatura é 13 + seu modificador de Destreza. A magia não tem efeito se a criatura já estiver usando armadura.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Escudo Arcano (Shield)', level: 1, descricao: 'Você cria um escudo de força invisível em frente a você. O escudo dura até o início do seu próximo turno e oferece +5 à CA contra todos os ataques. O escudo surge automaticamente quando você é atingido por um ataque.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' },
        { name: 'Chama (Burning Hands)', level: 1, descricao: 'Você levanta suas mãos e um fogo explode em um cone de 4,5 m. Criaturas no cone devem fazer um teste de resistência de Destreza. Se falharem, recebem 3d6 de dano ígneo. Se acertarem, recebem metade do dano.', dano: '3d6 ígneo', alcance: '4,5 m', alvos: 'Múltiplos alvos' },
        { name: 'Onda Trovejante (Thunderwave)', level: 1, descricao: 'Você cria uma onda de som trovejante que se expande a partir de você em um cubo de 4,5 m. Criaturas na área devem fazer um teste de resistência de Constituição. Se falharem, recebem dano e são empurradas para trás 3 m.', dano: '2d8 trovejante', alcance: '4,5 m', alvos: 'Múltiplos alvos' },
        { name: 'Maldição (Hex)', level: 1, descricao: 'Você amaldiçoa uma criatura dentro do alcance. Até o fim da duração, você causa 1d6 de dano extra contra o alvo sempre que acertar um ataque contra ele. Você também escolhe um atributo: o alvo tem desvantagem nos testes de habilidade usando aquele atributo.', dano: 'Não causa dano direto (bônus de ataque)', alcance: '90 m', alvos: '1 alvo' }
      ],
      '2º Círculo': [
        { name: 'Invisibilidade (Invisibility)', level: 2, descricao: 'Você toca uma criatura e ela fica invisível até o fim da duração ou até que ataque, lance uma magia ou use uma ação de reação. A invisibilidade termina se a criatura causar dano ou lançar uma magia.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Passo Nebuloso (Misty Step)', level: 2, descricao: 'Você se teleporta até 9 m para um espaço que possa ver. Você se transforma momentaneamente em névoa até chegar ao destino. Você pode usar esta magia mesmo se estiver enfeitiçado ou paralisado.', dano: 'Não causa dano direto', alcance: '9 m', alvos: 'Apenas o conjurador' },
        { name: 'Sugestão (Suggestion)', level: 2, descricao: 'Você faz uma sugestão razoável (máximo de 10 palavras) para uma criatura que possa ser vista e ouvida por você dentro do alcance. Ela deve fazer um teste de resistência de Sabedoria. Se falhar, seguirá a sugestão o máximo possível durante a duração.', dano: 'Não causa dano direto (efeito)', alcance: '9 m', alvos: '1 alvo' },
        { name: 'Manto do Cruzado (Mirror Image)', level: 2, descricao: 'Você cria três duplicatas de si mesmo até o fim da duração. Ataques contra você têm 1 chance em 3 de acertar uma duplicata em vez de você. Uma duplicata é destruída quando um ataque a acerta.', dano: 'Não causa dano direto', alcance: '12 m', alvos: 'Apenas o conjurador' },
        { name: 'Nuvem de Névoa (Fog Cloud)', level: 2, descricao: 'Você cria uma esfera de neblina pesada de 6 m de raio em um ponto dentro do alcance. A neblina bloqueia visão e dá desvantagem em testes de Percepção baseados em visão. O vento forte dissipa a neblina.', dano: 'Não causa dano direto', alcance: '120 m', alvos: 'Múltiplos alvos' },
        { name: 'Nublar (Blur)', level: 2, descricao: 'Você cria uma aura que faz seu corpo parecer borrado e tremeluzente. Ataques contra você têm desvantagem até o fim da duração. Se um ataque acertar, o atacante deve fazer um teste de habilidade de conjuração para confirmar o crítico.', dano: 'Não causa dano direto', alcance: 'Uso pessoal', alvos: 'Apenas o conjurador' }
      ],
      '3º Círculo': [
        { name: 'Bola de Fogo (Fireball)', level: 3, descricao: 'Você cria uma bola de fogo no ponto de sua escolha dentro do alcance. A bola explode em um raio de 6 m, causando 8d6 de dano ígneo. Criaturas na área devem fazer um teste de resistência de Destreza. Se falharem, recebem o dano total. Se acertarem, recebem metade do dano.', dano: '8d6 ígneo', alcance: '150 m', alvos: 'Múltiplos alvos' },
        { name: 'Contramágica (Counterspell)', level: 3, descricao: 'Você interrompe uma criatura que está conjurando uma magia. Se a magia for de 3º círculo ou menor, ela é anulada automaticamente. Se for de nível superior, a criatura deve fazer um teste de habilidade de conjuração com desvantagem.', dano: 'Não causa dano direto', alcance: '60 m', alvos: '1 alvo' },
        { name: 'Tempestade de Gelo (Ice Storm)', level: 3, descricao: 'Você cria uma chuva de pedras de gelo em um cilindro de 6 m de raio e 3 m de altura dentro do alcance. O dano inicial é 4d6 de dano frio e 2d6 de dano cortante. Criaturas na área devem fazer um teste de resistência de Destreza. Se falharem, recebem o dano total.', dano: '4d6 frio + 2d6 cortante', alcance: '120 m', alvos: 'Múltiplos alvos' },
        { name: 'Dissipar Magia (Dispel Magic)', level: 3, descricao: 'Você escolhe uma criatura, objeto ou magia dentro do alcance. Se for uma magia, ela é encerrada se for de 3º círculo ou menor. Se for de nível superior, o alvo deve fazer um teste de habilidade de conjuração. Se falhar, a magia é encerrada.', dano: 'Não causa dano direto', alcance: '120 m', alvos: '1 alvo' },
        { name: 'Voar (Fly)', level: 3, descricao: 'Você toca uma criatura e ela ganha uma velocidade de voo de 18 m até o fim da duração. A criatura deve ser vista por você. Se a magia terminar enquanto a criatura estiver no ar, ela cai.', dano: 'Não causa dano direto', alcance: 'Toque', alvos: '1 alvo' },
        { name: 'Relâmpago (Lightning Bolt)', level: 3, descricao: 'Você cria um raio de eletricidade que se estende em uma linha de 30 m e 1,5 m de largura. Criaturas na linha devem fazer um teste de resistência de Destreza. Se falharem, recebem 8d6 de dano elétrico. Se acertarem, recebem metade do dano.', dano: '8d6 elétrico', alcance: '30 m', alvos: 'Múltiplos alvos' }
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
      { name: 'Prestidigitação (Prestidigitation)', level: 0, descricao: 'Truque — Duração até 1 hora. Pequenos efeitos. Sem ataque.', dano: 'Não causa dano direto', alcance: '3 m', alvos: 'Varia pelo efeito' },
      { name: 'Mãos Mágicas (Mage Hand)', level: 0, descricao: 'Truque — Duração 1 minuto. Mão espectral, 5 kg, 9 m. Sem ataque.', dano: 'Não causa dano direto', alcance: '9 m', alvos: '1 alvo (objeto)' },
      { name: 'Ilusão Menor (Minor Illusion)', level: 0, descricao: 'Truque — Duração 1 minuto. Som ou imagem 1,5 m³. Sem ataque.', description: 'Cantrip — Creates a sound or an image of an object within 1.5 cubic meters. No attack.', dano: 'Não causa dano direto', alcance: '18 m', alvos: '1 alvo (objeto)' },
      { name: 'Raio de Eldritch (Eldritch Blast)', level: 0, descricao: 'Truque — Dano: 1d10 de força. Acerto automático. Alcance 18 m. (Aumenta para 2 feixes no nível 5, 3 no 11, 4 no 17.)', dano: '1d10 força', alcance: '18 m', alvos: '1 alvo' }
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
    {
      name: 'Ladrão (Thief)',
      nivel: 3,
      descricao: 'Ladino clássico, mestre da escalada, fintagem e mãos rápidas.',
      habilidades: [
        {
          name: 'Mãos Rápidas (Fast Hands)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'Você pode usar uma ação bônus para realizar uma ação de interagir com objetos ou usar um item mágico como parte da mesma ação.',
          description: 'Você pode usar uma ação bônus para realizar uma ação de interagir com objetos ou usar um item mágico como parte da mesma ação.'
        }
      ],
      truques: []
    },
    {
      name: 'Assassino (Assassin)',
      nivel: 3,
      descricao: 'Ladino letal, especialista em emboscadas e ataque surpresa.',
      habilidades: [
        {
          name: 'Assassinar (Assassinate)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'No primeiro turno de combate, você tem vantagem em ataques contra criaturas que ainda não agiram. Críticos automáticos contra alvos surpresos.',
          description: 'No primeiro turno de combate, você tem vantagem em ataques contra criaturas que ainda não agiram. Críticos automáticos contra alvos surpresos.'
        }
      ],
      truques: []
    },
    {
      name: 'Trapaceiro Arcano (Arcane Trickster)',
      nivel: 3,
      descricao: 'Ladino que mistura truques arcanos com a sua trapaçaria.',
      habilidades: [
        {
          name: 'Mão de Mago Furtiva (Mage Hand Legerdemain)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'Você pode usar Mãos Mágicas para realizar tarefas de Ladinagem e esconder objetos de forma furtiva.',
          description: 'Você pode usar Mãos Mágicas para realizar tarefas de Ladinagem e esconder objetos de forma furtiva.'
        }
      ],
      truques: [
        {
          name: 'Mãos Mágicas (Mage Hand)',
          level: 0,
          dano: 'Não causa dano direto',
          alcance: '9 m',
          alvos: '1 alvo (objeto)',
          descricao: 'Mão espectral invisível manipula objetos até 5 kg a 9 m. Pode usar para Prestidigitação ou Ladinagem furtivamente.',
          description: 'Mão espectral invisível manipula objetos até 5 kg a 9 m. Pode usar para Prestidigitação ou Ladinagem furtivamente.'
        },
        {
          name: 'Ilusão Menor (Minor Illusion)',
          level: 0,
          dano: 'Não causa dano direto',
          alcance: '9 m',
          alvos: '1 alvo (objeto)',
          descricao: 'Cria som ou imagem inanimada em 9 m. Teste de Investigação para desmascarar.',
          description: 'Cria som ou imagem inanimada em 9 m. Teste de Investigação para desmascarar.'
        },
        {
          name: 'Amigos (Friends)',
          level: 0,
          dano: 'Não causa dano direto',
          alcance: '1,5 m',
          alvos: '1 alvo',
          descricao: 'Vantagem em testes de Carisma contra 1 criatura não hostil. Ela percebe o encantamento ao fim.',
          description: 'Vantagem em testes de Carisma contra 1 criatura não hostil. Ela percebe o encantamento ao fim.'
        }
      ],
      magiasPorCirculo: {
        '1º Círculo': [
          {
            name: 'Sono (Sleep)',
            level: 1,
            dano: 'Não causa dano direto',
            alcance: '27 m',
            alvos: 'Múltiplos alvos',
            descricao: 'Você escolhe um ponto dentro do alcance. Criaturas em um raio de 6 m a partir desse ponto devem fazer um teste de resistência de Constituição. As criaturas são afetadas em ordem, começando pelas que têm menos PV. As criaturas afetadas ficam inconscientes.',
            description: 'Você escolhe um ponto dentro do alcance. Criaturas em um raio de 6 m a partir desse ponto devem fazer um teste de resistência de Constituição. As criaturas são afetadas em ordem, começando pelas que têm menos PV. As criaturas afetadas ficam inconscientes.'
          },
          {
            name: 'Cativar Pessoa (Charm Person)',
            level: 1,
            dano: 'Não causa dano direto',
            alcance: '9 m',
            alvos: '1 alvo humanoide',
            descricao: 'A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, você a encanta até o fim da duração ou até que você ou seus aliados causem dano nela.',
            description: 'A criatura deve fazer um teste de resistência de Sabedoria. Se falhar, você a encanta até o fim da duração ou até que você ou seus aliados causem dano nela.'
          },
          {
            name: 'Disfarçar-se (Disguise Self)',
            level: 1,
            dano: 'Não causa dano direto',
            alcance: 'Uso pessoal',
            alvos: 'Apenas o conjurador',
            descricao: 'Você altera sua aparência física, incluindo altura, peso, detalhes faciais e roupas. A ilusão dura até 1 hora ou até que você a remova.',
            description: 'Você altera sua aparência física, incluindo altura, peso, detalhes faciais e roupas. A ilusão dura até 1 hora ou até que você a remova.'
          },
          {
            name: 'Leque de Cores (Color Spray)',
            level: 1,
            dano: 'Não causa dano direto',
            alcance: 'Uso pessoal',
            alvos: 'Criaturas em um cone de 4,5 m',
            descricao: 'Você cria um cone de luzes coloridas pulsantes. Criaturas no cone com menos pontos de vida atuais ficam cegas por 1 rodada.',
            description: 'Você cria um cone de luzes coloridas pulsantes. Criaturas no cone com menos pontos de vida atuais ficam cegas por 1 rodada.'
          },
          {
            name: 'Escudo Arcano (Shield)',
            level: 1,
            dano: 'Não causa dano direto',
            alcance: 'Uso pessoal',
            alvos: 'Apenas o conjurador',
            descricao: 'Você cria um escudo invisível que oferece +5 de bônus na CA e imunidade a Mísseis Mágicos até o início do seu próximo turno.',
            description: 'Você cria um escudo invisível que oferece +5 de bônus na CA e imunidade a Mísseis Mágicos até o início do seu próximo turno.'
          }
        ],
        '2º Círculo': [
          {
            name: 'Invisibilidade (Invisibility)',
            level: 2,
            dano: 'Não causa dano direto',
            alcance: 'Toque',
            alvos: '1 alvo',
            descricao: 'Você toca uma criatura e ela fica invisível até o fim da duração (Concentração, até 1 hora) ou até que ela ataque ou conjure uma magia.',
            description: 'Você toca uma criatura e ela fica invisível até o fim da duração (Concentração, até 1 hora) ou até que ela ataque ou conjure uma magia.'
          },
          {
            name: 'Passo Nebuloso (Misty Step)',
            level: 2,
            dano: 'Não causa dano direto',
            alcance: '9 m',
            alvos: 'Apenas o conjurador',
            descricao: 'Você se teleporta até 9 m para um espaço vazio que possa ver.',
            description: 'Você se teleporta até 9 m para um espaço vazio que possa ver.'
          },
          {
            name: 'Sugestão (Suggestion)',
            level: 2,
            dano: 'Não causa dano direto',
            alcance: '9 m',
            alvos: '1 alvo',
            descricao: 'Você sugere uma ação para uma criatura. Ela deve passar em um teste de Sabedoria ou seguir o curso de ação por até 8 horas.',
            description: 'Você sugere uma ação para uma criatura. Ela deve passar em um teste de Sabedoria ou seguir o curso de ação por até 8 horas.'
          },
          {
            name: 'Imagem Espelhada (Mirror Image)',
            level: 2,
            dano: 'Não causa dano direto',
            alcance: 'Uso pessoal',
            alvos: 'Apenas o conjurador',
            descricao: 'Você cria três duplicatas ilusórias de si mesmo que confundem os atacantes, durando por 1 minuto.',
            description: 'Você cria três duplicatas ilusórias de si mesmo que confundem os atacantes, durando por 1 minuto.'
          }
        ],
        '3º Círculo': [
          {
            name: 'Piscar (Blink)',
            level: 3,
            dano: 'Não causa dano direto',
            alcance: 'Uso pessoal',
            alvos: 'Apenas o conjurador',
            descricao: 'Role um d20 no final de cada um de seus turnos. Com um resultado de 11 ou mais, você se move para o Plano Etéreo.',
            description: 'Role um d20 no final de cada um de seus turnos. Com um resultado de 11 ou mais, você se move para o Plano Etéreo.'
          },
          {
            name: 'Dissipar Magia (Dispel Magic)',
            level: 3,
            dano: 'Não causa dano direto',
            alcance: '36 m',
            alvos: '1 alvo',
            descricao: 'Você escolhe uma criatura, objeto ou efeito mágico. Qualquer magia de 3º nível ou menor termina.',
            description: 'Você escolhe uma criatura, objeto ou efeito mágico. Qualquer magia de 3º nível ou menor termina.'
          },
          {
            name: 'Medo (Fear)',
            level: 3,
            dano: 'Não causa dano direto',
            alcance: 'Uso pessoal',
            alvos: 'Criaturas em um cone de 9 m',
            descricao: 'Você projeta uma imagem aterrorizante. Criaturas em um cone de 9 m devem passar num teste de Sabedoria ou ficarão amedrontadas.',
            description: 'Você projeta uma imagem aterrorizante. Criaturas em um cone de 9 m devem passar num teste de Sabedoria ou ficarão amedrontadas.'
          }
        ]
      }
    },
    {
      name: 'Lâmina Psíquica (Soulknife)',
      nivel: 3,
      descricao: 'Ladino com poder psônico, cria lâminas mentais e usa habilidades telepáticas.',
      habilidades: [
        {
          name: 'Lâminas Psíquicas (Psychic Blades)',
          level: 3,
          dano: '1d6 psíquico (principal) + 1d4 psíquico (bônus)',
          alcance: '1,5 m (corpo a corpo) ou 18 m (arremesso)',
          alvos: '1 alvo',
          descricao: 'Você materializa lâminas de energia psíquica pura. Como parte de um ataque, você cria uma lâmina que desaparece após o golpe e não pode ser desarmada.',
          description: 'Você materializa lâminas de energia psíquica pura. Como parte de um ataque, você cria uma lâmina que desaparece após o golpe e não pode ser desarmada.'
        },
        {
          name: 'Poder Psiónico (Psionic Power)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'Você possui dados de energia psiónica usados para somar em testes de perícia com proficiência que falharam, adicionando o resultado ao total após a rolagem.',
          description: 'Você possui dados de energia psiónica usados para somar em testes de perícia com proficiência que falharam, adicionando o resultado ao total após a rolagem.'
        },
        {
          name: 'Fala Telepática (Telepathic Speech)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: '1.600 m',
          alvos: 'Criaturas igual à proficiência',
          descricao: 'Você cria um elo telepático com um número de criaturas igual ao seu bônus de proficiência.',
          description: 'Você cria um elo telepático com um número de criaturas igual ao seu bônus de proficiência.'
        }
      ],
      truques: []
    },
    {
      name: 'Espião (Swashbuckler)',
      nivel: 3,
      descricao: 'Ladino carismático, especialista em combate individual e estilo.',
      habilidades: [
        {
          name: 'Movimento Elegante (Rakishness)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'Você se move com graça e evita ataques de oportunidade. Adiciona Carisma aos PV temporários ao usar ação de Ataque.',
          description: 'Você se move com graça e evita ataques de oportunidade. Adiciona Carisma aos PV temporários ao usar ação de Ataque.'
        }
      ],
      truques: []
    },
    {
      name: 'Investigador (Investigator)',
      nivel: 3,
      descricao: 'Ladino detetive, analisa fraquezas dos inimigos antes de atacar.',
      habilidades: [
        {
          name: 'Instinto do Inquisidor (Investigator)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'Você encontra pistas e explora fraquezas com precisão. Pode usar Investigação como ação bônus.',
          description: 'Você encontra pistas e explora fraquezas com precisão. Pode usar Investigação como ação bônus.'
        }
      ],
      truques: []
    },
    {
      name: 'Mestre da Trapaça (Mastermind)',
      nivel: 3,
      descricao: 'Ladino manipulador, com truques de intimidação e controle social.',
      habilidades: [
        {
          name: 'Manipulação Maestral (Mastermind)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'Você engana e direciona aliados e inimigos com perícia. Pode usar Intimidação para obter informações.',
          description: 'Você engana e direciona aliados e inimigos com perícia. Pode usar Intimidação para obter informações.'
        }
      ],
      truques: []
    },
    {
      name: 'Escarlate (Scout)',
      nivel: 3,
      descricao: 'Ladino batedor, especialista em sobrevivência e combate na natureza.',
      habilidades: [
        {
          name: 'Atirador Ágil (Skirmisher)',
          level: 3,
          dano: 'Não causa dano direto',
          alcance: 'Uso pessoal',
          alvos: 'Apenas o conjurador',
          descricao: 'Você se move pelo terreno e ataca com vantagem contra inimigos desprevenidos. Pode usar ação bônus para mover 10 m sem ataque de oportunidade.',
          description: 'Você se move pelo terreno e ataca com vantagem contra inimigos desprevenidos. Pode usar ação bônus para mover 10 m sem ataque de oportunidade.'
        }
      ],
      truques: []
    }
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
