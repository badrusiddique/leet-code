const mergeSortedArr = (a, b) => {
  if (a.length === 0) return b
  if (b.length === 0) return a

  const result = []
  let ai = 0, bi = 0

  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) {
      result.push(a[ai])
      ai++
    } else {
      result.push(b[bi])
      bi++
    }
  }

  result.push(...a.slice(ai, a.length), ...b.slice(bi, b.length))
  return result
}

console.log(mergeSortedArr([], []))
console.log(mergeSortedArr([1], []))
console.log(mergeSortedArr([], [0]))
console.log(mergeSortedArr([1,2,4], [1,3,4]))
console.log(mergeSortedArr([1], [1,2,3,4,4]))
console.log(mergeSortedArr([1,3,4,4], [1,2]))


function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

const mergeKSortedArr = (lists) => {
  let newList=[]

  for(let i=0;i<lists.length;i++){

    while(lists[i]){
      newList.push(lists[i].val)
      lists[i]=lists[i].next
    }
  }
  let sorted=new ListNode()
  let curr=sorted
  newList=newList.sort((a,b)=>a-b)
  for(let i=0;i<newList.length;i++){
    curr.next=new ListNode(newList[i],null)
    curr=curr.next;
  }
  return sorted.next;

}
