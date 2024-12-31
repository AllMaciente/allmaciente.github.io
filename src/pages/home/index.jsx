import "./styles.css";
import Cabecalho from "../../components/cabecalho";

export default function Home() {
  return (
    <div id="homePage">
      <Cabecalho />
      <section className="null"></section>
      <section className="section" id="about">
        <h1>about me</h1>
        <p>
          Oi, eu sou o Allan! Estou sempre mergulhando em projetos e aprendendo
          coisas novas no mundo da programação. Recentemente, concluí o curso
          Jovem Programador no Senac, onde aprendi desde lógica de programação
          até desenvolvimento web com tecnologias como React, Node.js, JWT e
          bcrypt. Além disso, aprendi Python por conta própria, explorando
          projetos pessoais e desafios para entender como usar essa linguagem de
          forma prática.
        </p>
        <p>
          Quando não estou codando, gosto de assistir a partidas de basquete,
          brincar de fazer algumas cestas e ouvir rock, que é minha trilha
          sonora favorita para praticamente tudo. Quero usar meus conhecimentos
          para criar soluções úteis e aprender com profissionais da área
          enquanto faço parte de projetos desafiadores.
        </p>
      </section>
    </div>
  );
}
