
function ListNode (val) {
	this.val = val;
	this.next = null;
}

//判断一个链表是否有环
function hasCycle (list) {
	//快慢指针
	//慢指针走1步，快指针走2步，如果两者相遇，则链表存在环
	
	let low = list, fast = list.next;
	
	if (!fast) {
		return false;
	}

	while (fast && fast.next) {
		
		//如果快慢指针相遇，则证明有环
		if (fast == low) {
			return true;
		}
		
		low = low.next;
		fast = fast.next.next;
	}
	
	return false;
}

//环的起点
function detectCycle (list) {

	let slow = list, fast = list.next;
		
	while (fast && fast.next) {
		
		//如果快慢指针相遇，则证明有环
		if (fast == slow) {
			break;
		}
		
		slow = slow.next;
		fast = fast.next.next;
	}
	
	console.log('slow:' + slow.val);
	console.log('fast:' + fast.val);
	
	//重新指向开头
	slow = list;
	
	//因为没有头节点, slow = list 相当于slow走了一步，所以fast也要走一步，再在while中一起走
	fast = fast.next;
	
	// 两指针同时前进，再次相遇，即为起点
	while (slow != fast) {
		slow = slow.next;
		fast = fast.next;
	}
	
	return slow;
}

function main () {
	
	let node1 = new ListNode(1);
	let node2 = new ListNode(2);
	let node3 = new ListNode(3);
	let node4 = new ListNode(4);
	let node5 = new ListNode(5);
	let node6 = new ListNode(6);
	let node7 = new ListNode(7);
	let node8 = new ListNode(8);
	let node9 = new ListNode(9);
	let node10 = new ListNode(10);
	
	node1.next = node2; node2.next = node3; node3.next = node4; node4.next = node5; node5.next = node6;
	node6.next = node7; node7.next = node8; node8.next = node9; node9.next = node10; node10.next = node5;
	
	let isCycleList = hasCycle(node1);
	
	console.log(isCycleList);
	
	if (isCycleList) {
		let node = detectCycle(node1);
		
		if (node) {
			console.log(node.val);	
		}
	}
}

main();