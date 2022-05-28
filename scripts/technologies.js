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
    Понимаю принцип работы замыканий и как они связаны с лексическим окружением 
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
    Понимаю важность SEO, добавляю только один тэг <code>h1</code> и использую 
    <code>alt</code> атрибут у изображений <code>img</code>.
  </li>
</ul>
`;

const css = `
<h3>CSS</h3>
`;

const webpack = `
<h3>Webpack</h3>
<p>
 Работаю с системой сборки, создал облегченный шаблон для создания 
 React приложений без использования <code>create-react-app</code>.
</p>
`;

const jest = `
<h3>Jest</h3>
`;

const git = `
<h3>Git</h3>
`;

const github = `
<h3>GitHub</h3>
`;

const react = `
<h3>React</h3>
`;

const redux = `
<h3>Redux</h3>
`;

const node = `
<h3>Node</h3>
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