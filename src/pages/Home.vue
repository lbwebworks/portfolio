<template>
  <section class="home-page">
    <h1 class="home-title">Websites and Publishing Support for Small Projects</h1>
    <p class="home-subtitle">
      I build and publish practical websites with clear scope, fast iterations, and reliable deployment.
      Choose where you want to start.
    </p>

    <div class="home-banner-grid">
      <router-link to="/projects" class="home-banner home-banner-projects">
        <p class="home-banner-kicker">Portfolio</p>
        <h2>View Projects</h2>
        <p>See published samples including community news, print services, and small business tools.</p>
      </router-link>

      <router-link to="/services" class="home-banner home-banner-services">
        <p class="home-banner-kicker">Offerings</p>
        <h2>Explore Services</h2>
        <p>Review process, scope, timelines, and sample pricing before requesting a quote.</p>
      </router-link>
    </div>
  </section>
</template>

<style scoped></style>
