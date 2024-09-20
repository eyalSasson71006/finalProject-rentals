const mapUserToModel = (user) => ({
    first: user.name.first,
    middle: user.name.middle,
    last: user.name.last,
    email: user.email,
    phone: user.phone,
    password: user.password,
    src: user.image.src,
    alt: user.image.alt,
    state: user.address.state,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    houseNumber: user.address.houseNumber,
    zip: user.address.zip,
});

export default mapUserToModel;