# Windows Simulator
[🇬🇷 Read this in Ελληνικά](./README_GR.md)

A retro Windows 98-inspired operating system simulator built with Vanilla JavaScript, featuring draggable windows, interactive desktop shortcuts, an accessible Start Menu, and a chaotic popup alert system.

## Features

- Windows 98-inspired desktop environment
- Interactive desktop shortcuts
- Dynamic draggable windows
- Window focus management with dynamic Z-index
- Fully functional Start Menu
- Live system clock
- Chaos Engine with automatic popup generation
- Fake critical system alerts
- Keyboard accessibility support
- ARIA labels for screen readers
- Reduced motion accessibility support
- Responsive mobile layout
- Touch Events support for mobile devices

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

## Local Setup

1. Clone repository

```bash
git clone https://github.com/dgiagkoudi/windows-simulator-project.git

cd windows-simulator-project
```

2. Run project

Open `index.html` directly in your browser.

## Functionality

The simulator allows users to:

- Open multiple application windows
- Drag windows around the desktop
- Use the Start Menu
- Trigger fake system chaos events
- Close windows dynamically
- Navigate using keyboard controls

## Accessibility

The application includes:

- Keyboard navigation support
- ARIA accessibility attributes
- Screen reader compatibility
- Escape key support for closing windows
- Focus state styling
- Reduced motion support using `prefers-reduced-motion`

## Mobile Support

Optimized for:

- Mobile screens
- Touch interactions
- Responsive desktop scaling

## Chaos Engine

The built-in Chaos Engine generates fake system errors and popup windows inspired by old operating systems.

Examples include:

- Fake critical errors
- Virus simulation popups
- Recursive alert spawning
- Humorous system messages

## Future Improvements

- Window minimize/maximize functionality
- Desktop icon dragging
- Sound effects
- Fake browser application
- File explorer simulation
- Retro boot screen
- Desktop themes
- Save desktop state
