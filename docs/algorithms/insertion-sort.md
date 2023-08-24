# 插入排序

插入排序是一种简单直观的排序算法。其原理是每次从未排序的数组中取出一个元素，将其插入到已排序的数组中的合适位置，直到未排序数组为空。

关键词：**已排序数组**、**未排序数组**、**插入**

## 核心代码

```js{4-7}
const arr = [...];
for (let i = 1; i < arr.length; i++) {
  let current = i;
  while (arr[current - 1] !== undefined && arr[current] < arr[current - 1]) {
    [arr[current], arr[current - 1]] = [arr[current - 1], arr[current]];
    current--;
  }
}
```

## 原理示意图

![插入排序原理示意图](../assets/Insertion_sort.gif)
![插入排序原理示意图](../assets/Insertion-sort-example-300px.gif)

## 复杂度

最优时间复杂度：O(n)

平均时间复杂度：O(n<sup>2</sup>)

最差时间复杂度：O(n<sup>2</sup>)

空间复杂度：O(1)

稳定性：稳定

## 参考

[https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort)
