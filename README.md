# Rigged Bingo Gender Reveal App

## Project Overview
A rigged bingo game for a gender reveal party where Girl Card 1 is guaranteed to win, revealing "IT'S A GIRL!" Built with HTML, CSS, and JavaScript for browser display on TV. Supports both 4-card and 8-card party modes.

## Working Configuration
- **Girl Card 1 wins with second row:** B9, I27, N34, G54, O72 (same in both modes)
- **Dual rigged sequences** that prevent wrong card wins while creating excitement
- **4-card mode:** ~28 carefully chosen numbers for smaller parties
- **8-card mode:** ~32 carefully chosen numbers for larger parties  
- **Cards are carefully designed** to avoid conflicts with their respective sequences
- **Ultra-safe strategy:** Wrong cards get maximum 2 numbers from any winning pattern

## File Structure
- `index.html`: Main app structure with casino-style layout
- `styles.css`: Beautiful casino visuals with gold/gradient theme matching reference design
- `script.js`: Game logic with hardcoded rigged sequence and win-checking

## Usage Instructions
- **4-card mode:** Open `index.html` in browser (default)
- **8-card mode:** Open `index.html?cards=8` for larger parties
- **4-card dev mode:** Open `index.html?dev=true` (shows all 4 cards for verification)
- **8-card dev mode:** Open `index.html?dev=true&cards=8` (shows all 8 cards for verification)
- **4-card print mode:** Open `index.html?print=true` (printer-friendly cards for guests)
- **8-card print mode:** Open `index.html?print=true&cards=8` (print all 8 cards)

## Key Features
- **Dual mode system:** Switch between 4-card and 8-card modes via URL parameter
- **Rigged sequences:** Carefully chosen numbers that look random but guarantee Girl Card 1 wins
- **Win-checking:** Prevents accidental wrong card wins through careful number selection
- **Scalable design:** Same rigging strategy works for both 4 and 8 guest parties
- **Casino aesthetics:** TV-friendly display with professional bingo hall appearance
- **Dev modes:** Verify rigging works correctly by watching all cards get marked
- **Print cards:** Generate appropriate number of cards for distribution to guests

## Card Distribution Strategy

**4-Card Mode:**
- **Boy Card 1 & 2:** Give to guests you want to "lose"
- **Girl Card 1:** The guaranteed winner (give to someone you want to announce)
- **Girl Card 2:** Safe backup option (gets close but can't win)

**8-Card Mode:**
- **Boy Cards 1-4:** Give to guests you want to "lose"
- **Girl Card 1:** The guaranteed winner (give to someone you want to announce)
- **Girl Cards 2-4:** Safe backup options (get close but can't win)

## Technical Implementation
- **Dual card sets:** `bingoCards` (4-card) and `bingoCards8` (8-card) with specific numbers to avoid conflicts
- **Dual sequences:** `riggedSequence` (~28 numbers) and `riggedSequence8` (~32 numbers)
- **URL parameter switching:** `?cards=8` activates 8-card mode
- **Dynamic UI:** Modern casino-style interface with animations and effects
- **Responsive design:** Works on desktop and TV displays
- **Smart mode detection:** All functions automatically use active card set and sequence

## Sequence Safety Strategy
The breakthrough solution uses an "ultra-safe sequence strategy" for both modes:
1. Wrong cards get maximum 2 numbers from any row/column/diagonal
2. Girl Card 1's winning numbers are interspersed throughout sequence
3. 4-card mode: ~28 numbers provide optimal pacing for smaller groups
4. 8-card mode: ~32 numbers accommodate larger groups while maintaining safety
5. All numbers are strategically chosen to prevent accidental wins
6. Extended sequences create engaging gameplay with appropriate excitement

## Color Scheme & Style
- **Background:** Deep blue gradients (casino night theme)
- **Accents:** Gold borders and highlights
- **Numbers:** Gray with orange highlights when called
- **Current ball:** Red circular display with gold border
- **Animations:** Smooth transitions and celebration effects

## Tested & Verified

**4-Card Mode:**
- ✅ Girl Card 1 always wins with second row
- ✅ No other card can accidentally win
- ✅ Exciting gameplay with close calls
- ✅ Works in dev mode for verification

**8-Card Mode:**
- ✅ Girl Card 1 always wins with second row (same pattern)
- ✅ No other card (including 4 additional cards) can accidentally win
- ✅ Extended 32-number sequence maintains excitement
- ✅ All 8 cards display and highlight properly in dev mode

**Both Modes:**
- ✅ Professional casino appearance
- ✅ Print-friendly card generation
- ✅ Dynamic UI adapts automatically

## Future Enhancement Ideas
- Sound effects for number calls
- Different winning patterns (corners, diagonal)
- Multiple game themes
- Mobile-friendly responsive design
- Automatic card shuffling for replays