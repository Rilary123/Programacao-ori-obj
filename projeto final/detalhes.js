// Lógica para buscar detalhes do time com base no ID na URL
const urlParams = new URLSearchParams(window.location.search);
const teamId = urlParams.get('id');

// Supondo que você tenha informações detalhadas do time com o ID correspondente
// Aqui, você pode usar AJAX, fetch ou dados estáticos
const teamDetails = {
  1: { name: 'Time A', coach: 'Treinador A', stadium: 'Estádio X' },
  2: { name: 'Time B', coach: 'Treinador B', stadium: 'Estádio Y' },
  // Adicione mais detalhes conforme necessário
};

const detailsContainer = document.getElementById('team-details');
if (teamDetails[teamId]) {
  const team = teamDetails[teamId];
  // Exibir os detalhes do time na página
  detailsContainer.innerHTML = `
    <h2>${team.name}</h2>
    <p><strong>Treinador:</strong> ${team.coach}</p>
    <p><strong>Estádio:</strong> ${team.stadium}</p>
  `;
} else {
  detailsContainer.innerHTML = '<p>Detalhes não encontrados para este time.</p>';
}
