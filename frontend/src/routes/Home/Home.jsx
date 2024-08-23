import Button from "../../components/Button/Button"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.div}>
      <Button link={"https://www.google.com.br/?hl=pt-BRgoogle.com"}>Google</Button>
    </div>
  )
}

export default Home