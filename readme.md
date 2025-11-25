# Electron API Tester

_A lightweight Postman-like API testing tool built to learn Electron + React_

## Overview

Electron API Tester is a simple desktop app that lets you send HTTP requests (GET, POST, PUT, DELETE) and view responses — similar to Postman, but much smaller and built for learning purposes.

This project helped me understand:

- How Electron works with a main + renderer process

- How to safely communicate using IPC

- How to build a UI in React inside Electron

## Installation & Setup

### Install dependencies

```bash
npm install
```

### Start development

```bash
npm run dev
```

### Build desktop app

```bash
npm run build
npm run electon:build
```

### Test Api

```
https://api.nationalize.io?name=nathaniel
```

# Tech Stack

**Electron** -- desktop app shell

**React** -- frontend UI

**TypeScript** -- type-safe code

**Axios** -- HTTP client

---

_This project is for educational purposes._
