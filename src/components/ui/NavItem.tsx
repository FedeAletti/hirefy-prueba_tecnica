import { useState } from "react"
import { ArrowIcon } from "../icons"
import { useNavigate } from "react-router-dom"

export interface NavItem {
	id: string | number
	label: string
	icon?: JSX.Element
	href: string
	children?: NavItem[]
	className?: string
}

export const NavBarItem = ({
	label,
	icon,
	href,
	children,
	className,
}: NavItem) => {
	const [showChildren, setshowChildren] = useState(false)

	const navigate = useNavigate()

	return (
		<li
			onClick={() => {
				navigate(href)
			}}
			key={label}
			className={`flex w-full font-sm items-center ${
				className || "font-semibold"
			}`}>
			{children ? (
				<div className="w-full">
					<button
						className={`flex w-full p-2 rounded-md justify-between items-center ${
							!className && "gap-2"
						} hover:bg-highlight ${showChildren && "bg-highlight"}`}
						onClick={() => {
							setshowChildren(!showChildren)
						}}>
						<span>{icon || ""}</span>
						<span className="">{label}</span>
						{children && (
							<div className="flex-1 flex justify-end">
								<ArrowIcon
									className={`transition-all duration-200 ${
										showChildren && "-rotate-90"
									}`}
								/>
							</div>
						)}
					</button>
					<ul
						className={`flex flex-col gap-2 pl-6 ${
							showChildren ? "" : "hidden"
						}`}>
						{children.map((child) => (
							<NavBarItem
								key={child.id}
                                id={child.id}
								label={child.label}
								icon={child.icon}
								href={child.href}
								children={child.children}
								className="font-normal"
							/>
						))}
					</ul>
				</div>
			) : (
				<div className="flex items-center gap-2 p-2 w-full rounded-md hover:bg-highlight">
					{icon || ""}
					<span>{label}</span>
				</div>
			)}
		</li>
	)
}
