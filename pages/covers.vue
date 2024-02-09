<template>
  <main class="site-content">
    <div class="site-content__end">
      <header class="site-header">
        <NuxtLink class="btn btn--back" to="/">Orqaga</NuxtLink>
        <img class="img-around" src="~/assets/img/icon-around.svg">
        <NuxtLink class="logo" to="/">
          <img class="logo__img" src="~/assets/img/logo.svg">
        </NuxtLink>
        <button class="btn btn--lang">O‘z</button>
        <button class="btn btn--tel">SOS</button>
      </header>

      <p class="heading">Turistlar uchun elektron ma’lumotnoma</p>
      <div class="divider" />

      <div class="inner">
        <ul class="covers">
          <li class="cover" v-for="item in hotels">
            <img class="cover__img" @click="setActiveHotel(item.id)" :src="publicURL + item.attributes.photo.data.attributes.url" />
            <div class="cover__inner">
              <p class="cover__title">{{ item.attributes.title_uz }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>

  <!-- OVERLAYS -->

  <div class="overlay overlay--pdf">
    <div class="overlay__inner">
      <embed class="overlay__embed" :src="publicURL + activeHotel.attributes.pdf.data.attributes.url" type="application/pdf" />
      <button class="btn--close"></button>
    </div>
  </div>
</template>

<style scoped>
/* COVERS */

.inner {
  margin-bottom: 40px;
}


.overlay__embed {
  width: 100%;
  height: 100%;
}

.covers {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
}

.cover {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: calc(16.67% - 17px);
  height: 435px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
}

.cover__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover__inner {
  margin-top: auto;
  position: relative;
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(16px);
  z-index: 1;
  padding: 20px;
}

.cover__title {
  text-align: center;
  color: #113162;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.08px;
  line-height: 21.6px;
}
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
  /* padding-bottom: 20px; */
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
  margin-right: 20px;
}

.btn--lang::before {
  background-image: url('~/assets/img/icon-lang.svg');
}

.img-around {
  margin-right: auto;
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
  overflow-y: scroll;
  /* padding-inline: 40px; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
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

.overlay__inner {
  position: relative;
}

.btn--close {
  position: absolute;
  right: 40px;
  top: -80px;
  /* transform: translateX(-50%); */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url('~/assets/img/icon-close.svg');
  filter: invert(1);
  z-index: 10;
}
</style>

<script>
export default {
  mounted() {
    const elsClose = document.querySelectorAll('.btn--close');
    const elsCover = document.querySelectorAll('.cover');

    elsCover.forEach((el) => {
      el.addEventListener('click', () => {
        openOverlay();
      });
    });

    function openOverlay() {
      document.querySelector('.overlay--pdf').classList.add('overlay--open');
    }

    elsClose.forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelector('.overlay--pdf').classList.remove('overlay--open');
      });
    });
  },

  methods: {
    setActiveHotel(id) {
      this.activeHotel = this.hotels.find(item => item.id == id);
    },
  },

  async setup() {
    const activeHotel = ref(null);
    const config = useRuntimeConfig();
    const hotels = await useFetch(config.public.strapiURL + '/api/covers?populate=*', {
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