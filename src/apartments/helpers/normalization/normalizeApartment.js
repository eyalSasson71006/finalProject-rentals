const normalizeApartment = (apartment) => {
    return ({
        title: apartment.title,
        subtitle: apartment.subtitle,
        address: {
            state: apartment.state,
            country: apartment.country,
            city: apartment.city,
            street: apartment.street,
            houseNumber: apartment.houseNumber,
            zip: apartment.zip,
        },
        price: apartment.price,
        bedrooms: apartment.bedrooms,
        bathrooms: apartment.bathrooms,
        propertyType: apartment.propertyType,
        description: apartment.description,
        image: {
            src: apartment.imageUrl,
            alt: apartment.imageAlt,
        },
        amenities: {
            airConditioning: apartment.airConditioning,
            heating: apartment.heating,
            wifi: apartment.wifi,
            parking: apartment.parking,
            washingMachine: apartment.washingMachine,
            dryer: apartment.dryer,
            dishwasher: apartment.dishwasher,
            balcony: apartment.balcony,
            pool: apartment.pool,
            gym: apartment.gym,
            elevator: apartment.elevator,
            petFriendly: apartment.petFriendly,
            furnished: apartment.furnished,
            securitySystem: apartment.securitySystem,
            fireplace: apartment.fireplace,
            garden: apartment.garden,
            rooftopAccess: apartment.rooftopAccess,
            smartHomeFeatures: apartment.smartHomeFeatures,
            cableTV: apartment.cableTV,
            outdoorSeating: apartment.outdoorSeating,
            kitchenAppliances: apartment.kitchenAppliances,
            smokeDetectors: apartment.smokeDetectors,
            wheelchairAccessible: apartment.wheelchairAccessible,
        }
    });
};

export default normalizeApartment;