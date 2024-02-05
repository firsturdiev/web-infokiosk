<template>
  <main class="site-content">
    <div class="site-content__start">
      <div class="dropdown">
        <button class="dropdown__btn">Mehmonxonalar</button>
        <ul class="dropdown__list">
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="#">Mehmonxonalar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="#">Kafe va restoranlar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="#">Tarixiy obyektlar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="#">Sihatgohlar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="#">Madaniy dam olish maskanlari</NuxtLink>
          </li>
        </ul>
      </div>

      <ul class="list">
        <li class="item item--active">
          <NuxtLink class="item__link" to="#">Andijan Luxe Hotel</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="item__link" to="#">Grand Xanabad Hotel</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="item__link" to="#">Khanabad Asia Hotel</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="item__link" to="#">Sheykh Hotel</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="item__link" to="#">Payitaxt Hotel</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="item__link" to="#">Asia House Hotel</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="item__link" to="#">Chinor mehmonxonasi</NuxtLink>
        </li>
        <li class="item">
          <NuxtLink class="item__link" to="#">Karvon-saroy mehmonxonasi</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="site-content__end">
      <header class="site-header">
        <NuxtLink class="btn btn--back" to="/">Orqaga</NuxtLink>
        <NuxtLink class="logo" to="/">
          <img class="logo__img" src="~/assets/img/logo.svg">
        </NuxtLink>
        <button class="btn btn--lang">O‘z</button>
        <button class="btn btn--tel">SOS</button>
      </header>

      <p class="heading">Turistlar uchun elektron ma’lumotnoma</p>
      <div class="divider" />

      <div class="inner">
        <iframe class="inner__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.902464338093!2d69.22935467963867!3d41.287635150000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a44381ba417%3A0x749178874f5b1c1a!2sYuri%20Gagarin%20Monument!5e0!3m2!1sen!2s!4v1707126537418!5m2!1sen!2s"
          style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        <div class="modal">
          <div class="modal__start">
            <img class="modal__img" src="~/assets/img/img-modal.jpg" />
            <div class="modal__info">
              <p class="modal__title">Andijon viloyati</p>
              <p class="modal__text">Аlisher Navoiy nomli Аndijon shaxar madaniyat va istirohat bogʼining sharqiy tomonida
                joylashgan mazkur meʼmoriy obida 1905 – 1907 yillari andijonlik yirik boy, paxta zavodining egasi
                Аhmadbekxoji Temurbek oʼgʼli buyurtmasi bilan mehmonxona va ish yuritish joyi sifatida bunyod etilgan.
                (Аhmadbek xoji Qoshgʼarga ketib qolgan) Qurilishda oʼz davrining taniqli meʼmorlaridan Usta Yusufali
                Musaev (1869 – 1947, Oʼzbekiston xalq meʼmori, OʼzFА sining faxriy aʼzosi) hamda Usta Toshxon va Usta
                Yahyo va ularning shogirdlari ishtirok etgan. Meʼmoriy yodgorlik xalq amaliy bezak sanʼatining sir
                naqqoshlik va ganch oʼymakorligi turlari bilan bezatilgan.</p>
              <p class="modal__info-end">
                <span class="modal__tel-label">Telefon raqami:</span>
                <NuxtLink class="modal__tel" to="tel:+998901234567">+998 90 123-45-67</NuxtLink>
              </p>
            </div>
          </div>

          <div class="modal__end">
            <button class="btn btn--location">Yo‘nalishni ko‘rsatish</button>
            <button class="btn btn--info">Batafsil</button>
          </div>
        </div>
      </div>

      <div class="slider glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="slide glide__slide">
              <img class="slide__img" src="~/assets/img/bg-slider.jpg" />
              <div class="slide__end">
                <header class="slide__header">
                  <p class="slide__title">Andijon Internation Hotel</p>
                  <div class="slide__stars">
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                  </div>
                </header>

                <footer class="slide__footer">
                  <NuxtLink class="slide__link" to="https://andijan-hotel.uz">andijan-hotel.uz</NuxtLink>
                  <NuxtLink class="slide__tel" to="tel:+998911234567">+998 (91) 123-45-67</NuxtLink>
                </footer>
              </div>


            </li>

            <li class="slide glide__slide">
              <img class="slide__img" src="~/assets/img/bg-slider.jpg" />
              <div class="slide__end">
                <header class="slide__header">
                  <p class="slide__title">Andijon Internation Hotel</p>
                  <div class="slide__stars">
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                  </div>
                </header>

                <footer class="slide__footer">
                  <NuxtLink class="slide__link" to="https://andijan-hotel.uz">andijan-hotel.uz</NuxtLink>
                  <NuxtLink class="slide__tel" to="tel:+998911234567">+998 (91) 123-45-67</NuxtLink>
                </footer>
              </div>
            </li>

            <li class="slide glide__slide">
              <img class="slide__img" src="~/assets/img/bg-slider.jpg" />
              <div class="slide__end">
                <header class="slide__header">
                  <p class="slide__title">Andijon Internation Hotel</p>
                  <div class="slide__stars">
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                    <img class="slide__star" src="~/assets/img/icon-star.svg" />
                  </div>
                </header>

                <footer class="slide__footer">
                  <NuxtLink class="slide__link" to="https://andijan-hotel.uz">andijan-hotel.uz</NuxtLink>
                  <NuxtLink class="slide__tel" to="tel:+998911234567">+998 (91) 123-45-67</NuxtLink>
                </footer>
              </div>
            </li>
          </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
        </div>
      </div>
    </div>
  </main>

  <!-- OVERLAYS -->

  <div class="overlay overlay--location">
    <div class="overlay__inner">
      <iframe class="overlay__start"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.902464338093!2d69.22935467963867!3d41.287635150000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a44381ba417%3A0x749178874f5b1c1a!2sYuri%20Gagarin%20Monument!5e0!3m2!1sen!2s!4v1707126537418!5m2!1sen!2s"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      <div class="overlay__end">
        <p class="overlay__title">Scan the QR code to open the map on your phone</p>
        <img class="overlay__qr" src="~/assets/img/img-qr.svg" />

        <button class="btn--close"></button>
      </div>
    </div>
  </div>

  <div class="overlay overlay--info">
    <div class="overlay__inner">
      <div class="overlay__end">
        <p class="overlay__title">Xostel Afsona</p>
        <div class="overlay__row">
          <span>O'rinlar soni:</span>
          <span>34</span>
        </div>
        <div class="overlay__row">
          <span>Xonalar soni:</span>
          <span>12</span>
        </div>

        <div class="overlay__row">
          <span>Manzil:</span>
          <span>Yangi hayot MFY</span>
        </div>
        <div class="overlay__row">
          <span>Telefon raqami:</span>
          <span>+998 (93) 249-01-00</span>
        </div>

        <button class="btn--close"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* SLIDER */

.slider {
  width: 100%;
  margin-top: 20px;
}

.slide {
  display: flex;
  padding: 40px 140px;
  border-radius: 4px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(16px);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.50) 26.56%, rgba(52, 126, 170, 0.5) 100%), url('~/assets/img/pattern-slider.jpg');
  background-position: right 0 top 0;
  background-size: auto 100%;
  background-repeat: no-repeat;
}

.slide__img {
  border-radius: 4px;
  margin-right: 40px;
}

.slide__header {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.slide__title {
  margin-right: 40px;
  font-weight: 600;
  letter-spacing: 1.92px;
  line-height: 36px;
}

.slide__stars {
  display: flex;
  gap: 10px;
}

.slide__star {
  width: 15px;
  height: 15px;
}

.slide__link,
.slide__tel {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.28px;
  margin-right: 40px;
}

.glide__arrows {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 40px;
  margin: 0 40px;
}

.glide__arrow--left {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background-image: url('~/assets/img/icon-arrow-top.svg');
  transform: rotate(-90deg);
}

.glide__arrow--right {
  position: absolute;
  top: 0;
  right: 80px;
  width: 40px;
  height: 40px;
  background-image: url('~/assets/img/icon-arrow-top.svg');
  transform: rotate(90deg);
}


.site-content {
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(90deg, #005187 25.13%, #0070A7 86.73%);
  display: flex;
  column-gap: 20px;
  padding-top: 20px;
  padding-inline: 40px;
}

.site-content__start {
  flex-shrink: 0;
  width: 25%;
  display: flex;
  flex-direction: column;
}

.dropdown {
  margin-bottom: 8px;
}

.dropdown__btn {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: #E1EAF8;
  font-size: 16px;
  letter-spacing: 0.8px;
  border-radius: 4px;
  line-height: 24px;
  border: 1px solid #E1EAF8;
  background: #00000080;
}

.dropdown__btn::after {
  content: '';
  width: 16px;
  height: 16px;
  background-image: url('~/assets/img/icon-arrow-bottom.svg');
}

.dropdown__btn--open::after {
  background-image: url('~/assets/img/icon-arrow-top.svg');
}

.dropdown__btn--open+.dropdown__list {
  display: flex;
}

.dropdown__list {
  display: none;
  padding: 20px;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(32px);
}

.dropdown__link {
  display: block;
  font-size: 16px;
  color: #113162;
  font-weight: 600;
  letter-spacing: 0.8px;
}

.list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  overflow-y: scroll;
  padding-bottom: 20px;
}

.list::-webkit-scrollbar {
  display: none;
}

.item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 40px;
  column-gap: 40px;
  border-radius: 4px;
  background: #00000080;
  backdrop-filter: blur(16px);
  border: 1px solid #FFFFFF
}

.item::before {
  content: '';
  width: 30px;
  height: 30px;
  background-image: url('~/assets/img/icon-hotels.svg');
}

.item--active {
  background-color: #fff;
  color: #113162;
}

.item--active::before {
  filter: invert(1);
}

.item__link {
  font-size: 16px;
  letter-spacing: 0.8px;
}

.item__link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.site-content__end {
  flex-grow: 1;
  width: 30%;
}

.site-header {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.btn {
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  background: #00000080;
  backdrop-filter: blur(16px);
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #fff;
}

.btn::before {
  content: '';
  width: 24px;
  height: 24px;
}

.btn--lang {
  margin-right: 20px;
}

.btn--back {
  margin-right: 450px;
}

.btn--lang::before {
  background-image: url('~/assets/img/icon-lang.svg');
}

.logo {
  margin-right: auto;
}

.btn--tel {
  color: #FF7A9A;
}

.btn--tel::before {
  background-image: url('~/assets/img/icon-tel.svg');
}

.btn--back::before {
  background-image: url('~/assets/img/icon-back.svg');
}

.heading {
  margin-bottom: 16px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 3.6px;
  text-transform: uppercase;
}

.divider {
  margin-bottom: 30px;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%, rgba(255, 255, 255, 0.00) 96.35%);
}

.inner {
  position: relative;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-inline: 140px;
}

.inner__map {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.modal {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-color: #113162;
  padding: 40px;
  border-radius: 4px;
}

.modal__start {
  margin-bottom: 40px;
  display: flex;
}

.modal__img {
  margin-right: 40px;
  width: 313px;
  object-fit: cover;
}

.modal__title {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.6px;
}

.modal__text {
  margin-bottom: 40px;
  font-size: 20px;
  letter-spacing: 0.8px;
}

.modal__info-end {
  display: flex;
}

.modal__tel-label {
  margin-right: 20px;
  font-size: 20px;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.80);
}

.modal__tel {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.6px;
}

.modal__end {
  display: flex;
  column-gap: 40px;
}

.btn--location {
  width: 40%;
  flex-grow: 1;
  justify-content: center;
  background: var(--10, rgba(0, 0, 0, 0.50));
}

.btn--location::before {
  background-image: url('~/assets/img/icon-location.svg');
  filter: invert(1);
}

.btn--info {
  width: 40%;
  flex-grow: 1;
  justify-content: center;
}

.btn--info::before {
  background-image: url('~/assets/img/icon-info.svg');
  filter: invert(1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.50);
  padding: 150px 50px;
  backdrop-filter: blur(0);
  opacity: 0;
  transition: .3s;
  pointer-events: none;
}

.overlay--info {
  padding: 300px 100px;
}

.overlay--open {
  opacity: 1;
  backdrop-filter: blur(20px);
  pointer-events: auto;
}

.overlay__inner {
  display: flex;
  background-color: #fff;
  height: 100%;
}

.overlay__start {
  width: 66%;
}

.overlay__end {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 130px;
  padding-top: 168px;
  background-image: url('~/assets/img/pattern-modal.svg');
  background-size: 330px;
  background-position: right 0 top 0;
}

.overlay--info .overlay__end {
  align-items: flex-start;
  padding: 0 50px;
  padding-top: 60px;
}

.overlay__title {
  margin-bottom: 80px;
  color: #113162;
  font-weight: 700;
  text-align: center;
}

.overlay--info .overlay__title {
  margin-bottom: 40px;
}

.overlay__row {
  display: flex;
  column-gap: 20px;
}

.overlay__row span {
  font-size: 20px;
  letter-spacing: 0.8px;
  color: #005187;
}

.btn--close {
  position: absolute;
  right: 40px;
  top: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url('~/assets/img/icon-close.svg');
}
</style>

<script>
export default {
  mounted() {
    const dropdownBtn = document.querySelector('.dropdown__btn');
    const elLocation = document.querySelector('.btn--location');
    const elInfoBtn = document.querySelector('.btn--info');
    const elsClose = document.querySelectorAll('.btn--close');
    const elItems = document.querySelectorAll('.item');

    dropdownBtn.addEventListener('click', () => {
      dropdownBtn.classList.toggle('dropdown__btn--open');
    });

    elLocation.addEventListener('click', () => {
      document.querySelector('.overlay--location').classList.add('overlay--open');
    });

    elInfoBtn.addEventListener('click', () => {
      document.querySelector('.overlay--info').classList.add('overlay--open');
    });

    elsClose.forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelector('.overlay--location').classList.remove('overlay--open');
        document.querySelector('.overlay--info').classList.remove('overlay--open');
      });
    });

    elItems.forEach((el) => {
      el.addEventListener('click', () => {
        elItems.forEach((el) => {
          el.classList.remove('item--active');
        });
        el.classList.add('item--active');
      });
    });

    // Glide 

    new Glide('.slider', {
      type: 'carousel'
    }).mount();
  }
}
</script>