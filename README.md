# Débutez avec React - Alexia Toulmet

## Appréhendez la logique de React

### React :
```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

### Babel :
```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
<script src="script.js" type="text/babel"></script>
```

### script.js :
```js
function Header() {
    return (<h1>La maison jungle</h1>)
}

ReactDOM.render(<Header />, document.getElementById("root"));
```

### index.html :
```html
<div id="root"></div>
```
