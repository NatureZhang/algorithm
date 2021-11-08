// 二叉树节点
function TreeNode (val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

// 前序遍历
function frontTravese (root, list) {
	if (root != null) {
		list.push(root.val);
		
		if (root.left != null) {
			frontTravese(root.left, list);
		}
		
		if (root.right != null) {
			frontTravese(root.right, list);
		}
	}	
}

function frontTravese2 (root) {
	let list = new Array();
	
	if (root == null) {
		return list;
	}
	
	let stack = new Array();
	stack.push(root);
	
	while (stack.length) {
		
		let cur_node = stack.pop();
		list.push(cur_node.val);
		
		if (cur_node.right) {
			stack.push(cur_node.right);
		}
		
		if (cur_node.left) {
			stack.push(cur_node.left);			
		}
	}
	
	return list;
}

// 中序遍历
function middleTravese (root, list) {
	if (root != null) {
		
		if (root.left != null) {
			middleTravese(root.left, list);
		}
		
		list.push(root.val);
		
		if (root.right != null) {
			middleTravese(root.right, list);
		}
	}	
}

// 后续遍历
function recursionPostorderTraversal (root, list) {
	if (root) {
		if (root.left) {
			recursionPostorderTraversal(root.left, list);
		}
		if (root.right) {
			recursionPostorderTraversal(root.right, list);
		}
		
		list.push(root.val);
	}
}

// 层序遍历
function levelTraversal(root) {
	
	if (!root) {
		return [];
	}
	let res = [];
	let queue = new Array();
	queue.push(root);
	
	while (queue.length) {
		let node = queue.shift();
		
		res.push(node.val);
		
		if (node.left) {
			queue.push(node.left);
		}
		
		if (node.right) {
			queue.push(node.right);
		}
	}
	
	return res;
}

// 蛇形遍历
function snakeTraversal (root) {
	if(!root) return [];
	
	let res = [];
	let level_res = [];
	
	let queue = [];
	queue.push(root);
	queue.push(null);//哨兵
	
	let isOrderLeft = true;
	while (queue.length) {
		let cur_node = queue.shift(); //出队一个节点
		if (cur_node) {
			if (isOrderLeft) {
				level_res.push(cur_node.val);
			}
			else {
				level_res.unshift(cur_node.val);
			}
			
			if (cur_node.left) {
				queue.push(cur_node.left);
			}
			
			if (cur_node.right) {
				queue.push(cur_node.right);
			}
		}
		else {
			res.push(...level_res);
			level_res = [];
			if (queue.length) {
				queue.push(null);				
			}
			isOrderLeft = !isOrderLeft;
		}
	}
	return res;
}

// 翻转二叉树
function invertTree (root) {
	if (!root) {
		return null;
	}
	
	let tmp = root.left;
	root.left = root.right;
	root.right = tmp;
	
	invertTree(root.left);
	invertTree(root.right);
	
	return root;
}

var binaryTree = function () {
	//构造一棵二叉树
	let node1 = new TreeNode(1);
	let node2 = new TreeNode(2);
	let node3 = new TreeNode(3);
	let node4 = new TreeNode(4);
	let node5 = new TreeNode(5);
	let node6 = new TreeNode(6);
	let node7 = new TreeNode(7);
	let node8 = new TreeNode(8);
	let node9 = new TreeNode(9);
	let node10 = new TreeNode(10);
	
	node1.left = node2; node1.right = node3;
	node2.left = node4; node2.right = node5;
	node3.left = node6; node3.right = node7;
	node4.left = node8; node4.right = node9;
	node5.left = node10;
	
	return node1;
}

function main () {
	
	let tree = binaryTree();
	
	// 前
	let list = new Array();
	frontTravese(tree, list);
	console.log(list);

	let front2 = frontTravese2(tree);
	console.log(front2);

	// 中
	let midlist = new Array();
	middleTravese(tree, midlist);
	console.log(midlist);
	
	// 后
	let postlist = [];
	recursionPostorderTraversal(tree, postlist);
	console.log(postlist);
	
	// 层序
	let level_res = levelTraversal(tree);
	console.log(level_res);
	
	// 蛇形
	let snake_res = snakeTraversal(tree);
	console.log(snake_res);
	
	// 翻转
	let invert_tree = invertTree(tree);
	let invert_tree_level_res = levelTraversal(invert_tree);
	console.log(invert_tree_level_res);
	
}

main();