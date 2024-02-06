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
        <li :class="activeHotel == item.id ? 'item item--active' : 'item'" v-for="item in hotels">
          <button class="item__link" :data-id="item.id" @click="setActiveHotel(item.id)">{{ item.name.uz }}</button>
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
            <img class="modal__img" :src="hotels.find(item => item.id == activeHotel).img" />
            <div class="modal__info">
              <p class="modal__title">{{ hotels.find(item => item.id == activeHotel).name.uz }}</p>
              <p class="modal__text">Аlisher Navoiy nomli Аndijon shaxar madaniyat va istirohat bogʼining sharqiy tomonida
                joylashgan mazkur meʼmoriy obida 1905 – 1907 yillari andijonlik yirik boy, paxta zavodining egasi
                Аhmadbekxoji Temurbek oʼgʼli buyurtmasi bilan mehmonxona va ish yuritish joyi sifatida bunyod etilgan.
                (Аhmadbek xoji Qoshgʼarga ketib qolgan) Qurilishda oʼz davrining taniqli meʼmorlaridan Usta Yusufali
                Musaev (1869 – 1947, Oʼzbekiston xalq meʼmori, OʼzFА sining faxriy aʼzosi) hamda Usta Toshxon va Usta
                Yahyo va ularning shogirdlari ishtirok etgan. Meʼmoriy yodgorlik xalq amaliy bezak sanʼatining sir
                naqqoshlik va ganch oʼymakorligi turlari bilan bezatilgan.</p>
              <p class="modal__info-end">
                <span class="modal__tel-label">Telefon raqami:</span>
                <NuxtLink class="modal__tel" :to="'tel:+' + hotels.find(item => item.id == activeHotel).phone_number">{{
                  '+' + hotels.find(item => item.id == activeHotel).phone_number }}</NuxtLink>
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
      <iframe class="overlay__start" :src="hotels.find(item => item.id == activeHotel).map.urlToEmbeddedMap"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      <div class="overlay__end">
        <p class="overlay__title">Xaritani telefoningizda ochish uchun QR kodni skanerlang</p>
        <img class="overlay__qr" :src="hotels.find(item => item.id == activeHotel).map.urlToGM" />

        <button class="btn--close"></button>
      </div>
    </div>
  </div>

  <div class="overlay overlay--info">
    <div class="overlay__inner">
      <div class="overlay__start">
        <img class="overlay__img" :src="hotels.find(item => item.id == activeHotel).img" />
      </div>
      <div class="overlay__end">
        <p class="overlay__title">{{ hotels.find(item => item.id == activeHotel).name.uz }}</p>
        <div class="overlay__row">
          <span style="margin-bottom: 10px; font-weight: 500;">{{ hotels.find(item => item.id == activeHotel).description.uz }}</span>
        </div>

        <div class="overlay__row">
          <span style="font-weight: bold;">Manzil:</span>
          <span>{{ hotels.find(item => item.id == activeHotel).address.uz }}</span>
        </div>
        <div class="overlay__row">
          <span style="font-weight: bold;">Telefon raqami:</span>
          <span>{{ '+' + hotels.find(item => item.id == activeHotel).phone_number }}</span>
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

.overlay__qr {
  width: 270px;
  height: 270px;
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
  border: 1px solid #FFFFFF;
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
  color: #fff;
}

.item--active .item__link {
  color: #113162;
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
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
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
  flex-grow: 1;
  position: relative;
  width: 100%;
  padding-inline: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 40%;
  object-fit: cover;
  flex-shrink: 0;
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
  column-gap: 100px;
}

.overlay--info .overlay__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  flex-grow: 1;
}

.overlay--info .overlay__start {
  width: 50%;
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
      type: 'carousel',
      autoplay: 3000

    }).mount();
  },
  data() {
    return {
      hotels: [
        {
          "id": 1,
          "name": {
            "uz": "Sherdor Mehmonxona",
            "ru": "Шердор Отель",
            "en": "Sherdor Hotel"
          },
          "description": {
            "uz": "O‘rinlar soni 25, xonalar soni 10",
            "ru": "Kоличество мест 25, количество комнат 10",
            "en": "Number of beds 25, number of rooms 10"
          },
          "address": {
            "uz": "Yangi xayot MFY",
            "ru": "Янги хаёт МФЙ",
            "en": "Yangi xayot MFY"
          },
          "phone_number": "998932133502",
          "long": 73.004347,
          "lat": 40.791921,
          "img": "https://mybooking-file-storage.s3.us-east-2.amazonaws.com/uploads/hotel/images/1062_1609570184MBXZ_1024x768.JPG",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_1.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6040.989793592837!2d72.9929903475096!3d40.79511735781562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m4!2s40.79685%2C%2072.99118!3m2!1d40.79685!2d72.99118!4m4!2s40.791921%2C%2073.004347!3m2!1d40.791920999999995!2d73.004347!5e0!3m2!1sru!2s!4v1702154962528!5m2!1sru!2s"
          }
        },
        {
          "id": 2,
          "name": {
            "uz": "Xostel Afsona",
            "ru": "Отель афсона",
            "en": "Afsona Hotel"
          },
          "description": {
            "uz": "O‘rinlar soni 34, xonalar soni 12",
            "ru": "Kоличество мест 34, количество комнат 12",
            "en": "Number of beds 34, number of rooms 12"
          },
          "address": {
            "uz": "Yangi xayot MFY",
            "ru": "Янги хаёт МФЙ",
            "en": "Yangi xayot MFY"
          },
          "phone_number": "998932490100",
          "long": 72.985212,
          "lat": 40.792560,
          "img": "https://afsona-qarshi.booked.net/data/Photos/OriginalPhoto/6391/639101/639101526/Afsona-Hotel-Qarshi-Exterior.JPEG",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_2.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3020.5149209791944!2d72.98610397654996!3d40.794677232549205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m4!2s40.79685%2C%2072.99118!3m2!1d40.79685!2d72.99118!4m4!2s40.792560%2C%2072.985212!3m2!1d40.792559999999995!2d72.98521199999999!5e0!3m2!1sru!2s!4v1702155325487!5m2!1sru!2s"
          }
        },
        {
          "id": 3,
          "name": {
            "uz": "Andijan Luxe Hotel",
            "ru": "Семейные гостевые дома",
            "en": "Family guest houses"
          },
          "description": {
            "uz": "O‘rinlar soni 10, xonalar soni 5",
            "ru": "Kоличество мест 10, количество комнат 5",
            "en": "Number of beds 10, number of rooms 5"
          },
          "address": {
            "uz": "Do‘stlik ko‘chas",
            "ru": "Улица Дўстлик",
            "en": "Do'stlik Street"
          },
          "phone_number": "998932133502",
          "long": 73.004395,
          "lat": 40.789740,
          "img": "http://tour-info.uzbektourism.uz/cdn/hotels_3.jpg",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_3.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6041.110708681854!2d72.99305454750943!3d40.79378850797904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m4!2s40.79685%2C%2072.99118!3m2!1d40.79685!2d72.99118!4m4!2s40.789740%2C%2073.004395!3m2!1d40.789739999999995!2d73.004395!5e0!3m2!1sru!2s!4v1702155729893!5m2!1sru!2s"
          }
        },
        {
          "id": 4,
          "name": {
            "uz": "Grand Xanabad Hotel",
            "ru": "Grand Xanabad Hotel",
            "en": "Family guest houses"
          },
          "description": {
            "uz": "O‘rinlar soni 10, xonalar soni 3",
            "ru": "Kоличество мест 10, количество комнат 3",
            "en": "Number of beds 10, number of rooms 3"
          },
          "address": {
            "uz": "Anxor bo'yi ko'chasi",
            "ru": "Улица Анхор бўйи",
            "en": "Ankhor street"
          },
          "phone_number": "998946327439",
          "long": 73.003880,
          "lat": 40.789415,
          "img": "http://tour-info.uzbektourism.uz/cdn/hotels_4.jpg",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_4.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6041.1021100188955!2d72.99299034750949!3d40.79388300796726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m4!2s40.79685%2C%2072.99118!3m2!1d40.79685!2d72.99118!4m4!2s40.789415%2C%2073.003880!3m2!1d40.789415!2d73.00388!5e0!3m2!1sru!2s!4v1702155836925!5m2!1sru!2s"
          }
        },
        {
          "id": 5,
          "name": {
            "uz": "Khanabad Asia Hotel",
            "ru": "Семейные гостевые дома",
            "en": "Family guest houses"
          },
          "description": {
            "uz": "O‘rinlar soni 9, xonalar soni 3",
            "ru": "Kоличество мест 9, количество комнат 3",
            "en": "Number of beds 9, number of rooms 3"
          },
          "address": {
            "uz": "Xontog' MFY",
            "ru": "Хонтоғ МФЙ",
            "en": "Xontog' MFY"
          },
          "phone_number": "998991708566",
          "long": 72.980472,
          "lat": 40.791921,
          "img": "http://tour-info.uzbektourism.uz/cdn/hotels_5.jpg",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_5.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3592.050940242501!2d72.98387030375503!3d40.79406535377164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m4!2s40.79685%2C%2072.99118!3m2!1d40.79685!2d72.99118!4m4!2s40.791921%2C%2072.980472!3m2!1d40.791920999999995!2d72.98047199999999!5e0!3m2!1sru!2s!4v1702155946679!5m2!1sru!2s"
          }
        },
        {
          "id": 6,
          "name": {
            "uz": "Sheykh Hotel",
            "ru": "Семейные гостевые дома",
            "en": "Family guest houses"
          },
          "description": {
            "uz": "O‘rinlar soni 8, xonalar soni 2",
            "ru": "Kоличество мест 8, количество комнат 2",
            "en": "Number of beds 8, number of rooms 2"
          },
          "address": {
            "uz": "Xontog' MFY",
            "ru": "Хонтоғ МФЙ",
            "en": "Xontog' MFY"
          },
          "phone_number": "998996486986",
          "long": 72.980601,
          "lat": 40.802934,
          "img": "https://mybooking-file-storage.s3.us-east-2.amazonaws.com/uploads/hotel/images/1062_1609570184MBXZ_1024x768.JPG",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_6.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3020.270464918948!2d72.98462282655024!3d40.80005003221976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m4!2s40.79685%2C%2072.99118!3m2!1d40.79685!2d72.99118!4m4!2s40.802934%2C%2072.980601!3m2!1d40.802934!2d72.980601!5e0!3m2!1sru!2s!4v1702155993558!5m2!1sru!2s"
          }
        },
        {
          "id": 7,
          "name": {
            "uz": "Payitaxt Hotel",
            "ru": "Семейные гостевые дома",
            "en": "Family guest houses"
          },
          "description": {
            "uz": "O‘rinlar soni 9, xonalar soni 3",
            "ru": "Kоличество мест 9, количество комнат 3",
            "en": "Number of beds 9, number of rooms 3"
          },
          "address": {
            "uz": "Xontog' MFY",
            "ru": "Хонтоғ МФЙ",
            "en": "Xontog' MFY"
          },
          "phone_number": "998973390332",
          "long": 72.980577,
          "lat": 40.802906,
          "img": "http://tour-info.uzbektourism.uz/cdn/hotels_7.jpg",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_7.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d3020.2704649189454!2d72.9846103265503!3d40.800050032219815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m5!1s0x0%3A0xc1e18c28974b0511!2s40.79685%2C%2072.99118!3m2!1d40.7969243!2d72.9914855!4m4!2s40.802906%2C%2072.980577!3m2!1d40.802906!2d72.980577!5e0!3m2!1sru!2s!4v1702156098773!5m2!1sru!2s"
          }
        },
        {
          "id": 8,
          "name": {
            "uz": "Asia House Hotel",
            "ru": "Семейные гостевые дома",
            "en": "Family guest houses"
          },
          "description": {
            "uz": "O‘rinlar soni 8, xonalar soni 2",
            "ru": "Kоличество мест 8, количество комнат 2",
            "en": "Number of beds 8, number of rooms 2"
          },
          "address": {
            "uz": "Xontog' MFY",
            "ru": "Хонтоғ МФЙ",
            "en": "Xontog' MFY"
          },
          "phone_number": "998993251343",
          "long": 72.980204,
          "lat": 40.802788,
          "img": "http://tour-info.uzbektourism.uz/cdn/hotels_8.jpg",
          "map": {
            "urlToGM": "http://tour-info.uzbektourism.uz/cdn/hotels_8.svg",
            "urlToEmbeddedMap": "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d5079.518131856117!2d72.98253652027316!3d40.79941077868418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m5!1s0x0%3A0xc1e18c28974b0511!2s40.79685%2C%2072.99118!3m2!1d40.7969243!2d72.9914855!4m4!2s40.802788%2C%2072.980204!3m2!1d40.802788!2d72.980204!5e0!3m2!1sru!2s!4v1702156143974!5m2!1sru!2s"
          }
        }
      ],
      activeHotel: 1
    }
  },
  methods: {
    setActiveHotel(id) {
      this.activeHotel = id;
    }
  }
}
</script>