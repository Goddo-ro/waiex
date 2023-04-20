import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import './Header.css';
import MyModal from "../MyModal/MyModal";
import LoginForm from "../../LoginForm";
import RegisterForm from "../../RegisterForm";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <>
      <header className="centered">
        <div className="left">
          <img id="logo" src={logo} alt="Logo"/>
          <div className="pages">
            <a href="#">Проекты</a>
            <a href="#">Специалисты</a>
            <a href="#">Кабинет</a>
          </div>
        </div>
        <div className="btns">
          <a className="btn btn-success" onClick={() => setLoginModal(true)}>Войти</a>
          <a className="btn btn-primary" onClick={() => setRegisterModal(true)}>Регистрация</a>
        </div>
      </header>
      <MyModal visible={loginModal} setVisible={setLoginModal}>
        <LoginForm setVisible={setLoginModal} setRegister={setRegisterModal}/>
      </MyModal>
      <MyModal visible={registerModal} setVisible={setRegisterModal}>
        <RegisterForm setVisible={setRegisterModal} setLogin={setLoginModal}/>
      </MyModal>
    </>
  );
};

export default Header;