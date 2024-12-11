# Projects related to DOM

## Projects Links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code

## Projects 1

```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // Selecting the body element

buttons.forEach(function (button) {
  console.log(button); // Fixed typo here (console.loh -> console.log)
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    if(event.target=='grey'){
      body.style.backgroundColor = e.target.body;
    }
    if(event.target=='white'){
      body.style.backgroundColor = e.target.body;
    }  
    if(event.target=='blue'){
      body.style.backgroundColor = e.target.body;
    }
    if(event.target=='yello'){
      body.style.backgroundColor = e.target.body;
    }
  });
});

```


## project 2 solution
```
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const wieght = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height ===''|| height<0||isNaN(height)){
    result.innerHTML = "please enter the valid value";
  }
  else if(wieght ===''|| wieght<0|| isNaN(wieght)){
    result.innerHTML = "please enter the valid value";
  }else{
    const bmi = (wieght/((height * height)/10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }

});

```
## project 3 solution

```
const clock = document.getElementById('clock');
 
setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
 }, 1000);

 ```