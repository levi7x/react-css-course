import "./App.css";

function App() {
  return <div>
  <header className="container">
      <h1>CSS Selectors</h1>
  </header>
  <main className="container">
      <article>
          <h2>Article 1</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cumque voluptatum tempore officiis
              deserunt
              officia, molestias tenetur tempora. Numquam assumenda eligendi ipsam ut quibusdam ex autem placeat
              deleniti
              hic optio?</p>
      </article>
      <article>
          <h2>Article 2</h2>
          <p id="second" className="gray">Iste, possimus, delectus blanditiis, in dolores voluptatem culpa officia quae
              eius
              consequatur
              suscipit optio
              cum hic. Architecto ipsum rem accusamus! Quaerat repellendus <span className="highlight">nihil</span>
              ratione tenetur voluptas
              veritatis,
              sunt
              nesciunt rem.</p>
      </article>
      <article>
          <h2>Article 3</h2>
          <p className="gray">Iste, possimus, delectus blanditiis, in dolores voluptatem culpa officia quae eius
              consequatur
              suscipit optio
              cum hic. Architecto <span className="highlight">ipsum</span> rem accusamus! Quaerat repellendus nihil
              ratione tenetur voluptas
              veritatis,
              sunt
              nesciunt rem.</p>
      </article>
  </main>
</div>
  
}

export default App;
