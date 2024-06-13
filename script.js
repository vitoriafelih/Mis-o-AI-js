const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1- Qual área você acredita que a inteligência artificial deveria priorizar?",
        alternativas: [
            {
                texto: "Saúde",
                afirmacao: "Deve melhorar diagnósticos e tratamentos médicos."
            },
            {
                texto: "Educação",
                afirmacao: "Deve personalizar o ensino para as necessidades de cada aluno"
            }
        ]
    },
    {
        enunciado: "2- Como você se sente em relação à presença crescente de IA no seu dia a dia?",
        alternativas: [
            {
                texto: "Entusiasmado",
                afirmacao: "Você vê muitas vantagens e conveniências."
            },
            {
                texto: "Preocupado",
                afirmacao: "Você tem receios sobre privacidade e controle."
            }
        ]
    },
    {
        enunciado: "3- Você acha que os veículos autônomos são uma boa ideia?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Eles podem reduzir acidentes e melhorar o tráfego."
            },
            {
                texto: "Não",
                afirmacao: "Você se preocupa com a segurança e possíveis falhas tecnológicas."
            }
        ]
    },
    {
        enunciado: "4- Qual você acha que é a maior preocupação ética relacionada à IA?",
        alternativas: [
            {
                texto: "Viés e discriminação",
                afirmacao: "Algoritmos perpetuando preconceitos existentes."
            },
            {
                texto: "Desemprego em massa",
                afirmacao: "Algoritmos perpetuando preconceitos existentes."
            }
        ]
    },
    {
        enunciado: "5- Qual é a sua opinião sobre IA em sistemas de recomendação, como no streaming de música e filmes?",
        alternativas: [
            {
                texto: "Positiva",
                afirmacao: "Aprecia recomendações personalizadas baseadas em seus interesses."
            },
            {
                texto: "Negativa",
                afirmacao: "Aprecia recomendações personalizadas baseadas em seus interesses."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Para você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
