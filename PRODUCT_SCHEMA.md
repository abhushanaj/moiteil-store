# Modelling the Store Product

A Moiteil Product is described by the following structure:

1. Product Slug (Eg: `/moiteil-unisex-dark-t-shirt`)

```
Name: Slug
Value: Auto generated from Product Name
Type: String (Slug)
Constraints: Unique, Required, Title
```

2. Product Thumbnail (Cover Image for the product)

```
Name: Thumbnail
Type: Asset
Constraints:  Required
```

3. Product Name

```
Name: Name
Type: String (Single Line Text)
Constraints:  Required, Unique, Title
```

4. Product Starting Price

```
Name: StartingPrice
Type: Float
Constraints:  Required
Extra: This field can be avoided and can the value can be automatically calculated on clinet/server side from the list of variations (simly take the minimum value)
```

5. Product Description

```
Name: Description
Type: String (Markdown)
Constraints:  Required
```

6. Popular Products Flag

```
Name: isPopular
Type: Boolean
Constraints:  Required, Title
```

7. Latest Products Flag

```
Name: isLatest
Type: Boolean
Constraints:  Required, Title
```

8. Product Variants

```
Name: ProductVariants
Type: Product Variant (check PRODUCT_VARIANT_MODELLING) for more info
Constraints:  Required, Multiple Values, One-way-reference

```

In terms of JSON response a product will look like the following:

```json
{
	"product": {
		"slug": "moiteil-unisex-dark-t-shirt",
		"name": "Moiteil Unisex Dark T-Shirt",
		"thumbnail": {
			"url": "..."
		},
		"startingPrice": 13.95,
		"description": "The Moiteil Unisex Dark T-Shirt feels soft ......",
		"isLatest": false,
		"isPopular": true,
		"productVariants": [
			// list of product variants belonging to this product
		]
	}
}
```
