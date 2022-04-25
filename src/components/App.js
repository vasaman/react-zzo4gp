import React from 'react';
import { AuthProvider } from '../contexts/AuthContexts';
export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <AuthProvider></AuthProvider>
      </div>
    </Container>
  );
}
