import Link from 'next/link';
import React from 'react';
import style from "./layout.module.scss";

const Layout = ({children}) => {
  return (
    <>
      <header className={`grid ${style.headerContainer}`}>
        <Link href="/">

        <h2 className={`col-12 ${style.mainBrand}`}>Cargovo</h2>
        <span></span>
        <p className={`col-12 ${style.maintext}`}>Choose your car</p>
        <span></span>
        </Link>
        </header>  
        <div className={style.container}>{children}</div>
        <footer className={`c0l-12 ${style.footer}`}>
            footer next.js course &copy;
        </footer>
    </>
  )
}

export default Layout