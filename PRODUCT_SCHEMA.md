# Modelling the Store Product

A Moiteil Product is described by the follwing structure:

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

3. Product Name (Eg: `Moiteil Unisex Dark T Shirt`)

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
```

5. Product Description

```
Name: Description
Type: String (Markdown)
Constraints:  Required
```

6. Product Variants (**Check [Product Variants Modelling](../PRODUCT_VARIANT_SCHEMA) for more info**)

7. Popular Products Flag

```
Name: isPopular
Type: Boolean
Constraints:  Required, Title
```

8. Latest Products Flag

```
Name: isLatest
Type: Boolean
Constraints:  Required, Title
```
