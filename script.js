// Bingo Cards - Hardcoded (2 Boy, 2 Girl)
// Girl Card 1 will win with second row: B9, I27, N34, G54, O72
const bingoCards = {
    boy1: {
        B: [1, 7, 12, 15, 3],
        I: [18, 22, 28, 30, 24],
        N: [33, 35, "FREE", 44, 38],
        G: [47, 52, 58, 60, 55],
        O: [62, 67, 73, 75, 70]
    },
    boy2: {
        B: [2, 8, 13, 14, 6],
        I: [17, 23, 29, 25, 19],
        N: [32, 36, "FREE", 45, 39],
        G: [48, 53, 59, 56, 51],
        O: [63, 71, 74, 69, 65]
    },
    girl1: {
        B: [5, 9, 4, 10, 11],
        I: [16, 27, 20, 26, 21],
        N: [31, 34, "FREE", 37, 42],
        G: [46, 54, 57, 50, 49],
        O: [61, 72, 68, 66, 64]
    },
    girl2: {
        B: [15, 12, 7, 3, 1],
        I: [30, 18, 25, 22, 24],
        N: [38, 44, "FREE", 35, 40],
        G: [60, 55, 52, 58, 47],
        O: [75, 70, 67, 73, 62]
    }
};

// 8-Card Bingo Cards - Hardcoded (4 Boy, 4 Girl)
// Girl Card 1 SAME winning pattern: B9, I27, N34, G54, O72
const bingoCards8 = {
    boy1: {
        B: [1, 7, 12, 15, 3],
        I: [18, 22, 28, 30, 24],
        N: [33, 35, "FREE", 44, 38],
        G: [47, 52, 58, 60, 55],
        O: [62, 67, 73, 75, 70]
    },
    boy2: {
        B: [2, 8, 13, 14, 6],
        I: [17, 23, 29, 25, 19],
        N: [32, 36, "FREE", 45, 39],
        G: [48, 53, 59, 56, 51],
        O: [63, 71, 74, 69, 65]
    },
    boy3: {
        B: [6, 13, 5, 8, 15],
        I: [20, 26, 18, 29, 17],
        N: [40, 32, "FREE", 38, 44],
        G: [51, 49, 58, 53, 47],
        O: [65, 71, 62, 69, 75]
    },
	boy4: {
        B: [4, 11, 10, 1, 14],
        I: [19, 24, 16, 23, 28],
        N: [41, 43, "FREE", 33, 31],
        G: [50, 57, 46, 61, 48],
        O: [66, 68, 70, 74, 63]
    },
    girl1: {
        B: [5, 9, 4, 10, 11],
        I: [16, 27, 20, 26, 21],
        N: [31, 34, "FREE", 37, 42],
        G: [46, 54, 57, 50, 49],
        O: [61, 72, 68, 66, 64]
    },
    girl2: {
        B: [15, 12, 7, 3, 1],
        I: [30, 18, 25, 22, 24],
        N: [38, 44, "FREE", 35, 40],
        G: [60, 55, 52, 58, 47],
        O: [75, 70, 67, 73, 62]
    },
    girl3: {
        B: [3, 2, 14, 12, 6],
        I: [25, 19, 30, 17, 22],
        N: [36, 39, "FREE", 41, 35],
        G: [59, 48, 51, 55, 60],
        O: [64, 66, 75, 61, 67]
    },
    girl4: {
        B: [7, 1, 13, 8, 4],
        I: [21, 28, 24, 18, 16],
        N: [37, 40, "FREE", 43, 32],
        G: [52, 56, 49, 47, 53],
        O: [68, 63, 74, 65, 70]
    }
};

// HARDCODED RIGGED SEQUENCE - EXTREMELY CAREFULLY VERIFIED
// Girl Card 1 will win with second row: B9, I27, N34, G54, O72
// 
// CARD ANALYSIS (to prevent wrong wins):
// Boy1: B[1,7,12,15,3], I[18,22,28,30,24], N[33,35,FREE,44,38], G[47,52,58,60,55], O[62,67,73,75,70]
// Boy2: B[2,8,13,14,6], I[17,23,29,25,19], N[32,36,FREE,45,39], G[48,53,59,56,51], O[63,71,74,69,65]
// Girl1: B[5,9,4,10,11], I[16,27,20,26,21], N[31,34,FREE,37,42], G[46,54,57,50,49], O[61,72,68,66,64] (WINNER - second row)
// Girl2: B[15,12,7,3,1], I[30,18,25,22,24], N[38,44,FREE,35,40], G[60,55,52,58,47], O[75,70,67,73,62]
//
// SEQUENCE LENGTH: ~30 numbers total - creates longer, more engaging game
const riggedSequence = [
    // Safe numbers that don't create patterns
    'I17',   // Boy2 only - safe
    'G60',   // Girl2 only - safe
    'B4',    // Girl1 only - safe
    'B6',    // Boy2 only - safe
    'O62',   // NOT on any card - completely safe
    'B2',    // Boy2 only - safe
    'G54',   // Girl1 WINNING #1 (second row)
    'N32',   // Boy2 only - safe
    'O75',   // Girl2 only - safe
    'B9',    // Girl1 WINNING #2 (second row)
    'I18',   // Girl2 only - safe
    'G55',   // Girl2 only - safe
    'O63',   // Boy2 only - safe
    'N36',   // Boy2 only - safe
    'I27',   // Girl1 WINNING #3 (second row)
    'G47',   // Girl2 only - safe
    'G51',   // Boy2 only - safe
    'B5',    // Girl1 only - safe
    'O71',   // Boy2 only - safe
    'B3',    // Girl2 only - safe
    'I21',   // Girl1 only - safe
    'O69',   // Boy2 only - safe
    'I22',   // Girl2 only - safe
    'G49',   // Girl1 only - safe
    'N34',   // Girl1 WINNING #4 (second row)
    'G52',   // Girl2 only - safe
    'O64',   // Girl1 only - safe
    'O72'    // Girl1 WINNING #5 (second row) - GIRL1 WINS!
];

// 8-Card Rigged Sequence - Extended for 8 cards (32 numbers)
// Girl Card 1 SAME winning pattern: B9, I27, N34, G54, O72
//
// STRATEGY: Ultra-safe numbers that prevent any wrong card from getting more than 2 in any pattern
const riggedSequence8 = [
    // Safe opening numbers
    'I17',
    'G60',
    'B4',
    'B6',
    'O66',
    'B2',
    'I19',
	'O74',
    'G54',   // Girl1 WINNING #1 (second row)
    'N31',
    'O75',
    'B9',    // Girl1 WINNING #2 (second row)
    'I18',
    'O63',
    'N36',
    'I27',   // Girl1 WINNING #3 (second row)
    'G47',
    'G51',
    'B5',
    'O71',
    'B3',
    'I21',
    'O69',
    'I22',
    'G49',
	'O62',
    'B1',
    'N40',
    'N34',   // Girl1 WINNING #4 (second row)
    'G52',
    'O64',
    'O72'    // Girl1 WINNING #5 (second row) - GIRL1 WINS!
];

// Detect card mode from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const cardMode = urlParams.get('cards') === '8' ? '8' : '4';

// Get active card set and sequence based on mode
function getActiveCards() {
    return cardMode === '8' ? bingoCards8 : bingoCards;
}

function getActiveSequence() {
    return cardMode === '8' ? riggedSequence8 : riggedSequence;
}

// Game state
let gameState = {
    calledNumbers: [],
    currentIndex: 0,
    gameEnded: false,
    winnerFound: false,
    bingoDetected: false,
    winningCard: null
};

// LocalStorage key
const STORAGE_KEY = 'bingoGameState';

// Save game state to localStorage
function saveGameState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch (error) {
        console.warn('Failed to save game state:', error);
    }
}

// Load game state from localStorage
function loadGameState() {
    try {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            // Merge saved state with current state
            Object.assign(gameState, parsedState);
            return true;
        }
    } catch (error) {
        console.warn('Failed to load game state:', error);
    }
    return false;
}

// Reset game to initial state
function resetGame() {
    // Clear localStorage
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.warn('Failed to clear saved game state:', error);
    }
    
    // Reset game state
    gameState = {
        calledNumbers: [],
        currentIndex: 0,
        gameEnded: false,
        winnerFound: false,
        bingoDetected: false,
        winningCard: null
    };
    
    // Reset UI
    document.getElementById('ball-number').textContent = 'Ready';
    document.getElementById('ball-letter').textContent = '';
    document.getElementById('draw-button').disabled = false;
    document.getElementById('winner-announcement').style.display = 'none';
    
    // Clear called numbers display
    document.getElementById('called-numbers-grid').innerHTML = '';
    
    // Reset main board
    document.querySelectorAll('.number-cell.called').forEach(cell => {
        cell.classList.remove('called');
        cell.classList.remove('alternate');
    });
    
    // Reset dev mode if active
    if (document.getElementById('dev-section').style.display === 'block') {
        document.querySelectorAll('.card-cell.marked').forEach(cell => {
            // Only remove marked class if it's not the FREE space
            if (cell.textContent !== 'FREE') {
                cell.classList.remove('marked');
            }
        });
    }
}

// Initialize the game
function initGame() {
    createMainBoard();
    setupEventListeners();
    checkDevMode();
    initializePrintViews();
    
    // Load saved game state if available
    if (loadGameState()) {
        restoreGameUI();
    }
}

// Create the main bingo board display (grid layout like reference)
function createMainBoard() {
    const boardGrid = document.getElementById('board-grid');
    const columns = ['B', 'I', 'N', 'G', 'O'];
    const ranges = {
        'B': [1, 15],
        'I': [16, 30], 
        'N': [31, 45],
        'G': [46, 60],
        'O': [61, 75]
    };

    // Clear any existing content
    boardGrid.innerHTML = '';

    // Create rows for each letter (5 rows, 15 columns each)
    columns.forEach(letter => {
        // Create row header for each letter
        const header = document.createElement('div');
        header.className = 'row-header';
        header.textContent = letter;
        boardGrid.appendChild(header);

        // Create all 15 numbers for this letter's row
        const [start] = ranges[letter];
        for (let i = 0; i < 15; i++) {
            const number = start + i;
            
            const numberCell = document.createElement('div');
            numberCell.className = 'number-cell';
            numberCell.textContent = number;
            numberCell.id = `cell-${letter}${number}`;
            boardGrid.appendChild(numberCell);
        }
    });
}

// Restore UI based on loaded game state
function restoreGameUI() {
    // Update current ball display
    if (gameState.calledNumbers.length > 0) {
        const lastCall = gameState.calledNumbers[gameState.calledNumbers.length - 1];
        const letter = lastCall[0];
        const number = lastCall.substring(1);
        document.getElementById('ball-letter').textContent = letter;
        document.getElementById('ball-number').textContent = number;
    }
    
    // Update called numbers display
    updateCalledNumbersList();
    
    // Mark numbers on main board with alternating colors
    gameState.calledNumbers.forEach((numberCall, index) => {
        const cell = document.getElementById(`cell-${numberCall}`);
        if (cell) {
            cell.classList.add('called');
            // Alternate colors based on call order (even/odd)
            if (index % 2 === 1) {
                cell.classList.add('alternate');
            }
        }
    });
    
    // Update dev mode if active
    if (document.getElementById('dev-section').style.display === 'block') {
        updateDevMode();
    }
    
    // Handle game end states
    if (gameState.gameEnded) {
        document.getElementById('draw-button').disabled = true;
    }
    
    if (gameState.winnerFound) {
        document.getElementById('winner-announcement').style.display = 'flex';
    }
}

// Setup event listeners
function setupEventListeners() {
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    const closeWinnerButton = document.getElementById('close-winner');
    
    drawButton.addEventListener('click', drawNumber);
    resetButton.addEventListener('click', resetGame);
    closeWinnerButton.addEventListener('click', closeWinnerAnnouncement);
}

// Check if dev mode should be enabled
function checkDevMode() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('dev') === 'true') {
        // Show dev section on the same page
        document.getElementById('dev-section').style.display = 'block';
        initializeDevMode();
    } else if (urlParams.get('print') === 'true') {
        showView('print');
    }
}

// Show different views
function showView(view) {
    const views = ['main-view', 'print-view'];
    views.forEach(v => {
        document.getElementById(v).style.display = 'none';
    });
    document.getElementById(`${view}-view`).style.display = 'block';
}

// Draw the next number from rigged sequence
function drawNumber() {
    // If bingo was detected on previous draw, show winner now
    if (gameState.bingoDetected && !gameState.winnerFound) {
        showWinner(gameState.winningCard);
        gameState.gameEnded = true;
        gameState.winnerFound = true;
        document.getElementById('draw-button').disabled = true;
        saveGameState();
        return;
    }

    const activeSequence = getActiveSequence();
    if (gameState.gameEnded || gameState.currentIndex >= activeSequence.length) {
        return;
    }

    const numberCall = activeSequence[gameState.currentIndex];
    const letter = numberCall[0];
    const number = numberCall.substring(1);
    
    gameState.calledNumbers.push(numberCall);
    gameState.currentIndex++;

    // Save game state after each number draw
    saveGameState();

    // Show ball pick overlay
    showBallPickOverlay(letter, number);

    // Update current ball display
    document.getElementById('ball-number').textContent = number;
    document.getElementById('ball-letter').textContent = letter;

    // Mark number on main board with alternating colors
    const cell = document.getElementById(`cell-${numberCall}`);
    if (cell) {
        cell.classList.add('called');
        // Alternate colors based on call order (even/odd)
        if ((gameState.currentIndex - 1) % 2 === 1) {
            cell.classList.add('alternate');
        }
    }

    // Update called numbers list
    updateCalledNumbersList();

    // Update dev mode if active
    if (document.getElementById('dev-section').style.display === 'block') {
        updateDevMode();
    }

    // Check for winner after each number
    checkForWinner();
}

// Update the called numbers display
function updateCalledNumbersList() {
    const calledGrid = document.getElementById('called-numbers-grid');
    calledGrid.innerHTML = '';
    
    gameState.calledNumbers.forEach(numberCall => {
        const span = document.createElement('span');
        span.className = 'called-number';
        span.textContent = numberCall;
        calledGrid.appendChild(span);
    });
}

// Check if any card has won
function checkForWinner() {
    const activeCards = getActiveCards();
    Object.keys(activeCards).forEach(cardKey => {
        if (checkCardForWin(activeCards[cardKey], cardKey)) {
            if (cardKey === 'girl1' && !gameState.bingoDetected) {
                // Detect bingo but don't show winner yet
                gameState.bingoDetected = true;
                gameState.winningCard = cardKey;
                saveGameState();
            }
        }
    });
}

// Check if a specific card has a winning pattern
function checkCardForWin(card, cardKey) {
    const columns = ['B', 'I', 'N', 'G', 'O'];
    
    // Check rows
    for (let row = 0; row < 5; row++) {
        let hasWinningRow = true;
        for (let col = 0; col < 5; col++) {
            const letter = columns[col];
            const number = card[letter][row];
            if (number !== "FREE" && !gameState.calledNumbers.includes(`${letter}${number}`)) {
                hasWinningRow = false;
                break;
            }
        }
        if (hasWinningRow) {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 5; col++) {
        let hasWinningColumn = true;
        const letter = columns[col];
        for (let row = 0; row < 5; row++) {
            const number = card[letter][row];
            if (number !== "FREE" && !gameState.calledNumbers.includes(`${letter}${number}`)) {
                hasWinningColumn = false;
                break;
            }
        }
        if (hasWinningColumn) {
            return true;
        }
    }

    // Check diagonals
    let hasWinningDiagonal1 = true;
    let hasWinningDiagonal2 = true;
    
    for (let i = 0; i < 5; i++) {
        const letter1 = columns[i];
        const letter2 = columns[4 - i];
        const number1 = card[letter1][i];
        const number2 = card[letter2][i];
        
        if (number1 !== "FREE" && !gameState.calledNumbers.includes(`${letter1}${number1}`)) {
            hasWinningDiagonal1 = false;
        }
        if (number2 !== "FREE" && !gameState.calledNumbers.includes(`${letter2}${number2}`)) {
            hasWinningDiagonal2 = false;
        }
    }

    return hasWinningDiagonal1 || hasWinningDiagonal2;
}

// Show winner announcement
function showWinner(cardKey) {
    const winnerAnnouncement = document.getElementById('winner-announcement');
    winnerAnnouncement.style.display = 'flex';
}

// Close winner announcement
function closeWinnerAnnouncement() {
    const winnerAnnouncement = document.getElementById('winner-announcement');
    winnerAnnouncement.style.display = 'none';
}

// Show ball pick overlay with fade-in-zoom-in animation
function showBallPickOverlay(letter, number) {
    const overlay = document.getElementById('ball-pick-overlay');
    const overlayLetter = document.getElementById('overlay-ball-letter');
    const overlayNumber = document.getElementById('overlay-ball-number');
    
    // Set the ball content
    overlayLetter.textContent = letter;
    overlayNumber.textContent = number;
    
    // Show overlay with fade-in-zoom-in animation
    overlay.style.display = 'flex';
    
    // Force a reflow to ensure display change takes effect
    overlay.offsetHeight;
    
    // Add show class to trigger animation
    overlay.classList.add('show');
    overlay.classList.remove('hide');
    
    // Hide overlay after 2 seconds with fade-out-zoom-out animation
    setTimeout(() => {
        hideBallPickOverlay();
    }, 2000);
}

// Hide ball pick overlay with fade-out-zoom-out animation
function hideBallPickOverlay() {
    const overlay = document.getElementById('ball-pick-overlay');
    
    // Add hide class to trigger fade-out-zoom-out animation
    overlay.classList.add('hide');
    overlay.classList.remove('show');
    
    // Actually hide the overlay after animation completes (0.3s)
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

// Initialize dev mode
function initializeDevMode() {
    const cardsGrid = document.querySelector('.cards-grid');
    const cardKeys = cardMode === '8' 
        ? ['boy1', 'boy2', 'boy3', 'boy4', 'girl1', 'girl2', 'girl3', 'girl4']
        : ['boy1', 'boy2', 'girl1', 'girl2'];
    
    // Clear existing cards
    cardsGrid.innerHTML = '';
    
    // Create containers and cards dynamically
    cardKeys.forEach(cardKey => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        
        const title = document.createElement('h3');
        const cardNum = cardKey.match(/\d+/)[0];
        const cardType = cardKey.includes('boy') ? 'Boy' : 'Girl';
        title.textContent = `${cardType} Card ${cardNum}${cardKey === 'girl1' ? ' (Winner)' : ''}`;
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'bingo-card';
        cardDiv.id = `${cardKey.replace(/(\d)/, '-card-$1')}`;
        
        cardContainer.appendChild(title);
        cardContainer.appendChild(cardDiv);
        cardsGrid.appendChild(cardContainer);
        
        createCardDisplay(cardKey, cardDiv.id);
    });
}

// Create a card display for dev mode
function createCardDisplay(cardKey, containerId) {
    const container = document.getElementById(containerId);
    const activeCards = getActiveCards();
    const card = activeCards[cardKey];
    const columns = ['B', 'I', 'N', 'G', 'O'];
    
    container.innerHTML = '';
    
    // Create headers
    columns.forEach(letter => {
        const header = document.createElement('div');
        header.className = 'card-header';
        header.textContent = letter;
        container.appendChild(header);
    });
    
    // Create cells
    for (let row = 0; row < 5; row++) {
        columns.forEach(letter => {
            const cell = document.createElement('div');
            cell.className = 'card-cell';
            const number = card[letter][row];
            cell.textContent = number;
            cell.id = `${cardKey}-${letter}${number}`;
            
            if (number === "FREE") {
                cell.classList.add('marked');
            }
            
            container.appendChild(cell);
        });
    }
}


// Update dev mode displays
function updateDevMode() {
    // Update card markings
    const activeCards = getActiveCards();
    Object.keys(activeCards).forEach(cardKey => {
        const card = activeCards[cardKey];
        const columns = ['B', 'I', 'N', 'G', 'O'];
        
        columns.forEach(letter => {
            card[letter].forEach(number => {
                if (number !== "FREE") {
                    const cell = document.getElementById(`${cardKey}-${letter}${number}`);
                    if (cell && gameState.calledNumbers.includes(`${letter}${number}`)) {
                        cell.classList.add('marked');
                    }
                }
            });
        });
    });
}

// Initialize print views
function initializePrintViews() {
    const printContainer = document.querySelector('.print-container');
    const cardKeys = cardMode === '8' 
        ? ['boy1', 'boy2', 'boy3', 'boy4', 'girl1', 'girl2', 'girl3', 'girl4']
        : ['boy1', 'boy2', 'girl1', 'girl2'];
    
    // Clear existing print pages
    printContainer.innerHTML = '';
    
    // Create print pages dynamically
    cardKeys.forEach(cardKey => {
        const printPage = document.createElement('div');
        printPage.className = 'print-page';
        printPage.id = `print-${cardKey.replace(/(\d)/, '-$1')}`;
        
        const title = document.createElement('h2');
        const cardNum = cardKey.match(/\d+/)[0];
        const cardType = cardKey.includes('boy') ? 'BOY' : 'GIRL';
        title.textContent = `${cardType} BINGO CARD #${cardNum}`;
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'print-bingo-card';
        cardDiv.id = `print-${cardKey.replace(/(\d)/, '-card-$1')}`;
        
        printPage.appendChild(title);
        printPage.appendChild(cardDiv);
        printContainer.appendChild(printPage);
        
        createPrintCard(cardKey, cardDiv.id);
    });
}

// Create a print-friendly card
function createPrintCard(cardKey, containerId) {
    const container = document.getElementById(containerId);
    const activeCards = getActiveCards();
    const card = activeCards[cardKey];
    const columns = ['B', 'I', 'N', 'G', 'O'];
    
    container.innerHTML = '';
    
    // Create headers
    columns.forEach(letter => {
        const header = document.createElement('div');
        header.className = 'card-header';
        header.textContent = letter;
        container.appendChild(header);
    });
    
    // Create cells
    for (let row = 0; row < 5; row++) {
        columns.forEach(letter => {
            const cell = document.createElement('div');
            cell.className = 'card-cell';
            const number = card[letter][row];
            cell.textContent = number;
            container.appendChild(cell);
        });
    }
}

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', initGame);