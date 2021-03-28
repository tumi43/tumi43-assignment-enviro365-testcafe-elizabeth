
//Got this solution from https://github.com/DevExpress/testcafe-examples/blob/master/examples/use-xpath-selectors/xpath-selector.js
import { Selector } from 'testcafe';

const getElementsByXPath = Selector(xpath => {
  const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  const items = [];

  let item = iterator.iterateNext();

  while (item) {
    items.push(item);
    item = iterator.iterateNext();
  }

  return items;
});

export default function (xpath) {
  return Selector(getElementsByXPath(xpath));
}
