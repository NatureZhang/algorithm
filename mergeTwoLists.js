function ListNode(val) {
	this.val = val;
	this.next = null;
}

var mergeTwoLists = function(l1, l2) {
	let dummy = new ListNode();
	let cur = dummy;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			cur.next = l1;
			l1 = l1.next;
		}
		else {
			cur.next = l2;
			l2 = l2.next;
		}
		cur = cur.next;
	}
	
	if (l1) {
		cur.next = l1;
	}
	if (l2) {
		cur.next = l2;
	}
	return dummy.next;
};

function main () {
	
	let node1 = new ListNode(1);
	let node2 = new ListNode(2);
	let node3 = new ListNode(4);
	node1.next = node2; node2.next = node3;

	let node4 = new ListNode(1);
	let node5 = new ListNode(3);
	let node6 = new ListNode(4);
	node4.next = node5; node5.next = node6;

	let resultNode = mergeTwoLists(node1, node4);

	while (resultNode) {
		console.log(resultNode.val);
		resultNode = resultNode.next;
	}
}

main();

