# Drums-Game

A small drum kit that runs in the browser. Press a key or click a pad to play a sound. The pad lights up and the background flashes purple for a moment.

Built with plain HTML, CSS and JavaScript. No libraries.

## How to play

| Key | Sound      |
|-----|------------|
| W   | Tom 1      |
| A   | Tom 2      |
| S   | Tom 3      |
| D   | Tom 4      |
| J   | Snare      |
| K   | Crash      |
| L   | Kick bass  |

You can also click the buttons with the mouse.

## Run it locally

```bash
git clone https://github.com/youssefomar10-10/Drums-Game.git
```

Then open `index.html` in your browser. There is nothing to install.

## What's inside

- `index.html` – the page and the seven pads
- `styles.css` – layout and the "pressed" animation
- `index.js` – click and keyboard handling, sound playback
- `.mp3` / `.png` files – the drum sounds and pad images

## What I practiced

- Adding event listeners to several buttons with a loop
- Handling clicks and key presses with the same functions
- Mapping keys to sound files with an object
- Playing audio with the `Audio` object
- Adding and removing a CSS class after a short delay with `setTimeout`

## Ideas for later

- Volume control
- Record and replay a beat
- Better touch support on phones

Built while learning JavaScript DOM manipulation and event handling.
