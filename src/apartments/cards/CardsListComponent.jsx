import { Box, Container } from "@mui/material";
import React from "react";
import CardComponent from "./CardComponent";

const apartments = [
	{
		id: 1,
		title: "Luxury House",
		location: "Tel-Aviv",
		src: "https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg",
		rating: 4.9,
		favorite: true,
	},
	{
		id: 2,
		title: "Cozy Studio",
		location: "Jerusalem",
		src: "https://www.apartments.com/blog/sites/default/files/styles/x_large/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg.webp?itok=lYDRCGzC",
		rating: 4.7,
		favorite: false,
	},
	{
		id: 3,
		title: "Spacious Penthouse",
		location: "Haifa",
		src: "https://belroyapartments.com/wp-content/uploads/2019/05/BelRoy-2018-08-052-1-1024x684.jpg",
		rating: 4.8,
		favorite: true,
	},
	{
		id: 4,
		title: "Modern Apartment",
		location: "Herzliya",
		src: "https://www.columbusmonthly.com/gcdn/-mm-/5761a5644dbbbc0d07f1118b0a22ef5d2dbaa88b/c=0-54-1024-630/local/-/media/2020/12/18/ColumbusMonthly/ghows-OH-200729863-97a7e1ba.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
		rating: 4.6,
		favorite: false,
	},
	{
		id: 5,
		title: "Beachfront Condo",
		location: "Eilat",
		src: "https://images1.forrent.com/i2/Oh6iY3H3D1CIoX4G0dIPyhJoruuc5WTiC2JwlWIbOUs/117/image.jpg?p=1",
		rating: 4.9,
		favorite: false,
	},
	{
		id: 6,
		title: "Suburban Villa",
		location: "Ra'anana",
		src: "https://images.axios.com/CUxn4LKEj293d_A6ok95yXx61wE=/0x153:2048x1305/1920x1080/2023/04/19/1681916191710.jpg?w=1920",
		rating: 4.5,
		favorite: true,
	},
	{
		id: 7,
		title: "Family Apartment",
		location: "Rishon Lezion",
		src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiopSc2ceB1zjpUG0byTvsSGlT7ne3_8hRWw&s",
		rating: 4.7,
		favorite: true,
	},
	{
		id: 8,
		title: "Downtown Loft",
		location: "Beer Sheva",
		src: "https://cdn.apartmenttherapy.info/image/upload/v1694440049/at/house%20tours/2023-House-Tours/2023-September/house%20calls/kim-h/calls-montreal-kim-h-0051.jpg",
		rating: 4.6,
		favorite: false,
	},
];

export default function CardsListComponent() {
	return (
		<Container
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: "20px",
				my: 7,
			}}
		>
			{apartments.map((apartment) => (
				<CardComponent key={apartment.id} apartment={apartment} />
			))}
		</Container>
	);
}
