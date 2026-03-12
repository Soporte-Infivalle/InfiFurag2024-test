const CONFIG = {
  // URL del Apps Script que recibe y guarda las respuestas en Google Sheets
  // Ver instrucciones en README.md → Paso 3
  WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbwt_N3BtDO3vGEpYZqX4A75rD-Uf117f4Ic7NLKsjbsBWQsqIF15mg_KNTAqHEdaBKP/exec',
// Directorio base de datos (ruta absoluta desde la raíz del sitio)
  DATA_DIR: '/InfiFurag2024-test/data',

  // Versión para cache-busting — incrementa al actualizar preguntas
  VERSION: '1',

  // Contraseña del panel admin (cámbiala antes de desplegar)
  ADMIN_PWD: 'furag2024',
};