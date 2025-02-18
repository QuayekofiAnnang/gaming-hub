document.addEventListener('DOMContentLoaded', function() {
    const gamesGrid = document.querySelector('.games-grid');
    const detailView = document.querySelector('.game-detail-view');
    const backButton = document.querySelector('.back-button');
    const gameCards = document.querySelectorAll('.game-card');

    // Game data
    const gameData = {
        codwz: {
            title: 'Call of Duty: Warzone',
            type: 'Battle Royale',
            banner: 'assets/images/codW.jpg',
            stats: [
                { label: 'K/D Ratio', value: '2.5' },
                { label: 'Wins', value: '200+' },
                { label: 'Hours', value: '1000+' }
            ],
            description: 'Aggressive player with strong map awareness and strategic positioning.',
            achievements: [
                { title: 'Victory Master', description: 'Won 100+ matches' },
                { title: 'Sharp Shooter', description: 'Maintained 2.5+ K/D ratio' }
            ]
        },
        codm: {
            title: 'Call of Duty Mobile',
            type: 'Mobile FPS',
            banner: 'assets/images/codMW.jpg',
            stats: [
                { label: 'Rank', value: 'Legendary' },
                { label: 'K/D', value: '3.2' },
                { label: 'Win Rate', value: '75%' }
            ],
            description: 'Competitive player with multiple tournament appearances. Specializing in both Battle Royale and Multiplayer modes.',
            achievements: [
                { title: 'Legendary Master', description: 'Reached Legendary rank multiple seasons' },
                { title: 'Tournament Victor', description: 'Won several community tournaments' }
            ]
        },
        stumble: {
            title: 'Stumble Guys',
            type: 'Party Game',
            banner: 'assets/images/stumbleW.jpg',
            stats: [
                { label: 'Wins', value: '150+' },
                { label: 'Crowns', value: '300' },
                { label: 'Level', value: '45' }
            ],
            description: 'Known for quick reflexes and creative shortcuts. Consistently reaching final rounds.',
            achievements: [
                { title: 'Crown Collector', description: 'Collected 300+ crowns' },
                { title: 'Speed Demon', description: 'Won 50+ races' }
            ]
        },
        combatmaster: {
            title: 'Combat Master',
            type: 'Mobile FPS',
            banner: 'assets/images/CMW.jpg',
            stats: [
                { label: 'K/D', value: '4.0' },
                { label: 'Level', value: '80' },
                { label: 'Win Rate', value: '70%' }
            ],
            description: 'Specializing in quick-scoping and movement mechanics. Known for aggressive playstyle.',
            achievements: [
                { title: 'Weapon Master', description: 'Mastered all weapon categories' },
                { title: 'Movement King', description: 'Perfected advanced movement techniques' }
            ]
        },
        bloodstrike: {
            title: 'Bloodstrike',
            type: 'Battle Royale',
            banner: 'assets/images/bloodstrikeW.jpg',
            stats: [
                { label: 'Rank', value: 'Master' },
                { label: 'K/D', value: '5.5' },
                { label: 'Win Rate', value: '62%' }
            ],
            description: 'High-kill gameplay specialist with strong team coordination abilities.',
            achievements: [
                { title: 'Squad Leader', description: 'Led team to 100+ victories' },
                { title: 'Elite Fighter', description: 'Maintained 5+ K/D ratio' }
            ]
        },
        farlight: {
            title: 'Farlight 84',
            type: 'Battle Royale',
            banner: 'assets/images/farlight84W.jpg',
            stats: [
                { label: 'Rank', value: 'Diamond' },
                { label: 'K/D', value: '4.8' },
                { label: 'Hours', value: '200+' }
            ],
            description: 'Vehicle specialist with strong team coordination. Main character: Gloria.',
            achievements: [
                { title: 'Vehicle Expert', description: 'Mastered all vehicle mechanics' },
                { title: 'Team Player', description: 'High assist and revival rate' }
            ]
        },
        pubgm: {
            title: 'PUBG Mobile',
            type: 'Battle Royale',
            banner: 'assets/images/pubgmW.jpg',
            stats: [
                { label: 'Rank', value: 'Ace' },
                { label: 'K/D', value: '6.2' },
                { label: 'Win Rate', value: '55%' }
            ],
            description: 'Expert in CQC and long-range combat. Favorite map: Erangel.',
            achievements: [
                { title: 'Sniper Elite', description: 'Mastered long-range combat' },
                { title: 'Survival Expert', description: 'Achieved 100+ chicken dinners' }
            ]
        },
        
        roblox: {
            title: 'Roblox',
            type: 'Platform Game',
            banner: 'assets/images/robloxW.jpg',
            stats: [
                { label: 'Level', value: '50' },
                { label: 'Games', value: '20+' },
                { label: 'Friends', value: '500+' }
            ],
            description: 'Community player focusing on social aspects. Favorite games: Arsenal, Adopt Me.',
            achievements: [
                { title: 'Social Star', description: 'Built large friend network' },
                { title: 'Game Explorer', description: 'Mastered multiple game modes' }
            ]
        },
        minecraft: {
            title: 'Minecraft',
            type: 'Sandbox',
            banner: 'assets/images/minecraftW.jpg',
            stats: [
                { label: 'Worlds', value: '10+' },
                { label: 'Hours', value: '300+' },
                { label: 'Builds', value: '50+' }
            ],
            description: 'Creative builder specializing in redstone mechanisms and large-scale builds.',
            achievements: [
                { title: 'Master Builder', description: 'Created multiple epic structures' },
                { title: 'Redstone Wizard', description: 'Built complex automation systems' }
            ]
        },
        leagueOfLegends: {
            title: 'League of Legends',
            type: 'MOBA',
            banner: 'assets/images/LoLW.jpg',
            stats: [
                { label: 'Rank', value: 'Legendary' },
                { label: 'Win Rate', value: '70%' },
                { label: 'K/D', value: '1.6' }
            ],
            description: 'Specializing in mid-lane and support roles. Favorite champions: Ahri, Janna.',
            achievements: [
                { title: 'Master Builder', description: 'Created multiple epic structures' },
                { title: 'Redstone Wizard', description: 'Built complex automation systems' }
            ]
        },
        mobileLegends: {
            title: 'Mobile Legends Bang Bang',
            type: 'MOBA',
            banner: 'assets/images/mlbbW.jpg',
            stats: [
                { label: 'Rank', value: 'Epic' },
                { label: 'Matches Played', value: '600+' },
                { label: 'K/D', value: '1.8' }
            ],
            description: '',
            achievements: [
                { title: 'Master Builder', description: 'Created multiple epic structures' },
                { title: 'Redstone Wizard', description: 'Built complex automation systems' }
            ]
        }
    };

    // Handle game card clicks
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.dataset.game;
            showGameDetails(gameId);
        });
    });

    // Show game details
    function showGameDetails(gameId) {
        const game = gameData[gameId];
        
        // Update detail view content
        detailView.querySelector('.game-header img').src = game.banner;
        detailView.querySelector('.game-header-content h1').textContent = game.title;
        detailView.querySelector('.game-header-content .game-type').textContent = game.type;

        // Update stats
        const statsHTML = game.stats.map(stat => `
            <div class="stat-box">
                <div class="label">${stat.label}</div>
                <div class="value">${stat.value}</div>
            </div>
        `).join('');
        detailView.querySelector('.game-stats').innerHTML = statsHTML;

        // Update description
        detailView.querySelector('.game-description p').textContent = game.description;

        // Update achievements
        const achievementsHTML = game.achievements.map(achievement => `
            <div class="achievement-item">
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            </div>
        `).join('');
        detailView.querySelector('.achievements-list').innerHTML = achievementsHTML;

        // Create other games circles
        const otherGamesHTML = Object.entries(gameData)
            .filter(([id]) => id !== gameId)
            .map(([id, game]) => `
                <div class="game-circle" data-game="${id}">
                    <img src="${game.banner}" alt="${game.title}">
                </div>
            `).join('');
        detailView.querySelector('.game-circles').innerHTML = otherGamesHTML;

        // Show detail view
        detailView.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Add click handlers to game circles
        const gameCircles = detailView.querySelectorAll('.game-circle');
        gameCircles.forEach(circle => {
            circle.addEventListener('click', () => {
                showGameDetails(circle.dataset.game);
            });
        });
    }

    // Handle back button
    backButton.addEventListener('click', () => {
        detailView.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnHamburger && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});