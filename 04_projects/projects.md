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