import { ipcMain } from 'electron'

ipcMain.on('get-menus', async (event) => {
  const result
  = [
    {
      Id: 1,
      NameText: 'File',
      Icon: 'file-storage',
      SubMenu: [
        {
          Id: 99,
          NameText: 'Exit',
          Icon: 'exit',
          Action: 'exit',
        },
      ],
    },
    {
      Id: 2,
      NameText: 'Song',
      Icon: 'music',
      ToUrl: '/Song',
    },
    {
      Id: 3,
      NameText: 'Sort',
      Icon: 'trophy',
      ToUrl: '/Ranking',
    },
    {
      Id: 4,
      NameText: 'Export',
      Icon: 'document-export',
      ToUrl: '/Export',
    },
  ]
  event.returnValue = result
})
