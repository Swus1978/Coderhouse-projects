// this function is to find or search for items.
function findItems(codes) {
    let results = items.find((item) => item.codes === parseInt(codes));
    return results;
}
