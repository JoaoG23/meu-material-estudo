const { app, BrowserWindow , ipcMain, Menu, globalShortcut } = require('electron');
const path = require('path');
const os = require('os'); // Acessa o sistema operacional

app.disableHardwareAcceleration();

const isDev = ( process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development')
? true 
: false; // Booleano de desenvolvimento ou nao 

const isMac =  process.platform === 'darwin'? true: false; // Gera para Mac

function CriandoJanela() {
    // 1 ----- Gera a janela ---
    const win = new BrowserWindow({ 
        width:600,
        height:600,
        backgroundColor:"white",
        show:false,
        icon:path.join(__dirname, "assets","icons","seta.png"),
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    }) 

    // win.loadURL('https://twitter.com');
    win.loadFile('./src/index.html'); // Rendeniza o caminho do produto.
    
    if ( isDev ) {
        win.webContents.openDevTools();
    }

    win.once('ready-to-show' , () => {
        win.show();
        win.webContents.send('cpu_name', os.cpus()[0].model); // Manda mensagem para o front via IpcRendered
    });

    const menuTemplate = [
        { role: 'appMenu' }, // Tipos de menu predefinidos
        { role: 'fileMenu' },
        { label: 'joao', // customizado
        submenu: [
            { label: 'New Window',
        click: () => {
         CriandoJanela()   }
         },
         { type:'separator' },
         { 
             label:'Close all Windows',
             accelerator: isMac ? 'Command+a':'Control+e', // Atalho de menu
             click: () => {
                 BrowserWindow.getAllWindows().forEach( window => { window.close() })
             }
         }
        ]
     },
    ];

    const menu = Menu.buildFromTemplate( menuTemplate );
    Menu.setApplicationMenu( menu );
}


app.whenReady().then(() => { // Abrindo de fato a janela requirida
    CriandoJanela();
    globalShortcut.register('Ctrl+d', () => {
        console.log('Atalho Global Execultado');
        BrowserWindow.getAllWindows()[0].setAlwaysOnTop(true);
        BrowserWindow.getAllWindows()[0].setAlwaysOnTop(false);
    })
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll(); 
})

app.on('window-all-closed', () => {
    console.info('Todas as Janela fechadas ');

    if (!isMac) {
        app.quit();
    }
}); // Para mac - mechar tudas as janela.

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        CriandoJanela();
    }
})

ipcMain.on('open_new_window', () => {
    CriandoJanela();
}); // recebendo informação do front end
