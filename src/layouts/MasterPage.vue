<script setup lang="ts">
const menus: MenuItem[] = [
  {
    Id: 1,
    NameText: 'File',
    Icon: 'file-storage',
    SubMenu: [
      {
        Id: 0,
        NameText: 'Index',
        Icon: 'folder-open',
        ToUrl: '/',
        // Disabled: true,
      },
      {
        Id: 1,
        NameText: 'Save',
        Icon: 'save',
        ToUrl: '/save',
      },
      {
        Id: 4,
        NameText: 'Save As...',
        Icon: 'save-as',
        SubMenu: [
          {
            Id: 1,
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
  <main-menu :menus="menus" />
  <RouterView v-slot="{ Component }">
    <div class="pt-70px">
      <component :is="Component" />
    </div>
  </RouterView>
  <div rel="preload" class="lk-bg-img" />
</template>
