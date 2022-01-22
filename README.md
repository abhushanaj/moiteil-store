<p align="center">
	<a href="https://moiteil-store.vercel.app/">
		<img src="https://user-images.githubusercontent.com/49617450/150633713-a0cd531d-7717-479e-a6c2-ae94d68a2378.png" alt="Moiteil Logo">
	</a>
<p>

# [Moiteil Swag Store](https://moiteil-store.vercel.app/)

🛍️ A sample **JAMStack E-Commerce Swag Store** crafted using [**Next.js**](https://nextjs.org/), [**Stitches Dev**](https://www.stitches.dev/) and [**GraphCMS**](https://www.graphcms.com). The application only serves as a starter/ sample work to power your E-Commerce store using JAMStack. The possiblities to customize and launch your own headless Storefront has been been easier.

All the product templates are generated from [**Printful**](https://printful.com/).

The work is deployed on [**Vercel**](https://www.vercel.com/).

**_Feel free to use the project for your own portfolio purposes._**

# 🚀 Getting Started & Running Locally

To get started with running the application locally you can follow the below steps:

1. Clone the project using the command `git clone https://github.com/abhu-A-J/moiteil-store.git` .
2. Move into the project directory using `cd moiteil-store` .
3. You would need your own set of environemnt variables. Simply copy the template by running `cp .env.local.example .env.local` in the root of your project directory.
4. Update the `.env.local` file with your own environment variables.
5. Install all dependencies using `yarn` or `npm install`.
6. Start the application using `yarn dev` or `npm run dev`.
7. Open [http://localhost:3000](http://localhost:3000) to see the store locally and start making your updates 🔥.

# 🧑‍💻 GraphCMS Schema Modelling

The application uses [**GraphCMS**](https://www.graphcms.com) as it's CMS service to manage all the content around the products and they have been modelled in the following structure:

- Each Moiteil Product on the store is modelled using the following [**schema**](./PRODUCT_SCHEMA.md).
- Every Moiteil Product can have different variations (products in store have been varied based on color choice) and is modelled using the follogihwing [**schema**](./PRODUCT_VARIANT_SCHEMA.md).
- Every product can belong in one or more product categories which is modelled using the following [**schema**](./CATEGORY_SCHEMA.md).
- Custom Enumeration for Product Variant Size is modelled using the following [**schema**](./ENUMERATION_SCHEMA.md).

# About Me

I'm an Electronics & Communcation Enginner who went rogue and became a Frontend Developer over the pandemic of 2020. I enjoy working, building experiences for the Web using [**React**](https://www.react.com), [**JAMStack**](https://www.jamstack.com) and [**GraphQL**](https://graphql.org/).

You can also find me on:

- [Github](https://www.github.com/abhu-A-J)
- [LinkedIn](https://www.linkedin.com/in/abhushanaj/)
- [Twitter](https://twitter.com/abhushanAJ)

## Application Preview

![Application Preview](https://user-images.githubusercontent.com/49617450/150639586-62be22e9-aaa7-4cdc-891a-ac3318f74438.png)
