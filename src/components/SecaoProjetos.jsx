import { meusProjetos } from '../data/projetos';

export default function SecaoProjetos() {
  return (
    <section>
      <h2>Meus Projetos</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {meusProjetos.map((proj) => (
          <div key={proj.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
