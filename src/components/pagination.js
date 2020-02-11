import React from "react"


const Pagination = ({first, last, index, pageCount}) => {
	let rang = []
	if(pageCount <= 5 ) {
		for(let i = 1; i === pageCount; i++){
			rang.push(i)
		}
	}

	if(pageCount > 5 ){}

	return (
		<div>paginatin goes here</div>
		)
}


// if index dont show left arrow, if last don't show right arrow
// while lastpage is less than 5 render a list from 1 to lastpage index
// if last page is bigger than 5 render 1 to 3 ... 9 10 then if now index is 3 render 3 4 5 .. 9 10 
// then make a check if index + 3 >= lastpage - 3 if true render loop from index to lastpage