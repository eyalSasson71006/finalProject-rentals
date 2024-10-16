const getFilterParams = (apartments) => {
    let maxPrice = 0;
    let minPrice = apartments[0]?.price;
    let locations = [];
    apartments?.forEach(apartment => {
        if (apartment.price > maxPrice) maxPrice = apartment.price;
        if (apartment.price < minPrice) minPrice = apartment.price;
        if (!locations.includes(apartment.address.state.toLowerCase())) locations.push(apartment.address.state.toLowerCase());
        if (!locations.includes(apartment.address.country.toLowerCase())) locations.push(apartment.address.country.toLowerCase());
        if (!locations.includes(apartment.address.city.toLowerCase())) locations.push(apartment.address.city.toLowerCase());
    });    
    return { maxPrice, minPrice, locations };
};


export default getFilterParams;