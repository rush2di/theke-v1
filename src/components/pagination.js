import React from "react"
import { Link } from "gatsby"

const Pagination = ({ first, last, index, pageCount }) => {
	const prevPageLogic = index === 2 ? "/" : `/${(index - 1).toString()}`
	const secPageLogic = `/${(index + 1).toString()}`
	return (
		<div className="pagination">
			{!!first || (
				<div className="pagination_number--box">
					<Link className="arrow" to={prevPageLogic}>
						&#8249;
					</Link>
				</div>
			)}
			<PageNums index={index} pageCount={pageCount} />
			{!!last || (
				<div className="pagination_number--box">
					<Link className="arrow" to={secPageLogic}>
						&#8250;
					</Link>
				</div>
			)}
		</div>
	)
}

export default Pagination

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
							<Link
								activeClassName="active-link"
								to={num === 1 ? "/" : `/${num}`}
							>
								<div className="pagination_number--box">{num}</div>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
