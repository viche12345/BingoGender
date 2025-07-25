# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a rigged bingo game application for a gender reveal party, built with vanilla HTML, CSS, and JavaScript. The app guarantees that "Girl Card 1" wins to reveal "IT'S A GIRL!" while maintaining the illusion of a fair game.

## Development Commands

Since this is a vanilla JavaScript application with no build process:
- **Main view**: Open `index.html` directly in browser (default 4-card mode)
- **8-card mode**: Open `index.html?cards=8` (8-card party mode)
- **Dev mode**: Open `index.html?dev=true` (shows all 4 cards for verification)
- **8-card dev mode**: Open `index.html?dev=true&cards=8` (shows all 8 cards for verification)
- **Print mode**: Open `index.html?print=true` (printer-friendly cards for guests)
- **8-card print mode**: Open `index.html?print=true&cards=8` (print all 8 cards)

No package.json, build steps, linting, or testing commands exist - this is a simple static web application.

## Architecture & Key Implementation Details

### Core Files Structure
- `index.html`: Main HTML structure with three view modes (main, dev, print)
- `script.js`: All game logic including hardcoded bingo cards and rigged sequence
- `styles.css`: Gender-neutral pastel theme with casino-style aesthetics

### Critical Game Logic (script.js)

**Dual Card Mode System**: Two complete card sets with URL parameter switching:
- `bingoCards` object contains 4-card data (2 boy, 2 girl) - default mode
- `bingoCards8` object contains 8-card data (4 boy, 4 girl) - activated via `?cards=8`
- Girl Card 1 is designed to win with second row: B9, I27, N34, G54, O72 (same in both modes)

**Dual Rigged Sequences**: Two carefully crafted sequences for different party sizes:
- `riggedSequence`: ~28 numbers for 4-card mode
- `riggedSequence8`: ~32 numbers for 8-card mode
- Both guarantee Girl Card 1 wins after all 5 winning numbers are called
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
3. **8-Card Dev Mode** (`?dev=true&cards=8`): Shows all 8 cards simultaneously for verification
4. **Print Mode** (`?print=true`): Print-friendly cards for distribution to guests
5. **8-Card Print Mode** (`?print=true&cards=8`): Print-friendly layout for all 8 cards

### Styling Architecture (styles.css)
- **Theme**: Gender-neutral pastels with gradients (blues, purples, pinks, greens)
- **Responsive Design**: Adapts from TV display to mobile
- **Alternating Colors**: Called numbers use alternating color schemes
- **Casino Aesthetics**: Professional bingo hall appearance with animations

## Key Functions to Understand

### Game Flow Functions:
- `drawNumber()`: Draws next number from active rigged sequence, handles winner detection
- `checkForWinner()`: Validates bingo patterns for all active cards
- `checkCardForWin()`: Checks rows, columns, and diagonals for a specific card
- `resetGame()`: Clears localStorage and resets all UI elements
- `getActiveCards()`: Returns appropriate card set (4 or 8) based on URL parameter
- `getActiveSequence()`: Returns appropriate sequence based on URL parameter

### UI Management:
- `createMainBoard()`: Builds the 5x15 master bingo board grid
- `updateCalledNumbersList()`: Updates the called numbers display
- `showWinner()`: Displays winner announcement overlay
- `updateDevMode()`: Updates number highlighting on active cards

### Mode-Specific Functions:
- `initializeDevMode()`: Dynamically creates 4 or 8 card development view
- `initializePrintViews()`: Dynamically creates print-friendly layouts for 4 or 8 cards
- `createCardDisplay()`: Creates individual card displays for dev mode
- `createPrintCard()`: Creates individual print-friendly cards

## Critical Security Note

This application intentionally rigs the game outcome. The rigging mechanism is NOT malicious - it's designed for a private gender reveal party where the outcome is predetermined. The "rigging" is transparent in dev mode and documented in the README.

## Important Implementation Notes

- **No External Dependencies**: Pure vanilla JavaScript, HTML, CSS
- **No Build Process**: Direct file opening, no compilation needed  
- **LocalStorage Persistence**: Game state survives page refreshes
- **Dual Mode Architecture**: URL parameter switches between 4-card and 8-card systems
- **Careful Number Selection**: Each number in both sequences is verified safe
- **Winner Detection Timing**: Bingo is detected but winner isn't shown until next draw (creates suspense)
- **Dynamic UI Generation**: Dev and print modes automatically adjust to card count

## Common Modifications

When modifying this application:
- **Changing 4-Card Mode**: Edit `bingoCards` object, verify no conflicts with `riggedSequence`
- **Changing 8-Card Mode**: Edit `bingoCards8` object, verify no conflicts with `riggedSequence8`
- **Sequence Changes**: Modify appropriate sequence array, test extensively in dev mode
- **Adding New Modes**: Create new card objects and sequences, update `getActiveCards()` and `getActiveSequence()`
- **Styling Updates**: Focus on `styles.css`, maintain responsive design for TV display
- **UI Changes**: Most interaction happens in `index.html` and corresponding JavaScript functions

## Testing the Rigging

Always test changes in both dev modes to verify:

**4-Card Mode** (`index.html?dev=true`):
1. Girl Card 1 wins with exactly the expected pattern (row 2)
2. No other card accidentally wins before Girl Card 1
3. The sequence creates appropriate excitement without wrong wins

**8-Card Mode** (`index.html?dev=true&cards=8`):
1. Girl Card 1 wins with exactly the expected pattern (row 2)
2. No other card (including new boy3, boy4, girl3, girl4) accidentally wins
3. The extended 32-number sequence prevents all conflicts
4. All 8 cards display and highlight properly