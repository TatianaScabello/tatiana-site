document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    let mensagem = '';

    if (nome) {
        mensagem = `Olá, meu nome é ${nome}. Gostaria de marcar uma consulta.`;
    } else {
        mensagem = "Olá, gostaria de marcar uma consulta.";
    }

    // Substitua pelo seu número de WhatsApp no formato internacional sem espaços ou símbolos
    const numeroWhatsApp = "5511999999999";

    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
});
