const postgresql = `
<h3>PostgreSQL</h3>
<p>Работаю с системой управления базами данных:</p>
<ul>
  <li>
    Переписываю вложенные подзапросы при помощи 
    <abbr title="Common Table Expression" lang="en">CTE</abbr>
  </li>
  <li>
    Создаю и отлаживаю хранимые процедуры на языке 
    <span lang="en">PL/pgSQL</span>
  </li>
  <li>
    Использую оконные функции <code>row_number()</code>, <code>lead()</code> и
    <code>lag()</code>
  </li>
  <li>
    Читаю планы запроса выводимые командой <code>EXPLAIN</code> и
    добавляю индексы
  </li>
</ul>`;

const js = `
<h3>Java Script</h3>
<p>Изучаю язык и пишу учебные проекты:</p>
<ul>
  <li>
    Усвоил основные примитивные типы <code>number</code>, 
    <code>string</code>, <code>boolean</code>, <code>null</code>,
    <code>undefined</code> и <code>Symbol</code>
  </li>
  <li>
    Понимаю принцип работы замыкания и лексического окружения 
  </li>
  <li>
    Знаю по какому алгоритму в языке определяется значение <code>this</code>  
  </li>
</ul>
`;

const html = `
<h3>HTML</h3>
<p>Создаю <code>html</code> страницы, добавляя семантические тэги:</p>
<ul>
  <li>
    Размечаю общую структуру документа при помощи <code>header</code>, <code>nav</code>,
    <code>main</code> и <code>footer</code>
  </li>
  <li>
    Понимаю важность SEO, добавляю только один тэг <code>h1</code>, использую 
    <code>alt</code> атрибут у изображений <code>img</code>.
  </li>
</ul>
`;

const css = `
<h3>CSS</h3>
<p>
  Стилизую <code>html</code> страницы:
</p>
<ul>
  <li>
    Создаю структуру документов c помощью <code>grid</code> и <code>flex</code>
  </li>
  <li>
    Добавляю адаптивность для разных видов устройств при помощи правила
    <code>@media</code>
  </li>
  <li>
    Использую  <code>margin</code> и <code>padding</code> чтобы не было тесно
  </li>
</ul>
`;

const webpack = `
<h3>Webpack</h3>
<p>Работаю с системой сборки:</p>
<ul>
  <li>
    Использую созданный облегченный шаблон для создания <code>React</code>
    приложений без <code>create-react-app</code>
  </li>
  <li>
    Настраиваю <code>webpack-dev-server</code> и пользуюсь 
    горячей перезагрузкой
  </li>
</ul>
`;

const jest = `
<h3>Jest</h3>
<p>Тестирую код:</p>
<ul>
 <li>Использую методы <code>describe</code> и <code>test</code></li>
 <li>
   Интегрирую с <code>React</code> и <code>react-testing-library</code>
   для написания UI тестов
 </li>
 <li>
  Использую <code>toBe</code> для примитивных типов и <code>toEqual</code>
  для объектов
 </li>
</ul>
`;

const git = `
<h3>Git</h3>
<p>Контролирую версии:</p>
<ul>
  <li>Создаю репозиторий командой <code>git init</code></li>
  <li>
    Переключаюсь между ветками командой <code>git checkout</code> и создаю
    новые командой <code>git branch</code>
  </li>
  <li>
   Работаю с изменениями с помощью команд <code>git add</code>
   и <code>git commit</code>
  </li>
</ul>
`;

const github = `
<h3>GitHub</h3>
<p>Храню репозитории и наблюдаю за опенсорс проектами:</p>
<ul>
  <li>Размещаю пет-проекты</li>
  <li>Слежу за развитием проектов lichess и metarhia</li>
</ul>
`;

const react = `
<h3>React</h3>
<p>Пишу пользовательский интерфейс:</p>
<ul>
 <li>Разбиваю интерфейс на компоненты</li>
 <li>
   Выделяю повторяющуюся логику в хуки, а также использую встроенные 
   <code>useState</code>, <code>useEffect</code> и <code>useRef</code>
 </li>
 <li>Использую <code>react-router-dom</code> для клиентского роутинга</li>
</ul>
`;

const redux = `
<h3>Redux</h3>
<p>Менеджер</p>
<ul>
  <li>Использую <code>@reduxjs/toolkit</code> для описания слайсов</li>
  <li>
    Применяю хук <code>useDispatch</code> для отправки <code>actions</code> 
    в <code>reducer</code>
  </li>
  <li>
    Применяю хук <code>useSelector</code> для получения данных из <code>store</code>
  </li>
</ul>
`;

const node = `
<h3>Node</h3>
<p>Пишу бэкенд для проектов</p>
<ul>
  <li>
    Обрабатываю <code>http</code> запросы к созданному серверу 
    <code>http.createServer()</code>
  </li>
  <li>Использую библиотеку <code>pg</code> для работы с базой данных</li>
  <li>Конкатенирую пути при помощи <code>path.join()</code></li>
</ul>
`;

const python = `
<h3>Python</h3>
<p>
  Писал скрипты и бэкенд:
  <ul>
    <li>
      Использовал <code>os.walk()</code> для подсчета числа строк, методов 
      и классов в файлах директории
    </li>
    <li>
      Парсил файлы государственного адресного реестра с помощью 
      метода <code>iterparse</code> модуля <code>xml</code> 
    </li>
    <li>
      Подключался и работал <code>sqlite3</code>
    </li>
  </ul>
</p>
`;

export const technologies = {
  postgresql,
  js,
  html,
  css,
  webpack,
  jest,
  git,
  github,
  react,
  redux,
  node,
  python,
};