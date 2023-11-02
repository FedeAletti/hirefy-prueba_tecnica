import { SVGProps } from "react"
import forTalentsIcon from "../../assets/fortalents-logo.png"
import marketPlaceIcon from "../../assets/marketplace-logo.png"

export const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		height={15}
		fill="none"
		{...props}>
		<path
			fill="#fff"
			d="M14.667.344a1.133 1.133 0 0 0-1.604 0L7.5 5.896 1.937.333a1.133 1.133 0 0 0-1.604 0 1.133 1.133 0 0 0 0 1.604L5.896 7.5.333 13.063a1.133 1.133 0 0 0 0 1.604c.443.444 1.16.444 1.604 0L7.5 9.104l5.563 5.563c.444.444 1.16.444 1.604 0a1.133 1.133 0 0 0 0-1.604L9.104 7.5l5.563-5.563a1.14 1.14 0 0 0 0-1.593Z"
		/>
	</svg>
)

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		height={14}
		fill="none"
		{...props}>
		<path
			fill="#0D5287"
			d="M5.868 12.762V8.686h3.26v4.076c0 .448.367.815.816.815h2.445a.818.818 0 0 0 .816-.815V7.056h1.386c.375 0 .554-.465.269-.71L8.044.208a.821.821 0 0 0-1.092 0L.137 6.346a.406.406 0 0 0 .269.71h1.386v5.706c0 .448.367.815.815.815h2.446a.818.818 0 0 0 .815-.815Z"
		/>
	</svg>
)

export const QuestionIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={15}
		height={15}
		fill="none"
		{...props}>
		<path fill="url(#a)" d="M0 0h15v15H0z" />
		<defs>
			<pattern
				id="a"
				width={1}
				height={1}
				patternContentUnits="objectBoundingBox">
				<use xlinkHref="#b" transform="matrix(.04545 0 0 .04545 0 -.09)" />
			</pattern>
			<image
				xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAIAAAA8FDsXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAFASURBVDhP3ZMxr0NQFMc710uexWqqlqmL0MTgA5i79Rt1MlosrMUXEgODGAhC2hi8E85NFM3ty1vee7/tf+45v7gHm/7H/GbF4/EwTVNV1Y8BRVGu12vTNHj8zIoiSZLj8bhZcDgcwjDEpglzxf1+H+dhwPf9uq6rqgqCAOJYbNsWWwlzBTz/2FoUBZYG8jwXBAGO4EZYIswVcH/o8zwP84Tb7QZHsixjJswV5/NZkiS4DuYJZVmCgmEYzISVdb4ClgKK7XaLmfANheu6oDidTpgJ7yqyLON5HhSWZWGJ8JYC3g5sEeZ1Xe+6DqsEugJWAF8nzO/3+zRNsTqBrjAMA+Z3u10cx1h6hqJwHAfmOY6LoghLCygKTdNAYds25jUoisvlIori8r+YQt8FlT+h+BzA8AK6gmVZDC/4J+vs+y/OWggpuhzeCAAAAABJRU5ErkJggg=="
				id="b"
				width={22}
				height={26}
			/>
		</defs>
	</svg>
)

export const MarketPlaceIcon = () => (
	<img src={marketPlaceIcon} alt="forTalents navbar item" width="15px"/>
)

export const ForTalentsIcon = () => (
	<img src={forTalentsIcon} alt="forTalents navbar item" width="15px"/>
)

export const CategoriesIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		fill="none"
		{...props}>
		<path
			fill="#39D3BB"
			d="m6.705.395-3.06 5.002a.821.821 0 0 0 .699 1.25h6.113a.821.821 0 0 0 .7-1.25L8.103.395a.817.817 0 0 0-1.399 0ZM11.93 15.698a3.702 3.702 0 1 0 0-7.405 3.702 3.702 0 0 0 0 7.405ZM.823 15.286h4.936c.453 0 .823-.37.823-.822V9.527a.825.825 0 0 0-.823-.823H.823A.825.825 0 0 0 0 9.527v4.937c0 .452.37.822.823.822Z"
		/>
	</svg>
)

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={8}
		height={11}
		fill="none"
		{...props}>
		<path
			fill="#0D5287"
			d="m3.53 10.546 4.014-3.97a1.515 1.515 0 0 0 0-2.162L3.53.444C2.554-.506.88.168.88 1.532v7.926c0 1.38 1.674 2.054 2.65 1.088Z"
		/>
	</svg>
)
