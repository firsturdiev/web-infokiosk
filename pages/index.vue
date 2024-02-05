<template>
  <main class="site-content">
    <div class="site-content__start">
      <ul class="categories">
        <li class="category">
          <img class="category__icon" src="~/assets/img/icon-hotels.svg" />
          <NuxtLink class="category__link" to="/hotels">Mehmonxonalar</NuxtLink>
        </li>

        <li class="category">
          <img class="category__icon" src="~/assets/img/icon-restaurants.svg" />
          <NuxtLink class="category__link" to="/hotels">Kafe va restoranlar</NuxtLink>
        </li>

        <li class="category">
          <img class="category__icon" src="~/assets/img/icon-historical.svg" />
          <NuxtLink class="category__link" to="/hotels">Tarixiy obyektlar</NuxtLink>
        </li>

        <li class="category">
          <img class="category__icon" src="~/assets/img/icon-relax.svg" />
          <NuxtLink class="category__link" to="/hotels">Sihatgohlar</NuxtLink>
        </li>

        <li class="category">
          <img class="category__icon" src="~/assets/img/icon-houses.svg" />
          <NuxtLink class="category__link" to="/hotels">Mehmon uylari</NuxtLink>
        </li>

        <li class="category">
          <img class="category__icon" src="~/assets/img/icon-around.svg" />
          <NuxtLink class="category__link" to="/hotels">O‘zbekiston bo‘ylab</NuxtLink>
        </li>
      </ul>

      <ul class="links">
        <li class="link">
          <p class="link__title">O‘zbekiston bo‘ylab sayohat</p>
          <NuxtLink class="link__url" to="https://uzbekistan.travel" target="_blank">uzbekistan.travel</NuxtLink>
        </li>
        <li class="link">
          <p class="link__title">Virtual sayohat</p>
          <NuxtLink class="link__url" to="https://uzbekistan360.uz" target="_blank">uzbekistan360.uz</NuxtLink>
        </li>
        <li class="link">
          <p class="link__title">O‘zbekiston muzeylari</p>
          <NuxtLink class="link__url" to="https://museums.uz" target="_blank">museums.uz</NuxtLink>
        </li>
        <li class="link">
          <p class="link__title">Tabarruk ziyorat</p>
          <NuxtLink class="link__url" to="https://tabarrukziyorat.uz" target="_blank">tabarrukziyorat.uz</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="site-content__end">
      <NuxtLink class="logo" to="/">
        <img class="logo__img" src="~/assets/img/logo.svg">
      </NuxtLink>
      <p class="heading">Andijon viloyati Xonobod shahriga xush kelibsiz!</p>
      <div class="buttons">
        <button class="btn btn--lang">O‘z</button>
        <button class="btn btn--tel">SOS</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.site-content {
  height: 100vh;
  overflow: hidden;
  background-image: url('~/assets/img/bg-index.jpg');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 80px 120px;
}

.site-content__start {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.categories {
  margin-bottom: auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.category {
  position: relative;
  width: 30%;
  flex-grow: 1;
  padding: 20px 18px;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  border: 1px solid #FFF;
  backdrop-filter: blur(16px);
  background-color: rgba(0, 0, 0, 0.50);
}

.category__icon {
  margin-bottom: auto;
  width: 100px;
  height: 100px;
}

.category__link {
  text-align: center;
}

.category__link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
}

.links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.link {
  width: 40%;
  flex-grow: 1;
  position: relative;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #FFF;
  backdrop-filter: blur(16px);
  background-color: rgba(0, 0, 0, 0.50);
}

.link__url {
  font-size: 16px;
  letter-spacing: 0.96px;
  color: rgba(255, 255, 255, 0.60);
}

.link__url::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}


.site-content__end {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.logo__img {
  margin-bottom: 10px;
  width: 175px;
  height: 36px;
}

.heading {
  margin-bottom: 40px;
  font-weight: 600;
  letter-spacing: 4.8px;
  text-align: right;
}

.buttons {
  display: flex;
  column-gap: 20px;
}

.btn {
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(16px);
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #FFF;
}

.btn::before {
  content: '';
  width: 24px;
  height: 24px;
}

.btn--lang::before {
  background-image: url('~/assets/img/icon-lang.svg');
}

.btn--tel {
  color: #FF7A9A;
}

.btn--tel::before {
  background-image: url('~/assets/img/icon-tel.svg');
}
</style>