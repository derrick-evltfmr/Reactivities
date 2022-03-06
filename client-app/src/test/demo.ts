//let data = 42;
let data: number | string = 42;

// typescript can make sure type safety
data = '42'


export interface IDuck {                    // export is optional, but export keyword makes this can be access through other files in our application
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;    // the question mark is going to make it optional for the objects
                                            // but this is also not very nice, you should try to provide the makeSound in the object, even you think you are not going to call them
}

const duck1 : IDuck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => { console.log(sound); }    // typescript doesn't like you to have the types implicit
}

const duck2 : IDuck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => { console.log(sound); }
}

//duck1.makeSound!('quack');  // ! is to overwrite typescript behavior, I'm sure I want to do this even makeSound may be undefined, so it can be used with ?
duck1.makeSound('quack');  // but try to avoid using the exclaimation mark

export const ducks = [duck1, duck2]


// In Javascript, const for object only make the pointer const, it makes the pointer immutable, but that doesn't make the values inside the object immutable
// https://medium.com/dailyjs/use-const-and-make-your-javascript-code-better-aac4f3786ca1#:~:text=Const%20!%3D&text=It's%20very%20important%20to%20understand,be%20assigned%20to%20another%20value.

// Why avoid var keyword
// https://codeburst.io/javascript-var-let-or-const-which-one-should-you-use-2fd521b050fa
// stick to let and const, unless you need global variable, but still to declare a global variable, using let outside of the method or block, still better than using var inside the block

// What is export default
// https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript

// js, jsx, tsx
// https://stackoverflow.com/questions/64343698/what-is-the-difference-between-js-tsx-and-jsx-in-react

// introducing jsx
// https://reactjs.org/docs/introducing-jsx.html
// https://www.w3schools.com/react/react_jsx.asp

// arrow function
// https://www.digitalocean.com/community/tutorials/understanding-arrow-functions-in-javascript

 // map() function in the array
  // https://www.w3schools.com/jsref/jsref_map.asp

  // keys and lists in react (especially used in map())
  // https://reactjs.org/docs/lists-and-keys.html
  // key is the unique string to represent that element, so that it can recognized whether it has changed, added, removed
  // https://betterprogramming.pub/why-react-keys-matter-an-introduction-136b7447cefc
  // https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb

  // single quotes vs double quotes in Javascript
  // https://bytearcher.com/articles/single-or-double-quotes-strings-javascript/

  // Google javascript style use single quotes for ordinary string literals
  // https://google.github.io/styleguide/jsguide.html


  // returning object
  /*
  {ducks.map((duck)=>{return(
    <div key={duck.name}>
      <span>{duck.name}</span>
      <button onClick={() => {duck.makeSound(duck.name + ' quack')}}>Make Sound</button>
    </div>
  )})}
  */
 // be careful that when you return an object, you should be using (), not {} otherwise it will be simply treated as function 