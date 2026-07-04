const EQUIPMENT_DATA = {
  // === ARMAS SIMPLES CORPO A CORPO ===
  "clava": {
    "name": "Clava (Club)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Concussivo",
    "mastery": "SLOW (Reduz o deslocamento do alvo em 3 metros)",
    "properties": "Leve"
  },
  "adaga": {
    "name": "Adaga (Dagger)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Perfurante",
    "mastery": "NICK (Permite fazer o ataque de ação bônus como parte da própria Ação de Ataque)",
    "properties": "Acuidade, Leve, Arremesso (6/18m)"
  },
  "clava_grande": {
    "name": "Clava Grande (Greatclub)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Concussivo",
    "mastery": "PUSH (Empurra o alvo atingido até 3 metros de distância horizontal)",
    "properties": "Duas Mãos"
  },
  "machado_de_mao": {
    "name": "Machado de Mão (Handaxe)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Cortante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Leve, Arremesso (6/18m)"
  },
  "zagaia": {
    "name": "Zagaia (Javelin)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Perfurante",
    "mastery": "SLOW (Reduz o deslocamento do alvo em 3 metros)",
    "properties": "Arremesso (9/36m)"
  },
  "martelo_leve": {
    "name": "Martelo Leve (Light Hammer)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Concussivo",
    "mastery": "NICK (Permite fazer o ataque de ação bônus como parte da própria Ação de Ataque)",
    "properties": "Leve, Arremesso (6/18m)"
  },
  "maca": {
    "name": "Maça (Mace)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Concussivo",
    "mastery": "SAP (Dá desvantagem na próxima jogada de ataque que o alvo fizer antes do início do seu próximo turno)",
    "properties": "Nenhuma"
  },
  "bastao": {
    "name": "Bastão (Quarterstaff)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Concussivo",
    "mastery": "TOPPLE (Força o alvo a passar num teste de resistência de Constituição ou cair Caído)",
    "properties": "Versátil (1d8)"
  },
  "foice": {
    "name": "Foice (Sickle)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Cortante",
    "mastery": "NICK (Permite fazer o ataque de ação bônus como parte da própria Ação de Ataque)",
    "properties": "Leve"
  },
  "lanca": {
    "name": "Lança (Spear)",
    "type": "arma_simples_cac",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Perfurante",
    "mastery": "SAP (Dá desvantagem na próxima jogada de ataque que o alvo fizer)",
    "properties": "Arremesso (6/18m), Versátil (1d8)"
  },

  // === ARMAS SIMPLES À DISTÂNCIA ===
  "besta_leve": {
    "name": "Besta Leve (Light Crossbow)",
    "type": "arma_simples_dist",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Perfurante",
    "mastery": "SLOW (Reduz o deslocamento do alvo em 3 metros)",
    "properties": "Munição (24/96m), Recarga, Duas Mãos"
  },
  "dardo": {
    "name": "Dardo (Dart)",
    "type": "arma_simples_dist",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Perfurante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Acuidade, Arremesso (6/18m)"
  },
  "arco_curto": {
    "name": "Arco Curto (Shortbow)",
    "type": "arma_simples_dist",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Perfurante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Munição (24/96m), Duas Mãos"
  },
  "fonda": {
    "name": "Fonda (Sling)",
    "type": "arma_simples_dist",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Concussivo",
    "mastery": "SLOW (Reduz o deslocamento do alvo em 3 metros)",
    "properties": "Munição (9/36m)"
  },

  // === ARMAS MARCIAIS CORPO A CORPO ===
  "machado_de_batalha": {
    "name": "Machado de Batalha (Battleaxe)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Cortante",
    "mastery": "TOPPLE (Força o alvo a passar num teste de resistência de Constituição ou cair Caído)",
    "properties": "Versátil (1d10)"
  },
  "florete": {
    "name": "Florete (Flail)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Concussivo",
    "mastery": "SAP (Dá desvantagem na próxima jogada de ataque que o alvo fizer)",
    "properties": "Nenhuma"
  },
  "glaive": {
    "name": "Glaive (Glaive)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d10",
    "damageType": "Cortante",
    "mastery": "GRAZE (Se você errar o ataque, ainda causa dano igual ao seu Modificador de Atributo)",
    "properties": "Alcance (+1,5m), Heavy, Duas Mãos"
  },
  "machado_grande": {
    "name": "Machado Grande (Greataxe)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d12",
    "damageType": "Cortante",
    "mastery": "CLEAVE (Se acertar, pode fazer um ataque extra contra outro inimigo a até 1,5m uma vez por turno)",
    "properties": "Heavy, Duas Mãos"
  },
  "espada_grande": {
    "name": "Espada Grande (Greatsword)",
    "type": "arma_marcial_cac",
    "diceQty": 2,
    "diceType": "d6",
    "damageType": "Cortante",
    "mastery": "GRAZE (Se você errar o ataque, ainda causa dano igual ao seu Modificador de Atributo)",
    "properties": "Heavy, Duas Mãos"
  },
  "alabarda": {
    "name": "Alabarda (Halberd)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d10",
    "damageType": "Cortante",
    "mastery": "CLEAVE (Se acertar, pode fazer um ataque extra contra outro inimigo a até 1,5m uma vez por turno)",
    "properties": "Alcance (+1,5m), Heavy, Duas Mãos"
  },
  "lanca_de_montaria": {
    "name": "Lança de Montaria (Lance)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d10",
    "damageType": "Perfurante",
    "mastery": "TOPPLE (Força o alvo a passar num teste de resistência de Constituição ou cair Caído)",
    "properties": "Alcance (+1,5m), Especial"
  },
  "espada_longa": {
    "name": "Espada Longa (Longsword)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Cortante",
    "mastery": "SAP (Dá desvantagem na próxima jogada de ataque que o alvo fizer)",
    "properties": "Versátil (1d10)"
  },
  "malho": {
    "name": "Malho (Maul)",
    "type": "arma_marcial_cac",
    "diceQty": 2,
    "diceType": "d6",
    "damageType": "Concussivo",
    "mastery": "TOPPLE (Força o alvo a passar num teste de resistência de Constituição ou cair Caído)",
    "properties": "Heavy, Duas Mãos"
  },
  "pique": {
    "name": "Pique (Pike)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d10",
    "damageType": "Perfurante",
    "mastery": "PUSH (Empurra o alvo atingido até 3 metros de distância horizontal)",
    "properties": "Alcance (+1,5m), Heavy, Duas Mãos"
  },
  "rapieira": {
    "name": "Rapieira (Rapier)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Perfurante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Acuidade"
  },
  "cimitarra": {
    "name": "Cimitarra (Scimitar)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Cortante",
    "mastery": "NICK (Permite fazer o ataque de ação bônus como parte da própria Ação de Ataque)",
    "properties": "Acuidade, Leve"
  },
  "espada_curta": {
    "name": "Espada Curta (Shortsword)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Perfurante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Acuidade, Leve"
  },
  "tridente": {
    "name": "Tridente (Trident)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Perfurante",
    "mastery": "TOPPLE (Força o alvo a passar num teste de resistência de Constituição ou cair Caído)",
    "properties": "Arremesso (6/18m), Versátil (1d10)"
  },
  "picareta_de_guerra": {
    "name": "Picareta de Guerra (War Pick)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Perfurante",
    "mastery": "SAP (Dá desvantagem na próxima jogada de ataque que o alvo fizer)",
    "properties": "Versátil (1d10)"
  },
  "martelo_de_guerra": {
    "name": "Martelo de Guerra (Warhammer)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Concussivo",
    "mastery": "PUSH (Empurra o alvo atingido até 3 metros de distância horizontal)",
    "properties": "Versátil (1d10)"
  },
  "chicote": {
    "name": "Chicote (Whip)",
    "type": "arma_marcial_cac",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Cortante",
    "mastery": "SLOW (Reduz o deslocamento do alvo em 3 metros)",
    "properties": "Acuidade, Alcance (+1,5m)"
  },

  // === ARMAS MARCIAIS À DISTÂNCIA ===
  "zarabatana": {
    "name": "Zarabatana (Blowgun)",
    "type": "arma_marcial_dist",
    "diceQty": 1,
    "diceType": "fixo_1",
    "damageType": "Perfurante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Munição (25/100m), Recarga"
  },
  "besta_de_mao": {
    "name": "Besta de Mão (Hand Crossbow)",
    "type": "arma_marcial_dist",
    "diceQty": 1,
    "diceType": "d6",
    "damageType": "Perfurante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Munição (9/36m), Leve, Recarga"
  },

    "besta_pesada": {
    "name": "Besta Pesada (Heavy Crossbow)",
    "type": "arma_marcial_dist",
    "diceQty": 1,
    "diceType": "d10",
    "damageType": "Perfurante",
    "mastery": "PUSH (Empurra o alvo atingido até 3 metros de distância horizontal)",
    "properties": "Munição (30/120m), Heavy, Recarga, Duas Mãos"
  },
  "arco_longo": {
    "name": "Arco Longo (Longbow)",
    "type": "arma_marcial_dist",
    "diceQty": 1,
    "diceType": "d8",
    "damageType": "Perfurante",
    "mastery": "SLOW (Reduz o deslocamento do alvo em 3 metros)",
    "properties": "Munição (45/180m), Heavy, Duas Mãos"
  },
  "mosquete": {
    "name": "Mosquete (Musket)",
    "type": "arma_marcial_dist",
    "diceQty": 1,
    "diceType": "d12",
    "damageType": "Perfurante",
    "mastery": "SLOW (Reduz o deslocamento do alvo em 3 metros)",
    "properties": "Munição (12/48m), Recarga, Duas Mãos"
  },
  "pistola": {
    "name": "Pistola (Pistol)",
    "type": "arma_marcial_dist",
    "diceQty": 1,
    "diceType": "d10",
    "damageType": "Perfurante",
    "mastery": "VEX (Se você acertar, ganha Vantagem na próxima jogada de ataque contra esse alvo)",
    "properties": "Munição (9/36m), Recarga"
  },
  "ataque_desarmado": {
    "name": "Ataque Desarmado (Unarmed Strike)",
    "type": "combate_geral",
    "diceQty": 0,
    "diceType": "fixo_1",
    "damageType": "Concussivo",
    "mastery": "Nenhuma",
    "properties": "No acerto, além do dano você pode escolher Agarrar (Grapple) ou Empurrar (Shove) automaticamente"
  },
  "fogo_alquimico": {
    "name": "Fogo Alquímico (Alchemist's Fire)",
    "type": "consumivel",
    "diceQty": 1,
    "diceType": "d4",
    "damageType": "Fogo",
    "mastery": "Nenhuma",
    "properties": "Alvo queima (1d4) no início de cada turno dele até passar em teste de DEX DC 10"
  },
  "frasco_de_acido": {
    "name": "Frasco de Ácido (Acid Vial)",
    "type": "consumivel",
    "diceQty": 2,
    "diceType": "d6",
    "damageType": "Ácido",
    "mastery": "Nenhuma",
    "properties": "Arremesso (6m). O frasco se despedaça causando o dano direto no alvo"
  },
  "agua_benta": {
    "name": "Água Benta (Holy Water)",
    "type": "consumivel",
    "diceQty": 2,
    "diceType": "d6",
    "damageType": "Radiante",
    "mastery": "Nenhuma",
    "properties": "Arremesso (6m). Só causa dano se o alvo for um Morto-Vivo (Undead) ou Corruptor (Fiend)"
  }
}
