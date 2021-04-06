JS-библиотека с методами для отрисовки работы кастомного прогресс бара
=====================
Обязательный код, в котором будет отрисовываться Progress Bar
```HTML
    <div id="zatemnenie">
    <div id="okno">
        <a href="#" class="close">X</a>
        <p>
            Всплывающее окошко!
        </p>

        <div id="progress">
            <div id="progress-background">
                <div id="progress-bar">
                    <span id="progress-val"></span>
                </div>
            </div>
            <div id="progress-statuses">
            </div>
            <a class="fade" id="progress-result-link" href="#">Click ME!!!</a>
        </div>
        <div id="progress-block" style="width: 400px">
        </div>
    </div>

</div>
```
Возможные стили для прогресс бара
```CSS
         #zatemnenie {
             background: rgba(102, 102, 102, 0.5);
             width: 100%;
             height: 100%;
             position: absolute;
             top: 0;
             left: 0;
             display: none;
         }

         #okno {
             width: 300px;
             height: 180px;
             text-align: center;
             padding-top: 1px;
             padding-right: 15px;
             padding-bottom: 15px;
             padding-left: 15px;
             border: 3px solid #0000cc;
             border-radius: 10px;
             color: #0000cc;
             position: absolute;
             top: 0;
             right: 0;
             bottom: 0;
             left: 0;
             margin: auto;
             background: #fff;
         }

         #zatemnenie:target {
             display: block;
         }

         .close {
             display: inline-block;
             border: 1px solid #0000cc;
             color: #0000cc;
             padding: 0 12px;
             margin: 10px;
             text-decoration: none;
             background: #f2f2f2;
             font-size: 14pt;
             cursor: pointer;
         }

         .close:hover {
             background: #e6e6ff;
         }
        #progress-background {
            background-color: #ddd;
            border-radius: 8px;
        }

        #progress-bar {
            padding: 5px 0;
            font-weight: bold;
            width: 0;
            height: 20px;
            background-color: #4CAF50;
            border-radius: 8px;
        }

        #progress-val {
            width: 100%;
            text-align: center;
            display: block;
            color: white;
        }

        #progress-statuses {
            padding: 10px 0;
            text-align: center;
            color: grey;
        }

        #progress-result-link {
            background: red;
            padding: 10px;
            border-radius: 10px;
            color: white;
            font-weight: bold;
            margin: auto;
            display: block;
            text-align: center;
            width: fit-content;
            opacity: 1;
            transition: opacity 1s;
        }

        #progress-result-link.fade {
            height: 0px !important;
            opacity: 0;
            padding: 0;
            transition: opacity 1s;
        }
```
Варианты запуска работы прогресс бара

Вариант 1 - Кнопка при нажатии на которую будет запущен Progress Bar. После нажатия кнопки сама кнопка исчезнет.
```HTML
<button onclick="runProgressBar(this)">Run Progress</button>
```

Вариант 2 - Кнопка при нажатии на которую будет запущен Progress Bar. Кнопка не исчезнет.
```HTML
<button onclick="runProgressBar()">Run Progress</button>
```

Вариант 3 -Внедрение запуска прогресс-бара в JS-функцию. Например, после открытия модального окна.
```JS
function showModal() {
// ваш код
  runProgressBar()
}
```

Здесь меняются тексты для вывода
```JS
 // Массив текстов для вывода в процессе загрузки [Максимум 5 текстов для равномерного отображения]
  let textStatuses = [
    'Text1',
    'Text2',
    'Text3',
    'Text4',
    'Text5'
  ]
```
