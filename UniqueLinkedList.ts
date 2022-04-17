// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  // Check corner cases in which the list is empty or only has 1 element
  if (!linkedList.next) {
    return linkedList;
  }

  let currentItem: LinkedList | null = linkedList!;
  // Iterate thru list and seek for same values in the sequence erasing them
  while (currentItem) {
    while (currentItem.next?.value == currentItem.value) {
      currentItem.next = currentItem.next?.next;
    }
    currentItem = currentItem.next;
  }

  return linkedList;
}
