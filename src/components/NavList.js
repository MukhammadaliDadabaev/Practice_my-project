import React from "react";

//  class="nav-item
const NavList = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
            <li class="list-group-item">And a fifth one</li>
            <li class="list-group-item">And a fifth one</li>
            <li class="list-group-item">And a fifth one</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          <hr />
          <p>ПОДПИСКИ</p>
        </div>
        <div className="col-md-10">
          <hr />
          <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav">
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Все
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Видеоигры
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Сейчас в эфире
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Джемы
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Музыка
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Экшен и приключения
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Последние опубликованные видео
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Просмотрено
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/">
                  Новое для вас
                </a>
              </li>
            </ul>
          </nav>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default NavList;
