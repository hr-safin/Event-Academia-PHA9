<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In the first line of code  we declare a variable greeting using let keyword . We did not assign any value for it so initially greeting value is undefined.After that, we set the greetign to an empty object {}.The code initializes an empty object So, when we console.log(greetign ) in console  the output is showing empty object {}</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The answer is 12 because sum function has two parameter a and b.Then we returned  a + b . Lastly when we invoke the function we pass argument for a and b which is a=1 and b= "2". We can see that value of b is a string.So we have to add a number to a string.In javaScript, when we use + operator to add a number to a string, JavaScript implicitly converts number to a string this is called type conversion or type coercion.For that reason answer is "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Its pretty straight forward because in the first line of code we declared variable called food Which is an array. In this array we have four elements(["🍕", "🍫", "🥑", "🍔"]).In the second line we created a object and object contains only one property which is favoriteFood.The value of favoriteFood is "🍕".After that, we updated favoriteFood by  info.favoriteFood and now the updated value of favoriteFood is "🍝".Lastly we console.log(food) as food  array remains unchanged even we have updated the favoriteFood.This does not affected the food array so food array remains as before ['🍕', '🍫', '🥑', '🍔']    </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In this problem we can see we have a function called sayHi and we pass one parameter which is name.we invoked function without passing  any argument to its parameter.In javaScript when a function's parameter is not provided with a value then its default value is undefined. For that reason, the out put will be "Hi there, undefined" since we have taken name as function's parameter, initially the value of name is undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The answer is C.In the given code, a variable count is initialized to 0, and an array nums contains four numbers [0, 1, 2, 3]. The forEach loop iterates through each element in nums, checking if the element is truthy (in this case, 0 is falsy). If a truthy value is found, count is incremented and if falsy value is found , count will not be incremented it will remain same as before. After the loop, count contains the count of truthy values in nums, which is 3. In this case element 1,2,3 are a truthy value.ThereFore the final result 3 is logged to the console.</i>

</p>
</details>
