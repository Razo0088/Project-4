
import './App.css';
import Footer from './Componet/footer/Footer';
import Header from './Componet/header/Header';
import Main from './Componet/main/Main';
import{motion} from "framer-motion"

function App() {
  return (
   
      <div className="App">
        <Header />
        <Main />
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true,amount:0.3}}
        >
        <Footer />
        </motion.div>
       
      </div>
   
    
  );
}

export default App;
