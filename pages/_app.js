
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
//primeflex
import "/node_modules/primeflex/primeflex.css"
import '@/styles/globals.css'
import Layout from "../Components/layout/Layout";

export default function App({ Component, pageProps }) {
  return(

  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
  
}
