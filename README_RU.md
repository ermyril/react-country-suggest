# Country Suggest react.js component


![image](https://user-images.githubusercontent.com/11752471/47147073-16135480-d2d6-11e8-8854-40031d9594fb.png)


По умолчанию используется API https://restcountries.eu/ 

## Использование 
  ```javascript   
    <CountrySuggest 
       apiURL="https://restcountries.eu/rest/v2/name/"
       nameField="name" 
       flagField="flag" 
       dataCallback={callback}
    />,

  ```
  
## Параметры
| Свойство      | Значение по умолчанию                  | Описание                                        | 
| ------------- |:--------------------------------------:| -------------------------------------------------- |
| apiURL        | https://restcountries.eu/rest/v2/name/ | Адрес, по которому будет осуществляться запрос к API, пользовательский ввод с поля будет добавлен к концу строки |
| nameField     | "name"                                 | код поля с названием                                            |
| flagField     | "flag"                                 | код поля со ссылкой на изображение флага                        |
| dataCallback  | "null"                                 | коллбек для модификации данных, полученых от сервера        |

### dataCallback
Функция принимает отдельный объект из коллекции, полученной в результате запроса, и должна возвращать объект со свойствами name и flag

Пример Callback-функции, заменяющей название на значение из колонки nativeName, и подставляющей флаги, взятые с  https://www.countryflags.io/

```javascript   
  var callback = function dataManage(resp){
    let data = {
      name: resp.nativeName,
      flag: "https://www.countryflags.io/" + resp.alpha2Code + "/shiny/64.png",
    }
    return data;
  }
  
  ...
  
  <CountrySuggest dataCallback={callback} />,
  
```

# Сборка
Для запуска локального сервера - выполнить команду
``` node server.js ```
По умолчанию сервер будет запущен на 3000 порту

## команды для сборки с помощью webpack
```
    npm run dev
    npm run watch
    npm run production
```

### P.S.
Модуль как-бы доступен через npm, но в текущем виде толку от этого немного, так как у меня пока еще не вышло разобраться с экспортом так чтобы это можно было через ES6 import или require использовать,
Поэтому будет работать только если подключить напрямую скрипт CountrySuggest.js из каталога с сырцами, а это нежизнеспособный вариант. Но я пыталсо :'D 

``` npm install react-country-suggest ```




