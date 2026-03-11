const CONFIG = {
  // URL del Apps Script que recibe y guarda las respuestas en Google Sheets
  // Ver instrucciones en README.md → Paso 3
  WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbyzbvFXkgRH1sezOIcmlJEw9bqdHZNSwzmbfRt_K9ihjVS_vKmrgV2R8YuuHq-EQKFP/exec',
// Directorio base de datos (ruta absoluta desde la raíz del sitio)
  DATA_DIR: '/InfiFurag2024-test/data',

  // Versión para cache-busting — incrementa al actualizar preguntas
  VERSION: '1',

  // Contraseña del panel admin (cámbiala antes de desplegar)
  ADMIN_PWD: 'furag2024',
};