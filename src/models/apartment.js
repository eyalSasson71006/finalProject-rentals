const apartment = {
    id: 1,
    title: "Luxury House",
    subtitle: "A modern and spacious home with stunning city views",
    address: {
        state: "",
        country: "Israel",
        city: "Tel Aviv",
        street: "Dizengoff",
        houseNumber: 123,
        zip: ""
    },
    price: "$5,000/month",
    bedrooms: 4,
    bathrooms: 3,
    propertyType: "house",
    description:
        "This luxurious house offers 4 bedrooms, 3 bathrooms, and a large balcony overlooking the vibrant Tel-Aviv skyline. Equipped with modern appliances, open-plan living spaces, and a rooftop terrace, it's perfect for families or groups looking to experience the city in style.",
    image: {
        src: "https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg",
        alt: ""
    },
    amenities: {
        airConditioning: true,
        heating: true,
        wifi: true,
        parking: true,
        washingMachine: true,
        dryer: false,
        dishwasher: true,
        balcony: true,
        pool: false,
        gym: false,
        elevator: true,
        petFriendly: true,
        furnished: true,
        securitySystem: true,
        fireplace: false,
        garden: false,
        rooftopAccess: true,
        smartHomeFeatures: false,
        cableTV: true,
        outdoorSeating: true,
        kitchenAppliances: true,
        smokeDetectors: true,
        wheelchairAccessible: false,
    },
    owner: {
        ownerId: "1",
        fullName: "David Cohen",
        image: {
            src: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
            alt: ""
        },
        rating: 4.8,
        createdAt: "2024-09-10T09:59:14.778Z"
    },
    reviews: [
        {
            id: 1,
            username: "Sarah Levi",
            image: {
                src: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
                alt: ""
            },
            text: "Amazing house, very spacious and well-maintained. Had a great experience staying here!",
            rating: 5,
        },
        {
            id: 2,
            username: "Oren Shalev",
            image: {
                src: "https://www.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg",
                alt: "",
            },
            text: "Great location and modern amenities. Would definitely stay again!",
            rating: 4.7,
        },
        {
            id: 3,
            username: "Liat Bar",
            image: {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s",
                alt: "",
            },
            text: "Beautiful place, very clean and close to everything in Tel-Aviv.",
            rating: 4.9,
        },
        {
            id: 4,
            username: "Yossi Amit",
            image: {
                src: "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg",
                alt: "",
            },
            text: "Perfect for a family vacation! We loved the rooftop terrace.",
            rating: 4.8,
        },
    ],
    likes: [],
    available: true,
    rating: 4.9,
    favorite: true,
};

export default apartment;