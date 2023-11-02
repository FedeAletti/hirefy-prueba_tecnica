import logo from "./assets/hirefy-logo.png"
import "./App.css"
import {
	CategoriesIcon,
	CrossIcon,
	ForTalentsIcon,
	HomeIcon,
	MarketPlaceIcon,
	QuestionIcon,
} from "./components/icons"
import { NavItem, NavBarItem } from "./components/ui/NavItem"

const LIST: NavItem[] = [
	{
		label: "Home",
		icon: <HomeIcon />,
		href: "/",
	},
	{
		label: "How it works",
		icon: <QuestionIcon />,
		href: "/",
	},
	{
		label: "Marketplace",
		icon: <MarketPlaceIcon />,
		href: "/",
	},
	{
		label: "For Talents",
		icon: <ForTalentsIcon />,
		href: "/",
	},
	{
		label: "Categories",
		icon: <CategoriesIcon />,
		href: "/",
		children: [
			{
				label: "Lorem ipsum",
				href: "/",
			},
			{
				label: "Lorem ipsum",
				href: "/",
			},
			{
				label: "Lorem ipsum",
				href: "/",
				children: [
					{
						label: "Lorem ipsum",
						href: "/",
					},
					{
						label: "Lorem ipsum",
						href: "/",
					},
				],
			},
			{
				label: "Lorem ipsum",
				href: "/",
			},
			{
				label: "Lorem ipsum",
				href: "/",
				children: [
					{
						label: "Lorem ipsum",
						href: "/",
					},
					{
						label: "Lorem ipsum",
						href: "/",
					},
				],
			},
		],
	},
]

function App() {
	return (
		<main className="h-screen flex flex-col rounded">
			<header className="h-[75px] bg-primary flex items-center justify-between px-5 rounded-tr-[20px]">
				<div className="flex items-center gap-2">
					<img className="w-[30.933px] h-[30.933px]" src={logo} alt="logo" />
					<h2 className="text-lg font-extrabold text-highlightText">Hirefy</h2>
				</div>
				<div>
					<CrossIcon />
				</div>
			</header>
			<ul className="flex-1 mt-5 space-y-2 mx-3 overflow-y-auto">
				{LIST.map(({ label, icon, href, children }) => (
					<NavBarItem
						key={label}
						label={label}
						icon={icon}
						href={href}
						children={children}
					/>
				))}
			</ul>
			<footer className="mx-5 rounded-br-[20px]">
				<ul className="flex gap-[10px] text-link hover:text-hoverLink text-sm">
					<li>
						<a href="">Terms</a>
					</li>
					<li>
						<a href="">Privacy</a>
					</li>
					<li>
						<a href="">Security</a>
					</li>
					<li>
						<a href="">Version</a>
					</li>
				</ul>
				<hr className="my-4 border border-highlight " />
				<p className="pb-10 text-muted font-medium">© 2023 Hirefy, LLC.</p>
			</footer>
		</main>
	)
}

export default App
