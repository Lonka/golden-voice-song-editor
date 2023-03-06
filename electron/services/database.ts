import { ipcMain } from 'electron'

ipcMain.on('get-menus', async (event) => {
  const result
  = [
    {
      Id: 1,
      NameText: 'File',
      NameI18nKey: 'file',
      Icon: 'file-storage',
      SubMenu: [
        {
          Id: 99,
          NameText: 'Exit',
          NameI18nKey: 'exit',
          Icon: 'exit',
          Action: 'exit',
        },
      ],
    },
    {
      Id: 2,
      NameText: 'Song',
      NameI18nKey: 'song',
      Icon: 'music',
      ToUrl: '/Song',
    },
    {
      Id: 3,
      NameText: 'Ranking',
      NameI18nKey: 'ranking',
      Icon: 'trophy',
      ToUrl: '/Ranking',
    },
    {
      Id: 4,
      NameText: 'Export',
      NameI18nKey: 'export',
      Icon: 'document-export',
      ToUrl: '/Export',
    },
  ]
  event.returnValue = result
})
