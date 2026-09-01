// ===================================
// PROJETO DE ESTUDO: PAÍSES DO MUNDO
// ===================================

// 1. VARIÁVEIS GLOBAIS
let todosOsPaises = []; // Armazenar todos os países
let paisesFiltrados = []; // Países após filtros

// 2. ELEMENTOS DO DOM
const loadBtn = document.getElementById('loadBtn');
const searchInput = document.getElementById('searchInput');
const continentFilter = document.getElementById('continentFilter');
const paisesContainer = document.getElementById('paisesContainer');
const status = document.getElementById('status');

// 3. FUNÇÃO PRINCIPAL: CARREGAR DADOS DA API
async function carregarPaises() {
  status.textContent = '⏳ Carregando países...';
  
  try {
    // Fetch: buscar dados da API
    const resposta = await fetch('https://restcountries.com/v3.1/all');
    
    // Validar se a resposta foi bem-sucedida
    if (!resposta.ok) {
      throw new Error('Erro ao carregar dados da API');
    }
    
    // Converter resposta em JSON
    todosOsPaises = await resposta.json();
    paisesFiltrados = todosOsPaises;
    
    // Ordenar alfabeticamente
    todosOsPaises.sort((a, b) => 
      a.name.common.localeCompare(b.name.common)
    );
    
    status.textContent = `✅ ${todosOsPaises.length} países carregados!`;
    
    // Exibir os países
    exibirPaises(todosOsPaises);
    
  } catch (erro) {
    status.textContent = `❌ Erro: ${erro.message}`;
    console.error('Erro:', erro);
  }
}

// 4. FUNÇÃO: EXIBIR PAÍSES NO HTML
function exibirPaises(paises) {
  paisesContainer.innerHTML = ''; // Limpar container
  
  if (paises.length === 0) {
    paisesContainer.innerHTML = '<p class="nenhum-resultado">Nenhum país encontrado</p>';
    return;
  }
  
  // Criar um card para cada país
  paises.forEach(pais => {
    const card = criarCardPais(pais);
    paisesContainer.appendChild(card);
  });
}

// 5. FUNÇÃO: CRIAR CARD DO PAÍS
function criarCardPais(pais) {
  const card = document.createElement('div');
  card.className = 'pais-card';
  
  // Extrair dados do país
  const nome = pais.name.common;
  const bandeira = pais.flags.png;
  const capital = pais.capital ? pais.capital[0] : 'N/A';
  const populacao = pais.population ? pais.population.toLocaleString('pt-BR') : 'N/A';
  const continente = pais.continents ? pais.continents[0] : 'N/A';
  const moeda = pais.currencies 
    ? Object.values(pais.currencies)[0].name 
    : 'N/A';
  
  // Construir HTML do card
  card.innerHTML = `
    <img src="${bandeira}" alt="Bandeira de ${nome}" class="pais-bandeira">
    <div class="pais-info">
      <h3>${nome}</h3>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Continente:</strong> ${continente}</p>
      <p><strong>População:</strong> ${populacao}</p>
      <p><strong>Moeda:</strong> ${moeda}</p>
    </div>
  `;
  
  return card;
}

// 6. FUNÇÃO: FILTRAR PAÍSES
function filtrarPaises() {
  const termoBusca = searchInput.value.toLowerCase();
  const continente = continentFilter.value;
  
  paisesFiltrados = todosOsPaises.filter(pais => {
    // Filtro por nome
    const nomeCorresponde = pais.name.common.toLowerCase().includes(termoBusca);
    
    // Filtro por continente
    const continenteCorresponde = 
      !continente || 
      (pais.continents && pais.continents.includes(continente));
    
    return nomeCorresponde && continenteCorresponde;
  });
  
  // Atualizar exibição
  exibirPaises(paisesFiltrados);
  status.textContent = `🔍 ${paisesFiltrados.length} país(es) encontrado(s)`;
}

// 7. EVENT LISTENERS (Detectar eventos do usuário)
loadBtn.addEventListener('click', carregarPaises);
searchInput.addEventListener('input', filtrarPaises);
continentFilter.addEventListener('change', filtrarPaises);

// 8. INICIALIZAÇÃO (Quando a página carrega)
window.addEventListener('load', () => {
  status.textContent = '👋 Bem-vindo! Clique em "Carregar Países" para começar';
});

// ===================================
// CONCEITOS APRENDIDOS:
// ===================================
// 1. Fetch API - Buscar dados de servidor
// 2. Async/Await - Esperar resposta assíncrona
// 3. Array Methods - filter(), sort(), forEach()
// 4. DOM Manipulation - Criar/modificar elementos HTML
// 5. Event Listeners - Detectar cliques, digitação, mudanças
// 6. Tratamento de Erros - try/catch
// 7. Template Literals - Strings com ${variáveis}
// ===================================
