# Country Suggest react.js component


![image](https://user-images.githubusercontent.com/11752471/47147073-16135480-d2d6-11e8-8854-40031d9594fb.png)


By default component will use https://restcountries.eu/ API
## Usage 
  ```javascript   
    <CountrySelect 
       apiURL="https://restcountries.eu/rest/v2/name/"
       nameField="name" 
       flagField="flag" 
       dataCallback={callback}
    />,

  ```
## Parameters
| Property      | Default value                          | Description                                        | 
| ------------- |:--------------------------------------:| -------------------------------------------------- |
| apiURL        | https://restcountries.eu/rest/v2/name/ | url for getting data, user's input will be appended to the end of a string |
| nameField     | "name"                                 | name of field with country name in the returned json object.    |
| flagField     | "flag"                                 | name of field with link to flag icon in the returned json object|
| dataCallback  | "null"                                 | callback function for modification of data from response        |

### dataCallback
Callback function takes single object from collection of data recieved from API, and should return an object with name and flag properties.

Here is an example of a callback function that uses nativeName property instead of name, and shiny flags from  https://www.countryflags.io/

```javascript   
  var callback = function dataManage(resp){
    let data = {
      name: resp.nativeName,
      flag: "https://www.countryflags.io/" + resp.alpha2Code + "/shiny/64.png",
    }
    return data;
  }
  
  ...
  
  <CountrySelect dataCallback={callback} />,
  
```




