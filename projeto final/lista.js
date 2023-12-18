// Supondo que você tenha uma lista de times
const teams = [
    { id: 1, name: 'Time A' },
    { id: 2, name: 'Time B' },
    // Adicione mais times conforme necessário
  ];
  
  const teamList = document.getElementById('team-list');
  
  // Preencher a lista de times
  teams.forEach(team => {
    const listItem = document.createElement('li');
    listItem.textContent = team.name;
    listItem.addEventListener('click', function() {
      // Redirecionar para a página de detalhes ao clicar em um time
      window.location.href = `detalhes.html?id=${team.id}`;
    });
    teamList.appendChild(listItem);
  });
  