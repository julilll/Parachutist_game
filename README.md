# Parachutist Game

This is a simple HTML5 Canvas game developed in TypeScript. In this game, a plane drops parachutists, and the player controls a boat to catch them before they fall into the sea. The game is designed with clean code and good software design principles.

## Features

- Control the boat using the keyboard (Arrow keys) or mouse.
- Earn points by catching parachutists.
- Lose lives if parachutists fall into the sea.
- The game ends when all lives are lost.
- The plane moves from side to side and drops parachutists at random intervals.

## Project Structure

project/
├── dist/ # Compiled JavaScript files
│ ├── boat.js
│ ├── game.js
│ ├── plane.js
│ └── parachutist.js
├── src/ # Source TypeScript files
│ ├── boat.ts # Boat class
│ ├── game.ts # Game class
│ ├── plane.ts # Plane class
│ └── parachutist.ts # Parachutist class
├── assets/ # Asset images
│ ├── background.png
│ ├── boat.png
│ ├── parachutist.png
│ ├── plane.png
│ └── sea.png
├── index.html # HTML file to load the game
├── package.json # Node.js dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation


## Setup and Installation

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd project
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Compile TypeScript files**
    ```bash
    tsc
    ```

4. **Run the local server**
    ```bash
    python -m http.server 8000
    ```

5. **Open the game in your browser**
    Navigate to `http://localhost:8000` in your web browser.

## Code Overview

### Boat Class (`src/boat.ts`)

- Controls the boat's movement.
- Moves left, right, or to a specified position.
- Draws the boat image on the canvas.

### Plane Class (`src/plane.ts`)

- Controls the plane's movement from side to side.
- Drops parachutists at random intervals.
- Draws the plane image on the canvas.

### Parachutist Class (`src/parachutist.ts`)

- Manages the parachutist's falling movement.
- Detects collisions with the boat.
- Draws the parachutist on the canvas.

### Game Class (`src/game.ts`)

- Manages the game state, including points and lives.
- Initializes the canvas and game elements.
- Handles user input for controlling the boat.
- Spawns parachutists and updates their positions.
- Checks for collisions and updates the game state.
- Renders all game elements on the canvas.
- Contains the main game loop.

## Future Improvements

- Add more levels with increasing difficulty.
- Include sound effects and background music.
- Implement different types of parachutists with unique behaviors.
- Enhance graphics and animations.

## License

This project is licensed under the MIT License.

## Acknowledgements

- This game was developed using HTML5 Canvas and TypeScript.
- Images for the boat, plane, and sea were used from provided assets.
