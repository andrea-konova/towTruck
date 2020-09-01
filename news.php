<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Услуги эвакуатора в ЮФО</title>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/swiper.min.css">
  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="preloader">
    <div class="preloader__image"></div>
  </div>
  <?php
    include('header.php');
  ?>
  <main>
    <section class="news" id="news">
      <div class="container">
        <h2 class="heading news__heading wow fadeInDown" data-wow-delay="0.1s">Свежие новости</h2>
        <div class="row news__row">
          <div class="news__card wow fadeInDown" data-wow-delay="0.3s">
            <div class="news__card-wrap">
              <img src="img/news/news_1.jpg" alt="header_bg" class="news__card-wrap--image">
            </div>
            <div class="news__card-item">
              <figure class="news__card-date">19 авг 2020</figure>
              <h4 class="news__card-title">Поломки автомобиля</h4>
            </div>
            <p class="news__card-info">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил знаках единственное вопроса ручеек за.</p>
            <a class="button news__card-button">Читать</a>
          </div>
          <!-- /.news__card -->
          <div class="news__card wow fadeInUp" data-wow-delay="0.5s">
            <div class="news__card-wrap">
              <img src="img/news/news_2.jpg" alt="header_bg" class="news__card-wrap--image">
            </div>
            <div class="news__card-item">
              <figure class="news__card-date">19 авг 2020</figure>
              <h4 class="news__card-title">Поломки автомобиля</h4>
            </div>
            <p class="news__card-info">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил знаках единственное вопроса ручеек за.</p>
            <a class="button news__card-button">Читать</a>
          </div>
          <!-- /.news__card -->
          <div class="news__card wow fadeInDown" data-wow-delay="0.7s">
            <div class="news__card-wrap">
              <img src="img/news/news_3.jpg" alt="header_bg" class="news__card-wrap--image">
            </div>
            <div class="news__card-item">
              <figure class="news__card-date">19 авг 2020</figure>
              <h4 class="news__card-title">Поломки автомобиля</h4>
            </div>
            <p class="news__card-info">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил знаках единственное вопроса ручеек за.</p>
            <a class="button news__card-button">Читать</a>
          </div>
          <!-- /.news__card -->
        </div>
      </div>
      <!-- /.container -->
    </section>
    <!-- /.news -->
    <section class="quote">
      <div class="container">
        <div class="row quote__row">
          <div class="quote__wrap">
            <img src="img/quote/quote_1.jpg" alt="Завка" class="quote__wrap--image">
          </div>
          <div class="quote__form-wrap wow fadeIn" data-wow-delay="0.5s">
            <h3 class="quote__heading">Получить консультацию</h3>
            <form action="telegram.php" method="POST" class="quote__form">
              <div class="form-group">
                <input type="text" autocomplete="off" name="name" class="input form__input quote__input" id="quote-user-name" placeholder="Имя" data-validate-field="name">
              </div>
              <div class="form-group">
                <input type="email" autocomplete="off" name="email" class="input form__input quote__input" id="quote-user-email" placeholder="Email" data-validate-field="email">
              </div>
              <div class="form-group">
                <input type="tel" autocomplete="off" name="phone" class="input form__input quote__input" id="quote-user-phone" placeholder="Телефон" data-validate-field="tel">
              </div>
              <div class="form-group">
                <input type="text" autocomplete="off" name="subject" class="input form__input quote__input" id="quote-user-subject" placeholder="Тема">
              </div>
              <div class="form-group form-group__textarea">
                <textarea autocomplete="off" rows="5" name="message" class="input textarea form__input quote__input quote__textarea" id="quote-user-message" placeholder="Cообщение"></textarea>
              </div>
              <button class="button form-button">Отправить</button>
            </form>
          </div>
          <!-- /.quote__form-wrap -->
        </div>
        <!-- /.row quote__row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.quote -->
  </main>
  <?php
    include('footer.php');
  ?>
  <div class="popup-call popup">
    <div class="popup-dialog">
      <div class="popup-content">
        <button class="popup-close"></button>
        <form action="telegram.php" method="POST" class="form popup__form">
          <div class="form-group popup-group">
            <input type="text" autocomplete="off" name="name" class="input form__input popup__input" id="popup-user-name" placeholder="Имя" data-validate-field="name"> 
          </div>
          <div class="form-group popup-group">
            <input type="email" autocomplete="off" name="email" class="input form__input popup__input" id="popup-user-email" placeholder="Email" data-validate-field="email">
          </div>
          <div class="form-group popup-group">
            <input type="tel" autocomplete="off" name="phone" class="input form__input popup__input" id="popup-user-phone" placeholder="Телефон" data-validate-field="tel">
          </div>
          <button class="button form-button">Отправить</button>
        </form>
      </div>
      <!-- /.popup-content -->
    </div>
    <!-- /.popup-dialog -->
  </div>
  <!-- /.popup-call popup -->
  <script src="js/inputmask.min.js"></script>
  <script src="js/just-validate.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="js/swiper.min.js"></script>
  <script src="js/index.js" type="module"></script>
</body>
</html>