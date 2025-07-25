# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a rigged bingo game application for a gender reveal party, built with vanilla HTML, CSS, and JavaScript. The app guarantees that "Girl Card 1" wins to reveal "IT'S A GIRL!" while maintaining the illusion of a fair game.

## Development Commands

Since this is a vanilla JavaScript application with no build process:
- **Main view**: Open `index.html` directly in browser
- **Dev mode**: Open `index.html?dev=true` (shows all 4 cards for verification)
- **Print mode**: Open `index.html?print=true` (printer-friendly cards for guests)

No package.json, build steps, linting, or testing commands exist - this is a simple static web application.

## Architecture & Key Implementation Details

### Core Files Structure
- `index.html`: Main HTML structure with three view modes (main, dev, print)
- `script.js`: All game logic including hardcoded bingo cards and rigged sequence
- `styles.css`: Gender-neutral pastel theme with casino-style aesthetics

### Critical Game Logic (script.js)

**Hardcoded Bingo Cards**: Four predefined cards (2 boy, 2 girl) with specific numbers to prevent conflicts:
- `bingoCards` object contains all card data
- Girl Card 1 is designed to win with second row: B9, I27, N34, G54, O72

**Rigged Sequence**: ~30 carefully chosen numbers in `riggedSequence` array that:
- Guarantees Girl Card 1 wins after all 5 numbers are called
- Prevents other cards from accidentally winning (max 2 numbers per pattern)
- Creates excitement with near-misses for other cards
- Uses "ultra-safe strategy" where wrong cards can't complete patterns

**Game State Management**: 
- Uses localStorage for persistence across page refreshes
- `gameState` object tracks called numbers, current index, winner status
- `saveGameState()` and `loadGameState()` handle persistence

### View Modes
1. **Main View**: TV-friendly display showing the master board and current ball
2. **Dev Mode** (`?dev=true`): Shows all 4 cards simultaneously for verification
3. **Print Mode** (`?print=true`): Print-friendly cards for distribution to guests

### Styling Architecture (styles.css)
- **Theme**: Gender-neutral pastels with gradients (blues, purples, pinks, greens)
- **Responsive Design**: Adapts from TV display to mobile
- **Alternating Colors**: Called numbers use alternating color schemes
- **Casino Aesthetics**: Professional bingo hall appearance with animations

## Key Functions to Understand

### Game Flow Functions:
- `drawNumber()`: Draws next number from rigged sequence, handles winner detection
- `checkForWinner()`: Validates bingo patterns for all cards
- `checkCardForWin()`: Checks rows, columns, and diagonals for a specific card
- `resetGame()`: Clears localStorage and resets all UI elements

### UI Management:
- `createMainBoard()`: Builds the 5x15 master bingo board grid
- `updateCalledNumbersList()`: Updates the called numbers display
- `showWinner()`: Displays winner announcement overlay

### Mode-Specific Functions:
- `initializeDevMode()`: Creates 4-card development view
- `initializePrintViews()`: Creates print-friendly card layouts

## Critical Security Note

This application intentionally rigs the game outcome. The rigging mechanism is NOT malicious - it's designed for a private gender reveal party where the outcome is predetermined. The "rigging" is transparent in dev mode and documented in the README.

## Important Implementation Notes

- **No External Dependencies**: Pure vanilla JavaScript, HTML, CSS
- **No Build Process**: Direct file opening, no compilation needed  
- **LocalStorage Persistence**: Game state survives page refreshes
- **Careful Number Selection**: Each number in `riggedSequence` is verified safe
- **Winner Detection Timing**: Bingo is detected but winner isn't shown until next draw (creates suspense)

## Common Modifications

When modifying this application:
- **Changing Cards**: Edit `bingoCards` object, verify no conflicts with `riggedSequence`
- **Sequence Changes**: Modify `riggedSequence` array, test in dev mode to prevent wrong wins
- **Styling Updates**: Focus on `styles.css`, maintain responsive design for TV display
- **UI Changes**: Most interaction happens in `index.html` and corresponding JavaScript functions

## Testing the Rigging

Always test changes in dev mode (`index.html?dev=true`) to verify:
1. Girl Card 1 wins with exactly the expected pattern
2. No other card accidentally wins before Girl Card 1
3. The sequence creates appropriate excitement without wrong wins