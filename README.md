# Welcome

This is a basic repository used to practice playing around with shadcn-ui forms.

## Steps I took to set this up

1. Created a fresh Next.js project with TypeScript and Tailwind
2. Did initial set up of shadcnui with the command `npx shadcn-ui@latest init`
   I answered the command in the following way:

```
Would you like to use TypeScript (recommended)? … yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Neutral
✔ Where is your global CSS file? … app/globals.css
✔ Would you like to use CSS variables for colors? … yes
✔ Where is your tailwind.config.js located? … tailwind.config.ts
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? …  yes
✔ Write configuration to components.json. Proceed? … yes
```

3. Added the form component `npx shadcn-ui@latest add form`

## Useful links

[Form documentation](https://ui.shadcn.com/docs/components/form) - shadcn ui

## Things to remember

An "empty" `FormMessage` component is needed inside the `FormField` component if you want to show validation error messages
