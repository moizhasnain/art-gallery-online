# Art Gallery Online 🖼️

A full-stack e-commerce website for selling custom paintings, artworks, portrait sketches, and art supplies. Built with Next.js, Node.js, PostgreSQL, and Prisma.

![Art Gallery Online](https://via.placeholder.com/1200x600/8B2635/F5F0E8?text=Art+Gallery+Online)

## Features

### Core E-commerce
- 🛒 Shopping Cart
- 💳 Multiple Payment Methods (Stripe, EasyPaisa, JazzCash, COD)
- 👤 User Authentication & Accounts
- ⭐ Product Reviews & Ratings
- ❤️ Wishlist

### Product Categories
- Paintings & Artworks
- Portrait Sketches (Custom Orders)
- Canvas & Boards
- Paints (Acrylic, Oil, Watercolor)
- Brushes & Tools

### Pricing Tiers
- Budget-Friendly: ₨2,000-5,000
- Mid-Range: ₨5,000-15,000
- Premium: ₨15,000-50,000
- Masterpiece: ₨50,000+

### Additional Pages
- `/shop` - Product listing
- `/artists` - Team/Artist profiles
- `/blog` - SEO content
- `/about` - About us
- `/contact` - Contact form

## Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT
- **Payments:** Stripe + EasyPaisa/JazzCash/COD

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd art-gallery-online
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Configure your .env file**
```
DATABASE_URL="postgresql://username:password@localhost:5432/art_gallery_online"
JWT_SECRET="your-secret-key"
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

5. **Set up the database**
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

6. **Run the development server**
```bash
npm run dev
```

7. **Open http://localhost:3000**

## Project Structure

```
art-gallery-online/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── prisma/
│   └── schema.prisma      # Database schema
├── public/                # Static files
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

### Database (Supabase/Neon)
1. Create PostgreSQL database
2. Update DATABASE_URL
3. Run migrations

## Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Burgundy | #8B2635 | Primary accent |
| Cream | #F5F0E8 | Background |
| Charcoal | #2D2D2D | Text |
| Golden Ochre | #D4A84B | CTAs, highlights |
| Sage Green | #7A8B6E | Accents |
| Dusty Rose | #C9A9A6 | Soft accents |

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Support

For questions or support, please contact us at artgallerylahore@gmail.com

---

Built with ❤️ for Art Gallery Online
