<template>
          <div class="header">
        <div class="container">
          <div class="header-container">
            <div class="header-container__left">
              <!-- Логотип -->
              <div class="header-container__logo">
                <a href="/">
                  <img src="@/assets/images/logo/corp-logo.svg" alt="Логотип" />
                </a>
              </div>
              <!-- Поиск -->
              <div class="header-container__search-header search-header">
                <div class="search-header__icon-search">
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14V14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                        fill="#9E9E9E"
                      />
                    </svg>
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="input-search-header"
                  placeholder="Поиск на портале"
                />
                <div class="search-header__icon-remove"></div>
              </div>
            </div>

            <!-- Кнопки -->
            <div class="header-container__btn-group">
              <button class="btn btn-secondary btn__icon">
                <img src="@/assets/images/icons/people_black.svg" alt="" />
              </button>
              <button class="btn btn-secondary btn__icon">
                <img src="@/assets/images/icons/today_black_.svg" alt="" />
              </button>
              <button class="btn btn-secondary btn__icon">
                <img
                  src="@/assets/images/icons/report_problem_black.svg"
                  alt=""
                />
              </button>
              <button class="btn btn-primary btn__icon_left">
                <img src="@/assets/images/icons/add_circle_white.svg" alt="" />
                Заявка в S-Desk
              </button>
            </div>
            <!-- Профиль -->
            <div class="header-container__profile-header profile-header">
              <a class="profile-header__link" href="#">
                <div class="profile-header__login">
                  Артем
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                      fill="#141414"
                    />
                  </svg>
                </div>

                <div class="profile-header__photo">
                  <img
                    src="@/assets/images/users/artemzh.png"
                    alt="Фото пользователя"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Главное меню -->
      <nav
        class="navbar navbar-expand navbar-light bg-white navbar-border-shadow"
      >
        <div class="container">
          <div class="header-nav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Главная</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="news">Новости</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Сотрудники</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">S-Desk</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Проекты</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Задачи</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Документы</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Мероприятия</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  id="dropdownNavOther"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Еще</a
                >
                <ul class="dropdown-menu" aria-labelledby="dropdownNavOther">
                  <li><a class="dropdown-item active" href="#">Обучение</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Рейтинг сотрудников</a>
                  </li>
                  <li><a class="dropdown-item" href="#">СПЛ</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Москва - телефоны</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Сайт Самостоят. заявок</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Статистика по звонкам</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Система тестирования</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Оценка 360</a></li>
                  <li><a class="dropdown-item" href="#">Авто на базе</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>