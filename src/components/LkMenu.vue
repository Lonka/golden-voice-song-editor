<script lang="ts" setup>
import type { MenuItem } from '~/types/global'
import { density } from '~/types/global'
const props = defineProps<{
  menus: MenuItem[]
  hiddenLogo?: boolean
  density?: density // global.density
}>()
defineOptions({
  name: 'lk-menu',
})
const { currentPageIndex } = toRefs(usePageStore())
const { t } = useI18n()
const navLinks = ref<HTMLDivElement>()
onMounted(() => {
  if (props.hiddenLogo)
    document.documentElement.style.setProperty('--lk-menu-navbar-padding-x', '10px')
  if (props.density) {
    switch (props.density) {
      case density.Default:
      case density.Comfortable:
        document.documentElement.style.setProperty('--lk-menu-height', '70px')
        document.documentElement.style.setProperty('--lk-menu-item-padding-x', '16px')
        document.documentElement.style.setProperty('--lk-menu-item-font-size', '16px')
        break
      case density.Compact:
        document.documentElement.style.setProperty('--lk-menu-height', '40px')
        document.documentElement.style.setProperty('--lk-menu-item-padding-x', '10px')
        document.documentElement.style.setProperty('--lk-menu-item-font-size', '14px')
        break
    }
  }
})

const openMenu = () => {
  if (navLinks.value)
    navLinks.value.style.left = '0'
}

const closeMenu = () => {
  if (navLinks.value)
    navLinks.value.style.left = '-100%'
}

const linkActionProcessor = (action: string) => {
  switch (action) {
    case 'exit':
      useSystem().exitApp()
      break
  }
}

const clickLink = (event: any, item: MenuItem) => {
  if (item.Action) {
    linkActionProcessor(item.Action)
    return
  }

  if (item.SubMenu && !item.Disabled) {
    if (['I', 'SPAN'].includes(event.target.nodeName))
      event.target.parentNode.parentNode.classList.toggle('show-sub-menu')
    else
      event.target.parentNode.classList.toggle('show-sub-menu')
  }
}

const getToUrl = (item: MenuItem): string => {
  if (item.Disabled)
    return ''
  if (!item.ToUrl)
    return ''
  return item.ToUrl
}

const isSelected = (item: MenuItem): boolean => {
  if (item.Id === currentPageIndex.value)
    return true

  return false
}
</script>

<template>
  <!-- <i class="i-carbon-file-storage" />
    <i class="i-carbon-exit" />
    <i class="i-carbon-trophy" />
    <i class="i-carbon-document-export" />
  <i class="i-carbon-music" /> -->
  <nav class="lk-menu">
    <div class="navbar">
      <i class="i-carbon-menu sidebar-open" @click="openMenu" />
      <!-- logo horizontal -->
      <div v-if="!props.hiddenLogo" class="logo">
        <a href="#">Lonka</a>
      </div>
      <!-- menu -->
      <div ref="navLinks" class="nav-links">
        <!-- logo vertical -->
        <div class="sidebar-logo">
          <div>
            <span v-if="!props.hiddenLogo" class="logo-name">Lonka</span>
          </div>
          <i class="i-carbon-close sidebar-close" @click="closeMenu" />
        </div>
        <!-- menus -->
        <ul class="links">
          <template v-for="(item) in props.menus" :key="item.Id">
            <li v-if="!item.Hidden" :disabled="item.Disabled" :class="{ 'menu-item-selected': isSelected(item) }">
              <router-link
                :to="getToUrl(item)"
                @click.stop="clickLink($event, item)"
              >
                <i class="mr-2" :class="`i-carbon-${item.Icon}`" />
                <span class="mr-2">{{ item.NameI18nKey ? t(`labels.${item.NameI18nKey}`) : item.NameText }}</span>
                <i v-if="item.SubMenu" class="i-carbon-chevron-down arrow level-one-arrow" />
              </router-link>
              <!-- subMenus -->
              <ul v-if="item.SubMenu" class="sub-menu level-one-sub-menu">
                <template v-for="(subItem) in item.SubMenu" :key="subItem.Id">
                  <li v-if="!subItem.Hidden" class="level-two-li" :disabled="subItem.Disabled" :class="{ 'menu-item-selected': isSelected(subItem) }">
                    <router-link :to="getToUrl(subItem)" @click.stop="clickLink($event, subItem)">
                      <i class="mr-2" :class="`i-carbon-${subItem.Icon}`" />
                      <span class="mr-2">{{ subItem.NameI18nKey ? t(`labels.${subItem.NameI18nKey}`) : subItem.NameText }}</span>
                      <i v-if="subItem.SubMenu" class="i-carbon-chevron-right arrow level-two-arrow" />
                    </router-link>
                    <!-- sub2Menus -->
                    <ul v-if="subItem.SubMenu" class="sub-menu level-two-sub-menu">
                      <template v-for="(sub2Item) in subItem.SubMenu" :key="sub2Item.Id">
                        <li v-if="!sub2Item.Hidden" :disabled="sub2Item.Disabled" :class="{ 'menu-item-selected': isSelected(sub2Item) }">
                          <router-link :to="getToUrl(sub2Item)" @click.stop="clickLink($event, sub2Item)">
                            <i class="mr-2" :class="`i-carbon-${sub2Item.Icon}`" />
                            <span class="mr-2">{{ sub2Item.NameI18nKey ? t(`labels.${sub2Item.NameI18nKey}`) : sub2Item.NameText }}</span>
                          </router-link>
                        </li>
                      </template>
                    </ul>
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </div>
      <!-- end of menu -->
    </div>
  </nav>
</template>

<style scoped>
.lk-menu{
  @apply fixed top-0 left-0 w-full shadow-sm z-1;
  height: var(--lk-menu-height);
  background: rgb(var(--lk-theme-dark));
}

/* bar */
.lk-menu .navbar{
  @apply m-auto flex items-center justify-between h-full py-0;
  /* max-width: 1250px; */
  padding-left: var(--lk-menu-navbar-padding-x);
  padding-right: var(--lk-menu-navbar-padding-x);
}

/* logo */
.lk-menu .navbar .logo a{
  @apply text-3xl font-600 no-underline;
}
.lk-menu .navbar .sidebar-open{
  @apply hidden;
}

/* link collection */
.lk-menu .navbar .nav-links {
  @apply h-full;
  line-height: var(--lk-menu-height);
}

/* link ul */
.lk-menu .navbar .nav-links .links{
  @apply flex;
}

/* link li */
.lk-menu .navbar .nav-links .links li{
  @apply list-none relative flex items-center p-0;
}

.lk-menu .navbar .nav-links .links li a{
  @apply h-full no-underline whitespace-nowrap font-medium flex items-center;
  font-size: var(--lk-menu-item-font-size);
  padding-left: var(--lk-menu-item-padding-x);
  padding-right: var(--lk-menu-item-padding-x);
}

.lk-menu .navbar .nav-links .links .menu-item-selected > a:first-child{
  color:rgb(var(--lk-theme-primary));
  background:rgba(var(--lk-theme-primary),0.12);
}

/* .lk-menu .navbar .nav-links .links .menu-item-selected > a{
  color:white;
} */

.lk-menu .navbar .nav-links .links li[disabled] > a:first-child{
  @apply text-gray cursor-not-allowed;
}

.lk-menu .navbar .nav-links .links li .arrow{
  @apply text-center transition-all duration-300 inline-block;
  line-height: var(--lk-menu-height);
  width: 16px;
  height: 16px;
}

/* hover */
.lk-menu .navbar .nav-links .links li:hover:not([disabled]){
  background: rgb(var(--lk-theme-hover));
}

.lk-menu .navbar .nav-links .links li:hover:not([disabled]) .level-one-arrow{
  @apply transform rotate-180;
}
.lk-menu .navbar .nav-links .links li:hover:not([disabled]) .level-one-sub-menu{
  @apply visible opacity-100;
  top: var(--lk-menu-height);
}
/* end of link li */

/* sub menu */
.lk-menu .navbar .nav-links .links .sub-menu{
  /*  */
  @apply absolute top-0 left-0 leading-10 shadow-sm divide-y divide-white divide-opacity-10 invisible transition-all duration-300 opacity-0 min-w-100px;
  background: rgb(var(--lk-theme-dark));
  border-radius: 0 0 10px 10px;
}
.lk-menu .navbar .nav-links .links .sub-menu li{
  @apply p-0 ;
}
.lk-menu .navbar .nav-links .links .sub-menu li a{
  @apply font-medium w-full;
  font-size: calc(var(--lk-menu-item-font-size) - 2px);
  padding-left: var(--lk-menu-item-padding-x);
  padding-right: var(--lk-menu-item-padding-x);
}
.lk-menu .navbar .nav-links .links .sub-menu li .level-two-arrow{
  line-height: 40px;
}

/* hover */
.lk-menu .navbar .nav-links .links .sub-menu .level-two-li:hover:not([disabled]) .level-two-sub-menu{
  @apply visible opacity-100 top-0;
}

.lk-menu .navbar .nav-links .links .level-two-sub-menu{
  @apply absolute left-full invisible transition-all duration-300 opacity-0 min-w-100px;
  top: -20px;
  border-radius: 0 10px 10px 10px;
}
/* end of sub menu */

.lk-menu .navbar .nav-links .sidebar-logo .logo-name,
.lk-menu .navbar .nav-links .sidebar-logo .sidebar-close,
.lk-menu .navbar .sidebar-open{
  @apply hidden;
}

/* Enable utility when the screen width is less than 1024px */
@media (max-width: 1023.9px) {
  .lk-menu .navbar{
    @apply max-w-full py-0;
    padding-left: 25px;
    padding-right: 25px;
  }
  .lk-menu .navbar .logo a{
    @apply text-2xl;
  }
  .lk-menu .navbar .nav-links .links li {
    @apply p-0;
  }
  .lk-menu .navbar .nav-links .links li a{
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* Enable utility when the screen width is less than 768px */
@media (max-width: 767.9px) {
  .lk-menu .navbar .nav-links{
    @apply block fixed top-0 -left-full w-full transition-all duration-300;
    max-width: 270px;
    background: rgb(var(--lk-theme-dark));
  }
  .lk-menu .navbar .nav-links .sidebar-logo{
    @apply flex items-center justify-between leading-10;
    height: var(--lk-menu-height);
    padding-left: 20px;
    padding-right: 20px;
  }
  .lk-menu .navbar .nav-links .sidebar-logo .logo-name,
  .lk-menu .navbar .nav-links .sidebar-logo .sidebar-close,
  .lk-menu .navbar .sidebar-open{
    @apply font-medium block;
    font-size: 25px;
  }
  .lk-menu .navbar .nav-links .links{
    @apply block;
  }
  .lk-menu .navbar .nav-links .links li {
    @apply block p-0;
    line-height: 40px;
  }
  .lk-menu .navbar .nav-links .links li a{
    padding-left: 20px;
    padding-right: 20px;
  }

  /* .lk-menu .navbar .nav-links .links .menu-item-selected > a:first-child{
    color:rgb(var(--lk-theme-primary));
    background:rgba(var(--lk-theme-primary),0.12);
  } */

  .lk-menu .navbar .nav-links .links .sub-menu li{
    @apply py-0 ;
    padding-left: 10px;
    padding-right: 10px;
  }
  .lk-menu .navbar .nav-links .links .sub-menu li a{
    padding-left: 20px;
    padding-right: 20px;
  }

  .lk-menu .navbar .nav-links .links .sub-menu,
  .lk-menu .navbar .nav-links .links .sub-menu .level-one-sub-menu,
  .lk-menu .navbar .nav-links .links .sub-menu .level-two-sub-menu{
    @apply hidden !invisible relative !top-0 left-0 shadow-transparent divide-transparent opacity-100;
  }

  /* hover */
  .lk-menu .navbar .nav-links .links li:hover:not([disabled]){
    background: transparent;
  }
  .lk-menu .navbar .nav-links .links li:not([disabled]) a:hover{
    background: rgb(var(--lk-theme-hover));
  }
  .lk-menu .navbar .nav-links .links li:hover:not([disabled]) .level-one-sub-menu{
    @apply hidden;
  }
  .lk-menu .navbar .nav-links .links li:hover:not([disabled]) .level-one-arrow{
    @apply rotate-0;
  }
  .lk-menu .navbar .nav-links .links .sub-menu .level-two-li:hover:not([disabled]) .level-two-sub-menu{
    @apply hidden;
  }

  /* show menu */
  .lk-menu .navbar .nav-links .links .show-sub-menu .level-one-sub-menu,
  .lk-menu .navbar .nav-links .links .sub-menu .level-two-li.show-sub-menu .level-two-sub-menu{
    @apply !block !visible;
  }

  .lk-menu .navbar .nav-links .links .show-sub-menu > a:first-child{
    color: rgb(var(--lk-theme-primary))
  }

  .lk-menu .navbar .nav-links .links .show-sub-menu .level-one-arrow{
    @apply !rotate-180;
  }
  .lk-menu .navbar .nav-links .links .sub-menu .level-two-li.show-sub-menu .level-two-arrow{
    @apply transform rotate-90;
  }

}

@media (max-width: 369.9px) {
  .lk-menu .navbar .nav-links{
    @apply max-w-full;
  }
}
</style>
