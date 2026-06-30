const form = document.getElementById('sheetForm');
const statusText = document.getElementById('statusText');
const resetBtn = document.getElementById('resetBtn');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');
const STORAGE_KEY = 'rpg-character-sheet-v2';

// SELECTS
const raceSelect = document.getElementById('raceSelect');
const classSelect = document.getElementById('classSelect');
const subclassSelect = document.getElementById('subclassSelect');

// TABS
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      // Remove active class
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));
      // Add active class
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      // Atualiza o resumo sempre que a aba de resumo for aberta
      if (tabId === 'summary') updateSummary();
      // Save selected tab
      localStorage.setItem('selected-tab', tabId);
    });
  });

  // Restore selected tab
  const savedTab = localStorage.getItem('selected-tab') || 'overview';
  const tabBtn = document.querySelector(`[data-tab="${savedTab}"]`);
  if (tabBtn) {
    tabBtn.click();
  }
}

// APPLY RACE BONUSES
function applyRaceBonus() {
  const selectedRace = raceSelect.value;
  if (!selectedRace || !RACES_DATA[selectedRace]) return;

  const raceData = RACES_DATA[selectedRace];
  const bonuses = raceData.bonusAtributos;

  const attrs = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

  attrs.forEach((attr) => {
    const input = form.elements.namedItem(attr);
    if (input) {
      // Sempre começa com 10 e aplica o bônus da raça
      const baseValue = 10;
      const bonus = bonuses[attr] || 0;
      const finalValue = baseValue + bonus;
      input.value = finalValue;
      input.dataset.baseValue = baseValue;
    }
  });

  calculateModifiers();
}

// APPLY CLASS FEATURES
function applyClassFeatures() {
  const selectedClass = classSelect.value;
  if (!selectedClass || !CLASSES_DATA[selectedClass]) return;
  const classData = CLASSES_DATA[selectedClass];

  // Atualiza a lista de subclasses conforme a classe escolhida
  updateSubclassOptions();

  // Preenche HP máximo
  const hpMaxInput = form.elements.namedItem('hpMax');
  if (hpMaxInput && !hpMaxInput.value) {
    hpMaxInput.value = classData.hpInicial;
  }

  // Preenche HP atual com o máximo se vazio
  const hpCurrentInput = form.elements.namedItem('hpCurrent');
  if (hpCurrentInput && !hpCurrentInput.value) {
    hpCurrentInput.value = classData.hpInicial;
  }

  // Atualiza o Dado de Vida (Hit Die) com base na classe e no nível
  updateHitDice();
}

// CALCULATE HIT DICE (Dado de Vida)
// No D&D 5e, a quantidade de dados de vida = nível do personagem
function updateHitDice() {
  const hitDieInput = document.getElementById('hitDie');
  if (!hitDieInput) return;

  const hitDieMap = {
    6: 'd6',
    8: 'd8',
    10: 'd10',
    12: 'd12'
  };

  const selectedClass = classSelect.value;
  let die = 'd8'; // padrão
  if (selectedClass && CLASSES_DATA[selectedClass]) {
    const classData = CLASSES_DATA[selectedClass];
    die = hitDieMap[classData.hpInicial] || 'd8';
  }

  const levelInput = form.elements.namedItem('level');
  const level = Math.max(1, Math.min(20, parseInt(levelInput?.value) || 1));

  hitDieInput.value = `${level}${die}`;
}

// UPDATE SUBCLASS OPTIONS
// Popula o <select> de subclasses conforme a classe escolhida
function updateSubclassOptions() {
  if (!subclassSelect) return;
  const selectedClass = classSelect.value;
  const subclasses = (selectedClass && SUBCLASSES_DATA[selectedClass])
    ? SUBCLASSES_DATA[selectedClass]
    : [];

  // Limpa as opções atuais
  subclassSelect.innerHTML = '';

  if (!selectedClass || !CLASSES_DATA[selectedClass]) {
    subclassSelect.disabled = true;
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'Escolha uma classe primeiro...';
    subclassSelect.appendChild(opt);
    return;
  }

  if (subclasses.length === 0) {
    subclassSelect.disabled = true;
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'Nenhuma subclasse disponível para esta classe';
    subclassSelect.appendChild(opt);
    return;
  }

  // Adiciona a opção padrão
  subclassSelect.disabled = false;
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = 'Escolha uma subclasse...';
  subclassSelect.appendChild(defaultOpt);

  // Adiciona as subclasses
  subclasses.forEach((sc) => {
    const opt = document.createElement('option');
    opt.value = sc.name;
    opt.textContent = `${sc.name} (Nível ${sc.nivel})`;
    opt.title = sc.descricao;
    subclassSelect.appendChild(opt);
  });

  // Mantém o valor previamente selecionado se ainda existir
  const currentValue = subclassSelect.dataset.lastValue;
  if (currentValue) {
    const exists = Array.from(subclassSelect.options).some((o) => o.value === currentValue);
    if (exists) subclassSelect.value = currentValue;
  }
}

// UPDATE SUMMARY TAB
// Preenche a aba "Resumo de Jogo" com base nos valores do formulário
function updateSummary() {
  const setVal = (key, text) => {
    const el = document.querySelector(`[data-summary="${key}"]`);
    if (!el) return;
    el.textContent = (text && String(text).trim()) ? text : '—';
  };

  // Identidade
  setVal('name', form.elements.namedItem('name')?.value);
  const raceKey = raceSelect.value;
  setVal('race', raceKey && RACES_DATA[raceKey] ? RACES_DATA[raceKey].name : '');
  const classKey = classSelect.value;
  const className = classKey && CLASSES_DATA[classKey] ? CLASSES_DATA[classKey].name : '';
  const level = form.elements.namedItem('level')?.value || '';
  setVal('classLevel', className ? `${className} ${level ? '— Nível ' + level : ''}` : '');
  setVal('subclass', subclassSelect?.value);
  setVal('background', form.elements.namedItem('background')?.value);
  setVal('alignment', form.elements.namedItem('alignment')?.value);

  // Recursos Vitais
  const hpCurrent = form.elements.namedItem('hpCurrent')?.value;
  const hpMax = form.elements.namedItem('hpMax')?.value;
  setVal('hp', (hpCurrent || hpMax) ? `${hpCurrent || '?'} / ${hpMax || '?'}` : '');
  setVal('ac', form.elements.namedItem('ac')?.value);
  setVal('initiative', form.elements.namedItem('initiative')?.value);
  const speed = form.elements.namedItem('speed')?.value;
  setVal('speed', speed ? `${speed} m` : '');
  setVal('hitDie', document.getElementById('hitDie')?.value);

  // Atributos
  const attrs = [
    { key: 'strength', label: 'Força' },
    { key: 'dexterity', label: 'Destreza' },
    { key: 'constitution', label: 'Constituição' },
    { key: 'intelligence', label: 'Inteligência' },
    { key: 'wisdom', label: 'Sabedoria' },
    { key: 'charisma', label: 'Carisma' }
  ];
  const attrsBox = document.getElementById('summaryAttributes');
  if (attrsBox) {
    attrsBox.innerHTML = '';
    attrs.forEach((a) => {
      const input = form.elements.namedItem(a.key);
      const value = parseInt(input?.value) || 10;
      const mod = Math.floor((value - 10) / 2);
      const modStr = (mod >= 0 ? '+' : '') + mod;
      const item = document.createElement('div');
      item.className = 'summary-attr-box';
      item.innerHTML = `
        <span class="summary-attr-label">${a.label}</span>
        <span class="summary-attr-value">${value}</span>
        <span class="summary-attr-mod">${modStr}</span>
      `;
      attrsBox.appendChild(item);
    });
  }

  // Salvaguardas & Perícias (mostra apenas as proficientes)
  const skillsBox = document.getElementById('summarySkills');
  if (skillsBox) {
    skillsBox.innerHTML = '';
    const skillMap = {
      skill_acrobatics: 'Acrobacias',
      skill_arcana: 'Arcanismo',
      skill_athletics: 'Atletismo',
      skill_deception: 'Enganação',
      skill_history: 'História',
      skill_insight: 'Intuição',
      skill_investigation: 'Investigação',
      skill_medicine: 'Medicina',
      skill_nature: 'Natureza',
      skill_perception: 'Percepção',
      skill_performance: 'Performance',
      skill_persuasion: 'Persuasão',
      skill_religion: 'Religião',
      skill_sleight: 'Prestidigitação',
      skill_stealth: 'Furtividade',
      skill_survival: 'Sobrevivência'
    };
    const attrForSkill = {
      skill_acrobatics: 'dexterity',
      skill_arcana: 'intelligence',
      skill_athletics: 'strength',
      skill_deception: 'charisma',
      skill_history: 'intelligence',
      skill_insight: 'wisdom',
      skill_investigation: 'intelligence',
      skill_medicine: 'wisdom',
      skill_nature: 'intelligence',
      skill_perception: 'wisdom',
      skill_performance: 'charisma',
      skill_persuasion: 'charisma',
      skill_religion: 'intelligence',
      skill_sleight: 'dexterity',
      skill_stealth: 'dexterity',
      skill_survival: 'wisdom'
    };
    const lvl = parseInt(form.elements.namedItem('level')?.value) || 1;
    let profBonus = 2;
    if (lvl >= 5) profBonus = 3;
    if (lvl >= 9) profBonus = 4;
    if (lvl >= 13) profBonus = 5;
    if (lvl >= 17) profBonus = 6;

    // Salvaguardas proficientes
    const saves = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    const saveLabels = {
      strength: 'Força', dexterity: 'Destreza', constitution: 'Constituição',
      intelligence: 'Inteligência', wisdom: 'Sabedoria', charisma: 'Carisma'
    };
    const proficientSaves = saves.filter((a) => {
      const cb = form.elements.namedItem(`save_${a}`);
      return cb && cb.checked;
    });
    if (proficientSaves.length > 0) {
      const title = document.createElement('h3');
      title.className = 'summary-subtitle';
      title.textContent = 'Salvaguardas Proficientes';
      skillsBox.appendChild(title);
      proficientSaves.forEach((a) => {
        const value = parseInt(form.elements.namedItem(a)?.value) || 10;
        const mod = Math.floor((value - 10) / 2) + profBonus;
        const item = document.createElement('div');
        item.className = 'summary-skill-item';
        item.innerHTML = `<span>${saveLabels[a]}</span><strong>${(mod >= 0 ? '+' : '') + mod}</strong>`;
        skillsBox.appendChild(item);
      });
    }

    // Perícias proficientes
    const proficientSkills = Object.keys(skillMap).filter((s) => {
      const cb = form.elements.namedItem(s);
      return cb && cb.checked;
    });
    if (proficientSkills.length > 0) {
      const title = document.createElement('h3');
      title.className = 'summary-subtitle';
      title.textContent = 'Perícias Proficientes';
      skillsBox.appendChild(title);
      proficientSkills.forEach((s) => {
        const attr = attrForSkill[s];
        const value = parseInt(form.elements.namedItem(attr)?.value) || 10;
        const mod = Math.floor((value - 10) / 2) + profBonus;
        const item = document.createElement('div');
        item.className = 'summary-skill-item';
        item.innerHTML = `<span>${skillMap[s]}</span><strong>${(mod >= 0 ? '+' : '') + mod}</strong>`;
        skillsBox.appendChild(item);
      });
    }
    if (proficientSaves.length === 0 && proficientSkills.length === 0) {
      skillsBox.innerHTML = '<p class="empty-msg">Nenhuma salvaguarda ou perícia proficiente marcada.</p>';
    }
  }

  // Combate
  setVal('attacks', form.elements.namedItem('attacks')?.value);
  setVal('resistances', form.elements.namedItem('resistances')?.value);
  setVal('immunities', form.elements.namedItem('immunities')?.value);

  // Habilidades / Magias por Círculo
  const spellsBox = document.getElementById('summarySpells');
  if (spellsBox) {
    spellsBox.innerHTML = '';
    const spellFields = [
      { name: 'spells_0', label: 'Truques' },
      { name: 'spells_1', label: '1º Círculo' },
      { name: 'spells_2', label: '2º Círculo' },
      { name: 'spells_3', label: '3º Círculo' },
      { name: 'spells_4', label: '4º Círculo' },
      { name: 'spells_5', label: '5º Círculo' },
      { name: 'spells_6_9', label: 'Círculos Superiores (6º ao 9º)' }
    ];

    let hasAnySpell = false;
    spellFields.forEach((field) => {
      const total = parseInt(form.elements.namedItem(`${field.name}_total`)?.value) || 0;
      const used = parseInt(form.elements.namedItem(`${field.name}_used`)?.value) || 0;
      const remaining = total - used;

      // Atualiza o span de restantes na aba de combate
      const remainingEl = document.querySelector(`.remaining[data-spell-circle="${field.name.split("_")[1] === "6_9" ? "6-9" : field.name.split("_")[1]}"]`);
      if (remainingEl) {
        remainingEl.textContent = remaining;
      }

      const val = form.elements.namedItem(`${field.name}_desc`)?.value;
      if (val && val.trim()) {
        hasAnySpell = true;
        const item = document.createElement('div');
        item.style.marginBottom = '8px';
        item.innerHTML = `<strong style="color: var(--primary); font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">${field.label}:</strong> <div style="margin-top: 2px; padding-left: 8px; border-left: 2px solid var(--border); font-size: 13px; white-space: pre-wrap; word-break: break-word; line-height: 1.4;">${val}</div>`;
        spellsBox.appendChild(item);
      }
    });

    if (!hasAnySpell) {
      spellsBox.innerHTML = '<span class="empty-msg" style="padding: 0; text-align: left;">Nenhuma habilidade ou truque preenchido.</span>';
    }
  }

  // Inventário
  setVal('inventory', form.elements.namedItem('inventory')?.value);
  const gold = form.elements.namedItem('gold')?.value;
  const silver = form.elements.namedItem('silver')?.value;
  const copper = form.elements.namedItem('copper')?.value;
  const platinum = form.elements.namedItem('platinum')?.value;
  const coinParts = [];
  if (gold) coinParts.push(`${gold} po`);
  if (silver) coinParts.push(`${silver} pp`);
  if (copper) coinParts.push(`${copper} pc`);
  if (platinum) coinParts.push(`${platinum} pl`);
  setVal('coins', coinParts.length ? coinParts.join(' · ') : '');
  setVal('gems', form.elements.namedItem('gems')?.value);

  // Aparência
  const age = form.elements.namedItem('age')?.value;
  const height = form.elements.namedItem('height')?.value;
  const weight = form.elements.namedItem('weight')?.value;
  const physical = [age, height, weight].filter(Boolean).join(' · ');
  setVal('physical', physical);
  const eyes = form.elements.namedItem('eyes')?.value;
  const hair = form.elements.namedItem('hair')?.value;
  const skin = form.elements.namedItem('skin')?.value;
  const features = [eyes, hair, skin].filter(Boolean).join(' · ');
  setVal('features', features);
  setVal('appearance', form.elements.namedItem('appearance')?.value);
  setVal('allies', form.elements.namedItem('allies')?.value);

  // Notas
  setVal('backstory', form.elements.namedItem('backstory')?.value);
  setVal('traits', form.elements.namedItem('traits')?.value);
  setVal('notes', form.elements.namedItem('notes')?.value);
}

// UPDATE HEADER
function updateHeader() {
  const name = form.elements.namedItem('name').value || 'Novo Personagem';

  const classKey = classSelect.value;
  const className = classKey && CLASSES_DATA[classKey] ? CLASSES_DATA[classKey].name : 'Classe';

  const level = form.elements.namedItem('level').value || '1';

  const raceKey = raceSelect.value;
  const race = raceKey && RACES_DATA[raceKey] ? RACES_DATA[raceKey].name : 'Raça';

  document.getElementById('charName').textContent = name;
  document.getElementById('charClass').textContent = className;
  document.getElementById('charLevel').textContent = `Nível ${level}`;
  document.getElementById('charRace').textContent = race;
}

// CALCULATE ATTRIBUTE MODIFIERS
function calculateModifiers() {
  const attrs = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

  attrs.forEach((attr) => {
    const input = form.elements.namedItem(attr);
    if (!input) return;

    const value = parseInt(input.value) || 10;
    const mod = Math.floor((value - 10) / 2);
    const modEl = input.closest('.attribute-box')?.querySelector('.attr-mod');

    if (modEl) {
      modEl.textContent = (mod >= 0 ? '+' : '') + mod;
    }
  });

  // Recalcula salvaguardas e perícias
  calculateSaves();
  calculateSkills();
}

// CALCULATE SAVING THROWS
function calculateSaves() {
  const attrs = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

  attrs.forEach((attr) => {
    const input = form.elements.namedItem(attr);
    if (!input) return;

    const value = parseInt(input.value) || 10;
    const mod = Math.floor((value - 10) / 2);

    // Verificar se a salvaguarda está marcada (checkbox com name="save_[attr]")
    const checkbox = form.elements.namedItem(`save_${attr}`);
    let finalMod = mod;
    if (checkbox && checkbox.checked) {
      finalMod = mod * 2; // Dobra o valor se marcado
    }

    const saveEl = document.querySelector(`.save-value[data-attr="${attr}"]`);

    if (saveEl) {
      saveEl.textContent = (finalMod >= 0 ? '+' : '') + finalMod;
    }
  });
}

// CALCULATE SKILLS
function calculateSkills() {
  // Mapear checkboxes para perícias em português
  const skillClassMap = {
    skill_acrobatics: 'acrobacias',
    skill_arcana: 'arcanos',
    skill_athletics: 'atletismo',
    skill_deception: 'enganação',
    skill_history: 'história',
    skill_insight: 'intuição',
    skill_investigation: 'investigação',
    skill_medicine: 'medicina',
    skill_nature: 'natureza',
    skill_perception: 'percepção',
    skill_performance: 'performance',
    skill_persuasion: 'persuasão',
    skill_religion: 'religião',
    skill_sleight: 'prestidigitação',
    skill_stealth: 'furtividade',
    skill_survival: 'sobrevivência'
  };

  const skillMap = {
    skill_acrobatics: 'dexterity',
    skill_arcana: 'intelligence',
    skill_athletics: 'strength',
    skill_deception: 'charisma',
    skill_history: 'intelligence',
    skill_insight: 'wisdom',
    skill_investigation: 'intelligence',
    skill_medicine: 'wisdom',
    skill_nature: 'intelligence',
    skill_perception: 'wisdom',
    skill_performance: 'charisma',
    skill_persuasion: 'charisma',
    skill_religion: 'intelligence',
    skill_sleight: 'dexterity',
    skill_stealth: 'dexterity',
    skill_survival: 'wisdom'
  };

  // Calcular bônus de proficiência baseado no nível
  const levelInput = form.elements.namedItem('level');
  const level = parseInt(levelInput?.value) || 1;
  let proficiencyBonus = 2;
  if (level >= 5) proficiencyBonus = 3;
  if (level >= 9) proficiencyBonus = 4;
  if (level >= 13) proficiencyBonus = 5;
  if (level >= 17) proficiencyBonus = 6;

  // Obter perícias disponíveis da classe
  const selectedClass = classSelect.value;
  let classSkills = [];
  if (selectedClass && CLASSES_DATA[selectedClass]) {
    const classPericias = CLASSES_DATA[selectedClass].pericias || [];
    classSkills = classPericias.map(p => p.toLowerCase());
  }

  Object.entries(skillMap).forEach(([skillName, attrName]) => {
    const checkbox = form.elements.namedItem(skillName);
    if (!checkbox) return;

    const valueEl = checkbox.closest('.skill-item')?.querySelector('.skill-value');
    if (!valueEl) return;

    const attrInput = form.elements.namedItem(attrName);
    if (!attrInput) return;

    const value = parseInt(attrInput.value) || 10;
    const mod = Math.floor((value - 10) / 2);

    // Se checkbox está marcado, dobra o modificador
    let finalMod = mod;
    if (checkbox.checked) {
      finalMod = mod * 2; // Dobra apenas o modificador do atributo
    }

    valueEl.textContent = (finalMod >= 0 ? '+' : '') + finalMod;
  });
}

// SAVE FORM
function saveForm() {
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  statusText.textContent = '✓ Ficha salva';

  setTimeout(() => {
    statusText.textContent = 'Ficha salva automaticamente';
  }, 2000);
}

// EXPORT CHARACTER DATA
function exportCharacter() {
  const data = Object.fromEntries(new FormData(form).entries());
  const characterName = data.name ? data.name.trim().replace(/\s+/g, '_') : 'personagem';
  const fileName = `ficha_${characterName}.json`;

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  statusText.textContent = '✓ Ficha exportada';
  setTimeout(() => {
    statusText.textContent = 'Ficha salva automaticamente';
  }, 2000);
}

// IMPORT CHARACTER DATA
function importCharacter(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (typeof data !== 'object' || data === null) {
        throw new Error('Formato inválido.');
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      loadForm();

      statusText.textContent = '✓ Ficha importada';
      setTimeout(() => {
        statusText.textContent = 'Ficha salva automaticamente';
      }, 2000);
    } catch (err) {
      alert('Erro ao importar arquivo: Certifique-se de que é um arquivo JSON válido de ficha de RPG.');
      console.error(err);
    }
  };
  reader.readAsText(file);
  e.target.value = ''; // Reset file input
}

// LOAD FORM
function loadForm() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    updateHeader();
    calculateModifiers();
    updateSummary();
    return;
  }

  try {
    const data = JSON.parse(saved);
    Object.entries(data).forEach(([key, value]) => {
      const field = form.elements.namedItem(key);
      if (field) {
        if (field.type === 'checkbox') {
          field.checked = value === 'on';
        } else {
          field.value = value;
        }
      }
    });

    // Reconstrói a lista de subclasses e reaplica o valor salvo
  if (classSelect.value) {
    updateSubclassOptions();
    if (data.subclass) subclassSelect.value = data.subclass;
    subclassSelect.dataset.lastValue = data.subclass || '';
  }

  updateHitDice();
  updateHeader();
  calculateModifiers();
  updateSummary();
  statusText.textContent = 'Ficha carregada';

    setTimeout(() => {
      statusText.textContent = 'Ficha salva automaticamente';
    }, 2000);
  } catch (error) {
    console.error('Erro ao carregar ficha:', error);
  }
}

// EVENT LISTENERS
raceSelect.addEventListener('change', () => {
  applyRaceBonus();
  updateHeader();
  saveForm();
});

classSelect.addEventListener('change', () => {
  applyClassFeatures();
  updateHeader();
  saveForm();
});

if (subclassSelect) {
  subclassSelect.addEventListener('change', () => {
    subclassSelect.dataset.lastValue = subclassSelect.value;
    saveForm();
  });
}

form.addEventListener('input', (e) => {
  if (['name', 'className', 'level', 'race'].includes(e.target.name)) {
    updateHeader();
  }

  if (['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'].includes(e.target.name)) {
    calculateModifiers();
  }

  if (e.target.name === 'level' || e.target.name === 'className') {
    updateHitDice();
  }

  updateSummary();
  saveForm();
});

form.addEventListener('change', (e) => {
  // Recalcular perícias se checkbox de perícia foi marcado/desmarcado
  if (e.target.name && e.target.name.startsWith('skill_')) {
    calculateSkills();
  }
  // Recalcular salvaguardas se checkbox de salvaguarda foi marcado/desmarcado
  if (e.target.name && e.target.name.startsWith('save_')) {
    calculateSaves();
  }
  updateSummary();
  saveForm();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveForm();
});

resetBtn.addEventListener('click', () => {
  if (confirm('Tem certeza que deseja limpar a ficha?')) {
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    if (subclassSelect) {
      subclassSelect.dataset.lastValue = '';
      updateSubclassOptions();
    }
    updateHeader();
    calculateModifiers();
    updateSummary();
    statusText.textContent = 'Ficha limpa';
    setTimeout(() => {
      statusText.textContent = 'Ficha salva automaticamente';
    }, 2000);
  }
});

if (exportBtn) {
  exportBtn.addEventListener('click', exportCharacter);
}

if (importBtn && importFile) {
  importBtn.addEventListener('click', () => {
    importFile.click();
  });
  importFile.addEventListener('change', importCharacter);
}

// COLLAPSIBLE CARDS
// Adiciona comportamento de minimizar nos cards com atributo data-collapsible
function setupCollapsibles() {
  const cards = document.querySelectorAll('.summary-card[data-collapsible]');
  cards.forEach((card) => {
    const header = card.querySelector('.summary-card-header');
    const toggle = card.querySelector('.summary-toggle');
    if (!header || !toggle) return;

    // Restaura o estado salvo
    const cardId = card.querySelector('h2')?.textContent || '';
    const saved = localStorage.getItem(`summary-collapsed:${cardId}`);
    if (saved === '1') card.classList.add('collapsed');

    const toggleCard = (e) => {
      if (e) {
        e.stopPropagation();
      }
      card.classList.toggle('collapsed');
      const isCollapsed = card.classList.contains('collapsed');
      localStorage.setItem(`summary-collapsed:${cardId}`, isCollapsed ? '1' : '0');
    };

    toggle.addEventListener('click', toggleCard);
    header.addEventListener('click', toggleCard);
  });
}

// INIT
setupTabs();
loadForm();
setupCollapsibles();
