const searchSortUpdate = (arr, query) => {
    return arr
    .sort()
    .map(item => "*" + item);
};

const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];
searchFor = "ka", "e";
const search = searchSortUpdate(friends, searchFor);
console.log (search);