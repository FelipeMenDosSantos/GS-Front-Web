import React, { useState } from 'react';
import "../css/Cadastrar.css"

export const Cadastrar = () => {
  const [formData, setFormData] = useState({
    aparelho: '',
    horasPorDia: '',
    watts: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const consumoDiario = (formData.horasPorDia * formData.watts) / 1000; // kWh por dia
    const consumoSemanal = consumoDiario * 7; // kWh por semana
    const consumoMensal = consumoDiario * 30; // kWh por mês

    const dados = {
      aparelho: formData.aparelho,
      horasPorDia: formData.horasPorDia,
      watts: formData.watts,
      consumoDiario,
      consumoSemanal,
      consumoMensal,
    };

    try {
      const response = await fetch('http://localhost:5000/salvar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        alert('Dados salvos com sucesso!');
        setFormData({ aparelho: '', horasPorDia: '', watts: '' });
      } else {
        alert('Erro ao salvar os dados.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <section className='cadastrar'>
      <h2>Cadastrar Aparelho</h2>
      <form className='form-cadastrar' onSubmit={handleSubmit}>
        <div dados-cadastrar>
        <div>
          <p>
            Nome do Aparelho:</p>
            <input
              type="text"
              name="aparelho"
              value={formData.aparelho}
              onChange={handleChange}
              required
            />
        </div>
        <div>
          <p>
            Horas por Dia:
            </p>
            <input
              type="number"
              name="horasPorDia"
              value={formData.horasPorDia}
              onChange={handleChange}
              required
            />
        </div>
        <div>
          <p>
            Consumo em Watts:
            </p>
            <input
              type="number"
              name="watts"
              value={formData.watts}
              onChange={handleChange}
              required
            />
        </div>
        </div>
        <button type="submit">Salvar Dados</button>
      </form>
    </section>
  );
};
