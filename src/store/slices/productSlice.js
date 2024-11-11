function convertCategoryToQuery(category) {
    if (category === "all") {
        return "";
    }
    return `category=${category}`;
}