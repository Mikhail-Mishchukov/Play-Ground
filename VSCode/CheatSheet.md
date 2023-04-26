# VSCode Cheat Sheet (version 1.77)

## Удобные горячие клавиши 

`Alt + click` - открыть файл в параллельном окне VSCode
`Ctrl + 1,2 or 3...` - переключать активную группу вкладок
`Ctrl + B` - скрыть боковую панель
`Ctrl + P` - поиск файла в директории
`Ctrl + Tab` - показывает открытые файлы с возможностью переключится на них
`Ctrl + shift + P` - открыть палитру команд
`Ctrl + ,` - открыть пользовательские настройки
`Ctrl + PageDown` - переключится на правый редактор
`Ctrl + PageUp` - переключится на левый редактор
`Ctrl + W` - закрыть активный редактор
`Ctrl + K W` - закрыть группу вкладок
`Ctrl + K Ctrl + W` - закрыть все группы вкладок
`Ctrl + Y` - вернуть действие, которое откатили, используя (`Ctrl + Z`)
В поллитре команд "Open Settings (JSON)", чтобы открыть JSON файл с настройками
Если хочу на команду `Ctrl + ,` открывать сразу JSON файл, то строчку "workbench.settings.editor": "json" нужно вставить в JSON файл
`Ctrl + C` - без выделения копирует текущую строку
Зажать `Alt` и прокручивать колесико мыши (прокрутка будет быстрей "editor.fastScrollSensitivity": 5 - настройка)
`Ctrl+X` - вырезает текущую линию
`Ctrl+Shift+K` - удаляет строку
`Ctrl+Enter` - вставляет ниже строку, неважно где находиться курсор на текущей линии
`Ctrl+Shift+Enter` - вставляет строку выше указателя, работает в JS
`Alt+Down` - прокручивает на 1 линию вниз
`Alt+Up` - прокручивает на 1 линию вверх
`Shift+Alt+Down` - копирует текущую строку ниже
`Shift+Alt+Up` - копирует текущую строку выше
`Ctrl+D` - при выделении, если нажать комбинацию выделиться следующий также участок
`Ctrl+K Ctrl+D` - при выделении переключиться на следующий такой же участок кода
`Ctrl+U` - откат действия курсора
`Shift+Alt+I` - переместит курсор в конец во всех выделенных строчках
`Ctrl+Shift+L` - выбрать все вхождения текущего выделения
`Ctrl+F2` - выбрать все вхождения текущего слова
`Ctrl+L` - выделить текущую строку
`Ctrl+Alt+Down` - добавить курсор снизу
`Ctrl+Alt+Up` - добавить курсор сверху
`Ctrl+Shift+\` - переместить курсор в начало открывающей скобки
`Home` - переход в начало строки
`End` - переход в конец строки
`Ctrl+End` - переход в конец файла
`Ctrl+Home` - переход в начало файла
`Ctrl+Shift+[` - свернуть участок кода
`Ctrl+Shift+]` - развернуть участок кода
`Ctrl+K Ctrl+J` - развернуть все участки кода
`Ctrl+K Ctrl+0` - свернуть все участки кода
`Ctrl+F` - поиск по файлу
`Ctrl+H` - замена в файле
`Ctrl+Space` - показать подсказки для ввода (если есть)
`Ctrl+Shift+Space` - Trigger Parameter Hints
`Shift+Alt+F` - форматирование файла
`F12` - перейти к определению
`Shift+F12` - перейти к ссылкам
`Ctrl+.` - панель быстрое исправление
`F2` - переименовать все вхождения в проекте
`Alt+Left` - перейти к предыдущему файлу
`Alt+Right` - перейти к следующему файлу
`Ctrl+\` - разделение редактора
`Ctrl+Shift+T` - переоткрыть закрытый редактор
`Ctrl+Shift+E` - переключить во вкладку файлов
`Ctrl+Shift+F` - поиск по проекту
`Ctrl+Shift+G` - переключиться во вкладку git
`Ctrl+Shift+D` - переключиться во вкладку дебаг
`Ctrl+Shift+X` - переключиться во вкладку расширений
`Ctrl+Shift+C` - открыть новую cmd в отдельном окне
`Ctrl+(обратная запятая)` - открыть встроенный терминал
`Ctrl+T` - найти определение чего-либо
`Ctrl+Shift+M` - открыть таб ошибками
`Ctrl+K Ctrl+I` - отобразить hover сообщение
`Ctrl+Shift+Space` - показать сигнатуру функции

## Расширения
vscode-icons - для изменения иконок файлов
Настройки:{
  "workbench.iconTheme": "vscode-icons",
   "vsicons.dontShowNewVersionMessage":true,   
}
Code Spell Checker + Russian - Code Spell Checker - проверка орфографии 
{
  "cSpell.language": "en,ru",
}

## Начальные настройки редактора
Шаблон settings.json файла:
{
  "workbench.settings.editor": "json",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.eol": "\n",
  "workbench.iconTheme": "vscode-icons",
  "vsicons.dontShowNewVersionMessage": true,
  "editor.formatOnSave": true,
  "telemetry.telemetryLevel": "off",
  "editor.copyWithSyntaxHighlighting": false,
  "editor.cursorSurroundingLines": 5,
  "editor.cursorWidth": 2,
  "editor.dragAndDrop": false,
  "editor.fastScrollSensitivity": 5,
  "editor.find.addExtraSpaceOnTop": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.linkedEditing": true,
  "editor.snippetSuggestions": "top",
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
}
 
