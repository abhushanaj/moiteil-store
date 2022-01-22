# Modelling the Store Product Variants

A Moiteil Product Variant is described by the following structure:

1. Variant Price (Price of a particular variant)

```
Name: Price
Type: Float
Constraints:  Required
```

2. Variant Color (Color of a particular variant)

```
Name: Color
Type: Color
Constraints:  Required
```

3. Variant Sizes (Size Choices of a particular variant on the particular color)

```
Name: Size
Type: SizeTypes (Select any option from the choices for size emumeration)
Constraints:  Required, Multiple Values
```

4. Variant Preview Image

```
Name: Preview Image
Type: Asset
Constraints: Required
```

5. Variant Catelog Images

```
Name: CatelogImages
Type: Asset
Constraints: Required, Multiple Values
```

In terms for JSON response it will look like the following

```json
{
	"productVariants": [
		// first variant
		{
			"price": 12.95,
			"color": {
				"hex": "#fff"
			},
			"size": ["size1", "size2", "size3"],
			"previewImage": {
				"url": "......"
			},
			"catelogImages": [
				{
					"url": "......"
				},
				{
					"url": "......"
				}
			]
		},

		// second variant
		{
			...
		}
		// and so on

	]
}
```
