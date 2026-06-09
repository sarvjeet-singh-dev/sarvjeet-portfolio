# Developer Portfolio Website

## Overview

This is a modern developer portfolio built using a custom **SER (State, Events, Render)** architecture. The project is designed to demonstrate real-world frontend engineering practices such as modular architecture, dynamic rendering, reusable components, and scalable project structure.

Unlike traditional portfolios, this system is fully data-driven — meaning new projects can be added simply by updating a central data file, without modifying UI logic.

---

## Features

### Dynamic Portfolio System

* Fully dynamic project rendering from centralized data
* New projects automatically appear without UI changes
* Event delegation used for efficient interaction handling

### Project Details System

* Dedicated dynamic project details page
* Full project overview with:

  * Features
  * Challenges
  * Learnings
  * Engineering process
* Component-based rendering system

### Architecture Implementation

* Custom SER Architecture:

  * State → Events → Render
* Clear separation of logic and UI layers
* Scalable and maintainable structure

### Multi-Page Logic Handling

* Smart routing logic without frameworks
* Page detection using DOM-based conditions
* Separate rendering flows for:

  * Home page
  * Project details page

---

## Architecture Breakdown

### SER System

#### State

Manages global project data, UI state, and shared application data.

#### Events

Handles all user interactions including navigation and project selection.

#### Render

Responsible for generating and updating UI components dynamically.

---

## Page Initialization Logic

The application uses a manual routing system inside `main.js` to handle multiple pages:

* Detects current page using DOM identifiers
* Loads only required modules per page
* Prevents unnecessary rendering logic execution

This ensures performance optimization and clean separation of concerns.

---

## Key Technical Implementation

### 1. Dynamic Page Detection

The app determines which page is active:

* Index Page → Loads main portfolio rendering system
* Details Page → Loads project detail rendering system

---

### 2. Centralized Entry Point (main.js)

Controls application flow and ensures modular execution:

* Initializes events only when required
* Separates page-specific logic
* Prevents cross-page dependency issues

---

### 3. Dynamic Project Rendering

Projects are rendered from a single data source:

* Adding a new project requires only updating the data file
* UI automatically adapts without code changes

---

### 4. Event Delegation

Efficient event handling system used for:

* Project clicks
* Navigation actions
* Dynamic component interactions

Reduces unnecessary event listeners and improves performance.

---

## Tech Stack

* JavaScript (ES6+)
* HTML5
* Tailwind CSS
* Vite

---

## Skills Demonstrated

* Frontend Architecture Design
* State Management (Vanilla JS)
* Event-Driven Programming
* Dynamic Rendering Systems
* Multi-Page SPA-like Logic (without frameworks)
* Component-Based Design
* Data-Driven UI Systems
* Modular Code Organization
* Performance Optimization

---

## Challenges Faced

* Managing dynamic rendering across multiple pages without a framework
* Avoiding tight coupling between state, events, and UI logic
* Designing scalable architecture for project expansion
* Handling component rendering consistency across pages
* Implementing clean separation between routing and rendering logic

---

## Key Learnings

* Built a scalable frontend architecture without frameworks
* Learned how state-driven UI systems work internally
* Improved understanding of rendering pipelines
* Designed reusable component-based systems
* Understood real-world project scalability challenges

---

## Live Demo

[https://sarvjeet-dev-portfolio.netlify.app/]

