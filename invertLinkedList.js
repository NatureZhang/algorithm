
function ListNode (val) {
	this.val = val;
	this.next = null;
}

// 翻转单链表
var iterationInvertLinkedList = function (list) {
	let pre = list;
	let cur = pre.next;
	pre.next = null;
	
	while (cur) {
		let tmp = cur.next;
		
		cur.next = pre;		
		pre = cur;
  		cur = tmp;	
	}
	
	return pre;
}

function main () {
	

	let node1 = new ListNode(1);
	let node2 = new ListNode(2);
	let node3 = new ListNode(3);
	let node4 = new ListNode(4);
	let node5 = new ListNode(5);
	let node6 = new ListNode(6);
	
	node1.next = node2; node2.next = node3; node3.next = node4; node4.next = node5; node5.next = node6;
	
	let resultList = iterationInvertLinkedList(node1);		
	
	while (resultList) {
		console.log(resultList.val);
		resultList = resultList.next;
	}
}

main();