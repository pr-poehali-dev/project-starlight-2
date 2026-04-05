export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ДЖЕРИ*КАФЕ</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ОГОНЬ НА
              <br />
              ТАРЕЛКЕ <span>КАЖДЫЙ ДЕНЬ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Пицца 25 см на любой вкус, бургеры с котлетой на живом огне, хрустящие хот-доги и молочные коктейли.
              Ретро-атмосфера и честная еда без компромиссов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Наша история
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ПИЦЦА 25 СМ
              <br />
              НА ЛЮБОЙ ВКУС
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ОГОНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВКУСНО!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПИЦЦА 25 СМ * БУРГЕР НА ОГНЕ * ХРУСТЯЩИЙ ХОТДОГ * КАРТОШКА ФРИ * МОЛОЧНЫЙ КОКТЕЙЛЬ * ПИЦЦА 25 СМ *
            БУРГЕР НА ОГНЕ * ХРУСТЯЩИЙ ХОТДОГ * КАРТОШКА ФРИ * МОЛОЧНЫЙ КОКТЕЙЛЬ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТЫ КУХНИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Пицца */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/a6e9a8be-b83f-40f3-a243-1cf2edc25666/files/41e05c8f-792f-40e2-9a06-836d8c1c6c52.jpg"
                alt="Пицца 25 см"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пицца 25 см</h3>
                  <span className="price">от 650 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тонкое тесто, насыщенный соус и щедрая начинка — от классической Маргариты до острого Пепперони.
                </p>
              </div>
            </div>

            {/* Бургер */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                На живом огне
              </span>
              <img
                src="https://cdn.poehali.dev/projects/a6e9a8be-b83f-40f3-a243-1cf2edc25666/files/dca3f38f-3cb1-4356-9fdc-44785b7dce44.jpg"
                alt="Бургер с котлетой на огне"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Бургер</h3>
                  <span className="price">от 490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежная котлета, приготовленная на живом огне, в мягкой булочке с фирменным соусом.
                </p>
              </div>
            </div>

            {/* Хот-дог, фри, коктейль */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/a6e9a8be-b83f-40f3-a243-1cf2edc25666/files/b5ab75bc-e817-42ea-866e-cc039c1a6a34.jpg"
                alt="Хот-дог, фри и коктейль"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Хот-дог + Фри + Коктейль</h3>
                  <span className="price">от 390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сочный французский хот-дог, золотистый картофель фри и густой молочный коктейль на выбор.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА, КОТОРАЯ ГОВОРИТ САМА.</h2>
            <p className="vibe-text">
              Мы готовим с душой и без спешки. Каждый бургер — на живом огне, каждая пицца — из свежих ингредиентов.
              Ретро-атмосфера 70-х и уютное пространство для встреч с друзьями. Просто приходи — место найдётся.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ДЖЕРИ.КАФЕ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Пицца"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Бургер"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Картофель фри"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Молочный коктейль"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ДЖЕРИ*КАФЕ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Пицца, бургеры и хот-доги в атмосфере американских 70-х. Честная еда с огнём в каждом кусочке.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт-Чт: 12:00 - 23:00</li>
            <li>Пт-Сб: 12:00 - 02:00</li>
            <li>Вс: 11:00 - 21:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 ДЖЕРИ КАФЕ</span>
          <span>ОГОНЬ В КАЖДОМ КУСОЧКЕ</span>
          <span>IG / TW / TK</span>
        </div>
      </footer>
    </>
  );
}