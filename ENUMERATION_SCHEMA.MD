# Modelling the Product Variant Size Type

A Moiteil Product can belong to one or more categories described by the following structure:

```
Name: SizeType
Possible Values: ['S', 'XS', 'M', 'L', 'XL', 'XL_2', 'XL_3', 'oz_11', 'oz_15' , 'inch_12', 'inch_15', 'M_12', 'M_18' 'M_24', 'Y_3' ]
```

Since GraphCMS follows the rule `Start with a letter, and use only alphanumeric characters or underscores`, for defining the values for custom enumeration type, we'll use the following code snippet on the client to format this is required structure.

```ts
export function formatSizeChoice(sizeChoice: string) {
	return sizeChoice.split('_').reverse().join('');
}

formatSizeChoice('XL_2'); //2XL
formatSizeChoice('oz_15'); //15oz
//... so on

```
