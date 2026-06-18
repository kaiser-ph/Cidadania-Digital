// Garante a execução do script apenas após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. MECANISMO DO MODO ESCURO (ACESSIBILIDADE)
       ========================================================================== */
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    
    toggleDarkModeBtn.addEventListener("click", () => {
        // Altera a classe no body para disparar as variáveis de cor do CSS
        document.body.classList.toggle("dark-theme");
        
        // Atualiza visualmente o texto do botão de forma informativa
        if (document.body.classList.contains("dark-theme")) {
            toggleDarkModeBtn.textContent = "☀️ Modo Claro";
        } else {
            toggleDarkModeBtn.textContent = "🌓 Modo Escuro"; // Corrigido: Removido o 'Compartilhar' acidental
        }
    });

    /* ==========================================================================
       2. VALIDADOR DO QUIZ ANTI-DESINFORMAÇÃO
       ========================================================================== */
    const quizForm = document.getElementById("quiz-form");
    const feedbackBox = document.getElementById("quiz-feedback");

    quizForm.addEventListener("submit", (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Captura o input do tipo radio selecionado especificamente dentro deste formulário
        const selectedOption = quizForm.querySelector('input[name="quiz-answer"]:checked');

        // Validação caso o usuário clique em verificar sem escolher nenhuma opção
        if (!selectedOption) {
            feedbackBox.textContent = "⚠️ Por favor, selecione uma resposta antes de verificar!";
            feedbackBox.className = "feedback-box wrong"; // Sincronizado com a classe de erro do CSS
            return;
        }

        // Processamento lógico da resposta utilizando variáveis
        const userChoice = selectedOption.value;

        // Limpa estados anteriores e prepara a caixa de feedback
        feedbackBox.className = "feedback-box";

        // Validação da resposta e manipulação dinâmica do DOM
        if (userChoice === "correta") {
            feedbackBox.textContent = "🎉 Parabéns! Você agiu como um verdadeiro Cidadão Digital. Sempre cheque os fatos antes de repassar!";
            feedbackBox.classList.add("correct");
        } else {
            feedbackBox.textContent = "❌ Resposta incorreta. Compartilhar sem checar ou inflamar discussões propaga a desinformação automatizada.";
            feedbackBox.classList.add("wrong");
        }
    });
});
