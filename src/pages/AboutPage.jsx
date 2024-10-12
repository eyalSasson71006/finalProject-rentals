import React from "react";
import { Box, Typography, Container, Grid2 } from "@mui/material";

const AboutPage = () => {
	return (
		<Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
			<Container maxWidth="xl">
				<Grid2 container spacing={4} justifyContent="center">
					<Grid2 size={{ xs: 12, md: 10 }}>
						<Box sx={{ textAlign: "center", mb: 0 }}>
							<Typography
								variant="h3"
								component="h1"
								sx={{ fontWeight: "bold", mb: 2 }}
							>
								About Rent Mate
							</Typography>
							<Typography variant="h6" color="textSecondary">
								Your trusted platform for finding or listing the
								perfect apartment.
							</Typography>
						</Box>
					</Grid2>

					<Grid2 size={{ xs: 12, md: 10 }}>
						<Typography variant="body1" fontSize="1.1rem">
							Welcome to <strong>Rent Mate</strong>, your trusted
							platform that bridges the gap between apartment
							owners and renters, making the search for a new home
							simpler, faster, and more reliable. Whether you’re a
							property owner looking to showcase a cozy city loft
							or a renter searching for the perfect place to call
							home, Rent Mate is here to ensure that both sides
							find exactly what they need with minimal effort.
						</Typography>
						<Typography variant="body1" fontSize="1.1rem">
							At <strong>Rent Mate</strong>, our mission is to
							transform the rental process into an efficient and
							enjoyable experience for everyone. We've built our
							platform from the ground up with a focus on creating
							a seamless, user-friendly environment that empowers
							both property owners and renters to connect and
							engage with ease.
						</Typography>
						<Typography variant="body1" fontSize="1.1rem">
							For property owners, listing an apartment is a quick
							and straightforward process, allowing you to
							showcase your property’s unique features through
							detailed descriptions, high-quality images, and key
							information. Renters benefit from our advanced
							search tools, allowing them to browse apartments by
							location, budget, and preferences.
						</Typography>
						<Typography variant="body1" fontSize="1.1rem">
							<strong>What sets Rent Mate apart?</strong> We
							understand that communication is key when it comes
							to finding the right place or tenant. That's why
							we’ve integrated a{" "}
							<strong>built-in chat application</strong>, allowing
							landlords and prospective tenants to communicate
							directly through our platform. With real-time
							messaging, renting has never been easier.
						</Typography>
						<Typography variant="body1" fontSize="1.1rem">
							Our platform also prioritizes security and trust,
							with robust safety features to ensure that every
							interaction is secure. Whether you’re listing or
							looking, Rent Mate fosters a hassle-free community,
							making finding your next home easier than ever.
						</Typography>
						<Typography variant="body1" fontSize="1.1rem" mt={2}>
							<strong>Why choose Rent Mate?</strong>
						</Typography>
						<ul>
							<li>
								<Typography variant="body1" fontSize="1.1rem">
									Ease of Use: Intuitive and user-friendly
									platform.
								</Typography>
							</li>
							<li>
								<Typography variant="body1" fontSize="1.1rem">
									Comprehensive Listings: Property owners can
									present their apartments with detailed
									information.
								</Typography>
							</li>
							<li>
								<Typography variant="body1" fontSize="1.1rem">
									Advanced Search Tools: Renters can search by
									location, budget, and more.
								</Typography>
							</li>
							<li>
								<Typography variant="body1" fontSize="1.1rem">
									Real-Time Communication: Instant chat
									feature for renters and landlords.
								</Typography>
							</li>
							<li>
								<Typography variant="body1" fontSize="1.1rem">
									Secure Environment: Designed with the latest
									security features.
								</Typography>
							</li>
						</ul>
						<Typography variant="body1" fontSize="1.1rem">
							Ready to take the next step? Join Rent Mate today
							and let us help you find or list the perfect
							apartment with just a few clicks. With Rent Mate,
							renting has never been easier!
						</Typography>
					</Grid2>
				</Grid2>
			</Container>
		</Box>
	);
};

export default AboutPage;
