import Link from "next/link";
import React from "react";
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
//primeflex
import "/node_modules/primeflex/primeflex.css"
import style from "./layout.module.scss";

const Layout = ({ children }) => {
  const items = [ 
];
const start = <Link href='/' ><h3 className="flex align-items-center" >Cargovo </h3> <h5 className="">Choose your Car</h5> </Link>;
    const end = <InputText placeholder="Search" type="text" className="w-full" />;
  return (
    <>
      <header className={`grid w-full`}>
      <div className={`col-10 col-offset-1 card  ${style.headerContainer}`}>
            <Menubar style={{backgroundColor:"#b1e0be"}} model={items} start={start} end={end} />
        </div>
      </header>
      <div className={style.container}>{children}</div>
      <footer className={`col- ${style.footer}`}>
        footer &copy;
      </footer>
    </>
  );
};

export default Layout;
