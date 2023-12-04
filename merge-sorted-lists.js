'use strict';

function mergeSortedLists(list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.value <= list2.value) {
    list1.next = mergeSortedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeSortedLists(list1, list2.next);
    return list2;
  }
}