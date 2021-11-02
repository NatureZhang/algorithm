#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){
	struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
	struct ListNode* cur = dummy;
	while(l1 != NULL && l2 != NULL)
	{
		if(l1->val < l2->val){
			cur->next = l1;
			l1 = l1->next;
		}else if(l1->val >= l2->val){
			cur->next = l2;
			l2 = l2->next;
		}
		cur = cur->next;
	}
	if(l1 != NULL){
		cur->next = l1;
	}else{
		cur->next = l2;
	}

	return dummy->next;
}

int main(int argc, char *argv[]) {
	
	struct ListNode node1 = {1};
	struct ListNode node2 = {2};
	struct ListNode node3 = {4};
	node1.next = &node2;
	node2.next = &node3;
	node3.next = NULL;
	
	struct ListNode node4 = {1};
	struct ListNode node5 = {3};
	struct ListNode node6 = {4};
	node4.next = &node5;
	node5.next = &node6;
	node6.next = NULL;
	
	struct ListNode *list1 = &node1;
	struct ListNode *list2 = &node4;
	struct ListNode *resultList = mergeTwoLists(list1, list2);
	
	while (resultList) {
		printf("%d", resultList->val);
		resultList = resultList->next;
	}
}