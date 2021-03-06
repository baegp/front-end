import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import HomePage from './../home-page/HomePage';
export default function Header() {

    const [showSearch, setShowSearch] = useState(false)
    const [UserData, setUserData] = useState({name:""})
    const handlShowSearch = () => {
        setShowSearch(true)
    }
    useEffect(() => {
    
    let TempListCart = localStorage.getItem("user")
    if (TempListCart != undefined) {
        let ListCart = []
        ListCart = JSON.parse(TempListCart)
        setUserData(ListCart)
    }
    
    }, [])
    
    

    return (
        <header id="header">

            <nav className="nav-bar">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <h1><span>GP</span> SHOP</h1>
                        </Link>
                    </div>
                    <div style={{marginBottom:'20px'}} className="menu">
                        <ul className="menu-level-1">

                            <li className="item-menu-level-1">
                                <i id="popup-btn"> <i style={{color: "#ffffff"}} className="fas fa-" /></i>
                                <div className="">
                                    <div className="popup-content">
                                        <a style={{color:"#FFFFFF"}} href="#"><span className="close-btn">a</span></a>
                                        <div className="khoitim">
                                            {
                                                showSearch && (
                                                    <input id="search" type="search" placeholder="Search" />
                                                )
                                            }
                                            {/* <button onClick={handlShowSearch}> </button> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            


                            <li className="item-menu-level-1">
                                <Link to="/" id="home" className="title-item-menu-level-1">HOME</Link>
                            </li>
                            <li onclick="showMenu2()" className="item-menu-level-1">
                                <a href="#" className="title-item-menu-level-1">DANH M???C S???N PH???M</a>
                                <i className="fas fa-angle-down" />
                                <ul id="menu2-dssp" className="menu-level-2">
                                    <div className="khoi-1">
                                        <h3>DANH M???C S???N PH???M</h3>
                                        <li className="item-menu-level-2">
                                            <i className="fas fa-angle-right" />
                                            <a href="#" className="title-item-menu-level-2">????? l??u ni???m mixi</a>
                                        </li>
                                        <li className="item-menu-level-2">
                                            <i className="fas fa-angle-right" />
                                            <a href="#" className="title-item-menu-level-2">??o mixi</a>
                                        </li>
                                        <li className="item-menu-level-2">
                                            <i className="fas fa-angle-right" />
                                            <a href="#" className="title-item-menu-level-2">??o ba l???</a>
                                        </li>
                                        <li className="item-menu-level-2">
                                            <i className="fas fa-angle-right" />
                                            <a href="#" className="title-item-menu-level-2">??o Refund Gaming</a>
                                        </li>
                                        <li className="item-menu-level-2">
                                            <i className="fas fa-angle-right" />
                                            <a href="#" className="title-item-menu-level-2">??o PUBG</a>
                                        </li>
                                    </div>
                                    <div className="hang">
                                        <div className="img-hang">
                                            <img src="https://shop.mixigaming.com/wp-content/uploads/2021/01/VUVU7648-2048x1365.jpg" alt="" />
                                        </div>
                                        <div className="img-hang">
                                            <img src="https://shop.mixigaming.com/wp-content/uploads/2021/01/binh-giu-nhiet-mixi-4-2048x1365.jpg" alt="" />
                                        </div>
                                        <div className="img-hang">
                                            <img src="https://shop.mixigaming.com/wp-content/uploads/2021/01/2-2048x1366.jpg" alt="" />
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="item-menu-level-1">
                                <a href="#" className="title-item-menu-level-1">TH??NG B??O</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mua-hang">
                        <div className="sdt">
                            <i className="fas fa-user-cog" />
                            <Link to="/admin">ADMIN</Link>
                        </div>
                        <div id="cc" className="gio-hang">
                            <Link to="/cart">GI??? H??NG</Link>
                            <a href="../html/cart.html"><i className="fas fa-shopping-cart" /></a>
                        </div>
                        <div id="cc" className="gio-hang login">
                            {UserData.name==""? <Link to="/login">Login</Link>:UserData.name}
                        </div>
                    </div>
                </div>
            </nav>
        </header>


    )
}
