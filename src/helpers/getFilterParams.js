const getFilterParams = (apartments) => {
    let maxPrice = 0;
    let minPrice = apartments[0].price;
    let locations = [];
    apartments.forEach(apartment => {
        if (apartment.price > maxPrice) maxPrice = apartment.price;
        if (apartment.price < minPrice) minPrice = apartment.price;
        if (!locations.includes(apartment.address.state)) locations.push(apartment.address.state);
        if (!locations.includes(apartment.address.country)) locations.push(apartment.address.country);
        if (!locations.includes(apartment.address.city)) locations.push(apartment.address.city);
    });
    return { maxPrice, minPrice, locations };
};


export default getFilterParams;