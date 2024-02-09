<template>
  <main class="site-content">
    <div class="site-content__start">
      <div class="dropdown">
        <button class="dropdown__btn">Tarixiy obyektlar</button>
        <ul class="dropdown__list">
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="/hotels">Mehmonxonalar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="/restaurants">Kafe va restoranlar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="/parks">Sihatgohlar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="/houses">Oilaviy mehmonxonalar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="/relaxes">Madaniy dam olish maskanlari</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="/dachas">Dala hovlilar</NuxtLink>
          </li>
          <li class="dropdown__item">
            <NuxtLink class="dropdown__link" to="/covers">O'zbekiston bo'ylab</NuxtLink>
          </li>
        </ul>
      </div>

      <ul class="list">
        <li :class="activeHotel.id == item.id ? 'item item--active' : 'item'" v-for="item in hotels">
          <button class="item__link" @click="setActiveHotel(item.id)">{{ item.attributes.title_uz }}</button>
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
          :src="getURL(activeHotel.attributes.embed_url)"
          style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        <div class="modal">
          <div class="modal__start">
            <img class="modal__img" :src="publicURL + activeHotel.attributes.photo.data.attributes.url" />
            <div class="modal__info">
              <p class="modal__title">{{ activeHotel.attributes.title_uz }}</p>
              <p class="modal__text">{{ activeHotel.attributes.info_uz }}</p>
              <p class="modal__info-end">
                <span class="modal__tel-label">Telefon raqami:</span>
                <NuxtLink class="modal__tel" :to="'tel:' + activeHotel.attributes.phone_number">
                  {{ activeHotel.attributes.phone_number }}
                </NuxtLink>
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
      <iframe class="overlay__start" :src="getURL(activeHotel.attributes.embed_url)"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      <div class="overlay__end">
        <p class="overlay__title">Xaritani telefoningizda ochish uchun QR kodni skanerlang</p>
        <img class="overlay__qr" :src="`https://api.qrserver.com/v1/create-qr-code/?size=270x270&data=${activeHotel.attributes.maps_url}`" />

        <button class="btn--close"></button>
      </div>
    </div>
  </div>

  <div class="overlay overlay--info">
    <div class="overlay__inner">
      <div class="overlay__start">
        <img class="overlay__img" :src="publicURL + activeHotel.attributes.photo.data.attributes.url" />
      </div>
      <div class="overlay__end">
        <p class="overlay__title">{{ activeHotel.attributes.title_uz }}</p>

        <div class="overlay__row">
          <span style="font-weight: bold;">Manzil:</span>
          <span>{{ activeHotel.attributes.address_uz }}</span>
        </div>
        <div class="overlay__row">
          <span style="font-weight: bold;">Telefon raqami:</span>
          <span>{{ activeHotel.attributes.phone_number }}</span>
        </div>
        <!-- <div class="overlay__row">
          <span style="font-weight: bold;">Bo'sh xonalar soni:</span>
          <span>{{ activeHotel.attributes.rooms }}</span>
        </div>
        <div class="overlay__row">
          <span style="font-weight: bold;">Bo'sh o'rinlar soni:</span>
          <span>{{ activeHotel.attributes.seats }}</span>
        </div> -->

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
  background-image: url('~/assets/img/icon-historical.svg');
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
  width: 600px;
  height: 400px;
  margin-right: 40px;
  max-width: 50%;
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

  methods: {
    setActiveHotel(id) {
      this.activeHotel = this.hotels.find(item => item.id == id);
    },

    getURL(url) {
      return /src="(.*?)"/.exec(url)[1];
    }
  },

  async setup() {
    const activeHotel = ref(null);
    const config = useRuntimeConfig();
    const hotels = await useFetch(config.public.strapiURL + '/api/histories?populate=*', {
      headers: {
        'Authorization': `bearer ${config.public.strapiToken}`
      }
    });

    activeHotel.value = hotels.data.value.data[0];

    return {
      hotels: hotels.data.value.data,
      activeHotel,
      publicURL: config.public.strapiURL
    }
  }
}
</script>