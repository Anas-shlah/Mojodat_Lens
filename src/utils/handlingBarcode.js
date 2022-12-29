export function handlingBarcode(input, data) {
  var result = true;
  if (input.length == 0) {
    result = false;
  } else {
    data.map(({data}, index) => {
      data.map((el, index2) => {
        if (el.Barcode == input) {
          result = false;
        }
      });
    });
  }
  return result;
}
