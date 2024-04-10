// Adiciona um evento de clique ao botão "Agendar"
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtém os valores dos campos de formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Cria um objeto com os dados do agendamento
    const agendamento = {
      nome: nome,
      telefone: telefone,
      email: email,
      servico: servico,
      data: data,
      hora: hora
    };

    // Salva os dados do agendamento no localStorage
    localStorage.setItem('agendamento', JSON.stringify(agendamento));

    alert('Agendamento realizado com sucesso!');

    // Limpa os campos do formulário
    document.querySelector('form').reset();
  });


  