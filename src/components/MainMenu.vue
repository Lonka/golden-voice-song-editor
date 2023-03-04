<script lang="ts" setup>
interface MenuItem {
  Id: number
  NameText: string
  Icon: string
  NameI18nKey?: string
  Disabled?: boolean
  Hidden?: boolean
  ToUrl?: string
  SubMenu?: MenuItem[]
}

const navLinks = ref<HTMLDivElement>()
const openMenu = () => {
  if (navLinks.value)
    navLinks.value.style.left = '0'
}
const closeMenu = () => {
  if (navLinks.value)
    navLinks.value.style.left = '-100%'
}
const openSubMenu = (event: any, item: MenuItem) => {
  if (item.SubMenu && !item.Disabled) {
    if (['I', 'SPAN'].includes(event.target.nodeName))
      event.target.parentNode.parentNode.classList.toggle('show-sub-menu')
    else
      event.target.parentNode.classList.toggle('show-sub-menu')
  }
}

const menus: MenuItem[] = [
  {
    Id: 1,
    NameText: 'File',
    Icon: 'file-storage',
    SubMenu: [
      {
        Id: 2,
        NameText: 'Index',
        Icon: 'folder-open',
        ToUrl: '/',
        Disabled: true,
      },
      {
        Id: 3,
        NameText: 'Save',
        Icon: 'save',
        ToUrl: '/save',
      },
      {
        Id: 4,
        NameText: 'Save As...',
        Icon: 'save-as',
        ToUrl: '/save-as',
      },
      {
        Id: 5,
        NameText: 'Exit',
        Icon: 'exit',
        ToUrl: '/exit',
        Hidden: true,
      },
    ],
  },
  {
    Id: 6,
    NameText: 'Edit',
    Icon: 'edit',
    Disabled: true,
    SubMenu: [
      {
        Id: 7,
        NameText: 'Cut',
        Icon: 'cut',
        ToUrl: '/cut',
      },
      {
        Id: 8,
        NameText: 'Copy',
        Icon: 'copy',
        ToUrl: '/copy',
      },
      {
        Id: 9,
        NameText: 'Paste',
        Icon: 'paste',
        ToUrl: '/paste',
        Disabled: true,
      },
    ],
  },
]
</script>

<template>
  <!-- <i class="i-carbon-file-storage" />
    <i class="i-carbon-folder-open" />
  <i class="i-carbon-edit" /> -->
  <nav class="main-menu">
    <div class="navbar">
      <i class="i-carbon-menu sidebar-open" @click="openMenu" />
      <!-- logo horizontal -->
      <div class="logo">
        <a href="#">Lonka</a>
      </div>
      <div ref="navLinks" class="nav-links">
        <!-- logo vertical -->
        <div class="sidebar-logo">
          <span class="logo-name">Lonka</span>
          <i class="i-carbon-close sidebar-close" @click="closeMenu" />
        </div>
        <!-- menus -->
        <ul class="links">
          <li v-for="(item) in menus" :key="item.Id" :disabled="item.Disabled">
            <router-link
              :to="`${item.ToUrl ? item.ToUrl : ''}`"
              @click.stop="openSubMenu($event, item)"
            >
              <i class="mr-2" :class="`i-carbon-${item.Icon}`" />
              <span class="mr-2">{{ item.NameText }}</span>
              <i v-if="item.SubMenu" class="i-carbon-chevron-down arrow level-one-arrow" />
            </router-link>
            <!-- <a href="#" @click.stop="openSubMenu($event, item)">
              <i class="mr-2" :class="`i-carbon-${item.Icon}`" />
              <span class="mr-2">{{ item.NameText }}</span>
              <i v-if="item.SubMenu" class="i-carbon-chevron-down arrow level-one-arrow" />
            </a> -->
            <!-- subMenus -->
            <ul v-if="item.SubMenu" class="sub-menu level-one-sub-menu">
              <li v-for="(subItem) in item.SubMenu" :key="subItem.Id">
                <router-link :to="`${subItem.ToUrl ? subItem.ToUrl : ''}`" @click.stop="openSubMenu($event, subItem)">
                  <i class="mr-2" :class="`i-carbon-${subItem.Icon}`" />
                  <span class="mr-2">{{ subItem.NameText }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <!-- menus -->
        <!-- <ul class="links">
          <li><a href="#">Home</a></li>
          <li>
            <a href="#" @click.stop="openSubMenu">HTML & CSS

            </a>
            <ul class="sub-menu level-one-sub-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Form</a></li>
              <li><a href="#">Card Design</a></li>
              <li class="level-two-li">
                <a href="#" @click.stop="openSubMenu">More
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
            <a href="#" @click.stop="openSubMenu">Javascript
              <i class="i-carbon-chevron-down arrow level-one-arrow" />
            </a>
            <ul class="sub-menu level-one-sub-menu">
              <li><a href="#">Dynamic Calculator</a></li>
              <li><a href="#">Form Validation</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Digital Clock</a></li>
            </ul>
          </li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul> -->
      </div>
    </div>
  </nav>
</template>

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

.main-menu .navbar .nav-links .links li[disabled]{
  @apply text-gray;
}

.main-menu .navbar .nav-links .links li .arrow{
  @apply text-center transition-all duration-300 inline-block;
  line-height: 70px;
  width: 16px;
  height: 16px;
}

.main-menu .navbar .nav-links .links li:hover:not([disabled]) .level-one-arrow{
  @apply transform rotate-180;
}
.main-menu .navbar .nav-links .links li:hover:not([disabled]) .level-one-sub-menu{
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
  .main-menu .navbar .nav-links .links .sub-menu .level-one-sub-menu,
  .main-menu .navbar .nav-links .links .sub-menu .level-two-sub-menu{
    @apply hidden relative top-0 left-0 shadow-transparent divide-transparent;
  }

  .main-menu .navbar .nav-links .links li:hover .level-one-sub-menu{
    @apply hidden;
  }
  .main-menu .navbar .nav-links .links .sub-menu .level-two-li:hover .level-two-sub-menu{
    @apply hidden;
  }

  .main-menu .navbar .nav-links .links li:hover .level-one-arrow{
    @apply rotate-0;
  }

  .main-menu .navbar .nav-links .links .show-sub-menu .level-one-sub-menu,
  .main-menu .navbar .nav-links .links .sub-menu .level-two-li.show-sub-menu .level-two-sub-menu{
    @apply !block;
  }

  .main-menu .navbar .nav-links .links .show-sub-menu .level-one-arrow{
    @apply !rotate-180;
  }
  .main-menu .navbar .nav-links .links .sub-menu .level-two-li.show-sub-menu .level-two-arrow{
    @apply transform rotate-90;
  }

}

@media (max-width: 369.9px) {
  .main-menu .navbar .nav-links{
    @apply max-w-full;
  }
}
</style>
