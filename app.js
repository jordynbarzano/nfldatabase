const teams = [
  { name: "Arizona Cardinals", division: "NFC West", logo: "https://upload.wikimedia.org/wikipedia/en/7/72/Arizona_Cardinals_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #97233F 100%)" },
  { name: "Atlanta Falcons", division: "NFC South", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Atlanta_Falcons_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #A71930 100%)" },
  { name: "Baltimore Ravens", division: "AFC North", logo: "https://upload.wikimedia.org/wikipedia/en/1/16/Baltimore_Ravens_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #241773 100%)" },
  { name: "Buffalo Bills", division: "AFC East", logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Buffalo_Bills_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #00338D 100%)" },
  { name: "Carolina Panthers", division: "NFC South", logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Carolina_Panthers_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #0085CA 100%)" },
  { name: "Chicago Bears", division: "NFC North", logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Chicago_Bears_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #0B162A 100%)" },
  { name: "Cincinnati Bengals", division: "AFC North", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Cincinnati_Bengals_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #FB4F14 100%)" },
  { name: "Cleveland Browns", division: "AFC North", logo: "https://upload.wikimedia.org/wikipedia/en/d/d9/Cleveland_Browns_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #311D00 100%)" },
  { name: "Dallas Cowboys", division: "NFC East", logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Dallas_Cowboys_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #003594 100%)" },
  { name: "Denver Broncos", division: "AFC West", logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Denver_Broncos_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #FB4F14 100%)" },
  { name: "Detroit Lions", division: "NFC North", logo: "https://upload.wikimedia.org/wikipedia/en/7/71/Detroit_Lions_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #0076B6 100%)" },
  { name: "Green Bay Packers", division: "NFC North", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Bay_Packers_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #203731 100%)" },
  { name: "Houston Texans", division: "AFC South", logo: "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Texans_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #03202F 100%)" },
  { name: "Indianapolis Colts", division: "AFC South", logo: "https://upload.wikimedia.org/wikipedia/en/0/00/Indianapolis_Colts_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #003A70 100%)" },
  { name: "Jacksonville Jaguars", division: "AFC South", logo: "https://upload.wikimedia.org/wikipedia/en/7/74/Jacksonville_Jaguars_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #006778 100%)" },
  { name: "Kansas City Chiefs", division: "AFC West", logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Kansas_City_Chiefs_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #E31837 100%)" },
  { name: "Las Vegas Raiders", division: "AFC West", logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/Las_Vegas_Raiders_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #000000 100%)" },
  { name: "Los Angeles Chargers", division: "AFC West", logo: "https://upload.wikimedia.org/wikipedia/en/7/72/Los_Angeles_Chargers_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #0080C6 100%)" },
  { name: "Los Angeles Rams", division: "NFC West", logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/Los_Angeles_Rams_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #003594 100%)" },
  { name: "Miami Dolphins", division: "AFC East", logo: "https://upload.wikimedia.org/wikipedia/en/a/a0/Miami_Dolphins_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #008E97 100%)" },
  { name: "Minnesota Vikings", division: "NFC North", logo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Minnesota_Vikings_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #4F2683 100%)" },
  { name: "New England Patriots", division: "AFC East", logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/New_England_Patriots_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #002244 100%)" },
  { name: "New Orleans Saints", division: "NFC South", logo: "https://upload.wikimedia.org/wikipedia/en/5/50/New_Orleans_Saints_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #D3BC8D 100%)" },
  { name: "New York Giants", division: "NFC East", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/New_York_Giants_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #0B2265 100%)" },
  { name: "New York Jets", division: "AFC East", logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/New_York_Jets_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #125740 100%)" },
  { name: "Philadelphia Eagles", division: "NFC East", logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Philadelphia_Eagles_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #004C54 100%)" },
  { name: "Pittsburgh Steelers", division: "AFC North", logo: "https://upload.wikimedia.org/wikipedia/en/d/de/Pittsburgh_Steelers_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #FFB612 100%)" },
  { name: "San Francisco 49ers", division: "NFC West", logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/San_Francisco_49ers_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #AA0000 100%)" },
  { name: "Seattle Seahawks", division: "NFC West", logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Seattle_Seahawks_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #002244 100%)" },
  { name: "Tampa Bay Buccaneers", division: "NFC South", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/Tampa_Bay_Buccaneers_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #D50A0A 100%)" },
  { name: "Tennessee Titans", division: "AFC South", logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Tennessee_Titans_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #4B92DB 100%)" },
  { name: "Washington Commanders", division: "NFC East", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Washington_Commanders_logo.svg", bg: "linear-gradient(135deg, #ffb6c1 0%, #5A1414 100%)" }
];

const select = document.getElementById('team-select');
const info = document.getElementById('team-info');
const body = document.body;
const bottomLogos = document.getElementById('bottom-logos');
const backBtn = document.getElementById('back-btn');

// Populate dropdown
teams.forEach((team, idx) => {
  const opt = document.createElement('option');
  opt.value = idx;
  opt.textContent = team.name;
  select.appendChild(opt);
});

// Display all logos in a line at the bottom
function showBottomLogos() {
  bottomLogos.innerHTML = teams.map(team => `
    <img src="${team.logo}" alt="${team.name} logo" class="bottom-logo-img" title="${team.name}" />
  `).join('');
  bottomLogos.style.display = 'flex';
}

// Show select screen with all logos
function showSelectScreen() {
  info.innerHTML = '';
  showBottomLogos();
  select.value = '';
  select.style.display = 'inline-block';
  backBtn.style.display = 'none';
  body.style.background = 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)';
}

showSelectScreen();

select.addEventListener('change', (e) => {
  const team = teams[e.target.value];
  if (team) {
    info.innerHTML = `
      <img src="${team.logo}" alt="${team.name} logo" class="team-logo" />
      <div class="team-name">${team.name}</div>
      <div class="team-division">${team.division}</div>
    `;
    body.style.background = team.bg;
    // Always show dropdown
    select.style.display = 'inline-block';
    // Hide bottom logos when team is selected
    bottomLogos.style.display = 'none';
    backBtn.style.display = 'inline-block';
  }
});

backBtn.addEventListener('click', () => {
  showSelectScreen();
});

// Fix: Always show all logos on select screen
function showBottomLogos() {
  bottomLogos.innerHTML = '';
  teams.forEach(team => {
    const img = document.createElement('img');
    img.src = team.logo;
    img.alt = team.name + ' logo';
    img.className = 'bottom-logo-img';
    img.title = team.name;
    bottomLogos.appendChild(img);
  });
  bottomLogos.style.display = 'flex';
}
