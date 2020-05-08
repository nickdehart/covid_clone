const Title = ({ title }) => (
  <header>
    <h3>{title}</h3>
    <style jsx>{`
      header {
        height: 8vh;
        width: 100%;
        background-color: #222;
        color: #bdbdbd;
      }

      h3 {
        margin: 0px;
        padding: 10px;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </header>
);

export default Title;
