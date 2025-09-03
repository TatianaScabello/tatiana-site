// Função do formulário de WhatsApp
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    let mensagem = '';

    if(nome) {
        mensagem = `Olá, meu nome é ${nome}. Gostaria de marcar uma consulta.`;
    } else {
        mensagem = 'Olá, gostaria de marcar uma consulta.';
    }

    // Substitua pelo seu número do WhatsApp com código do país (ex: 5511999999999)
    const numeroWhatsApp = '5511999999999';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
});
