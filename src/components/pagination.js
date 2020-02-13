import React from "react"
import { Link } from "gatsby"

const Pagination = ({ first, last, index, pageCount }) => {
	return (
		<div className="pagination">
			{!!first || (
				<Link className="arrow" to={index === 2 ? "/" : `/${(index - 1).toString()}`}>
					&#8249;
				</Link>
			)}
			<PageNums index={index} pageCount={pageCount} />
			{!!last || <Link className="arrow" to={`/${(index + 1).toString()}`}>&#8250;</Link>}
		</div>
	)
}

export default Pagination

// if index dont show left arrow, if last don't show right arrow
// while lastpage is less than 5 render a list from 1 to lastpage index
// if last page is bigger than 5 render 1 to 3 ... 9 10 then if now index is 3 render 3 4 5 .. 9 10
// then make a check if index + 3 >= lastpage - 3 if true render loop from index to lastpage
const PageNums = ({ index, pageCount }) => {
	const range = (from, to, step = 1) => {
		let i = from
		const range = []

		while (i <= to) {
			range.push(i)
			i += step
		}
		return range
	}

	if (pageCount <= 5) {
		return listItem(range(1, pageCount))
	}
	if (pageCount > 5) {
		return listItem(range(index, index + 5))
	}
	if (pageCount - 5 >= index) {
		return listItem(range(pageCount - 5, pageCount))
	}
}

const listItem = callBackRange => {
	return (
		<div className="pagination_number">
			<ul>
				{callBackRange.map(num => {
					return (
						<li key={"key_" + num}>
							<Link activeClassName='active-link' to={num === 1 ? "/" : `/${num}`}>{num}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
