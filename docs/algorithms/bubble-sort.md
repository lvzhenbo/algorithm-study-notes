# 冒泡排序

冒泡排序是入门计算机算法的基础算法之一。其核心原理，就是重复遍历，比较相邻的两个元素，如果它们的顺序错误就交换它们，直到无需交换。

关键词：**重复遍历**、**相邻元素比较**、**交换**。

## 核心代码

```js{5-10}
const arr = [...];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // 传统方式，使用中间变量交换两个元素
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      // ES6 方式，使用解构赋值交换两个元素
      // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
```

## 原理示意图

![冒泡排序原理示意图](../assets/Bubble-sort-example-300px.gif)

## 复杂度

最优时间复杂度：O(n)

平均时间复杂度：O(n<sup>2</sup>)

最差时间复杂度：O(n<sup>2</sup>)

空间复杂度：O(1)

稳定性：稳定

## 参考

[https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)
