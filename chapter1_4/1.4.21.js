// 1.4.22 仅用加减实现的二分查找（Mihai Patrascu）。
// 编写一个程序，给定一个含有 N 个不同 int 值的按照升序排列的数组，判断它是否含有给定的整数。
// 只能使用加法和减法以及常数的额外内存空间。程序的运行时间在最坏情况下应该和 logN 成正比。
// 提示：用斐波那契数代替2的幂（二分法）进行查找。用两个变量保存Fk和Fk-1并在[i,i+Fk]之间查找。
// 在每一步中，使用减法计算Fk-2，检查i+Fk-2处的元素，并根据结果将搜索范围变为[i,i+Fk-2]或是[i+Fk-2,i+Fk-2+Fk-1]。
