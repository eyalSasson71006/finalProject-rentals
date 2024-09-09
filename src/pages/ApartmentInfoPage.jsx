import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeadline from "../components/PageHeadline";
import StarIcon from "@mui/icons-material/Star";
import Comment from "../cards/components/Comment";


const apartment = {
	id: 1,
	title: "Luxury House",
	subtitle: "A modern and spacious home with stunning city views",
	address: "123 Dizengoff St, Tel-Aviv, Israel",
	price: "$5,000/month",
	description:
		"This luxurious house offers 4 bedrooms, 3 bathrooms, and a large balcony overlooking the vibrant Tel-Aviv skyline. Equipped with modern appliances, open-plan living spaces, and a rooftop terrace, it's perfect for families or groups looking to experience the city in style.",
	location: "Tel-Aviv",
	src: "https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg",
	owner: {
		fullName: "David Cohen",
		img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
		rating: 4.8,
	},
	reviews: [
		{
			id:1,
			username: "Sarah Levi",
			img: "/images/avatar.png",
			text: "Amazing house, very spacious and well-maintained. Had a great experience staying here!",
			rating: 5,
		},
		{
			id:2,
			username: "Oren Shalev",
			img: "/images/avatar.png",
			text: "Great location and modern amenities. Would definitely stay again!",
			rating: 4.7,
		},
		{
			id:3,
			username: "Liat Bar",
			img: "/images/avatar.png",
			text: "Beautiful place, very clean and close to everything in Tel-Aviv.",
			rating: 4.9,
		},
		{
			id:4,
			username: "Yossi Amit",
			img: "/images/avatar.png",
			text: "Perfect for a family vacation! We loved the rooftop terrace.",
			rating: 4.8,
		},
	],
	rating: 4.9,
	favorite: true,
};

export default function ApartmentInfoPage() {
	const { id } = useParams();
	return (
		<>
			<PageHeadline
				title={apartment.title}
				subtitle={apartment.subtitle}
			/>
			<Grid2
				container
				spacing={2}
				sx={{
					justifyContent: "center",
					width: "80vw",
					margin: "50px auto",
					gap: 10,
				}}
			>
				<Grid2 size={12} sx={{ textAlign: "center" }}>
					<img
						src={apartment.src}
						style={{
							width: "clamp(300px, 100%, 50vw",
							borderRadius: "12px",
						}}
					/>
				</Grid2>
				<Grid2 size={8}>
					<Typography my={1} variant="h5" color="gray">
						Location: {apartment.location} <br />
						price: {apartment.price} <br />
					</Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: 18, lineHeight: 1.7 }}
						mb={8}
					>
						{apartment.description}
					</Typography>
					{apartment.reviews.map((review)=><Comment key={review.id} reviewObj={review}/>)}
				</Grid2>
				<Grid2 size={"auto"}>
					<img
						src={apartment.owner.img}
						style={{ width: "200px", borderRadius: "50px" }}
					/>
					<Typography variant="h5">
						{apartment.owner.fullName}
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "4px",
						}}
					>
						<Typography variant="h6">Host rating: </Typography>
						<Typography variant="h5">
							{apartment.owner.rating}
						</Typography>
						<StarIcon />
					</Box>
					<Button
						variant="contained"
						sx={{ width: "100%", my: 2, fontSize: 22 }}
					>
						RESERVE
					</Button>
				</Grid2>
			</Grid2>
		</>
	);
}
