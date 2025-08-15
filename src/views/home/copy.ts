// const ratio = [3, 4, 2, 1]
// const da = [
//   {
//     level: 19,
//     num: 240 // [180, 240, 120, 60]
//   },{
//     level: 18,
//     num: 80
//   },{
//     level: 17,
//     num: 1000
//   },{
//     level: 16,
//     num: 16000
//   },{
//     level: 15,
//     num: 80000
//   },{
//     level: 14,
//     num: 25000
//   },{
//     level: 13,
//     num: 6500
//   },{
//     level: 12,
//     num: 2500
//   },
// ]
//
// const result = {}
//
// da.forEach(item => {
//   const arr = ratio.map(value => item.num * value / 10)
//   console.log(888, arr)
//   arr.forEach((value, index) => {
//     const point = item.level + index + 1
//     if (result[point]) {
//       result[point] += value
//     } else {
//       result[point] = value
//     }
//   })
// })
//
// function reduceObject(inputObj, total) {
//   // 创建对象的深拷贝以避免修改原始对象
//   const obj = JSON.parse(JSON.stringify(inputObj));
//   let remain = total;
//
//   // 获取所有键并按数字降序排序
//   const sortedKeys = Object.keys(obj).sort((a, b) => parseInt(b) - parseInt(a));
//
//   // 从最大键开始处理
//   for (let i = 0; i < sortedKeys.length && remain > 0; i++) {
//     const currentKey = sortedKeys[i];
//     const currentValue = obj[currentKey];
//
//     if (remain >= currentValue) {
//       // 完全消耗当前键的值
//       remain -= currentValue;
//       delete obj[currentKey];
//
//       // 将当前值累加到下一个较小的键（如果存在）
//       if (i < sortedKeys.length - 1) {
//         const nextKey = sortedKeys[i + 1];
//         obj[nextKey] += currentValue;
//       }
//     } else {
//       // 部分消耗当前键的值
//       obj[currentKey] = currentValue - remain;
//       remain = 0;
//     }
//   }
//
//   return obj;
// }
