const normalizeUser = (user) => ({
    name: {
        first: user.first,
        middle: user.middle,
        last: user.last,
    },
    email: user.email,
    phone: user.phone,
    password: user.password,
    image: {
        url: user.url,
        alt: user.alt,
    },
    address: {
        state: user.state,
        country: user.country,
        city: user.city,
        street: user.street,
        houseNumber: user.houseNumber,
        zip: user.zip,
    },
});

export default normalizeUser;