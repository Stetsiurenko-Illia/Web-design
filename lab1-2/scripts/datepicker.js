// Ініціалізація компонента "Datepicker"
$(function() {
    // Отримуємо поточну дату
        var currentDate = new Date();
    $('.datepicker').datepicker({
        format: 'dd.mm.yyyy', // формат дати
        language: 'en', // мова
        autoclose: true, // автоматичне закриття календаря при виборі дати
        todayHighlight: true // підсвітка сьогоднішньої дати
  });
});