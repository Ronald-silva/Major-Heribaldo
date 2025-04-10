document.addEventListener('DOMContentLoaded', () => {
    // Log para confirmar que o script está carregando
    console.log('script.js carregado com sucesso');

    // Menu hamburguer
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    } else {
        console.error('Elementos do menu hamburguer não encontrados');
    }

    // Lista de artigos (simulada)
    const artigos = [
        {
            id: 1,
            titulo: "A Forja do Caráter",
            data: "09 de abril de 2025",
            autor: "Major Heribaldo Ferreira",
            citacao: '"Seja forte e corajoso; não tenha medo nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar." (Josué 1:9)',
            resumo: "A vida é uma batalha. Não falo apenas das lutas externas — o trânsito caótico, as contas no fim do mês ou as pressões do trabalho. Refiro-me à guerra silenciosa que travamos dentro de nós: a luta por propósito, por autocontrole, por sermos melhores do que fomos ontem.",
            imagem: "/images/forja.png",
            conteudo: `
                <p>A vida é uma batalha. Não falo apenas das lutas externas — o trânsito caótico, as contas no fim do mês ou as pressões do trabalho. Refiro-me à guerra silenciosa que travamos dentro de nós: a luta por propósito, por autocontrole, por sermos melhores do que fomos ontem. Durante meus anos como oficial da Polícia Militar, aprendi que a verdadeira força não está apenas em segurar uma arma, mas em dominar a si mesmo. No tatame de jiu-jitsu, descobri que a vitória começa na disciplina. E nas páginas das Escrituras, encontrei a sabedoria que dá sentido a tudo isso.</p>
                <p>Neste primeiro artigo, quero convidá-lo a entrar na forja do caráter. Assim como o ferreiro molda o aço com fogo e martelo, Deus nos molda por meio das provações e das escolhas que fazemos. Mas Ele não nos deixa sozinhos: nos deu um manual — a Bíblia —, um corpo para agir e uma mente para discernir. O problema é que muitos de nós vivemos aquém do nosso potencial. Deixamos a preguiça dominar o corpo, a distração roubar a mente e o medo enfraquecer a fé.</p>
                <h4>O Tripé da Transformação</h4>
                <p>Para viver com propósito, precisamos equilibrar três pilares:</p>
                <ol>
                    <li><strong>Fé sólida:</strong> Creia em algo maior que você. A Bíblia não é apenas um livro de histórias; é um mapa para a alma. Quando você entende que "o temor do Senhor é o princípio da sabedoria" (Provérbios 9:10), começa a enxergar a vida com clareza.</li>
                    <li><strong>Mente afiada:</strong> Leia, questione, aprenda. Uma mente negligenciada é uma arma descarregada. Comece com um versículo, um livro, uma ideia — mas comece.</li>
                    <li><strong>Corpo forte:</strong> Não há honra em abandonar o templo que Deus lhe deu. Levante-se, sue, discipline-se. O jiu-jitsu me ensinou que a força física reflete a força interior.</li>
                </ol>
                <h4>Um Desafio Prático</h4>
                <p>Hoje, pegue um caderno e escreva: "O que quero conquistar em um ano?" Seja específico. Depois, leia Provérbios 16:3 — "Consagre ao Senhor tudo o que você faz, e seus planos serão bem-sucedidos" — e ore por direção. Por fim, levante-se e faça algo pelo seu corpo: caminhe, alongue-se, lute. Pequenos passos constroem grandes destinos.</p>
                <p>Este blog existe para caminhar com você nessa jornada. Aqui, você encontrará ferramentas — artigos, cursos, mentorias — para forjar um caráter que resista às tempestades e inspire outros. Não prometo facilidade, mas prometo verdade. Vamos construir juntos uma vida de honra e propósito?</p>
                <p><em>Que o Senhor o guie e fortaleça.</em><br>Major Heribaldo Ferreira</p>
            `
        },
        {
            id: 2,
            titulo: "Disciplina: A Chave para a Excelência",
            data: "15 de abril de 2025",
            autor: "Major Heribaldo Ferreira",
            citacao: '"O homem diligente será ricamente abençoado, mas quem se apressa para enriquecer não ficará impune." (Provérbios 28:20)',
            resumo: "A disciplina é a ponte entre os sonhos e as conquistas. Como oficial da Polícia Militar, aprendi que a ordem e a constância são fundamentais para o sucesso em qualquer missão.",
            imagem: "images/tatame.png",
            conteudo: `
                <p>A disciplina é a ponte entre os sonhos e as conquistas. Como oficial da Polícia Militar, aprendi que a ordem e a constância são fundamentais para o sucesso em qualquer missão. No jiu-jitsu, cada movimento repetido mil vezes no tatame constrói a base para a vitória. E nas Escrituras, encontramos exemplos de homens e mulheres que, por meio da obediência e da perseverança, alcançaram grandes coisas para o Reino de Deus.</p>
                <p>Neste artigo, quero compartilhar três princípios práticos para cultivar a disciplina em sua vida diária. Primeiro, comece pequeno: escolha um hábito simples e o execute todos os dias. Segundo, seja consistente: a repetição cria força. Terceiro, confie em Deus: Ele é a fonte de toda a nossa capacidade.</p>
                <p><em>Que o Senhor o fortaleça na sua jornada.</em><br>Major Heribaldo Ferreira</p>
            `
        },
        {
            id: 3,
            titulo: "Fé em Ação: Vivendo os Princípios Bíblicos no Dia a Dia",
            data: "20 de abril de 2025",
            autor: "Major Heribaldo Ferreira",
            citacao: '"Assim também a fé, por si só, se não for acompanhada de obras, está morta." (Tiago 2:17)',
            resumo: "A fé não é apenas um sentimento; é uma força que se manifesta em ações concretas. Neste artigo, exploramos como aplicar os princípios bíblicos em situações práticas do cotidiano.",
            imagem: "images/orando.png",
            conteudo: `
                <p>A fé não é apenas um sentimento; é uma força que se manifesta em ações concretas. Durante minha trajetória como oficial da Polícia Militar, vi como a fé pode sustentar um homem em meio ao caos. No tatame de jiu-jitsu, aprendi que acreditar em si mesmo é essencial, mas acreditar em Deus é transformador. E nas Escrituras, encontramos o exemplo supremo de fé em ação: Jesus, que viveu cada palavra que ensinou.</p>
                <p>Neste artigo, quero compartilhar três maneiras práticas de viver sua fé no dia a dia. Primeiro, comece com a oração: ela alinha seu coração com a vontade de Deus. Segundo, pratique a gratidão: reconhecer as bênçãos diárias fortalece sua confiança no Criador. Terceiro, aja com integridade: suas ações devem refletir os valores que você professa.</p>
                <p><em>Que sua fé se traduza em obras que glorifiquem a Deus.</em><br>Major Heribaldo Ferreira</p>
            `
        }
    ];

    // Função para exibir os artigos
    const artigosLista = document.getElementById('artigos-lista');
    if (artigosLista) {
        // Verificar se estamos na página inicial ou na página de artigos
        const isPaginaInicial = window.location.pathname.endsWith('index.html') || window.location.pathname === '/major-heribaldo-ferreira-blog/' || window.location.pathname === '/major-heribaldo-ferreira-blog';

        if (isPaginaInicial) {
            // Página inicial: exibir resumos
            artigos.forEach(artigo => {
                const artigoElement = document.createElement('article');
                artigoElement.innerHTML = `
                    <img src="${artigo.imagem}" alt="${artigo.titulo}" class="artigo-imagem">
                    <h3>${artigo.titulo}</h3>
                    <p class="article-meta">Data: ${artigo.data} | Autor: ${artigo.autor}</p>
                    <p>${artigo.resumo}</p>
                    <p><a href="artigos.html#artigo-${artigo.id}" class="leia-mais">Leia Mais</a></p>
                `;
                artigosLista.appendChild(artigoElement);
            });
        } else {
            // Página de artigos: exibir conteúdo completo
            artigos.forEach(artigo => {
                const artigoElement = document.createElement('article');
                artigoElement.id = `artigo-${artigo.id}`;
                artigoElement.innerHTML = `
                    <img src="${artigo.imagem}" alt="${artigo.titulo}" class="artigo-imagem">
                    <h3>${artigo.titulo}</h3>
                    <p class="article-meta">Data: ${artigo.data} | Autor: ${artigo.autor}</p>
                    <blockquote>${artigo.citacao}</blockquote>
                    ${artigo.conteudo}
                `;
                artigosLista.appendChild(artigoElement);
            });
        }
    }

    // Rolar para o artigo correspondente ao carregar a página
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});