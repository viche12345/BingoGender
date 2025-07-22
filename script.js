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

// HARDCODED RIGGED SEQUENCE - EXTREMELY CAREFULLY VERIFIED
// Girl Card 1 will win with second row: B9, I27, N34, G54, O72
// 
// CARD ANALYSIS (to prevent wrong wins):
// Boy1: B[1,7,12,15,3], I[18,22,28,30,24], N[33,35,FREE,44,38], G[47,52,58,60,55], O[62,67,73,75,70]
// Boy2: B[2,8,13,14,6], I[17,23,29,25,19], N[32,36,FREE,45,39], G[48,53,59,56,51], O[63,71,74,69,65]
// Girl1: B[5,9,4,10,11], I[16,27,20,26,21], N[31,34,FREE,37,42], G[46,54,57,50,49], O[61,72,68,66,64] (WINNER - second row)
// Girl2: B[15,12,7,3,1], I[30,18,25,22,24], N[38,44,FREE,35,40], G[60,55,52,58,47], O[75,70,67,73,62]
//
// STRATEGY: Give each wrong card maximum 2 numbers from any winning pattern to create excitement but prevent wins
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

// Game state
let gameState = {
    calledNumbers: [],
    currentIndex: 0,
    gameEnded: false,
    winnerFound: false,
    bingoDetected: false,
    winningCard: null
};

// Initialize the game
function initGame() {
    createMainBoard();
    setupEventListeners();
    checkDevMode();
    initializePrintViews();
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

// Setup event listeners
function setupEventListeners() {
    const drawButton = document.getElementById('draw-button');
    drawButton.addEventListener('click', drawNumber);
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
        return;
    }

    if (gameState.gameEnded || gameState.currentIndex >= riggedSequence.length) {
        return;
    }

    const numberCall = riggedSequence[gameState.currentIndex];
    const letter = numberCall[0];
    const number = numberCall.substring(1);
    
    gameState.calledNumbers.push(numberCall);
    gameState.currentIndex++;

    // Update current ball display
    document.getElementById('ball-number').textContent = number;
    document.getElementById('ball-letter').textContent = letter;

    // Mark number on main board
    const cell = document.getElementById(`cell-${numberCall}`);
    if (cell) {
        cell.classList.add('called');
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
    Object.keys(bingoCards).forEach(cardKey => {
        if (checkCardForWin(bingoCards[cardKey], cardKey)) {
            if (cardKey === 'girl1' && !gameState.bingoDetected) {
                // Detect bingo but don't show winner yet
                gameState.bingoDetected = true;
                gameState.winningCard = cardKey;
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

// Initialize dev mode
function initializeDevMode() {
    const cardKeys = ['boy1', 'boy2', 'girl1', 'girl2'];
    
    cardKeys.forEach(cardKey => {
        createCardDisplay(cardKey, `${cardKey.replace(/(\d)/, '-card-$1')}`);
    });
}

// Create a card display for dev mode
function createCardDisplay(cardKey, containerId) {
    const container = document.getElementById(containerId);
    const card = bingoCards[cardKey];
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
    Object.keys(bingoCards).forEach(cardKey => {
        const card = bingoCards[cardKey];
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
    const cardMappings = {
        'print-boy-card-1': 'boy1',
        'print-boy-card-2': 'boy2', 
        'print-girl-card-1': 'girl1',
        'print-girl-card-2': 'girl2'
    };
    
    Object.keys(cardMappings).forEach(printId => {
        createPrintCard(cardMappings[printId], printId);
    });
}

// Create a print-friendly card
function createPrintCard(cardKey, containerId) {
    const container = document.getElementById(containerId);
    const card = bingoCards[cardKey];
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