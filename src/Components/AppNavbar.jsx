import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
	Link,
} from "@mui/material";

import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

const pages = ["Home", "List", "Dashboard"];
const settings = ["Profile", "Logout"];

const AppHeader = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar alt="RemySharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						SchoolApp
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page) => {
								let toPath=page;
								if(page=== "Home"){toPath="/"}
								if(page=== "List"){toPath="/list"}
								if(page=== "Dashboard"){toPath="/dashboard"}
		
								return (
									<Link component={RouterLink} to={toPath}  key={page}>
										<MenuItem onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page}</Typography>
										</MenuItem>
									</Link>
								);
							})}
						</Menu>
					</Box>
					<IntegrationInstructionsIcon
						sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						School App
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => {
						let toPath=page;
						if(page=== "Home"){toPath="/"}
						if(page=== "List"){toPath="/list"}
						if(page=== "Dashboard"){toPath="/dashboard"}


							return (
								<Link component={RouterLink}  to={toPath} key={page}>
									<Button
										key={page}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: "white", display: "block" }}>
										{page}
									</Button>
								</Link>
							);
						})}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting) => (
								
								<MenuItem key={settings} onClick={handleCloseUserMenu}>
								
									<Link
										sx={{ textDecoration: "none" }}
										component={RouterLink}
										to={toPath}>
										<Typography textAlign="center">{settings}</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default AppHeader;
