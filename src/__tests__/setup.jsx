// src/__tests__/setup.jsx
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Helper function to mock fetch responses in tests
global.setFetchResponse = (val) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(val),
    })
  );
};

// Clean up the DOM and restore mocks after each test
afterEach(() => {
  cleanup();          // Clears the rendered DOM
  vi.restoreAllMocks(); // Resets fetch and other mocks to prevent test pollution
});
