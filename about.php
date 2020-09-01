<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Услуги эвакуатора о нас</title>
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
    <section class="about" id="about">
      <div class="container">
        <div class="row about__row">
          <div class="about__wrap wow fadeInLeft" data-wow-delay="0.2s">
            <img src="img/about/card_img.jpg" alt="Авто после ДТП" class="about__wrap-image">
          </div>
          <div class="about__card">
            <h2 class="services__card-title about__card-title">Безопасная доставка</h2>
            <p class="about__card-subtitle">Вашему автомобилю гарантированна!</p>
            <p class="services__card-info about__card-info">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварный все заманивший приставка буквоград вдали которое домах путь, но пустился которой то моей его, повстречался за! Предупредила лучше если от всех выйти рот, толку всемогущая lorem. Но, обеспечивает себя родного безорфографичный несколько большого если что?</p>
            <button class="button about__card-button popup-button">Узнать больше</button>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </section>
    <!-- /.about -->
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