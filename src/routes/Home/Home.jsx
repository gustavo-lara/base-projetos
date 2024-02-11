import styles from  "./Home.module.css"

export const Home = () => {
    return (
      <div className={styles.div}>
        <p>O React Router Dom é uma biblioteca que permite criar rotas em aplicativos React. Ele é usado para criar um aplicativo de página única (SPA) com várias páginas. O React Router Dom é um pacote npm que pode ser instalado em seu projeto usando o comando npm install react-router-dom.
Para criar rotas, você precisa importar o componente BrowserRouter do pacote react-router-dom. Em seguida, você pode usar o componente Route para definir as rotas. Cada rota é mapeada para um componente específico que será renderizado quando a rota for acessada.</p>
        </div>
    )
  }
  
  export default Home