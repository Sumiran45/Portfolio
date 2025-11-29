This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


my-portfolio/
├── src/
│   ├── app/
│   │   ├── (admin)/                    # Admin routes group
│   │   │   ├── admin/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx            # Dashboard
│   │   │   │   ├── projects/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── new/
│   │   │   │   │   └── [id]/
│   │   │   │   └── blog/
│   │   │   └── login/
│   │   │       └── page.tsx
│   │   ├── api/                        # API routes
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   └── logout/
│   │   │   │       └── route.ts
│   │   │   ├── projects/
│   │   │   │   ├── route.ts            # GET, POST
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts        # GET, PUT, DELETE
│   │   │   ├── blog/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx                  # Root layout
│   │   ├── page.tsx                    # Home page
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                         # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Spinner.tsx
│   │   ├── layout/                     # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/                       # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── FeaturedProjects.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   └── ProjectFilter.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   └── BlogList.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   └── ProjectForm.tsx
│   │   └── admin/
│   │       ├── Sidebar.tsx
│   │       └── DataTable.tsx
│   ├── lib/
│   │   ├── db/
│   │   │   ├── mongodb.ts              # MongoDB connection
│   │   │   └── models/                 # Mongoose models
│   │   │       ├── User.ts
│   │   │       ├── Project.ts
│   │   │       ├── Blog.ts
│   │   │       └── Contact.ts
│   │   ├── validations/                # Zod schemas
│   │   │   ├── auth.ts
│   │   │   ├── project.ts
│   │   │   ├── blog.ts
│   │   │   └── contact.ts
│   │   ├── utils/
│   │   │   ├── auth.ts                 # JWT helpers
│   │   │   ├── api-response.ts
│   │   │   └── helpers.ts
│   │   └── constants.ts
│   ├── middleware.ts                   # Auth middleware
│   ├── types/
│   │   ├── index.ts
│   │   ├── models.ts
│   │   └── api.ts
│   └── hooks/                          # Custom React hooks
│       ├── useAuth.ts
│       └── useProjects.ts