//페이징
function paging(currPage, firstPage, lastPage, preUnitPage, nextUnitPage, currStrPage, currEndPage, functionNm){

	var pageHtml = "";
	
	pageHtml += '<li>';
		pageHtml += '<a href="javascript:' + functionNm + '(' + firstPage + ')" aria-label="first"><span aria-hidden="true">&laquo;&laquo;</span></a>';
		pageHtml += '<a href="javascript:' + functionNm + '(' + preUnitPage + ')" aria-label="pre"><span aria-hidden="true">&laquo;</span></a>';
	pageHtml += '</li>';
    
	for(var i = currStrPage ; i <= currEndPage; i++) {
		pageHtml += '<li><a href="javascript:' + functionNm + '(' + i + ')">' + i + '</a></li>';
	}
	
	pageHtml += '<li>';
		pageHtml += '<a href="javascript:' + functionNm + '(' + nextUnitPage + ')" aria-label="next"><span aria-hidden="true">&raquo;</span></a>';
		pageHtml += '<a href="javascript:' + functionNm + '(' + lastPage + ')" aria-label="last"><span aria-hidden="true">&raquo;&raquo;</span></a>';
	pageHtml += '</li>';
	
	return pageHtml;
}