import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    sessionStorage.clear(); // Limpa todo o sessionStorage
    alert('Sessão encerrada!'); // Exibe uma mensagem de confirmação
    window.location.reload(); // Atualiza a página
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Encerrar Sessão</button>
    </div>
  );
};

export default Logout;
