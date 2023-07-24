<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Trading System Platform</h1>
      <p>Invest in your future</p>
      <router-link to="/SignUp" class="cta-button">Get Started</router-link>
    </div>
    <div class="features-section">
      <div class="feature">
        <!-- Replace 'feature-icon.png' with the icon for this feature -->
        <img src="/path/to/feature-icon.png" alt="Feature Icon">
        <h3>Feature 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="feature">
        <!-- Replace 'feature-icon.png' with the icon for this feature -->
        <img src="/path/to/feature-icon.png" alt="Feature Icon">
        <h3>Feature 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <!-- Add more features as needed -->
    </div>
  </div>
</template>

<script setup>
import stockSearchBar from '@/components/stockSearchBar.vue';
</script>

<style lang="scss">
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #333;
  color: #fff;

  .hero-section {
    text-align: center;
    margin-bottom: 60px;

    h1 {
      font-size: 48px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 20px;
    }

    p {
      font-size: 20px;
      color: #ccc;
      margin-bottom: 40px;
    }

    .cta-button {
      display: inline-block;
      padding: 12px 30px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      background-color: #007bff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .features-section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .feature {
      max-width: 300px;
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #666;
      border-radius: 5px;
      background-color: #444;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-5px);
      }

      img {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 24px;
        color: #007bff;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        color: #ccc;
      }
    }
  }

  /* Media query for responsiveness */
  @media (max-width: 600px) {
    .hero-section {
      h1 {
        font-size: 36px;
      }

      p {
        font-size: 18px;
      }

      .cta-button {
        font-size: 18px;
      }
    }
  }
}
</style>