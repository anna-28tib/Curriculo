document.addEventListener('DOMContentLoaded', () => {
    
    /* --- FUNCIONALIDADE 1: MODO ESCURO --- */
    // Criar o botão de tema dinamicamente
    const themeBtn = document.createElement('button');
    themeBtn.innerText = "🌙 Modo Escuro";
    themeBtn.id = "theme-toggle";
    
    // Estilos do botão (para não precisar mexer no CSS agora)
    themeBtn.style.position = "fixed";
    themeBtn.style.top = "20px";
    themeBtn.style.right = "20px";
    themeBtn.style.padding = "10px 15px";
    themeBtn.style.borderRadius = "20px";
    themeBtn.style.border = "none";
    themeBtn.style.cursor = "pointer";
    themeBtn.style.backgroundColor = "#2563eb";
    themeBtn.style.color = "white";
    themeBtn.style.fontWeight = "bold";
    themeBtn.style.zIndex = "1000";

    // Adicionar o botão ao corpo da página
    document.body.appendChild(themeBtn);

    // Lógica de troca de tema
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Mudar o texto do botão
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.innerText = "☀️ Modo Claro";
            themeBtn.style.backgroundColor = "#ffffff";
            themeBtn.style.color = "#1f2937";
        } else {
            themeBtn.innerText = "🌙 Modo Escuro";
            themeBtn.style.backgroundColor = "#2563eb";
            themeBtn.style.color = "white";
        }
    });

    /* --- FUNCIONALIDADE 2: MENSAGEM PARA RECRUTADORES (CONSOLE) --- */
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour < 12) greeting = "Bom dia";
    else if (hour < 18) greeting = "Boa tarde";
    else greeting = "Boa noite";

    console.log(`%c${greeting}! Obrigado por ver meu código.`, "color: #2563eb; font-size: 16px; font-weight: bold;");
    console.log("Se gostou do currículo, entre em contato!");
});