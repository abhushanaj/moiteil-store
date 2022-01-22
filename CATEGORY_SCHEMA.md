# 💪 Modelling the Product Category

A Moiteil Product can belong to one or more categories described by the following structure:

**1. Category Name (Eg: `Kids`, `Women`, `Men`)**

```
Name: Name
Type: String (Single Text Line)
Constraints: Unique, Required, Title
```

**2. Category Link (Eg: `/category/kids`, `/category/women`)**

```
Name: CategoryLink
Type: String (Slug)
Constraints: Unique, Required, Tested against the regex `^\/category\/[a-z0-9]+(?:-[a-z0-9]+)*$`
```

**3. Category Cover Image**

```
Name: CategoryImage
Type: Asset
Constraints:Required
```

**4. Category Products**

```
Name: Products
Type: Product (see PRODUCT_MODELLING for more information).
Constraints:Required, Multiple Values, One-way-reference
```

In terms of JSON response a product will look like the following:

```js
{
	"categoriesLists": [
		{
			"name": "Clothing",
			"categoryLink": "/category/clothing",
			"categoryImage": {
				"url": "..."
			},
			"products": [
				// list of products beloging to this category
			]
		}
	]
}
```
