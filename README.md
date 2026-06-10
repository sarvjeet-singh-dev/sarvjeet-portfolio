# Developer Portfolio System

## Overview

This is a modern developer portfolio built with a custom **SER (State, Events, Render)** architecture.

The project is designed to simulate real-world frontend system design practices — focusing on modular architecture, event-driven updates, and fully data-driven UI rendering.

Unlike traditional portfolios, this system does not rely on hardcoded UI updates. Instead, the entire interface is generated from a centralized data layer, allowing new projects to be added without touching the rendering logic.

---

## Core Features

### Dynamic Portfolio Engine

- Fully data-driven project rendering system
- Centralized data layer controls entire UI output
- New projects auto-render without UI modifications
- Optimized interaction handling using event delegation

---

## 📸 Screenshots

### Home Page
![Home Page](/public/project1.png)

### Project Intelligence Layer

- Dedicated dynamic project details system
- Structured project breakdown including:
  - Features
  - Engineering challenges
  - Implementation insights
  - Learning outcomes
- Reusable component-based rendering pipeline

---

### SER Architecture (Custom Built)

A lightweight frontend architecture inspired by modern state-driven systems.

- **State → single source of truth**
- **Events → interaction layer**
- **Render → UI synchronization layer**

Ensures predictable UI updates and clean separation of concerns.

---

### Multi-Page System (Framework-Free)

- Manual routing system built using DOM-level detection
- Separate execution flows per page context
- Prevents unnecessary script execution across pages
- Lightweight SPA-like behavior without frameworks

---

## Architecture Design

### State Layer

Centralized state container managing:
- Project dataset
- UI state
- Shared application context

---

### Event Layer

Handles all user interactions:
- Navigation triggers
- Project selection
- UI interaction binding

Uses event delegation to minimize DOM listeners and improve performance.

---

### Render Layer

Responsible for:
- Dynamic DOM generation
- UI updates based on state changes
- Component rendering logic

Keeps UI logic isolated from business logic.

---

## Application Flow

### Page Detection System

The entry point (`main.js`) determines execution flow based on DOM context:

- **Home Page** → Initializes portfolio rendering engine
- **Details Page** → Loads project detail renderer only

This prevents cross-page logic leakage and unnecessary computation.

---

### Central Execution Controller

`main.js` acts as the orchestration layer:

- Initializes page-specific modules
- Controls execution lifecycle
- Prevents redundant rendering cycles

---

### Dynamic Rendering Pipeline

- UI is generated directly from structured data
- No hardcoded project elements
- Single update point (data file) reflects across entire UI

---

### Event Delegation Strategy

Instead of attaching multiple listeners:

- Single delegated listener handles interactions
- Improves performance
- Reduces memory overhead
- Supports dynamic elements seamlessly

---

## Tech Stack

- JavaScript (ES6+)
- HTML5
- Tailwind CSS
- Vite

---

## Engineering Highlights

- Custom frontend architecture (SER pattern)
- State-driven UI system (vanilla implementation)
- Framework-free multi-page logic handling
- Component-based rendering design
- Event delegation for performance optimization
- Data-driven UI generation system
- Modular and scalable code structure

---

## System Challenges Solved

- Managing UI consistency across multiple pages without frameworks
- Avoiding tight coupling between state, events, and rendering
- Designing scalable project expansion without UI rewrite
- Handling modular rendering flow across different contexts
- Maintaining separation between routing and UI logic

---

## Key Learnings

- How state-driven systems behave at a low level
- Practical implementation of reactive UI concepts without frameworks
- Architecture planning for scalable frontend systems
- Component reusability in vanilla JavaScript
- Performance tradeoffs in DOM-heavy applications

---

## Live Demo

[https://sarvjeet-dev-portfolio.netlify.app/]
