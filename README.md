JS-билиотека с методами для отрисовки работы кастомного прогресс бара
=====================
Обязательный код, в котором будет отрисовываться Progress Bar
```HTML
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
```
Возможные стили для прогресс бара
```CSS
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

Вариант 3 - Кнопка при нажатии на которую будет запущен Progress Bar. Кнопка не исчезнет.
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
