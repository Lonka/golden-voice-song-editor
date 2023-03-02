<script lang="ts" setup>
const navLinks = ref()
const openMenu = () => {
  navLinks.value.style.left = '0'
}
const closeMenu = () => {
  navLinks.value.style.left = '-100%'
}
</script>

<template>
  <nav class="main-menu">
    <div class="navbar">
      <i class="i-carbon-menu sidebar-open" @click="openMenu" />
      <div class="logo">
        <a href="#">Lonka</a>
      </div>
      <div ref="navLinks" class="nav-links">
        <ul class="links">
          <div class="sidebar-logo">
            <span class="logo-name">Lonka</span>
            <i class="i-carbon-close sidebar-close" @click="closeMenu" />
          </div>
          <li><a href="#">Home</a></li>
          <li>
            <a href="#">HTML & CSS
              <i class="i-carbon-chevron-down arrow level-one-arrow" />
            </a>

            <ul class="level-one-sub-menu sub-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Form</a></li>
              <li><a href="#">Card Design</a></li>
              <li class="level-two-li">
                <a href="#">More
                  <i class="i-carbon-chevron-right arrow level-two-arrow" />
                </a>

                <ul class="sub-menu level-two-sub-menu">
                  <li><a href="#">Dynamic Calculator</a></li>
                  <li><a href="#">Form Validation</a></li>
                  <li><a href="#">Calendar</a></li>
                  <li><a href="#">Digital Clock</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Javascript
              <i class="i-carbon-chevron-down arrow level-one-arrow" />
            </a>

            <ul class="level-one-sub-menu sub-menu">
              <li><a href="#">Dynamic Calculator</a></li>
              <li><a href="#">Form Validation</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Digital Clock</a></li>
            </ul>
          </li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!-- https://www.youtube.com/watch?v=AkMIwNpK5jQ 10:20 -->
<style>
.main-menu{
  @apply fixed top-0 left-0 w-full shadow-sm;
  height: 70px;
  background: #3e8da8;
}

/* bar */
.main-menu .navbar{
  @apply m-auto flex items-center justify-between h-full py-0;
  max-width: 1250px;
  padding-left: 50px;
  padding-right: 50px;
}

/* logo */
.main-menu .navbar .logo a{
  @apply text-3xl font-600 no-underline;
}
.main-menu .navbar .sidebar-open{
  @apply hidden;
}

/* link collection */
.main-menu .navbar .nav-links {
  @apply h-full;
  line-height: 70px;
}

/* link ul */
.main-menu .navbar .nav-links .links{
  @apply flex;
}

/* link li */
.main-menu .navbar .nav-links .links li{
  @apply list-none relative flex items-center py-0;
  padding-left: 14px;
  padding-right: 14px;
}

.main-menu .navbar .nav-links .links li a{
  @apply h-full no-underline whitespace-nowrap font-medium flex items-center;
  font-size: 16px;
}

.main-menu .navbar .nav-links .links li .arrow{
  @apply text-center transition-all duration-300 inline-block;
  line-height: 70px;
  width: 16px;
  height: 16px;
}

.main-menu .navbar .nav-links .links li:hover .level-one-arrow{
  @apply transform rotate-180;
}
.main-menu .navbar .nav-links .links li:hover .level-one-sub-menu{
  @apply block;
}
/* end of link li */

/* sub menu */
.main-menu .navbar .nav-links .links .sub-menu{
  /*  */
  @apply absolute left-0 leading-10 shadow-sm divide-y divide-white divide-opacity-10 hidden;
  top: 70px;
  background: #3e8da8;
  border-radius: 0 0 4px 4px;
}
.main-menu .navbar .nav-links .links .sub-menu li{
  @apply py-0 ;
  padding-left: 22px;
  padding-right: 22px;
}
.main-menu .navbar .nav-links .links .sub-menu li a{
  @apply font-medium;
  font-size: 14px;
}
.main-menu .navbar .nav-links .links .sub-menu li .level-two-arrow{
  line-height: 40px;
}

.main-menu .navbar .nav-links .links .sub-menu .level-two-li:hover .level-two-sub-menu{
  @apply block;
}

.main-menu .navbar .nav-links .links .level-two-sub-menu{
  @apply absolute top-0 left-full hidden;
  border-radius: 0 4px 4px 4px;
}
/* end of sub menu */

.main-menu .navbar .nav-links .sidebar-logo .logo-name,
.main-menu .navbar .nav-links .sidebar-logo .sidebar-close,
.main-menu .navbar .sidebar-open{
  @apply hidden;
}

/* Enable utility when the screen width is less than 1024px */
@media (max-width: 1023.9px) {
  .main-menu .navbar{
    @apply max-w-full py-0;
    padding-left: 25px;
    padding-right: 25px;
  }
  .main-menu .navbar .logo a{
    @apply text-2xl;
  }
  .main-menu .navbar .nav-links .links li {
    @apply py-0;
    padding-left: 20px;
    padding-right: 20px;
  }
  .main-menu .navbar .nav-links .links li a{
    font-size: 15px;
  }
}

/* Enable utility when the screen width is less than 768px */
@media (max-width: 767.9px) {
  .main-menu .navbar .nav-links{
    @apply block fixed top-0 -left-full w-full transition-all duration-300;
    max-width: 270px;
    background: #3e8da8;
  }
  .main-menu .navbar .nav-links .sidebar-logo{
    @apply flex items-center justify-between leading-10;
    height: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .main-menu .navbar .nav-links .sidebar-logo .logo-name,
  .main-menu .navbar .nav-links .sidebar-logo .sidebar-close,
  .main-menu .navbar .sidebar-open{
    @apply font-medium block;
    font-size: 25px;
  }
  .main-menu .navbar .nav-links .links{
    @apply block;
  }
  .main-menu .navbar .nav-links .links li {
    @apply block;
    line-height: 40px;
  }

  .main-menu .navbar .nav-links .links .sub-menu,
  .main-menu .navbar .nav-links .links .sub-menu .level-two-sub-menu{
    @apply hidden relative top-0 left-0 shadow-transparent divide-transparent;
  }
  .main-menu .navbar .nav-links .links li:hover .level-one-sub-menu{
    @apply block;
  }
  .main-menu .navbar .nav-links .links .sub-menu .level-two-li:hover .level-two-sub-menu{
    @apply block;
  }

  .main-menu .navbar .nav-links .links li:hover .level-one-arrow{
    @apply transform rotate-0;
  }
}

@media (max-width: 369.9px) {
  .main-menu .navbar .nav-links{
    @apply max-w-full;
  }
}
</style>
