# 选择排序

选择排序是入门计算机算法的基础算法之一。其核心原理是，每次从待排序的数据中选出最小（或最大）的，存放在序列的起始位置，直到全部待排序的数据排完。

关键词：**选择**、**最小（或最大）**、**放到起始位置**

## 核心代码

```js{3,6,9-16}
const arr = [...];
for (let i = 0; i < arr.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    // 传统方式，使用中间变量交换两个元素
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    // ES6 方式，使用解构赋值交换两个元素
    // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
```

## 原理示意图

![选择排序原理示意图](../assets/Selection_sort_animation.gif)
![选择排序原理示意图](../assets/Selection-Sort-Animation.gif)

## 复杂度

最优时间复杂度：O(n<sup>2</sup>)

平均时间复杂度：O(n<sup>2</sup>)

最差时间复杂度：O(n<sup>2</sup>)

空间复杂度：O(1)

稳定性：不稳定

## 参考

[https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort)
