# ADR-0001: Vue 3 + Vite + TypeScript

- **Status**: Accepted
- **Date**: 2026-02-03

## Context

We need a fast, minimal frontend stack that stays out of the way and supports TS for clearer contracts.

## Decision

- Use **Vue 3** + **Vite** + **TypeScript**.
- Use **Vitest** for unit tests.
- Use **ESLint + Prettier** for developer ergonomics.

## Consequences

- Simple mental model; fast feedback; easy component testing.
- Avoid heavy global state by default.
