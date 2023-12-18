const urlParams = new URLSearchParams(window.location.search);
const teamId = urlParams.get('id');
const teamDetails = {
  1: { name: 'Time A', coach: 'Treinador A', stadium: 'Estádio X' },
  2: { name: 'Time B', coach: 'Treinador B', stadium: 'Estádio Y' },
};

const detailsContainer = document.getElementById('team-details');
if (teamDetails[teamId]) {
  const team = teamDetails[teamId];
  detailsContainer.innerHTML = `
    <h2>${team.name}</h2>
    <p><strong>Treinador:</strong> ${team.coach}</p>
    <p><strong>Estádio:</strong> ${team.stadium}</p>
  `;
} else {
  detailsContainer.innerHTML = '<p>Detalhes não encontrados para este time.</p>';
}
