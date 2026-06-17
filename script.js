// Aguarda o carregamento completo do DOM para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. MECANISMO DO MODO ESCURO (ACESSIBILIDADE)
       ========================================== */
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    
    toggleDarkModeBtn.addEventListener("click", () => {
        // Altera a classe no body para disparar as variáveis CSS
        document.body.classList.toggle("dark-theme");
        
        // Atualiza visualmente o texto do botão de forma informativa
        if (document.body.classList.contains("dark-theme")) {
            toggleDarkModeBtn.textContent = "☀️ Modo Claro";
        } else {
            toggleDarkModeBtn.textContent = "Compartilhar 🌓 Modo Escuro";
        }
    });

    /* ==========================================
       2. VALIDADOR DO QUIZ ANTI-DESINFORMAÇÃO
       ========================================== */
    const quizForm = document.getElementById("quiz-form");
    const feedbackBox = document.getElementById("quiz-feedback");

    quizForm.addEventListener("submit", (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Captura o input do tipo radio que foi selecionado pelo usuário
        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');

        // Validação caso o usuário clique em enviar sem escolher nenhuma opção
        if (!selectedOption) {
            feedbackBox.textContent = "⚠️ Por favor, selecione uma resposta antes de verificar!";
            feedbackBox.className = "feedback-box incorrect";
            return;
        }

        // Processamento lógico da resposta utilizando variáveis
        const userChoice = selectedOption.value;

        if (userChoice === "correta") {
            feedbackBox.textContent = "🎉 Parabéns! Você agiu como um verdadeiro Cidadão Digital. Sempre cheque os fatos!";
            feedbackBox.className = "feedback-box correct";
        } else {
            feedbackBox.textContent = "❌ Resposta incorreta. Compartilhar sem checar ou inflamar discussões propaga a desinformação automatizada.";
            feedbackBox.className = "feedback-box incorrect";
        }
    });
});
