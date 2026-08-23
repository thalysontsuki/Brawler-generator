// Database de nomes aleatórios
const brawlerNames = [
    'Thunderstrike', 'Inferno', 'Frostbyte', 'Shadowblade', 'Stormbringer',
    'Blazefire', 'Icebreaker', 'Darkvoid', 'Lightburst', 'Vortexion',
    'Pyroflare', 'Glacius', 'Noctis', 'Solaris', 'Cyclone',
    'Infernox', 'Frostwing', 'Shadowmere', 'Zephyr', 'Ragnar',
    'Blitzor', 'Tundra', 'Nightfall', 'Aurora', 'Tempest',
    'Emberion', 'Frigus', 'Umbra', 'Helios', 'Stormborn',
    'Volcan', 'Glaciar', 'Specter', 'Radiant', 'Typhon'
];

// Database de tipos de Brawlers
const brawlerTypes = [
    'Tanque', 'Atirador', 'Suporte', 'Assassino', 'Mago',
    'Guerreiro', 'Ranger', 'Curandeiro', 'Bruxa', 'Berserker'
];

// Database de habilidades de ataque
const attackAbilities = [
    'Dispara rajadas de fogo que explodem no impacto',
    'Lança projéteis congelados que ralentam inimigos',
    'Dispara flechas de energia que ricocheteiam',
    'Cria ondas de choque ao atacar',
    'Dispara raios elétricos que saltam entre inimigos',
    'Lança bolas de plasma que deixam rastro',
    'Dispara fachos de escuridão que drenam vida',
    'Cria uma tempestade de gelo ao atacar',
    'Dispara pedras místicas com precisão',
    'Lança ondas sonoras que empurram inimigos'
];

// Database de super poderes
const superAbilities = [
    'Explode em um inferno gigante causando dano em área',
    'Cria um escudo de gelo que protege aliados',
    'Se teleporta para um local seguro e invoca clones',
    'Canaliza um raio destruidor que penetra obstáculos',
    'Cria um vórtice que atrai e causa dano a inimigos',
    'Salta alto e cai como um meteoro causando dano massivo',
    'Ativa modo berserker aumentando ataque e velocidade',
    'Cria múltiplos clones para confundir inimigos',
    'Desaparece da visão e aparece atrás do inimigo',
    'Cria um campo de força que reflete projéteis'
];

// Database de habilidades passivas
const passiveAbilities = [
    'Recupera vida a cada acerto no inimigo',
    'Aumenta velocidade quando está abaixo de 50% de vida',
    'Ganha escudo quando não toma dano por alguns segundos',
    'Reduz cooldown de habilidades ao derrotar inimigos',
    'Cada terceiro ataque causa dano duplo',
    'Critica automaticamente inimigos por trás',
    'Ganha velocidade após derrotar um inimigo',
    'Cura aliados próximos lentamente',
    'Reflete parte do dano recebido',
    'Todos os atques têm 15% de chance de congelar inimigos'
];

// Cores aleatórias para o Brawler
function getRandomColor() {
    const colors = [
        '#FF6B6B', '#FFA500', '#FFD93D', '#6BCF7F', '#4ECDC4',
        '#45B7D1', '#667EEA', '#764BA2', '#F93B1D', '#C23B22'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Função para gerar um Brawler aleatório
function generateBrawler() {
    const brawler = {
        name: brawlerNames[Math.floor(Math.random() * brawlerNames.length)],
        type: brawlerTypes[Math.floor(Math.random() * brawlerTypes.length)],
        health: Math.floor(Math.random() * (1500 - 500) + 500),
        attack: Math.floor(Math.random() * (500 - 100) + 100),
        defense: Math.floor(Math.random() * (300 - 50) + 50),
        speed: Math.floor(Math.random() * (10 - 4) + 4),
        color1: getRandomColor(),
        color2: getRandomColor(),
        color3: getRandomColor(),
        attackAbility: attackAbilities[Math.floor(Math.random() * attackAbilities.length)],
        superAbility: superAbilities[Math.floor(Math.random() * superAbilities.length)],
        passiveAbility: passiveAbilities[Math.floor(Math.random() * passiveAbilities.length)]
    };
    return brawler;
}

// Desenhar o Brawler no Canvas
function drawBrawler(brawler) {
    const canvas = document.getElementById('brawlerCanvas');
    const ctx = canvas.getContext('2d');
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, brawler.color1);
    gradient.addColorStop(0.5, brawler.color2);
    gradient.addColorStop(1, brawler.color3);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar corpo (círculo principal)
    ctx.fillStyle = brawler.color1;
    ctx.beginPath();
    ctx.arc(125, 130, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = brawler.color2;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Desenhar olhos
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(110, 115, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(140, 115, 12, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupilas
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(110, 115, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(140, 115, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // Boca
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(125, 140, 15, 0, Math.PI);
    ctx.stroke();
    
    // Braços
    ctx.fillStyle = brawler.color2;
    // Braço esquerdo
    ctx.fillRect(70, 120, 15, 50);
    // Braço direito
    ctx.fillRect(215, 120, 15, 50);
    
    // Mãos
    ctx.fillStyle = brawler.color3;
    ctx.beginPath();
    ctx.arc(77, 175, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(222, 175, 12, 0, Math.PI * 2);
    ctx.fill();
    
    // Pernas
    ctx.fillStyle = brawler.color1;
    ctx.fillRect(105, 180, 12, 50);
    ctx.fillRect(138, 180, 12, 50);
    
    // Cores acentuadas (ornamentos)
    ctx.fillStyle = brawler.color2;
    ctx.beginPath();
    ctx.arc(125, 85, 20, 0, Math.PI * 2);
    ctx.fill();
    
    // Aura brilhante
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(125, 130, 70, 0, Math.PI * 2);
    ctx.stroke();
}

// Atualizar a página com um novo Brawler
function updateBrawlerDisplay(brawler) {
    document.getElementById('brawlerName').textContent = brawler.name;
    document.getElementById('health').textContent = brawler.health;
    document.getElementById('attack').textContent = brawler.attack;
    document.getElementById('defense').textContent = brawler.defense;
    document.getElementById('speed').textContent = brawler.speed;
    document.getElementById('typeText').textContent = brawler.type;
    document.getElementById('ability1Text').textContent = brawler.attackAbility;
    document.getElementById('ability2Text').textContent = brawler.superAbility;
    document.getElementById('ability3Text').textContent = brawler.passiveAbility;
    
    drawBrawler(brawler);
}

// Event Listener para o botão
document.getElementById('generateBtn').addEventListener('click', function() {
    const newBrawler = generateBrawler();
    updateBrawlerDisplay(newBrawler);
    
    // Efeito visual no botão
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

// Gerar um Brawler inicial quando a página carrega
window.addEventListener('load', function() {
    const initialBrawler = generateBrawler();
    updateBrawlerDisplay(initialBrawler);
});async function buscarPerfil() {
    const campo = document.getElementById("tag");
    const status = document.getElementById("status");
    const perfil = document.getElementById("perfil");

    let tag = campo.value.trim().toUpperCase();

    if (!tag) {
        status.textContent = "Digite sua tag primeiro!";
        return;
    }

    if (!tag.startsWith("#")) {
        tag = "#" + tag;
    }

    status.textContent = "🔄 Procurando seu perfil...";
    perfil.style.display = "none";

    try {
        const resposta = await fetch(
            "https://SEU-SERVIDOR-AQUI.com/player/" +
            encodeURIComponent(tag)
        );

        if (!resposta.ok) {
            throw new Error("Perfil não encontrado");
        }

        const jogador = await resposta.json();

        document.getElementById("nome").textContent =
            jogador.name || "Jogador";

        document.getElementById("tagJogador").textContent =
            jogador.tag || tag;

        document.getElementById("trofeus").textContent =
            jogador.trophies || 0;

        document.getElementById("recorde").textContent =
            jogador.highestTrophies || 0;

        document.getElementById("xp").textContent =
            jogador.expLevel || 0;

        const brawlers = jogador.brawlers || [];

        document.getElementById("brawlerCount").textContent =
            brawlers.length;

        const lista = document.getElementById("listaBrawlers");

        lista.innerHTML = "";

        brawlers.forEach(brawler => {
            const div = document.createElement("div");

            div.className = "brawler";

            div.innerHTML = `
                <strong>👊 ${brawler.name}</strong>
                🏆 ${brawler.trophies || 0} troféus<br>
                ⭐ Poder ${brawler.power || 0}<br>
                📈 Recorde ${brawler.highestTrophies || 0}
            `;

            lista.appendChild(div);
        });

        perfil.style.display = "block";
        status.textContent = "✅ Perfil carregado!";

    } catch (erro) {
        console.error(erro);
        status.textContent =
            "❌ Não consegui encontrar esse perfil.";
    }
}

document.getElementById("tag").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        buscarPerfil();
    }
});
