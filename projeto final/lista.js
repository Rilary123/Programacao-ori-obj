const teams = [
    { id: 1, name: 'Time A' },
    { id: 2, name: 'Time B' },
  ];
  
  const teamList = document.getElementById('team-list');
  
  teams.forEach(team => {
    const listItem = document.createElement('li');
    listItem.textContent = team.name;
    listItem.addEventListener('click', function() {
      window.location.href = `detalhes.html?id=${team.id}`;
    });
    teamList.appendChild(listItem);
  });
  
