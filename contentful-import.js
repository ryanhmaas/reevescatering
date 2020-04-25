var fs = require('fs');
var items = JSON.parse(fs.readFileSync('contentful/menu-item-names.json', 'utf8'));
let index = 10;

let itemsArr = [];

for(var i = 0; i<items.length;i++){
  let item = items[i];
  let itemId = index;
  let entry = {
    sys: {
      id: itemId.toString(),
      publishedVersion: 1,
      contentType: {
        sys: {
          id: "menuItem"
        }
      }
    },
    fields: {
      name: {
        "en-US": item.name
      },
      description: {
        "en-US": "Oh so tasy."
      },
      glutenFree: {
        "en-US": item.glutenFree
      },
      vegan: {
        "en-US": item.vegan
      }
    }
  };
  itemsArr.push(entry);
  index++;
}

var configuration = JSON.parse(fs.readFileSync('contentful/menu-item.json', 'utf8'));
configuration.entries = itemsArr;

fs.writeFileSync('contentful/ImportMenuItems.json', JSON.stringify(configuration), 'utf-8');