# ABTest
## A simple tool to facilitate AB testing

You just need to add the attributes in the HTML tags according to the following steps

- Add `ab-test-id` with an id for your test and `ab-test-version` for both verions, for example:

``` html
<button ab-test-id="button-test" test-version="a">Do something</button>

<button ab-test-id="button-test" test-version="b">Do something else</button>
```

Now you just need to use the `setTestVersion` function with the id of the test and the version you want to show to the user.

``` javascript
setTestVersion('button-test', 'a')
```

Now the version b is hidden, if you want to show the other version you can use:

``` javascript
setTestVersion('button-test', 'b')
```
That way version **a** will be hidden and only the version **b** will be visible.

And of course, you can have as many tests as your want.