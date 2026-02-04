# ADR-0002: Local State by Default, No Global Store Unless Needed

- **Status**: Accepted
- **Date**: 2026-02-03

## Context

Global stores add coordination costs and complexity.

## Decision

- Prefer local component state and composables.
- Introduce a global store only when multiple distant components must share reactive state.

## Consequences

- Lower coupling; easier reasoning and testing.
