import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: ${({ menuIsVisible }) => (menuIsVisible ? '0' : '-100%')}; 
  width: 80%;
  max-width: 300px;
  height: 100%;
  background: #fff;
  z-index: 1000;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease-in-out;

  /* Só exibir em telas menores */
  @media (min-width: 768px) {
    display: none;
  }

  nav {
    margin-top: 2rem;
  }

  .nav-links {
    list-style: none;
    padding: 0;
  }

  .nav-links li {
    margin-bottom: 1rem;
  }

  .nav-links li a {
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
  }

  .cta-buttons {
    margin-top: auto;
    display: flex;
    flex-direction: column;
  }

  .cta-buttons .btn {
    text-align: center;
    text-decoration: none;
    padding: 0.8rem;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
  }

  .cta-buttons .doar {
    background: #28a745;
  }

  .cta-buttons .patrocinar {
    background: #007bff;
  }
`;
