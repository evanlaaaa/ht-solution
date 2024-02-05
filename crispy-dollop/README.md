# crispy-dollop

## Problem:
Given a number, the task is to find the next bigger number that can be formed by rearranging the digits of the given number

## Solution Flow:
1. Convert the number to an array of digits `numArr` for mutating the position of digits.
2. Find the pivot index `i`, where `numArr[n]` = `a`, and `numArr[n+1]` = `b`. `i = n` when `b > a`
3. Find the smallest digit's index `j` that is still larger than the pivot `numArr[i]`
4. Swap `numArr[i]` with `numArr[j]`, then sort `numArr` starting from `numArr[i+1]`. This ensures we create the smallest possible number with the given digits after sorting.
5. Convert the list of digits back to an integer and return it

## Reasoning behind the Solution:

This approach works because by finding the pivot and the next larger digit, we essentially identify a pivot point in the number where we can increase its value without affecting the digits to its left. Swapping and sorting ensure we create the next larger number possible using the available digits.

### Trade-offs and Things Left Out:

- The solution assumes that the input will be a positive integer. Additional checks may be needed for other input scenarios, such as negative numbers, floating-point numbers, or non-numeric input.
- The time complexity for this solution is `O(n)` as we iterate through the digits of number. It will slow down when `num` is huge
- I found out instead of sorting, reversing the array after pivot `numArr[i+1]...numArr[n]` could work too. Which able to speed up the function by reducing the time complexity from `O(n + n log n)` to `O(n + n)`. But I'm not confident to say it covered all the cases.

## What I might do differently with more time

- Unit tests to test if the `reverse` solution works correctly for various inputs and edge cases.