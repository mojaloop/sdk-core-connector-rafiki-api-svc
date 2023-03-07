# [EXPERIMENTAL] Rafiki Core Connector

<!-- ACTION: REPLACE sdk-core-connector-rafiki-api-svc placeholders in this document -->
[![Git Commit](https://img.shields.io/github/last-commit/mojaloop/sdk-core-connector-rafiki-api-svc.svg?style=flat)](https://github.com/mojaloop/sdk-core-connector-rafiki-api-svc/commits/master)
[![Git Releases](https://img.shields.io/github/release/mojaloop/sdk-core-connector-rafiki-api-svc.svg?style=flat)](https://github.com/mojaloop/sdk-core-connector-rafiki-api-svc/releases)
[![Npm Version](https://img.shields.io/npm/v/@mojaloop/sdk-core-connector-rafiki-api-svc.svg?style=flat)](https://www.npmjs.com/package/@mojaloop/sdk-core-connector-rafiki-api-svc)
[![NPM Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@mojaloop/sdk-core-connector-rafiki-api-svc.svg?style=flat)](https://www.npmjs.com/package/@mojaloop/sdk-core-connector-rafiki-api-svc)
[![CircleCI](https://circleci.com/gh/mojaloop/sdk-core-connector-rafiki-api-svc.svg?style=svg)](https://circleci.com/gh/mojaloop/sdk-core-connector-rafiki-api-svc)

[EXPERIMENTAL] An initial implementation of Rafiki Core Connector. It connects the Rafiki system to SDK Scheme Adapter.

`This repository is still under development`

## Contributing

Refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for information on how to contribute, committing changes, releases and snapshots.

---

## Overview

This repository is an initial implementation for the Rafiki core connector.
The Rafiki Core Connector sits between Rafiki instance and SDK (Or optional FX Converter).

## Block diagram

```mermaid
flowchart TD
    Rafiki[Rafiki Instance] -->|Rafiki API Requests| CC[Core Connector]
    CC -->|SDK API Requests in Currency1| FX(fa:fa-exchange FX Converter)
    FX -->|SDK API Requests in Currency2| SDK[SDK Scheme Adapter]
    SDK -->|Responses in Currency2| FX
    FX -->|Responses in Currency1| CC
    CC -->|Rafiki API Responses| Rafiki
```

---

## Pre-requisites

### Install dependencies

```bash
npm install
```

## Build

Command to transpile Typescript into JS:

```bash
npm run build
```

Command to LIVE transpile Typescript into JS live when any changes are made to the code-base:

```bash
npm run watch
```

## Run

```bash
npm start
```

## Tests

```bash
npm test
```